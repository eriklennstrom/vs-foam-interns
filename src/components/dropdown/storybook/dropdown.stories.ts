import FoamDropdown from '@/components/dropdown/dropdown.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown.md?raw';

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
  } as Meta<typeof FoamDropdown>;
  
  const Template: StoryFn<typeof FoamDropdown> = (args) => ({
    setup() {      
        return { args };
    },
    components: { FoamDropdown, FoamDropdownDivider, FoamDropdownItem },

    template: `
    <div>
        <foam-dropdown v-bind="args">
            <foam-dropdown-item />
            <foam-dropdown-divider />
            <foam-dropdown-item />
        </foam-dropdown>
    </div>
    `
  });

  export const Default = Template.bind({});

  export const Variants: StoryFn<typeof FoamDropdown> = (args, { argTypes }) => ({
    components: { FoamDropdown, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant">
            <foam-dropdown-item />
            <foam-dropdown-divider />
            <foam-dropdown-item />
      </foam-dropdown>
    </div>
  `,
  });
  
  Variants.argTypes = {
    variant: {
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
    text: {
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
  };


  export const Icons: StoryFn<typeof FoamDropdown> = (args, { argTypes }) => ({
    components: { FoamDropdown, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div>
        <foam-dropdown v-bind="args">
            <foam-dropdown-item />
            <foam-dropdown-divider />
            <foam-dropdown-item />
        </foam-dropdown>
    </div>
  `,
  });
  Icons.args = {
    icon : 'circle-down'
  }
  Icons.argTypes = {
    variant: {
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
    text: {
        table: {
            disable: true,
        },
    },
    disabled: {
        table: {
            disable: true,
        },
    }, 
  };

  export const Align: StoryFn<typeof FoamDropdown> = (args, { argTypes }) => ({
    components: { FoamDropdown, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; justify-content: center; width : 100%;" >
        <foam-dropdown align="end" text="Align : end" :width="250" >
            <foam-dropdown-item />
            <foam-dropdown-divider />
            <foam-dropdown-item />
        </foam-dropdown>
        <foam-dropdown align="start" text="Align : start" :width="250" >
            <foam-dropdown-item />
            <foam-dropdown-divider />
            <foam-dropdown-item />
        </foam-dropdown>
    </div>
  `,
  });

  Align.argTypes = {
    variant: {
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
    text: {
        table: {
            disable: true,
        },
    },
    disabled: {
        table: {
            disable: true,
        },
    },
    icon: {
        table: {
            disable: true,
        },
    }, 
  };

  export const Width: StoryFn<typeof FoamDropdown> = (args, { argTypes }) => ({
      components: { FoamDropdown, FoamDropdownDivider, FoamDropdownItem },
      setup() {
          return { args, argTypes };
        },
        template: `
        <div>
            <foam-dropdown v-bind="args" >
                <foam-dropdown-item />
                <foam-dropdown-divider />
                <foam-dropdown-item />
            </foam-dropdown>
        </div>
        `
  });

  Width.argTypes = {
    variant: {
        table: {
            disable: true,
        },
    },
    align: {
        table: {
            disable: true,
        },
    },  
    text: {
        table: {
            disable: true,
        },
    },
    disabled: {
        table: {
            disable: true,
        },
    },
    icon: {
        table: {
            disable: true,
        },
    }, 
  };

  export const Disabled: StoryFn<typeof FoamDropdown> = (args, { argTypes }) => ({
      components: { FoamDropdown, FoamDropdownDivider, FoamDropdownItem },
      setup() {
          return { args, argTypes };
        },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" disabled>
            <foam-dropdown-item />
            <foam-dropdown-divider />
            <foam-dropdown-item />
      </foam-dropdown>
    </div>
  `,
  });
  
  Disabled.argTypes = {
    variant: {
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
    text: {
        table: {
            disable: true,
        },
    },
    icon: {
        table: {
            disable: true,
        },
    },
  };