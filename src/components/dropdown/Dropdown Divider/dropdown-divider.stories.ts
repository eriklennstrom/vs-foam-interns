import FoamDropdownDivider from '@/components/dropdown/Dropdown Divider/dropdown-divider.vue';
import FoamDropdownItem from '@/components/dropdown/Dropdown Item/dropdown-item.vue';
import FoamDropdownButton from '@/components/dropdown/Dropdown Button/dropdown-button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/dropdown-divider.md?raw';

export default {
    title: 'Components/Dropdown/Dropdown-divider',
    component: FoamDropdownDivider, FoamDropdownItem, FoamDropdownButton,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    }
  } as Meta<typeof FoamDropdownDivider>;
  
  const Template: StoryFn<typeof FoamDropdownDivider> = () => ({
    components: { FoamDropdownDivider, FoamDropdownItem, FoamDropdownButton },

    template: `
    <div>
    <p>Click on the dropdown button to see the divider.</p>
    <foam-dropdown-button>
      <foam-dropdown-item />
      <foam-dropdown-divider />
      <foam-dropdown-item />
    </foam-dropdown-button>
    </div>
    `,
  });

  export const Default = Template.bind({});