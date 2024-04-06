import bot from '../bot/bot';
import { TypeBot } from '../types';
import { Keyboard } from 'grammy';
import { admins } from '../constants/constants';

const menu = new Keyboard()
  .text('Banner')
  .text('Travel')
  .row()
  .text('Gallery')
  .row();

const adminMenu = new Keyboard()
  .text('Banner')
  .text('Travel')
  .row()
  .text('Gallery')
  .row();

const jobs = new Keyboard()
  .text("Anketa to'ldirish")
  .row()
  .oneTime()
  .text('Back to menu')
  .row()
  .oneTime();

const requestContact = new Keyboard()
  .row()
  .oneTime()
  .requestContact('Raqamni jo`natish');

const requestLocation = new Keyboard()
  .row()
  .oneTime()
  .requestLocation('Joylashuvni jo`natish');

const gender = new Keyboard().text('Ayol').row().text('Erkak').row();

const marriageStatus = new Keyboard()
  .text('Turmush qurmagan')
  .row()
  .text('Uylangan')
  .row();

export {
  menu,
  jobs,
  requestContact,
  requestLocation,
  gender,
  marriageStatus,
  adminMenu,
};
