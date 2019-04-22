import util from '../../helpers/util';
import actions from '../pet/pet';
// import progress from '../progress/progress';

import './eat.scss';

let eatCounter = 100;

const eatQuad = () => {
  let domString = '';
  domString += '<div class="text1">';
  domString += '<p class="quadTitle">Eat</p>';
  domString += `<p id="score">Fullness: ${eatCounter}</p>`;
  domString += '<button class="btn" id="pizza"> Pizza </button>';
  domString += '<button class="btn" id= "salad"> Salad </button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

const decreaseEat = (e) => {
  actions.decreaseEatPhoto();
  e.preventDefault();
  const decrease = (util.randomize(5) + 1);
  eatCounter -= decrease;
  if (eatCounter < 0) {
    eatCounter = 0;
  }
  util.printToDom('score', eatCounter);
  // progress.progressBar();
};

const increaseEat = (e) => {
  actions.increaseEatPhoto();
  e.preventDefault();
  const increase = (util.randomize(5) + 1);
  eatCounter += increase;
  if (eatCounter > 100) {
    eatCounter = 100;
  }
  util.printToDom('score', eatCounter);
  // progress.progressBar();
};

const buttonEvents = () => {
  document.getElementById('pizza').addEventListener('click', decreaseEat);
  document.getElementById('salad').addEventListener('click', increaseEat);
};
// const eatMath = () => eatCounter;

export default {
  eatQuad,
  buttonEvents,
  // eatMath,
  eatCounter,
};
