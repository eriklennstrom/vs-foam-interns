import FoamDropdownInput from '@/components/dropdown/dropdown-input.vue';
import FoamDropdownFilter from '@/components/dropdown/dropdown-filter.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown-button.md?raw';

export default {
    title: 'Components/Dropdown/Dropdown-Input',
    component: FoamDropdownInput,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    },
    argTypes: {
        click: {
          table: {
            disable: true,
          },
        },
        default: {
            table: {
                disable: true
            }
        },
        text: {
          control: { type: 'text' },
          description: 'Property for text content inside the dropdown button',
        },
      },
  } as Meta<typeof FoamDropdownInput>;
  
  const Template: StoryFn<typeof FoamDropdownInput> = (args) => ({
    setup() {      
        return { args };
    },
    components: { FoamDropdownInput, FoamDropdownDivider, FoamDropdownItem, FoamDropdownFilter },

    template: `
    <div style="display: flex; gap: 24px; flex-direction: row;" >
        <foam-dropdown-input text="Countries" v-bind="args" >
            <foam-dropdown-filter type="checkbox" text="Sweden" />
            <foam-dropdown-filter type="checkbox" text="Norway" />
            <foam-dropdown-filter type="checkbox" text="Finland" />
        </foam-dropdown-input>

        <foam-dropdown-input text="Navigation" v-bind="args" >
            <foam-dropdown-item type="route" text="About Us" to="/about" />
            <foam-dropdown-item type="route" text="Menu" to="/menu" />
            <foam-dropdown-item type="route" text="Home" to="/home" />
        </foam-dropdown-input>
    </div>
    `
  });

  export const Default = Template.bind({});