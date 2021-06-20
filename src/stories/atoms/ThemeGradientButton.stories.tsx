import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Theme, ThemeCtxProvider } from 'context/ThemeCtx';
import { ThemeGradientButton } from 'components/atoms';
import { Default, Blue } from 'styles/themes';

export default {
  title: 'Atoms/ThemeGradientButton',
  component: ThemeGradientButton,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (StoryFn: any) => {
      return (
        <ThemeCtxProvider>
          <Theme>
            <StoryFn />
          </Theme>
        </ThemeCtxProvider>
      );
    },
  ],
};

const Template: Story<ComponentProps<typeof ThemeGradientButton>> = (args) => <ThemeGradientButton {...args} />;

export const DefaultTheme = Template.bind({});

DefaultTheme.args = {
  themeSchema: Default,
};

export const BlueTheme = Template.bind({});

BlueTheme.args = {
  themeSchema: Blue,
};
