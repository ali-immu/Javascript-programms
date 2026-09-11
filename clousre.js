/*Yes, an inner closure function can be passed as a callback to an outer (parent) function or executed asynchronously within it.

Because of lexical scoping, the inner function maintains access to the parent function's variables, even when called at a later time or passed around as a callback.

Concept Example
Here is a scenario where a parent function creates an inner closure function and uses it as a callback for an asynchronous operation (like a timer or network request):*/

function createDataFetcher(endpoint) {
  // Parent function variable
  let requestCount = 0;

  // Inner function (Closure)
  function handleResponse(data) {
    requestCount++; // Accesses parent's lexical scope
    console.log(`[${endpoint}] Received data:`, data);
    console.log(`[${endpoint}] Total requests made: ${requestCount}`);
  }

  // Parent uses the inner function as a callback
  return function executeFetch() {
    console.log(`Fetching from ${endpoint}...`);
    
    // Passing the inner closure function 'handleResponse' as a callback to setTimeout
    setTimeout(() => {
      const mockData = { id: 1, status: "Success" };
      handleResponse(mockData); // Inner function executes as a callback
    }, 1000);
  };
}

// Usage
const fetchUsers = createDataFetcher("/api/users");
fetchUsers(); 
// Output after 1 sec:
// Fetching from /api/users...
// [/api/users] Received data: { id: 1, status: 'Success' }
// [/api/users] Total requests made: 1