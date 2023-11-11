import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, ThemeText } from './Text';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Text lorem ipsoun',
  text: 'Description Description Description Description',
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: TextSize.L,
  title: 'Text lorem ipsoun',
  text: 'Description Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
  theme: ThemeText.ERROR,
  title: 'Text lorem ipsoun',
  text: 'Description Description Description Description',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Description Description Description Description',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Text lorem ipsoun',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Text lorem ipsoun',
  text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Text lorem ipsoun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
