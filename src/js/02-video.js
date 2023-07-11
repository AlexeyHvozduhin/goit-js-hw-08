import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// НАЧНЁТ ВОСПРОИЗВЕДЕНИЕ С ТОЙ ЖЕ СЕКУНДЫ
if (localStorage.getItem('key') != null)
  player.setCurrentTime(localStorage.getItem('key'));

// Функция выполняется каждый раз, как обновляется время (но не чаще одного раза в 1000 мс),
// постоянно перезаписывая значение ОДНОЙ переменной, что по логике систему не нагружает
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('key', data.seconds);
    console.log(data.seconds);
  }, 1000)
);
