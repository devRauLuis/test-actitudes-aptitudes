import { parkingFees } from './values';

const getParkingFee = (parkingTime: number) =>
  parkingFees[parkingTime.toString() as keyof typeof parkingFees];

export default getParkingFee;
