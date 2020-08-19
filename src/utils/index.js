import {format as timeAgo} from 'timeago.js';

export function relativeTime(time) {
  return timeAgo(time, 'zh_CN');
}

export function formatTime(time) {
  const d = new Date();
  d.setTime(time);
  return `${d.getFullYear()}/${d.getMonth() +
    1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
