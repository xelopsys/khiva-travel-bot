import { Keyboard } from 'grammy';
import { commands } from '../constants/constants';

const menu = new Keyboard()
  .text(commands.banner)
  .text(commands.gallery)
  .row()
  .text(commands.travel)
  .row()
  .text(commands.car)
  .row()
  .text(commands.transfer)
  .row()
  .text(commands.contact)
  .row();

export { menu };
