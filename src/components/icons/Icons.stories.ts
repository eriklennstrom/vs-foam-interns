import MyIcon from './Icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: MyIcon,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
} as Meta<typeof MyIcon>

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template:  StoryFn<typeof MyIcon> = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-icon v-bind="args" />',
});


export const Primary = Template.bind({})
Primary.args = { iconType: 'bi-alarm', color: 'red'}