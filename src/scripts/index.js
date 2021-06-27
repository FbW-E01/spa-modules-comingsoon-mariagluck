// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
console.log("hola");

import moment from 'moment';
// \/ All of your javascript should go here \/
const element = document.getElementById("countdown");
const exp = moment("2021-07-24T17:24:22+0000");

setInterval(function() {
  let now = moment().format();
  let diffDuration = moment.duration(exp.diff(now));
  element.innerHTML = ( 
      `<b style='font-size: 2.5em; color:white'>\ ${diffDuration.days() }</b>` + 
  `<b style='font-size: 1em; color:white'>\ days </b>` + 
  `<b style='font-size: 2.5em; color:white'>\ ${diffDuration.hours() }</b>` + 
  `<b style='font-size: 1em; color:white'>\ hours </b>` + 
  `<b style='font-size: 2.5em; color:white'>\ ${diffDuration.minutes() }</b>` + 
  `<b style='font-size: 1em; color:white'>\ minutes </b>` + 
  `<b style='font-size: 2.5em; color:white'>\ ${diffDuration.seconds() }</b>` + 
  `<b style='font-size: 1em; color:white'>\ seconds </b>`
  );}, 1000);

