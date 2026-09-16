import { EventEmitter } from 'events';
const emitter = new EventEmitter();

// 1. Define listener functions
function onUserLoggedIn(user) {
    console.log(`Welcome, ${user.name}!`);
}

function logActivity(user) {
    console.log(`Log: ${user.name} logged in at ${new Date().toLocaleTimeString()}`);
}

// 2. Register listeners
emitter.on('login', onUserLoggedIn);
emitter.on('login', logActivity);

// 3. Emit the event
emitter.emit('login', { name: 'Imran' });
// Output:
// Welcome, Imran!
// Log: Imran logged in at 2:42:00 PM

// 4. Unsubscribe
emitter.off('login', logActivity);

// 5. Emit again (only onUserLoggedIn will fire)
emitter.emit('login', { name: 'Imran' });
// Output:
// Welcome, Imran!