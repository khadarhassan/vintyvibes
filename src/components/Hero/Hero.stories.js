/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Hero from './';

export default {
  title: 'Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hero',
};
