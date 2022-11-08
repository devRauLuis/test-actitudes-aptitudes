// •	Tubería de gas (diámetro y longitud)
// •	Presión del tanque
// •	Control de la estufa (5 posiciones)
// •	Material de la olla (agua, aceite)
// •	Cantidad de material
// •	Apertura del tanque de gas

export interface ICar {
  id: string;
  parkedAt: number;
  leavingAt: number;
  impounded?: boolean;
  parkingFee?: number;
}

export interface IQuestion {
  name: string;
  text: string;
  percentage?: IPercentage;
}

export interface IPercentage {
  arts: number;
  engineering: number;
  education: number;
  health: number;
  law: number;
  economics: number;
}
