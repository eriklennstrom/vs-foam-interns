import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdownButton from '@/components/dropdown/dropdown-button.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown-item.md?raw';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Components/Dropdown/Dropdown-item',
    component: FoamDropdownItem,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    },
    argTypes: {
        type: {
          control: { type: 'select' },
          options: ['button', 'link', 'route'],
          description: 'Property to render chosen type',
        },
        text: {
          control: { type: 'text' },
          description: 'Property for text content inside the dropdown button',
        },
        secondaryText: {
            control : { type: 'text'},
            description: 'Property to add a secondary text below the main dropdown item text'
        },
        icon: {
          control: { type: 'select' },
          options: ['warning', 'arrow-down', 'circle-down', null],
          description: 'Property to add chosen icon',
        },
        to: {
          control: { type: 'text' },   
          description: 'Property to add url or endpoint for "link" and "route" type',
        },
        selected: {
        control: { type: 'boolean' },
          options: [true, false],
          description: 'Property for selected boolean',
        },
        disabled: {
          control: { type: 'boolean' },
          options: [true, false],
          description: 'Property for disabled boolean',
        },
        subdropdown: {
          control : {type: 'boolean'},
          options: [true, false],
          description: 'Property to add a secondary dropdown withing the dropdown item'
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
      },
  } as Meta<typeof FoamDropdownItem>;
  
  const Template: StoryFn<typeof FoamDropdownItem> = () => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },

    template: `
    <div>
        <foam-dropdown-button v-bind="args">
            <foam-dropdown-item text="Dropdown Item 1" />
            <foam-dropdown-divider />
            <foam-dropdown-item text="Dropdown Item 1" />
        </foam-dropdown-button>
    </div>
    `
  });

  export const Default = Template.bind({});

  export const Type: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
    <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown-button variant="primary" >
          <foam-dropdown-item v-bind="args" v-for="type in argTypes.type.options" :key="type" :text="type" :type="type" />
      </foam-dropdown>
    </div>
  `,
  });

// To - not needed
// Text - not needed
// SecondaryText - needed?

// Icon - one with text and icon, one with only icons
// Disabled 
// Selected

// Width - för subdropdown
// Subdropdown



  // All props
  // Type.argTypes = {
  //   type: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   text: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   icon: {
  //       table: {
  //           disable: true,
  //       },
  //   },  
  //   width: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   subdropdown: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  // };
  

  // Type.argTypes = {
  //   type: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   text: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   icon: {
  //       table: {
  //           disable: true,
  //       },
  //   },  
  //   width: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   subdropdown: {
  //       table: {
  //           disable: true,
  //       },
  //   },
  //   disabled: {
  //     table: {
  //       disable: true
  //     }
  //   },
  //   secondaryText: {
  //     table: {
  //       disable: true
  //     }
  //   },
  //   to: {
  //     table: {
  //       disable: true
  //     }
  //   },
  //   selected: {
  //     table: {
  //       disable: true
  //     }
  //   }
  // };