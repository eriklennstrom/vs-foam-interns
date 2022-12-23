import FoamButton from '@/components/button/button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/badge/badge.md?raw';

export default {
  title: 'Components/Badge',
  component: FoamButton,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'warning', 'success'],
      description: 'Property to add chosen variant',
    },
    icon: {
      control: { type: 'select' },
      options: ['warning', 'arrow-down', 'circle-down', null],
      description: 'Property to add chosen icon',
    },
    outline: {
      control: { type: 'select' },
      options: [true, false],
      description: 'Property to add outline to the badge',
    },
    text: {
      control: {type: 'text'},
      description: 'Property for text content inside the badge',
    },
  },
} as Meta<typeof FoamButton>;

const Template: StoryFn<typeof FoamButton> = (args) => ({
  components: { FoamButton },
  setup() {
    return { args };
  },
  template: '<foam-badge v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'secondary'
}
export const Variants: StoryFn<typeof FoamButton> = (
  args,
  { argTypes }
) => ({
  components: { FoamButton },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; gap: 1em">
    <foam-badge v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" />
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
    description: 'Property for text content inside the badge',
  },
};

export const Outline: StoryFn<typeof FoamButton> = (
  args,
  { argTypes }
) => ({
  components: { FoamButton },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge v-for="variant in argTypes.variant.options" :key="variant" :variant="variant" :text="variant"  />
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

    table: {
      defaultValue: true,
      disable: true,
    },
  },
  text: {
    description: 'Property for text content inside the badge',
  },
};

export const Icons: StoryFn<typeof FoamButton> = (args) => ({
  components: { FoamButton },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge variant="primary" v-bind="args" />
      <foam-badge variant="primary" outline />
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
    table:{
    defaultValue: 'warning'}
  },
  outline: {
    table: {
      disable: true,
    },
  },
  text: {
    description: 'Property for text content inside the badge',
  },
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
