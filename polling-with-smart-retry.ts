import { timer, of, throwError } from 'rxjs';
import { switchMap, takeWhile, catchError, retry } from 'rxjs/operators';

interface JobStatus {
  id: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
}

// Mock API endpoint returning status
function checkJobStatus(jobId: string) {
  const statuses: JobStatus['status'][] = ['PENDING', 'PROCESSING', 'COMPLETED'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  console.log(`[HTTP Request] Checking status for job: ${jobId}`);
  return of<JobStatus>({ id: jobId, status: randomStatus });
}

function pollJobUntilComplete(jobId: string) {
  // timer(0, 3000) starts immediately (0ms) and emits every 3000ms (3 seconds)
  return timer(0, 3000).pipe(
    // Execute HTTP call on each timer interval
    switchMap(() => checkJobStatus(jobId)),
    
    // Automatically retry up to 3 times on network failure before throwing
    retry(3),
    
    // Continue polling ONLY while status is NOT 'COMPLETED' (inclusive = true emits the final COMPLETED payload)
    takeWhile(response => response.status !== 'COMPLETED', true),
    
    catchError(err => {
      console.error('Polling stopped due to error:', err);
      return throwError(() => err);
    })
  );
}

// Subscription
pollJobUntilComplete('job-123').subscribe({
  next: data => console.log('Poll Update Received:', data),
  complete: () => console.log('Job finished! Polling automatically stopped.')
});