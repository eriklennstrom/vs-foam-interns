import MyIcon from './icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/Icons',
  component: MyIcon,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'danger', 'secondary', 'yelolw', 'primary'],
    },
    size: {
      
      control: { type: 'select' },
      options: [10, 12, 14, 16, 18, null],
    },
    variant: {
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
Primary.args = { variant: 'fa-warning', color: 'red', size: 12}