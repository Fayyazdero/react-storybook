import React from 'react';
import Avatar from './Avatar';
import { FaUser } from 'react-icons/fa';

export default {
  title: 'Components/Avatar',
  component: Avatar,
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
  tags: ['autodocs'],

};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'icon',
  content: <FaUser />,
  size: 'md',
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  ...Default.args,
  type: 'image',
  content: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
};

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  ...Default.args,
  type: 'text',
  content: 'A',
};

export const AvatarWithBadge = Template.bind({});
AvatarWithBadge.args = {
  ...Default.args,
  withBadge: true,
};

export const AvatarWithTooltip = Template.bind({});
AvatarWithTooltip.args = {
  ...Default.args,
  withTooltip: true,
};
