import { Card } from './Card';

export default {
  title: 'Example/Card',
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

export const Bordered = {
  args: {
    title: 'Colored Card',
    content: 'This card has a background.',
    border: '1px solid red',
  },
};
