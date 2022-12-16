import MyBadge from './badge.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Badge',
  component: MyBadge,
  argTypes: {
    type: {
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
} as Meta<typeof MyBadge>

const Template:  StoryFn<typeof MyBadge> = (args: any) => ({
  components: { MyBadge },
  setup() {
    return { args };
  },
  template: '<my-badge v-bind="args" />',
});


export const Primary = Template.bind({})
Primary.args = { type: 'danger', icon: 'warning', text: 'Badge Text'}