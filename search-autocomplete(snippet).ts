import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, filter } from 'rxjs/operators';

// Mock API request
function searchApi(query: string) {
  console.log(`[API Call] Fetching results for: "${query}"`);
  return of([`${query} result 1`, `${query} result 2`]);
}

const inputElement = document.getElementById('search-input') as HTMLInputElement;

// Stream pipeline
const searchStream$ = fromEvent(inputElement, 'input').pipe(
  // 1. Extract the string value from the input event
  map((event: Event) => (event.target as HTMLInputElement).value.trim()),
  
  // 2. Ignore short inputs (minimum 2 characters)
  filter(text => text.length >= 2),
  
  // 3. Wait 300ms after the last keypress before emitting
  debounceTime(300),
  
  // 4. Ignore if the search term hasn't changed (e.g., press arrow keys)
  distinctUntilChanged(),
  
  // 5. Cancel any previous pending request and switch to the new search query
  switchMap(query => searchApi(query).pipe(
    catchError(err => {
      console.error('API Error:', err);
      return of([]); // Fallback to an empty list on failure
    })
  ))
);

// Subscription
searchStream$.subscribe({
  next: results => console.log('Render Search Results:', results),
  error: err => console.error('Stream Error:', err)
});