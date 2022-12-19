import FoamBadge from "./badge.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Badge",
  component: FoamBadge,
  parameters: {
    docs: {
      description: {
        component: "Badge component",
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
Default.args = {};



Default.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const Variants: StoryFn<typeof FoamBadge> = () => ({
  components: { FoamBadge },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge variant="primary" text="Primary" />
      <foam-badge variant="secondary" text="Secondary" />
      <foam-badge variant="warning" text="Warning" />
      <foam-badge variant="success" text="Success"/>
      <foam-badge variant="danger" text="Danger" />
    </div>
    `
})

export const Outline: StoryFn<typeof FoamBadge> = (args: any) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge variant="primary" v-bind="args" />
      <foam-badge variant="secondary" v-bind="args" />
      <foam-badge variant="warning" v-bind="args" />
      <foam-badge variant="success" v-bind="args" />
      <foam-badge variant="danger" v-bind="args" />
    </div>
  `,
});

Outline.argTypes = {
  variant: {
    table: {
      disable: true
    }
  },
  icon: {
    table: {
      disable: true
    }
  },
  outline: {
    defaultValue: true,
    table: {
      disable: true
    }
  },
  text: {
    description: "Property for text content inside the badge",
  },
}

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
      disable: true
    }
  },
  icon: {
    defaultValue: 'warning',
  },
  outline: {
    table: {
      disable: true
    }
  },
  text: {
    description: "Property for text content inside the badge",
  },
}