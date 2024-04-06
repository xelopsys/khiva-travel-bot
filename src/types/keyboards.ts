import { keyboards } from '../constants/constants';

export type Keyboards = typeof keyboards;
export type KeyboardKey = keyof Keyboards;
export type KeyboardValue = Keyboards[keyof Keyboards];
