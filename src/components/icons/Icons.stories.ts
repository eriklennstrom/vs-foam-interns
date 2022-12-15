import MyIcon from './Icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Icons',
  component: MyIcon,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'danger', 'secondary', 'yelolw', 'primary'],
    },
    iconSize: {
      
      control: { type: 'select' },
      options: [10, 12, 14, 16, 18, null],
    },
    iconType: {
      control: { type: 'select' },
      options: ['user-secret', 'warning', 'arrow-down', 'circle-down'],
    }
  },
} as Meta<typeof MyIcon>

const Template:  StoryFn<typeof MyIcon> = (args: any) => ({
  components: { MyIcon },
  setup() {
    return { args };
  },
  template: '<my-icon v-bind="args" />',
});


export const Primary = Template.bind({})
Primary.args = { iconType: 'fa-warning', color: 'red', iconSize: 12}