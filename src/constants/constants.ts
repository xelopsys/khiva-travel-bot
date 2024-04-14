const admins = [465803074, 1440607729];

const keyboards = {
  start: 'START',
  banner: 'BANNER',
  travel: 'TRAVEL',
  travelBanner: 'TRAVEL_BANNER',
  gallery: 'GALLERY',
  car: 'CAR',
  transfer: 'TRANSFER',
  cancel: 'CANCEL',
  contact: 'CONTACT',
} as const;

const commands = {
  start: 'start',
  deleteButton: 'Удалить',
  deleteCall: 'удалить',
  cancelButton: 'Отменить',
  cancelCall: 'отменить',
  banner: 'Баннер',
  travel: 'Туры',
  homeBanner: 'Главный баннер',
  travelBanner: 'Туровый баннер',
  gallery: 'Галерея',
  car: 'Автомобили',
  transfer: 'Трансферы',
  contact: 'Контакты',
} as const;

export { admins, keyboards, commands };
