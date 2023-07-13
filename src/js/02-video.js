import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo');
const player = new Player(iframe);

const localStorageKeys = 'videoplayer-current-time';

function play(data) {
  localStorage.setItem(localStorageKeys, data.seconds);
  console.log(data);
}

player
  .setCurrentTime(localStorage.getItem(localStorageKeys))
  .then(function (time) {
    time = localStorage.getItem(localStorageKeys);
  });

player.on('timeupdate', throttle(play, 1000));
