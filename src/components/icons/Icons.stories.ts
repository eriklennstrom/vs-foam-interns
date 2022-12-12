import MyIcon from './Icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Icons',
  component: MyIcon,
  argTypes: {
    backgroundColor: { control: 'color' }
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
Primary.args = { iconType: 'bi-alarm', color: 'red'}