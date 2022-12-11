import tmpl from './userSettings.hbs';
import './userSettings.scss';

const settings = {
  settings: [
    {
      key: 'Mail',
      value: 'pochta@yandex.ru',
    },
    {
      key: 'Login',
      value: 'ivanivanov',
    },
    {
      key: 'Name',
      value: 'Ivan',
    },
    {
      key: 'Last name',
      value: 'Ivanov',
    },
    {
      key: 'Nickname',
      value: 'Ivan',
    },
    {
      key: 'Phone number',
      value: '+7 (909) 967 30 30',
    },
  ],
};

export const renderUserSettings = () => {
  return tmpl(settings);
};
