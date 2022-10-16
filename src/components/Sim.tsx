import React, { useEffect, useState } from 'react';
import './Sim.css';
import { Knob } from 'primereact/knob';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import formatNumber from '../utils/formatNumber';
import { useInterval } from 'usehooks-ts';
import { ICar } from '../models';
import dayjs, { Dayjs } from 'dayjs';
import { parkingTimes } from '../utils/values';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import Duration from 'dayjs/plugin/duration';
import RelativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
import getRandomParkingTimes from '../utils/getRandomParkingTime';
import { v4 as uuid } from 'uuid';

dayjs.extend(LocalizedFormat);
dayjs.extend(Duration);
dayjs.extend(RelativeTime);

const getCurrentTime = () => dayjs();
const getAdvancedTime = (time: dayjs.Dayjs) => time.add(10, 'minute');
const getCurrentUnixTime = () => dayjs().unix();

const getNewCar = (time: number): ICar => {
  const parkedAt = time;
  const leavingAt = dayjs(parkedAt).add(getRandomParkingTimes(), 'hour').valueOf();
  return {
    parkedAt,
    leavingAt,
    id: uuid({})
  };
};

function split<T>(array: T[], n: number) {
  const [...arr] = array;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}
const generateNewCars = (old: Array<ICar | null>, time: Dayjs) => {
  const [...arr] = old;
  const vehicleQty = Math.floor(Math.random() * (10 - 1) + 1);
  const emptySpots = arr.filter((car) => car == null).length;

  const newCars = Array<ICar>(vehicleQty > emptySpots ? emptySpots : vehicleQty).fill(
    getNewCar(time.valueOf())
  );

  console.log('new cars', newCars, vehicleQty, emptySpots);

  newCars.forEach((newCar) => {
    const index = arr.findIndex((car) => car == null);
    if (index > -1) {
      arr[index] = newCar;
    } else arr.push(newCar);
  });

  return arr;
};

interface SimProps {}

const Sim: React.FC<SimProps> = () => {
  const [cars, setCars] = useState<Array<ICar | null>>(Array<ICar | null>(100).fill(null));
  const [movedCars, setMovedCars] = useState<Array<ICar | null>>([]);

  // The counter
  const [time, setTime] = useState(dayjs());
  // Dynamic delay
  const [delay] = useState<number>(1000);
  // ON/OFF
  const [isPlaying, setPlaying] = useState<boolean>(true);

  useInterval(
    async () => {
      setTime(getAdvancedTime(time));
      const expired = cars.filter((car) => car?.leavingAt && car.leavingAt < time.valueOf());
      expired.forEach((car) => {
        const index = cars.indexOf(car);
        cars[index] = null;
        setMovedCars([...movedCars, car]);
        console.log('leaving the lot', car);
      });

      setCars((old) => generateNewCars(old, time));
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  );

  return (
    <div className="container">
      <div className="flex items-center gap-x-4 py-4 ">
        <div className="">{time.format('l LT')}</div>

        <Button onClick={() => setPlaying(!isPlaying)} className="p-button-rounded p-button-text">
          <i className={`pi ${isPlaying ? 'pi-pause' : 'pi-play'}`} />
        </Button>
      </div>

      <div className="parking-lot-grid">
        {split<ICar | null>(cars, 20).map((level, levelIndex) => (
          <div key={level[0]?.id + '' + levelIndex} className="level-grid">
            {level?.map((car, spotIndex) => {
              if (car == null)
                return (
                  <div key={spotIndex} className="car">
                    <span>{`${'ABCDE'.split('')[levelIndex]}${spotIndex + 1}`} </span>
                    Empty
                  </div>
                );
              return (
                <div key={car?.id + '' + spotIndex}>
                  <Tooltip target={'.car-' + car.id} position="right">
                    <div className="">
                      <div className="">
                        <span className="">ID: </span> {car.id}
                      </div>
                      <div className="">
                        <span className="">Parqueado en: </span>{' '}
                        {dayjs(car.parkedAt).format('l LT')}
                      </div>
                      <div className="">
                        <span className="">Sale en: </span> {dayjs(car.leavingAt).format('l LT')}
                      </div>
                      <div className="">
                        <span className="">Tiempo de estacionamiento: </span>
                        {dayjs(car.leavingAt).diff(dayjs(car.parkedAt), 'minutes', true)} minutos
                      </div>
                    </div>
                  </Tooltip>
                  <div key={spotIndex} className={`car car-${car.id}`}>
                    <span>{`${'ABCDE'.split('')[levelIndex]}${spotIndex + 1}`} </span>

                    <i className="pi pi-car" />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sim;
