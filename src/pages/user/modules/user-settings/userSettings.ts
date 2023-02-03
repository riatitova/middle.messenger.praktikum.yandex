import tmpl from './userSettings.hbs';
import './userSettings.scss';

const settings = {
  settings: [
    {
      key: 'email',
      value: 'pochta@yandex.ru',
    },
    {
      key: 'login',
      value: 'ivanivanov',
    },
    {
      key: 'first_name',
      value: 'Ivan',
    },
    {
      key: 'second_name',
      value: 'Ivanov',
    },
    {
      key: 'display_name',
      value: 'Ivan',
    },
    {
      key: 'phone',
      value: '+7 (909) 967 30 30',
    },
  ],
};

export const renderUserSettings = () => {
  return tmpl(settings);
};
