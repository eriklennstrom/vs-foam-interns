import FoamText from '@/visual-components/fonts-preview.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/visual-components/font-system.md?raw';

export default {
  title: 'Components/Text',
  component: FoamText,
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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'subtitle1', 'body2',  'subtitle2', 'small', 'overline'],
      description: 'Property to add chosen variant',
    },
    text: {
      control: { type: 'string' },
      description: 'Property to add chosen variant',
    },
  },
} as Meta<typeof FoamText>;

const Template: StoryFn<typeof FoamText> = (args) => ({
  components: { FoamText },
  setup() {
    return { args };
  },
  template: '<foam-text v-bind="args" />',
});


export const Default = Template.bind({});
Default.args = {
  variant: ''
}

export const Variants: StoryFn<typeof FoamText> = (
  args,
  { argTypes }
) => ({
  components: { FoamText },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; flex-direction: column;">
    <foam-text v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" />
  </div>
`,
});

Variants.argTypes = {
  text: {
    description: 'Property for text content inside the badge',
  },
};