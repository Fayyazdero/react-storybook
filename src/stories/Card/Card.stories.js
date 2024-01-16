import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Card Title',
    content: 'This is a simple card component.',
    backgroundColor: '#ffffff'
  },
};

export const ColoredBackground = {
  args: {
    title: 'Colored Card',
    content: 'This card has a colored background.',
    backgroundColor: '#ff6f91',
  },
};

export const Outlined = {
  args: {
    title: 'Colored Card',
    content: 'This card has a background.',
    backgroundColor: "#ffffff",
    border: '1px solid #3b3b3b',
  },
};
