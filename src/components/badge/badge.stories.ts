import FoamBadge from './badge.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Badge',
  component: FoamBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'warning', 'success'],
    },
    icon: {
      control: { type: 'select' },
      options: ['warning', 'arrow-down', 'circle-down', null],
    },
    outline: {
      control: {type: 'select' },
      options: [true, false]
    }
  },
} as Meta<typeof FoamBadge>

const Template:  StoryFn<typeof FoamBadge> = (args: any) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: '<foam-badge v-bind="args" />',
});


export const Primary = Template.bind({})
Primary.args = { variant: 'danger', icon: 'warning', text: 'Badge Text'}