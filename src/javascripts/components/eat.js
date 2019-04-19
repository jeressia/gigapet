import util from '../helpers/util';

const eatQuad = () => {
  let domString = '';
  domString += '<p class="quadTitle">Eat</p>';
  domString += '<p class="score">100</p>';
  domString += '<button class="btn"> Pizza </button>';
  domString += '<button class="btn"> Salad </button>';
  util.printToDom('eat', domString);
};

export default { eatQuad };
