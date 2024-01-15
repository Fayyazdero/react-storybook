import React from 'react';
import Avatar from './Avatar';
import { FaHome } from 'react-icons/fa';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    withBadge: { control: 'boolean' },
    withTooltip: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    bgClr: { control: { type: 'select', options: ['primary', 'secondary', 'warning', 'danger'] } },
  },
  parameters: {
    layout: 'centered',
  },

};

const Template = (args) => <Avatar {...args} />;

export const IconAvatar = Template.bind({});
IconAvatar.args = {
  type: 'icon',
  content: <FaHome />, 
  size: 'md',
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  type: 'image',
  content: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  size: 'md',
};

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  type: 'text',
  content: 'A',
  size: 'md',
};

export const AvatarWithBadge = Template.bind({});
AvatarWithBadge.args = {
  type: 'text',
  content: 'A',
  withBadge: true,
  size: 'md',
};

export const AvatarWithTooltip = Template.bind({});
AvatarWithTooltip.args = {
  type: 'text',
  content: 'A',
  withTooltip: true,
  size: 'md',
};
