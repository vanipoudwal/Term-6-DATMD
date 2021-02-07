
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('PlayAudio').addEventListener('click',onPlayAudio);
    document.getElementById('PauseAudio').addEventListener('click',onPauseAudio);
    document.getElementById('StopAudio').addEventListener('click',onStopAudio);
    document.getElementById('VolumeUp').addEventListener('click',onVolumeUp);
    document.getElementById('VolumeDown').addEventListener('click',onVolumeDown);

    var media = null;
    function onPlayAudio()
    {
        var src = './media/Devil_Laugh-485.mp3';
        if(media == null)
        {
            media = new Media(src, onSuccess, onError);
        }
        function onSuccess()
        {
            console.log('Playing Audio Successfully');
        }
        function onError(err)
        {
            console.log('Sorry, Cannot Play Audio' + err.code);
        }
        media.play();
    }

    function onPauseAudio()
    {
        if(media)
        {
            media.pause();
        }
        media = null;
    }

    function onStopAudio()
    {
        if(media)
        {
            media.stop();
        }
        media = null;
    }

    var VolumeValue = 0.5;
    function onVolumeUp()
    {
        if(media && VolumeValue <= 1)
        {
            media.setVolume(VolumeValue = VolumeValue + 0.1);
        }
    }

    function onVolumeDown()
    {
        if(media && VolumeValue > 0)
        {
            media.setVolume(VolumeValue = VolumeValue - 0.1);
        }
    }
}
