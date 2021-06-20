import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Theme, ThemeCtxProvider } from 'context/ThemeCtx';
import { ThemeColorSelector } from 'components/molecules';

export default {
  title: 'Molecules/ThemeColorSelector',
  component: ThemeColorSelector,
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

const Template: Story<ComponentProps<typeof ThemeColorSelector>> = (args) => <ThemeColorSelector />;

export const DefaultStory = Template.bind({});
