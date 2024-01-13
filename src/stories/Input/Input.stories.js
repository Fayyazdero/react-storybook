import { Button } from '../Button/Button';
import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    placeholder: 'Primary Input',
  },
};

export const Secondary = {
  args: {
    placeholder: 'Secondary Input',
  },
};

export const WithBackgroundColor = {
  args: {
    primary: true,
    placeholder: 'Colored Input',
    backgroundColor: '#ff6f91',
  }
};

export const WithButton = () => (
    <div>
      <Input placeholder="Input with Button" />
      <Button label="submit"/>
    </div>
  );