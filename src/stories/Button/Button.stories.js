import React from 'react';
import Button from './Button';
import { FaIcon } from 'react-icons/fa'; // Example icon import
import COLORS from '../constants/colors';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: { type: 'select', options: ['contained', 'outlined', 'noBorder'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    disabled: { control: 'boolean' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'contained'
}

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained Button',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined Button',
  variant: 'outlined',
  bgClr: COLORS.default
};

export const Text = Template.bind({});
Text.args = {
  children: 'Only Text',
  variant: 'text',
  bgClr: COLORS.default
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  children: 'Button with Left Icon',
  iconLeft: true,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  children: 'Button with Right Icon',
  iconRight: true,
};