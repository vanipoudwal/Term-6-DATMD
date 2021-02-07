
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady()
{    
    window.addEventListener("batterystatus", onBatteryStatus, false);
    function onBatteryStatus(status) 
    {
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

    window.addEventListener("batterylow", onBatteryLow, false);
    function onBatteryLow(status) 
    {
        alert("Battery Level Low " + status.level + "%");
    }

    window.addEventListener("batterycritical", onBatteryCritical, false);
    function onBatteryCritical(status) 
    {
        alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
    }

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
