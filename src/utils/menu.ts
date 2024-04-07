import { Keyboard } from 'grammy';

const menu = new Keyboard()
  .text('Banner')
  .text('Gallery')
  .row()
  .text('Travel')
  .row()
  .text('Cars')
  .row()
  .text('Transfers')
  .row()
  .text('Contacts')
  .row();

export { menu };
