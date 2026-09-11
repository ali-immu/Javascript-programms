import { fromEvent } from 'rxjs';
import { buffer, debounceTime, map, filter } from 'rxjs/operators';

const button = document.getElementById('action-button') as HTMLButtonElement;
const click$ = fromEvent(button, 'click');

// Define the quiet period (window closes after 250ms of inactivity)
const clickDebounce$ = click$.pipe(debounceTime(250));

const multiClickStream$ = click$.pipe(
  // Collect all click events that occur within the 250ms window
  buffer(clickDebounce$),
  
  // Map the array of click events to its count
  map(clicks => clicks.length),
  
  // Filter for double clicks or triple clicks (ignore single clicks)
  filter(count => count >= 2)
);

// Subscription
multiClickStream$.subscribe(clickCount => {
  if (clickCount === 2) {
    console.log('Double click detected!');
  } else if (clickCount === 3) {
    console.log('Triple click detected!');
  }
});