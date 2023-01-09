import FoamButton from '@/components/button/button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/button/button.md?raw';

export default {
  title: 'Components/Button',
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
      options: ['primary', 'secondary', 'danger', 'warning', 'ghost'],
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
      description: 'Property to add outline to the button',
    },
    text: {
      control: {type: 'text'},
      description: 'Property for text content inside the button',
    },
  },
} as Meta<typeof FoamButton>;

const Template: StoryFn<typeof FoamButton> = (args) => ({
  components: { FoamButton },
  setup() {
    return { args };
  },
  template: '<foam-button v-bind="args" />',
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
    <foam-button v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" />
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
    description: 'Property for text content inside the button',
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
      <foam-button v-for="variant in argTypes.variant.options" :key="variant" :variant="variant" :text="variant"  />
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
    description: 'Property for text content inside the button',
  },
};

export const Icons: StoryFn<typeof FoamButton> = (args) => ({
  components: { FoamButton },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-button variant="primary" v-bind="args" />
      <foam-button variant="primary" outline />
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
    description: 'Property for text content inside the button',
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
