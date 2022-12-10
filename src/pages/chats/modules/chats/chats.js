import tmpl from './chats.hbs';
import './chats.scss';

const chats = {
  chats: [
    {
      name: 'Andrey',
      message: 'Image',
      time: '10:49',
      newMessages: 2,
    },
    {
      name: 'CinemaClub',
      message: 'You: sticker',
      time: '12:00',
      newMessages: 0,
    },
    {
      name: 'Ilya',
      message: 'Guys, I have special news for you!...',
      time: '15:12',
      newMessages: 4,
    },
    {
      name: 'Vadim',
      message: 'You: cool!',
      time: 'Fri',
      newMessages: 0,
    },
    {
      name: 'Tet-a-tets',
      message: 'Human Interface Guidelines and Material Design recommend...',
      time: 'Wed',
      newMessages: 0,
    },
    {
      name: '1, 2, 3',
      message: 'Many russians spend a lot of time every day...',
      time: 'Mon',
      newMessages: 0,
    },
    {
      name: 'Design Destroyer',
      message: 'In 2008 an artist Jon Rafman started ...',
      time: 'Mon',
      newMessages: 0,
    },
    {
      name: 'Day.',
      message: 'I was so excited about course that I forgot...',
      time: '1 May 2020',
      newMessages: 0,
    },
    {
      name: 'Stas Rogozin',
      message: 'It is possible today or...',
      time: '12 April 2020',
      newMessages: 0,
    },
  ],
};

export const renderChats = () => {
  return tmpl(chats);
}
