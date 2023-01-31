import FoamDropdown from '@/components/dropdown/dropdown.vue';
import FoamDropdownButton from '@/components/dropdown/dropdownButton/dropdown-button.vue'
import FoamDropdownInput from '@/components/dropdown/dropdownInput/dropdown-input.vue';
import FoamDropdownFilter from '@/components/dropdown/dropdownFilter/dropdown-filter.vue';
import FoamDropdownItem from '@/components/dropdown/dropdownItem/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdownDivider/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/dropdown.md?raw';

export default {
    title: 'Components/Dropdown',
    component: FoamDropdown,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    },
    argTypes: {
        role: {
            control: { type: 'text' },
            options: ['button', 'input'],
            description: 'Property to add chosen role',
          },
        variant: {
          control: { type: 'select' },
          options: ['primary', 'secondary', 'danger', 'danger-outline', 'ghost'],
          description: 'Property to add chosen variant',
        },
        icon: {
          control: { type: 'select' },
          options: ['warning', 'arrow-down', 'circle-down', null],
          description: 'Property to add chosen icon',
        },
        align: {
          control: { type: 'select' },   
          options: ['end', 'start'],
          description: 'Property for dropdown container position',
        },
        width: {
          control: { type: 'number' },
          description: 'Property for dropdown container width',
        },
        disabled: {
          control: { type: 'boolean' },
          options: [true, false],
          description: 'Property for disabled boolean',
        },
        placeholder: {
            control: { type: 'text' },
            description: 'Property for placeholder text content inside the dropdown input',
          },
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
          description: 'Property for text content inside the dropdown',
        },
      },
  } as Meta<typeof FoamDropdown>;
  
  const Template: StoryFn<typeof FoamDropdownInput> = (args) => ({
    setup() {      
        return { args };
    },
    components: { FoamDropdown, FoamDropdownButton, FoamDropdownInput, FoamDropdownDivider, FoamDropdownItem, FoamDropdownFilter },

    template: `
    <div style="display: flex; gap: 24px; flex-direction: row;" >
        <foam-dropdown text="Countries" v-bind="args" >
            <foam-dropdown-filter type="checkbox" text="Sweden" />
            <foam-dropdown-filter type="checkbox" text="Norway" />
            <foam-dropdown-filter type="checkbox" text="Finland" />
        </foam-dropdown>

        <foam-dropdown text="Navigation" v-bind="args" >
            <foam-dropdown-item type="route" text="About Us" to="/about" />
            <foam-dropdown-item type="route" text="Menu" to="/menu" />
            <foam-dropdown-item type="route" text="Home" to="/home" />
        </foam-dropdown>
    </div>
    `
  });

  export const Default = Template.bind({});

  export const Button: StoryFn<typeof FoamDropdown> = (args, { argTypes }) => ({
    components: { FoamDropdown, FoamDropdownButton, FoamDropdownInput, FoamDropdownDivider, FoamDropdownItem, FoamDropdownFilter },
    setup() {
      const iconTypes = ['warning', 'arrow-down', 'circle-down', 'xmark']
      return { args, argTypes, iconTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown text="Navigation" v-bind="args" role="button" >
            <foam-dropdown-item type="route" text="About Us" to="/about" />
            <foam-dropdown-item type="route" text="Menu" to="/menu" />
            <foam-dropdown-item type="route" text="Home" to="/home" />
        </foam-dropdown>
      </div>
    `,
  }); 

  Button.argTypes = {
    role: {
        table: {
            disable: true,
        },
    },
    placeholder: {
        table: {
            disable: true,
        },
    },
  };

  export const Input: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdown, FoamDropdownButton, FoamDropdownInput, FoamDropdownDivider, FoamDropdownItem, FoamDropdownFilter },
    setup() {
      const iconTypes = ['warning', 'arrow-down', 'circle-down', 'xmark']
      return { args, argTypes, iconTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown text="Navigation" v-bind="args" role="input" >
            <foam-dropdown-item type="route" text="About Us" to="/about" />
            <foam-dropdown-item type="route" text="Menu" to="/menu" />
            <foam-dropdown-item type="route" text="Home" to="/home" />
        </foam-dropdown>
      </div>
    `,
  }); 

  Input.argTypes = {
    role: {
        table: {
            disable: true,
        },
    },
    width: {
        table: {
            disable: true,
        },
    },
    align: {
        table: {
            disable: true,
        },
    },  
    icon: {
        table: {
            disable: true,
        },
    },
    disabled: {
        table: {
            disable: true,
        },
    },
    variant: {
        table: {
            disable: true,
        },
    },
  };