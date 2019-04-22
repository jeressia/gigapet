import util from '../../helpers/util';
import actions from '../pet/pet';

let sleepCounter = 100;


const sleepQuad = () => {
  let domString = '';
  domString += '<div class="text4">';
  domString += '<p class="quadTitle">Sleep</p>';
  domString += `<p id="score3">Energy: ${sleepCounter}</p>`;
  domString += '<button class="btn" id="netflix">Binge TV</button>';
  domString += '<button class="btn" id="sleepbtn">Sleep</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

const decreaseSleep = (e) => {
  actions.decreaseSleepPhoto();
  e.preventDefault();
  const decrease = (util.randomize(5) + 1);
  sleepCounter -= decrease;
  if (sleepCounter < 0) {
    sleepCounter = 0;
  }
  util.printToDom('score3', `Energy: ${sleepCounter}`);
};

const increaseSleep = (e) => {
  actions.increaseSleepPhoto();
  e.preventDefault();
  const increase = (util.randomize(5) + 1);
  sleepCounter += increase;
  if (sleepCounter > 100) {
    sleepCounter = 100;
  }
  util.printToDom('score3', `Energy: ${sleepCounter}`);
};

const buttonEvents = () => {
  document.getElementById('netflix').addEventListener('click', decreaseSleep);
  document.getElementById('sleepbtn').addEventListener('click', increaseSleep);
};

const sleepMath = () => sleepCounter;

export default { sleepQuad, buttonEvents, sleepMath };
