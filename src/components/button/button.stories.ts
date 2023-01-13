import FoamButton from '@/components/button/button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/button/button.md?raw';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Components/Button',
  component: FoamButton,
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
    activeDropdown: {
      control: { type: 'boolean' },
      options: [true, false],

      table: {
        disable: true,
      },
    },
    dropdown: {
      control: { type: 'boolean' },
      options: [true, false],
      description: 'Property for dropdown boolean',
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
    text: {
      control: { type: 'text' },
      description: 'Property for text content inside the button',
    },
  },
} as Meta<typeof FoamButton>;

const Template: StoryFn<typeof FoamButton> = (args) => {
  const [_, updateArgs] = useArgs();
  return {
    components: { FoamButton },

    setup() {
      const handleClick = () => {
        updateArgs({ activeDropdown: !args.activeDropdown });
      };

      return { args, handleClick };
    },
    template: '<foam-button  v-bind="args" @click="handleClick" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};

export const Variants: StoryFn<typeof FoamButton> = (args, { argTypes }) => ({
  components: { FoamButton },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; gap: 1em; flex-wrap: wrap">
    <foam-button v-bind="args" v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" />
  </div>
`,
});

Variants.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  activeDropdown: {
    table: {
      disable: true,
    },
  },
  dropdown: {
    table: {
      disable: true,
    },
  },
  text: {
    description: 'Property for text content inside the button',
  },
};

export const Dropdown: StoryFn<typeof FoamButton> = (args, { argTypes }) => {
  const [_, updateArgs] = useArgs();
  return {
    components: { FoamButton },
    setup() {
      const handleClick = () => {
        updateArgs({ activeDropdown: !args.activeDropdown });
      };

      return { args, argTypes, handleClick };
    },
    template: `
    <div style="display: flex; gap: 1em">
      <foam-button v-bind="args" @click="handleClick" dropdown/>
    </div>
  `,
  };
};

export const Icons: StoryFn<typeof FoamButton> = (args) => {
  const [_, updateArgs] = useArgs();
  return {
    components: { FoamButton },
    setup() {
      const handleClick = () => {
        updateArgs({ activeDropdown: !args.activeDropdown });
      };

      return { args, handleClick };
    },
    template: `
    <div style="display: flex; gap: 1em">
      <foam-button variant="primary" v-bind="args" icon='circle-down' @click="handleClick" />
    </div>
  `,
  };
};

Icons.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      defaultValue: 'circle-down',
    },
  },

  text: {
    description: 'Property for text content inside the button',
  },
};

Dropdown.args = {
  variant: 'primary',
  dropdown: {
    table: {
      defaultValue: 'true',
    },
  },
};

Dropdown.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  activeDropdown: {
    table: {
      disable: true,
    },
  },

  text: {
    description: 'Property for text content inside the button',
  },
};

export const Disabled: StoryFn<typeof FoamButton> = (args, { argTypes }) => ({
  components: { FoamButton },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; gap: 1em; flex-wrap: wrap">
    <foam-button disabled v-bind="args" v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" />
  </div>
`,
});

Disabled.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  activeDropdown: {
    table: {
      disable: true,
    },
  },
  dropdown: {
    table: {
      disable: true,
    },
  },
  text: {
    description: 'Property for text content inside the button',
  },
};
