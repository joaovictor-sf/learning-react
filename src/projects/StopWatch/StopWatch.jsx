import React, {useState, useEffect, useRef} from 'react'

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => clearInterval(intervalRef.current);

    }, [isRunning]);

    function start() {
        if (isRunning) return;
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        if (!isRunning) return;
        setIsRunning(false);
    }

    const reset = () => {
        if (!isRunning) return;
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        const getHours = Math.floor(elapsedTime / 3600000);
        const getMinutes = Math.floor((elapsedTime % 3600000) / 60000);
        const getSeconds = Math.floor((elapsedTime % 60000) / 1000);
        const getMilliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${getHours > 9 ? getHours : '0' + getHours}:${getMinutes > 9 ? getMinutes : '0' + getMinutes}:${getSeconds > 9 ? getSeconds : '0' + getSeconds}`;
    }

  return (
    <div className='stop-watch'>
        <div className='display'>{formatTime()}</div>
        <div className='controls'>
            <button onClick={start} className='start-btn'>Start</button>
            <button onClick={stop} className='stop-btn'>Stop</button>
            <button onClick={reset} className='reset-btn'>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch