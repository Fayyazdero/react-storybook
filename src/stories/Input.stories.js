import { Input } from './Input';

export default {
  title: 'Hello',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const MediumSize = {
  args: {
    size: 'medium',
    placeholder: 'Medium size',
  },
};

export const LargeSize = {
  args: {
    size: 'large',
    placeholder: 'Large size',
  },
};

export const SmallSize = {
  args: {
    size: 'small',
    placeholder: 'Small size',
  },
};

export const CustomBackground = {
  args: {
    backgroundColor: '#add8e6', // Light Blue
    placeholder: 'Custom background',
  },
};
