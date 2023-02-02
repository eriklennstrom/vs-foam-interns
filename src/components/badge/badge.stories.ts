import FoamBadge from '@/components/badge/badge.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/badge/badge.md?raw';

export default {
  title: 'Components/Badge',
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
      control: { type: 'text' },
      description: 'Property for text content inside the badge',
    },
  },
} as Meta<typeof FoamBadge>;

const Template: StoryFn<typeof FoamBadge> = (args) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: '<foam-badge v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'secondary'
}
export const Variants: StoryFn<typeof FoamBadge> = (
  args,
  { argTypes }
) => ({
  components: { FoamBadge },
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

export const Outline: StoryFn<typeof FoamBadge> = (
  args,
  { argTypes }
) => ({
  components: { FoamBadge },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge v-for="variant in argTypes.variant.options" outline :key="variant" :variant="variant" :text="variant"  />
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
      disable: true,
    },
  },
  text: {
    description: 'Property for text content inside the badge',
  },
};

export const Icons: StoryFn<typeof FoamBadge> = (args) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-badge variant="primary" v-bind="args"   />
      <foam-badge variant="primary" v-bind="args" outline />
    </div>
  `,
});

Icons.args = {
  icon: {
    table: {
      defaultValue: 'circle-down',
    },
  },
};

Icons.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      defaultValue: 'circle-down',
    },
  },
  outline: {
    table: {
      disable: true,
    },
  },
}

