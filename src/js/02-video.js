import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime).then(function (seconds) {
// seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('play', function () {
        console.log('played the video!');
    });

player.on('timeupdate',throttle((currentTime) =>{
    localStorage.setItem("videoplayer-current-time", currentTime.seconds);
},1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});