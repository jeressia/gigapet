import util from '../helpers/util';

const fightQuad = () => {
  let domString = '';
  domString += '<p class="quadTitle">Fight</p>';
  domString += '<p class="score">100</p>';
  domString += '<button class="btn"> Kick </button>';
  domString += '<button class="btn"> Hide </button>';
  util.printToDom('fight', domString);
};

export default { fightQuad };
