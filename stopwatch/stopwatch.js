let timerInterval;
let elapsedTime = 0;

document.getElementById('uniqueStartButton').addEventListener('click', function () {
    document.getElementById('uniqueStopButton').disabled = false;
    document.getElementById('uniqueStartButton').disabled = true;
    
    timerInterval = setInterval(function () {
        elapsedTime++;
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
        
        document.getElementById('uniqueTimerDisplay').textContent = 
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
});

document.getElementById('uniqueStopButton').addEventListener('click', function () {
    clearInterval(timerInterval);
    document.getElementById('uniqueStartButton').disabled = false;
    document.getElementById('uniqueStopButton').disabled = true;
});

document.getElementById('uniqueResetButton').addEventListener('click', function () {
    clearInterval(timerInterval);
    elapsedTime = 0;
    
    setTimeout(function () {
        elapsedTime = 1;
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
        
        document.getElementById('uniqueTimerDisplay').textContent = 
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        
        timerInterval = setInterval(function () {
            elapsedTime++;
            const hours = Math.floor(elapsedTime / 3600);
            const minutes = Math.floor((elapsedTime % 3600) / 60);
            const seconds = elapsedTime % 60;
            
            document.getElementById('uniqueTimerDisplay').textContent = 
                `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }, 1000);
    }, 1000);
});

function pad(time) {
    return time < 10 ? '0' + time : time;
}
