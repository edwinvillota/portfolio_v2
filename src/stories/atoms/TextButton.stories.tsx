import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { TextButton } from 'components/atoms';

export default {
  title: 'TextButton',
  component: TextButton,
};

const Template: Story<ComponentProps<typeof TextButton>> = (args) => <TextButton {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  label: 'Test',
};
