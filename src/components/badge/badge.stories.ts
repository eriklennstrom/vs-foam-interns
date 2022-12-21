import FoamBadge from "./badge.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import readme from './badge.md?raw'

export default {
  title: "Components/Badge",
  component: FoamBadge,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "warning", "success"],
      description: "Property to add chosen variant",
    },
    icon: {
      control: { type: "select" },
      options: ["warning", "arrow-down", "circle-down", null],
      description: "Property to add chosen icon",
    },
    outline: {
      control: { type: "select" },
      options: [true, false],
      description: "Property to add outline to the badge",
    },
    text: {
      description: "Property for text content inside the badge",
    },
  },
} as Meta<typeof FoamBadge>;

const Template: StoryFn<typeof FoamBadge> = (args: any) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: '<foam-badge v-bind="args" />',
});

export const Default = Template.bind({});

export const Variants: StoryFn<typeof FoamBadge> = (
  args: any,
  { argTypes }
) => ({
  components: { FoamBadge },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; gap: 1em">
    <foam-badge v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" v-bind="args" />
  </div>
`,
});

Variants.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
  outline: {
    table: {
      disable: true,
    },
  },
  text: {
    description: "Property for text content inside the badge",
  },
};

export const Outline: StoryFn<typeof FoamBadge> = (
  args: any,
  { argTypes }
) => ({
  components: { FoamBadge },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge v-for="variant in argTypes.variant.options" :key="variant" :variant="variant" :text="variant" v-bind="args" />
    </div>
  `,
});

Outline.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
  outline: {
    defaultValue: true,
    table: {
      disable: true,
    },
  },
  text: {
    description: "Property for text content inside the badge",
  },
};

export const Icons: StoryFn<typeof FoamBadge> = (args: any) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge variant="primary" v-bind="args" />
      <foam-badge variant="primary" outline v-bind="args" />
    </div>
  `,
});

Icons.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  icon: {
    defaultValue: "warning",
  },
  outline: {
    table: {
      disable: true,
    },
  },
  text: {
    description: "Property for text content inside the badge",
  },
};
