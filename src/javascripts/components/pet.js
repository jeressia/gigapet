import util from '../helpers/util';

const petPhoto = () => {
  let domString = '';
  domString += '<img class="fight" src="https://pkmneclipse.net/images/letsgo/kanto-normal/Jigglypuff.gif">';
  util.printToDom('pet', domString);
};

export default { petPhoto };
