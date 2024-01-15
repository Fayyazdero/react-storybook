import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Qasim',
    },
  },
};

export const LoggedOut = {};
