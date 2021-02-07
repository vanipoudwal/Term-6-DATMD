
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady()
{
    if(typeof(Storage) !== 'undefined')
    {
        document.getElementById('message').innerHTML = 'Application support Local Storage';
    }
    else
    {
        document.getElementById('message').innerHTML = 'Application does not support local storage';
    }
    localStorage.name = 'Ruchit Bisht'
    
    document.getElementById('data').innerHTML = "Name is : " + localStorage.name;
    localStorage.setItem('address', 'F-124, Preet vihar');
    
    document.getElementById('getItemId').innerHTML = "Address is : " + localStorage.getItem('address');
    var names = new Array();
    names[0] = 'Himanshu';
    names[1] = 'Karan';
    names[2] = 'Mansi';
    names[3] = 'Vani';
    localStorage['nameArray'] = JSON.stringify(names);
   
    document.getElementById('names').innerHTML = JSON.parse(localStorage['nameArray'])
    var options = {frequency: 3000};

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    function onSuccess(acc)
    {
        document.getElementById('x').value = acc.x;
        document.getElementById('y').value = acc.y;
        document.getElementById('z').value = acc.z;
    }
    function onError()
    {
       console.log('There is some error!!!');
    }
  
    navigator.compass.getCurrentHeading(onSuccess, onError);
    var options = {frequency: 3000};
    navigator.compass.watchHeading(onSuccess, onError, options);
  
    function onSuccess(heading)
    {
        document.getElementById('compass').value = heading.magneticHeading;
    }
    function onError()
    {
        alert('There is some error');
    }
  
    window.addEventListener('orientationchange', handleOrientation, false);
  
    function handleOrientation()
    {
        if(window.orientation ==0)
        {
            document.getElementById('orientation').innerHTML = 'Portrait';
        }
        else
        {
            document.getElementById('orientation').innerHTML = 'Landscape';
        }
    }
        
    var options = {frequency : 3000}
    navigator.geolocation.watchPosition(onSuccess, onError, options);
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
     
    function onSuccess(acc)
    {
        document.getElementById("geolocation").innerHTML = 'Longitude Value :' + acc.coords.longitude + '<br />' +
            'Latitude Value :' + acc.coords.latitude + '<br />' +
            'Accuracy Value :' + acc.coords.accuracy;
    }
    function onError()
    {
        alert('There is some problem')
    }
    
    document.getElementById("takePicture").addEventListener('click', takeCameraPicture);
    function takeCameraPicture()
    {
        var limit = {quantity: 50};
        destination = {destinationType: Camera.DestinationType.DATA_URL}
        navigator.camera.getPicture(onSuccess, onError, limit, destination);
    }
    function onSuccess(imageData)
    {
        var image = document.getElementById("myImage");
        image.src = "data:image/jpeg;base64," + imageData;
    }
    function onError(e)
    {
        alert('There is some problem :' + e);
    }

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
