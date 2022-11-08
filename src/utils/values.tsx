import { ColumnProps } from 'primereact/column';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';
dayjs.extend(LocalizedFormat);
import React from 'react';
import { IQuestion } from '../models';

export const parkingTimes = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8];

// Media hora: Gratis
// Una hora: 50 pesos
// Una hora y media: 100 pesos.
// Dos horas: 150 pesos.
// Dos horas y media: 200 pesos.
// Tres horas: 250 pesos.
// Tres horas y media: 300 pesos.
// Cuatro horas: 1000 pesos.
// Cinco horas: 2000 pesos.
// Seis horas: 3000 pesos.
// Siete horas: 4000 pesos.
// Ocho horas: 5000 pesos (Se saca el vehículo)
export const parkingFees = {
  '0.5': 0,
  '1': 50,
  '1.5': 100,
  '2': 150,
  '2.5': 200,
  '3': 250,
  '3.5': 300,
  '4': 1000,
  '5': 2000,
  '6': 3000,
  '7': 4000,
  '8': 5000
};

export const columns: ColumnProps[] = [
  { field: 'id', header: 'ID' },
  {
    field: 'parkedAt',
    header: 'Parked At',
    body: (car) => <> {dayjs(car.parkedAt).format('l LT')}</>
  },
  {
    field: 'leavingAt',
    header: 'Leaving At',
    body: (car) => <> {dayjs(car.leavingAt).format('l LT')}</>
  },
  { field: 'impounded', header: 'Impounded', body: (car) => <>{car.impounded ? 'Yes' : 'No'}</> },
  {
    field: 'parkingFee',
    header: 'Parking Fee',
    body: (car) => (
      <>
        {car.parkingFee.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </>
    )
  }
];

export const questions: IQuestion[] = [
  {
    name: 'p1',
    text: 'Las personas que me conocen dicen que soy creativo y que, produzco ideas originales y divertidas.'
  },
  {
    name: 'p2',
    text: 'Me resulta más fácil expresar mis pensamientos, sensaciones y emociones con palabras.'
  },
  {
    name: 'p3',
    text: 'Siempre me intereso por superar mis habilidades físicas y jugar en equipo. Siento placer realizando deportes.'
  },
  {
    name: 'p4',
    text: 'Tengo buena memoria y no me cuesta estudiar y retener fórmulas y palabras técnicas.'
  },
  {
    name: 'p5',
    text: 'Tiendo a cuestionar todo y convencer fácilmente a otras personas sobre la validez de mis argumentos.'
  },
  {
    name: 'p6',
    text: 'Puedo inferir posibles desarrollos y consecuencias futuras, a partir de la observación de una situación.'
  },
  {
    name: 'p7',
    text: 'Tengo un pensamiento organizado, tiendo a armar esquemas, establecer un orden y sistematizar.'
  },
  {
    name: 'p8',
    text: 'Soy capaz de captar lo que otro siente y ayudarlo a sentirse mejor.'
  },
  {
    name: 'p9',
    text: 'Me salta a la vista rápidamente cuando algo no concuerda con el entorno y me resulta difícil no tenerlo en cuenta.'
  },
  {
    name: 'p10',
    text: 'Me estimula más la etapa de análisis de las cosas que su ejecución.'
  },
  {
    name: 'p11',
    text: 'Estaría dispuesto a renunciar a un momento placentero para ofrecer mi servicio como profesional.'
  },
  {
    name: 'p12',
    text: 'Me interesaría implementar procesos que organizan las tareas de los empleados de una empresa.'
  },
  {
    name: 'p13',
    text: 'Para mí es altamente relevante que mi profesión me asegure una salida laboral.'
  },
  {
    name: 'p14',
    text: 'Si pudiera elegir, pasaría mucho tiempo diseñando novedosos objetos o edificios en mi computadora.'
  },
  {
    name: 'p15',
    text: 'Creo que el dinero no es lo más importante a tener en cuenta en la elección de una carrera.'
  },
  {
    name: 'p16',
    text: 'Eligiera una carrera cuyo instrumento de trabajo fuera la utilización de un idioma extranjero.'
  },
  {
    name: 'p17',
    text: 'En el futuro me imagino trabajando en lugares relacionados con la cultura y el arte.'
  },
  {
    name: 'p18',
    text: 'Me imagino trabajando en ámbitos variados, no podría trabajar encerrado en una oficina o pasar mucho tiempo en el mismo lugar.'
  },
  {
    name: 'p19',
    text: 'Me gustaría tener un trabajo en el que tuviera que compartir espacios y tareas con profesionales de la salud.'
  }
];
