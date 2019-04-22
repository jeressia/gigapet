import util from '../../helpers/util';
import actions from '../pet/pet';

let fightCounter = 100;

const fightMath = () => fightCounter;

const fightQuad = () => {
  let domString = '';
  domString += '<div class="text3">';
  domString += '<p class="quadTitle">Fight</p>';
  domString += `<p id="score2">Strength: ${fightCounter}</p>`;
  domString += '<button class="btn" id= "kick"> Kick </button>';
  domString += '<button class="btn" id="hide"> Hide </button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

const decreaseFight = (e) => {
  actions.decreaseFightPhoto();
  e.preventDefault();
  const decrease = (util.randomize(5) + 1);
  fightCounter -= decrease;
  if (fightCounter < 0) {
    fightCounter = 0;
  }
  util.printToDom('score2', `Strength: ${fightCounter}`);
};

const increaseFight = (e) => {
  actions.increaseFightPhoto();
  e.preventDefault();
  const increase = (util.randomize(5) + 1);
  fightCounter += increase;
  if (fightCounter > 100) {
    fightCounter = 100;
  }
  util.printToDom('score2', `Strength: ${fightCounter}`);
};

const buttonEvents = () => {
  document.getElementById('hide').addEventListener('click', increaseFight);
  document.getElementById('kick').addEventListener('click', decreaseFight);
};
export default { fightQuad, buttonEvents, fightMath };
