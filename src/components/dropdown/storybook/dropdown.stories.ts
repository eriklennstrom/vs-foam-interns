import Dropdown from '@/components/dropdown/dropdown.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown.md?raw';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    }
  } as Meta<typeof Dropdown>;
  
  const Template: StoryFn<typeof Dropdown> = () => ({
    components: { Dropdown },

    template: `<div><foam-dropdowm-divider /></div>`,
  });

  export const Default = Template.bind({});