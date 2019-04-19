import '../styles/main.scss';
import petPhoto from './components/pet';
import eatQuad from './components/eat';
import playQuad from './components/play';
import fightQuad from './components/fight';
import sleepQuad from './components/sleep';

const init = () => {
  petPhoto.petPhoto();
  eatQuad.eatQuad();
  fightQuad.fightQuad();
  playQuad.playQuad();
  sleepQuad.sleepQuad();
};

init();
