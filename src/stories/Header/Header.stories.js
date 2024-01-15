import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    user: {
      name: 'Qasim',
    },
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
