import React, { useState } from 'react';
import './Sim.css';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { useInterval } from 'usehooks-ts';
import { ICar } from '../models';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';
import { FaCar } from 'react-icons/fa';
import { getAdvancedTime, generateNewCars, split, rando } from '../utils';
import { DataTable } from 'primereact/datatable';
import { columns } from '../utils/values';
import { Column } from 'primereact/column';

dayjs.extend(LocalizedFormat);

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

      // console.log('Random 1: ', window.crypto.getRandomValues(new Uint32Array(1))[0]);
      // console.log('Random 2: ', window.crypto.getRandomValues(new Uint32Array(1))[0]);
      // console.log('Random 3: ', window.crypto.getRandomValues(new Uint32Array(1))[0]);
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
                        <span className="">Parqueado en: </span>
                        {dayjs(car.parkedAt).format('l LT')}
                      </div>
                      <div className="">
                        <span className="">Sale en: </span> {dayjs(car.leavingAt).format('l LT')}
                      </div>
                      <div className="">
                        <span className="">Tiempo de estacionamiento: </span>
                        {(
                          dayjs(car.leavingAt).diff(dayjs(car.parkedAt), 'minutes', true) / 60
                        ).toFixed(2)}{' '}
                        horas
                      </div>
                      <div className="">
                        <span className="">Tarifa: </span>
                        {car?.parkingFee?.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                      </div>
                    </div>
                  </Tooltip>
                  <div key={spotIndex} className={`car car-${car.id}`}>
                    <span>{`${'ABCDE'.split('')[levelIndex]}${spotIndex + 1}`} </span>
                    <FaCar fontSize={'1.2rem'} className="text-rose-500" />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <DataTable
          value={movedCars}
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          scrollable
          scrollHeight="400px"
          size="small"
          rows={20}>
          {columns.map((col) => (
            <Column key={col?.field + '' + col?.header} sortable {...col} />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default Sim;
