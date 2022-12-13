import MyIcon from './Icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Icons',
  component: MyIcon,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['red', 'blue', 'green', 'white', 'black'],
    },
    chosenSize: {
      control: { type: 'select' },
      options: ['10px', '12px', '14px', '16px', '18px', ''],
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
Primary.args = { iconType: 'bi-alarm', color: 'red', chosenSize: '10px'}