import { of, throwError, timer } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

// Mock unreliable network call
function fetchUnreliableData() {
  console.log('[API Request] Sending request...');
  const success = Math.random() > 0.8; // 80% failure rate for demo
  return success ? of({ status: 200, data: 'Success payload' }) : throwError(() => new Error('Server Unavailable (503)'));
}

function fetchWithBackoff(maxRetries = 4, initialDelayMs = 1000) {
  return fetchUnreliableData().pipe(
    retry({
      count: maxRetries,
      delay: (error, retryCount) => {
        // Calculate delay: 1000ms * 2^(retryCount - 1) -> 1s, 2s, 4s, 8s...
        const delayMs = initialDelayMs * Math.pow(2, retryCount - 1);
        console.warn(`Attempt ${retryCount} failed (${error.message}). Retrying in ${delayMs}ms...`);
        
        // Return a timer observable to delay the retry
        return timer(delayMs);
      }
    })
  );
}

// Subscription
fetchWithBackoff().subscribe({
  next: res => console.log('Response successfully received:', res),
  error: err => console.error('All retries exhausted. Operation failed:', err.message)
});