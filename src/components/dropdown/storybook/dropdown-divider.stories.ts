import DropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown-divider.md?raw';

export default {
    title: 'Components/Dropdown/Dropdown-divider',
    component: DropdownDivider,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    }
  } as Meta<typeof DropdownDivider>;
  
  const Template: StoryFn<typeof DropdownDivider> = () => ({
    components: { DropdownDivider },

    template: `<div><foam-dropdowm-divider /></div>`,
  });

  export const Default = Template.bind({});