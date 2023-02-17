import FoamDropdownButton from '@/components/dropdown/dropdown-button/dropdown-button.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/dropdown-button/dropdown-button.md?raw';

export default {
    title: 'Components/Dropdown/Dropdown-Button',
    component: FoamDropdownButton,
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
  } as Meta<typeof FoamDropdownButton>;
  
  const Template: StoryFn<typeof FoamDropdownButton> = (args) => ({
    setup() {      
        return { args };
    },
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },

    template: `
    <div style="display: flex; justify-content: center;" >
        <foam-dropdown-button v-bind="args">
            <foam-dropdown-item text="Dropdown Item" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item" />
        </foam-dropdown-button>
    </div>
    `
  });

  export const Default = Template.bind({});

  export const Variants: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown-button v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant">
            <foam-dropdown-item text="Dropdown Item" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item" />
      </foam-dropdown-button>
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


  export const Icons: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown-button v-bind="args">
            <foam-dropdown-item text="Dropdown Item" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item" />
        </foam-dropdown-button>
        <foam-dropdown-button v-bind="args">
            <foam-dropdown-item icon="user-secret" />
            <foam-dropdown-divider />
            <foam-dropdown-item icon="arrow-down" />
            <foam-dropdown-item icon="warning" />
            <foam-dropdown-item icon="circle-down" />
    </foam-dropdown-button>
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

  export const Align: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; justify-content: center; width : 100%;" >
        <foam-dropdown-button align="end" text="Align : end" :width="250" >
            <foam-dropdown-item text="Dropdown Item" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item" />
        </foam-dropdown-button>
        <foam-dropdown-button align="start" text="Align : start" :width="250" >
            <foam-dropdown-item text="Dropdown Item" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item" />
        </foam-dropdown-button>
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

  export const Width: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
      components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
      setup() {
          return { args, argTypes };
        },
        template: `
        <div style="display: flex; justify-content: center;">
            <foam-dropdown-button v-bind="args" >
                <foam-dropdown-item text="Dropdown Item" />
                <foam-dropdown-divider />
                <foam-dropdown-item text="Dropdown Item" />
            </foam-dropdown-button>
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

  export const Disabled: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
      components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
      setup() {
          return { args, argTypes };
        },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown-button v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" disabled>
            <foam-dropdown-item text="Dropdown Item" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item" />
      </foam-dropdown-button>
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