/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Button from './';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};
