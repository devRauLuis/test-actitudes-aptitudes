import { rando } from '.';
import { parkingTimes } from './values';

const getRandomParkingTimes = () => {
  // const random = rando() * 100;
  const random = Math.random() * 100;
  let parkingTimeIndex = 0;
  if (random >= 1 && random <= 3) {
    parkingTimeIndex = 0;
  } else if (random >= 4 && random <= 6) parkingTimeIndex = 1;
  else if (random >= 7 && random <= 11) parkingTimeIndex = 2;
  else if (random >= 12 && random <= 36) parkingTimeIndex = 3;
  else if (random >= 37 && random <= 66) parkingTimeIndex = 4;
  else if (random >= 67 && random <= 76) parkingTimeIndex = 5;
  else if (random >= 77 && random <= 86) parkingTimeIndex = 6;
  else if (random >= 87 && random <= 90) parkingTimeIndex = 7;
  else if (random >= 91 && random <= 93) parkingTimeIndex = 8;
  else if (random >= 94 && random <= 96) parkingTimeIndex = 9;
  else if (random >= 97 && random <= 99) parkingTimeIndex = 10;
  else if (random >= 100) parkingTimeIndex = 11;

  return parkingTimeIndex;
};

export default getRandomParkingTimes;
