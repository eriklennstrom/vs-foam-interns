import FoamDropdownFilter from '@/components/dropdown/dropdown-filter.vue';
import FoamDropdownButton from '@/components/dropdown/dropdown-button.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/storybook/dropdown-item.md?raw';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Components/Dropdown/Dropdown-filter',
    component: FoamDropdownFilter,
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
        color: {
          control: { type: 'text' },   
          description: 'Property to add the color to the type color container',
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
  } as Meta<typeof FoamDropdownFilter>;
  
  const Template: StoryFn<typeof FoamDropdownFilter> = (args) => {
    return {
      components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownFilter },
      setup() {
        return { args };
      },
      template: `
      <div>
          <foam-dropdown-button variant="primary" >
              <foam-dropdown-filter text="Dropdown Filter 1" v-bind="args" />
              <foam-dropdown-divider />
              <foam-dropdown-filter text="Dropdown Filter 1" v-bind="args" />
          </foam-dropdown-button>
      </div>
      `
    };
  };

  export const Default = Template.bind({});

  export const Type: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownFilter },
    setup() {
      return { args, argTypes };
    },
    template: `
        <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
            <foam-dropdown-button variant="primary" text="Checkbox Dropdown" >
                <foam-dropdown-item v-bind="args" text="Checkbox 1" type="checkbox" />
                <foam-dropdown-item v-bind="args" text="Checkbox 2" type="checkbox" selected />
                <foam-dropdown-item v-bind="args" text="Checkbox 3" type="checkbox" />
            </foam-dropdown-button>
            <foam-dropdown-button variant="primary" text="Filter Sizes" >
                <foam-dropdown-item v-bind="args" text="S" type="container" />
                <foam-dropdown-item v-bind="args" text="M" type="container" selected />
                <foam-dropdown-item v-bind="args" text="L" type="container" />
            </foam-dropdown-button>
            <foam-dropdown-button variant="primary" text="Color Dropdown" >
                <foam-dropdown-item v-bind="args" text="Blue" type="color" color="steelblue" />
                <foam-dropdown-item v-bind="args" text="Pink" type="color" color="hotpink" selected />
                <foam-dropdown-item v-bind="args" text="Green" type="color" color="green" />
            </foam-dropdown-button>
        </div>
  `,
  });

  Type.argTypes = {
    type: {
        table: {
            disable: true,
        },
    },
    text: {
        table: {
            disable: true,
        },
    },
    color: {
        table: {
            disable: true,
        },
    },
    selected: {
        table: {
            disable: true,
        },
    },
  };

  export const Disabled: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownFilter },
    setup() {
      const iconTypes = ['warning', 'arrow-down', 'circle-down', 'xmark']
      return { args, argTypes, iconTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown-button variant="primary" >
          <foam-dropdown-filter disabled text="Disabled" />
          <foam-dropdown-divider />
          <foam-dropdown-filter text="Not Disabled" />
        </foam-dropdown-button>
      </div>
    `,
  }); 

  Disabled.argTypes = {
    type: {
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
        disable: true
      }
    },
    selected: {
      table: {
        disable: true
      }
    }
  };

  export const Selected: StoryFn<typeof FoamDropdownFilter> = (args, { argTypes }) => {
    const [_, updateArgs] = useArgs();
    return {
      components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownFilter },
  
      setup() {
        const handleClick = () => {
          updateArgs({ selected: !args.selected });
        };
  
        return { args, argTypes, handleClick };
      },
      template: `
        <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
          <foam-dropdown-button variant="primary" >
            <foam-dropdown-filter text="Selected" />
            <foam-dropdown-divider />
            <foam-dropdown-filter v-bind="args" text="Click me" @click="handleClick" />
          </foam-dropdown-button>
        </div>
      `,
    };
  };

  Selected.argTypes = {
    type: {
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
        disable: true
      }
    },
  };