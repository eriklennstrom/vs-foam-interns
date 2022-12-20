import FoamIcon from "./icons.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import iconDocs from '../../storybook/docs/icon.md?raw';

export default {
  title: "components/Icons",
  component: FoamIcon,
  parameters: {
    docs: {
      description: {
        component: iconDocs,
      },
    },
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["success", "danger", "secondary", "not-a-color", "primary"],
    },
    size: {
      control: { type: "select" },
      options: [10, 12, 14, 16, 18, null],
    },
    variant: {
      control: { type: "select" },
      options: ["user-secret", "warning", "arrow-down", "circle-down"],
    },
  },
} as Meta<typeof FoamIcon>;

const Template: StoryFn<typeof FoamIcon> = (args: any) => ({
  components: { FoamIcon },
  setup() {
    return { args };
  },
  template: '<foam-icon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { };


export const Variants: StoryFn<typeof FoamIcon> = (args: any, { argTypes }) => ({
  components: { FoamIcon },
  setup() {
    return { args, argTypes };
  },
  template: `<div style="display: flex; gap: 1em">
  <foam-icon v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" v-bind="args" />
  </div>`,
});

Variants.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  color: {
    table: {
      disable: true,
    },
  },
  size: {
    defaultValue: 16,
    table: {
      disable: true,
    },
  },
};