import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdown from '@/components/dropdown/dropdown.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown-divider.md?raw';

export default {
    title: 'Components/Dropdown/Dropdown-divider',
    component: FoamDropdownDivider, FoamDropdownItem, FoamDropdown,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    }
  } as Meta<typeof FoamDropdownDivider>;
  
  const Template: StoryFn<typeof FoamDropdownDivider> = () => ({
    components: { FoamDropdownDivider, FoamDropdownItem, FoamDropdown },

    template: `
    <div>
    <p>Click on the dropdown button to see the divider.</p>
    <foam-dropdown>
      <foam-dropdown-item />
      <foam-dropdown-divider />
      <foam-dropdown-item />
    </foam-dropdown>
    </div>
    `,
  });

  export const Default = Template.bind({});