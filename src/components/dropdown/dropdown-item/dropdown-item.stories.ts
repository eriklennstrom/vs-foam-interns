import FoamDropdownItem from '@/components/dropdown/dropdown-item/dropdown-item.vue';
import FoamDropdownButton from '@/components/dropdown/dropdown-button/dropdown-button.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider/dropdown-divider.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/dropdown/dropdown-item/dropdown-item.md?raw';
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
        width: {
          control: { type: 'number' },
          description: 'Property for subdropdown container width',
        },
        iconAlign: {
          control: { type: 'seclect'},
          options: ['right', 'left'],
          description : 'Property to place the chosen icon to the right or left of the text'
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
  
  const Template: StoryFn<typeof FoamDropdownItem> = (args) => {
    return {
      components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
      setup() {
        return { args };
      },
      template: `
      <div style="display: flex; justify-content: center;" >
          <foam-dropdown-button variant="primary" >
              <foam-dropdown-item text="Dropdown Item 1" v-bind="args" />
              <foam-dropdown-divider />
              <foam-dropdown-item text="Dropdown Item 1" v-bind="args" />
          </foam-dropdown-button>
      </div>
      `
    };
  };


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
    icon: {
        table: {
            disable: true,
        },
    },  
    iconAlign: {
      table: {
          disable: true,
      },
    },  
    width: {
        table: {
            disable: true,
        },
    },
    subdropdown: {
        table: {
            disable: true,
        },
    },
  };

  export const Icons: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      const iconTypes = ['warning', 'arrow-down', 'circle-down', 'xmark']
      return { args, argTypes, iconTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <div>
          <p>Text and icons</p>
          <foam-dropdown-button variant="primary" >
            <foam-dropdown-item v-bind="args"  v-for="icon in iconTypes" :key="type" :icon="icon" :text="icon" />
          </foam-dropdown-button>
        </div>
        <div>
          <p>Only icons</p>
          <foam-dropdown-button variant="primary" >
            <foam-dropdown-item v-bind="args" v-for="icon in iconTypes" :key="type" :icon="icon" />
          </foam-dropdown-button>
        </div>
      </div>
    `,
  }); 

 

  Icons.argTypes = {
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
    iconAlign: {
      table: {
          disable: true,
      },
    },  
    width: {
        table: {
            disable: true,
        },
    },
    subdropdown: {
        table: {
            disable: true,
        },
    },
    secondaryText: {
      table: {
        disable: true
      }
    },
    to: {
      table: {
        disable: true
      }
    },
  };

  export const IconsAlign: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      const iconTypes = ['warning', 'arrow-down', 'circle-down', 'xmark']
      return { args, argTypes, iconTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <div>
          <p>Icons aligned right</p>
          <foam-dropdown-button variant="primary" text="Icon Right" >
            <foam-dropdown-item v-bind="args"  v-for="icon in iconTypes" :key="type" :icon="icon" :text="icon" />
          </foam-dropdown-button>
        </div>
        <div>
          <p>Icons aligned left</p>
          <foam-dropdown-button variant="primary" text="Icon left" >
            <foam-dropdown-item v-bind="args" v-for="icon in iconTypes" :key="type" :icon="icon" :text="icon"  iconAlign="left" />
          </foam-dropdown-button>
        </div>
      </div>
    `,
  }); 

 

  IconsAlign.argTypes = {
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
    iconAlign: {
      table: {
          disable: true,
      },
    },  
    width: {
        table: {
            disable: true,
        },
    },
    subdropdown: {
        table: {
            disable: true,
        },
    },
    secondaryText: {
      table: {
        disable: true
      }
    },
    to: {
      table: {
        disable: true
      }
    },
  };

  export const Disabled: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      const iconTypes = ['warning', 'arrow-down', 'circle-down', 'xmark']
      return { args, argTypes, iconTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-dropdown-button variant="primary" >
          <foam-dropdown-item disabled text="Disabled" />
          <foam-dropdown-divider />
          <foam-dropdown-item text="Not Disabled" />
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
    iconAlign: {
      table: {
          disable: true,
      },
    },  
    width: {
        table: {
            disable: true,
        },
    },
    subdropdown: {
        table: {
            disable: true,
        },
    },
    secondaryText: {
      table: {
        disable: true
      }
    },
    to: {
      table: {
        disable: true
      }
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
    },
  };

  export const Selected: StoryFn<typeof FoamDropdownItem> = (args, { argTypes }) => {
    const [_, updateArgs] = useArgs();
    return {
      components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
  
      setup() {
        const handleClick = () => {
          updateArgs({ selected: !args.selected });
        };
  
        return { args, argTypes, handleClick };
      },
      template: `
        <div style="display: flex; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
          <foam-dropdown-button variant="primary" >
            <foam-dropdown-item text="Selected" selected />
            <foam-dropdown-divider />
            <foam-dropdown-item v-bind="args" text="Click me" @click="handleClick" />
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
    icon: {
        table: {
            disable: true,
        },
    },  
    iconAlign: {
      table: {
          disable: true,
      },
    },  
    width: {
        table: {
            disable: true,
        },
    },
    subdropdown: {
        table: {
            disable: true,
        },
    },
    secondaryText: {
      table: {
        disable: true
      }
    },
    to: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
  };

  export const Subdropdown: StoryFn<typeof FoamDropdownButton> = (args, { argTypes }) => ({
    components: { FoamDropdownButton, FoamDropdownDivider, FoamDropdownItem },
    setup() {
      return { args, argTypes };
    },
    template: `
      <div style="display: flex; gap: 24px; align-items: center; flex-direction: column; 1em; flex-wrap: wrap">
      <p>The width prop changes the width of the subdropdown</p>
        <foam-dropdown-button variant="primary" text="Subdropdown" >
          <foam-dropdown-item v-bind="args" text="List of links" subdropdown >
              <foam-dropdown-item type="link" text="link 1" />
              <foam-dropdown-item type="link" text="link 2" />
              <foam-dropdown-item type="link" text="link 3" />
          </foam-dropdown-item>
        </foam-dropdown-button>
      </div>
    `,
  }); 

  Subdropdown.argTypes = {
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
    iconAlign: {
      table: {
          disable: true,
      },
    },  
    subdropdown: {
        table: {
            disable: true,
        },
    },
    secondaryText: {
      table: {
        disable: true
      }
    },
    to: {
      table: {
        disable: true
      }
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
    },
  };