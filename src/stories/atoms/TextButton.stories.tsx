import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { TextButton } from 'components/atoms';
import { ButtonSizeVariants, ButtonColorVariants } from 'ts/enums';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {
    sizeVariant: {
      control: {
        type: 'select',
        options: Object.keys(ButtonSizeVariants),
      },
    },
    colorVariant: {
      control: {
        type: 'select',
        options: Object.keys(ButtonColorVariants),
      },
    },
  },
};

const Template: Story<ComponentProps<typeof TextButton>> = (args) => <TextButton {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  label: 'Test',
  sizeVariant: ButtonSizeVariants.normal,
  colorVariant: ButtonColorVariants.primary,
};
