import DropdownItem from '@/components/dropdown/dropdown-item.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown-item.md?raw';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Components/Dropdown/Dropdown-item',
    component: DropdownItem,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    }
  } as Meta<typeof DropdownItem>;
  
  const Template: StoryFn<typeof DropdownItem> = () => ({
    components: { DropdownItem },

    template: `<div><foam-dropdowm-divider /></div>`,
  });

  export const Default = Template.bind({});