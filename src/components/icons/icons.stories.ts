import MyIcon from './icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Icons',
  component: MyIcon,
  parameters: {
    docs: {
      description: {
        component: '<h1>Icon component<h1/> <p>Asorted icons for use to indicate warning</p>',
      },
    },
  },


  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'danger', 'secondary', 'not-a-color', 'primary'],
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

export const Variants: StoryFn<typeof MyIcon> = (args: any, {argTypes}) => ({
  components: { MyIcon },  
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; gap: 1em">
    <my-icon v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" v-bind="args" />
  </div>
`,
})



Variants.argTypes = {
  variant: {
    table: {
      disable: true
    }
  },
  icon: {
    table: {
      disable: true
    }
  },
}



const Template:  StoryFn<typeof MyIcon> = (args: any) => ({
  components: { MyIcon },
  setup() {
    return { args };
  },
  template: '<my-icon v-bind="args" />',
});


export const Primary = Template.bind({})
Primary.args = { variant: 'warning', color: 'red', size: 12}