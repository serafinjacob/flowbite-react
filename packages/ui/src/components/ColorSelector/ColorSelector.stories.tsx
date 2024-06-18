import type { Meta, StoryFn } from "@storybook/react";
import { ColorSelector, type ColorSelectorProps } from "./ColorSelector";

export default {
  title: "Components/ColorSelector",
  component: ColorSelector,
} as Meta;

const Template: StoryFn<ColorSelectorProps> = (args) => <ColorSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "ColorSelector",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "ColorSelector",
  disabled: true,
};
