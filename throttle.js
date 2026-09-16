function throttle(func, delay) {
    let isWaiting = false;

    return function(...args) {
        // اگر وقت کا وقفہ جاری ہے تو مزید کال کو روک دیں
        if (isWaiting) return;

        // فنکشن کو فوراً ایگزیکیوٹ کریں
        func.apply(this, args);
        isWaiting = true;

        // مخصوص تاخیر (delay) کے بعد دوبارہ اجازت دیں
        setTimeout(() => {
            isWaiting = false;
        }, delay);
    };
}

const log = (value) => console.log(`Log ${value}`);
const throttledLog = throttle(log, 500);
let value = 0;

const interval = setInterval(() => {
    throttledLog(value++);

    if (value === 15) {
        clearInterval(interval);
    }
}, 100);