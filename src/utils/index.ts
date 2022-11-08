import dayjs, { Dayjs } from 'dayjs';
import { ICar } from '../models';
import getRandomParkingTimes from './getRandomParkingTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import Duration from 'dayjs/plugin/duration';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { v4 as uuid } from 'uuid';
import getParkingFee from './getParkingFee';
import { parkingTimes } from './values';

dayjs.extend(LocalizedFormat);
dayjs.extend(Duration);
dayjs.extend(RelativeTime);

// @ts-ignore
export const rando = window.rando;

export const getAdvancedTime = (time: dayjs.Dayjs) => time.add(10, 'minute');

export const getNewCar = (time: number): ICar => {
  const parkedAt = time;
  const parkingTimeIndex = getRandomParkingTimes();
  const parkingTime = rando(
    parkingTimes[parkingTimeIndex] * 60,
    parkingTimes[parkingTimeIndex + 1] * 60 ?? 8 * 60
  );

  console.log('Random parking time: ', parkingTime);

  const leavingAt = dayjs(parkedAt).add(parkingTime, 'minutes').valueOf();
  const parkingFee = getParkingFee(parkingTimes[parkingTimeIndex]);
  const impounded = parkingFee === 5000;
  return {
    parkedAt,
    leavingAt,
    parkingFee,
    impounded,
    id: uuid({})
  };
};

export function split<T>(array: T[], n: number) {
  const [...arr] = array;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}

export const generateNewCars = (old: Array<ICar | null>, time: Dayjs) => {
  const [...arr] = old;
  const vehicleQty = rando(1, 4);
  const emptySpots = arr.filter((car) => car == null).length;

  const newCars = Array<ICar | null>(vehicleQty > emptySpots ? emptySpots : vehicleQty)
    .fill(null)
    .map(() => getNewCar(time.valueOf()));

  console.log('new cars', newCars, vehicleQty, emptySpots);

  newCars.forEach((newCar) => {
    const index = arr.findIndex((car) => car == null);
    if (index > -1) {
      arr[index] = newCar;
    } else arr.push(newCar);
  });

  return arr;
};
