import FoamInput from '@/components/input/input.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/input/input.md?raw';

export default {
  title: 'Components/input',
  component: FoamInput,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Property for Label',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder property for text content inside the input',
      defaultValue:'placeholder'
    },
    helpertext: {
      control: { type: 'text' },
      description: 'Property to add text to identify with isValid',
      defaultValue: 'helpertext'
    },

    variant: {
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'password'],
      description: 'Property to add chosen variant',
    },
    isValid: {
      control: { type: 'select' },
      options: [true, false, null],
      description: 'Property to add if value is valid',
    },
    accordian: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    sentContent:{
      table:{
        disable:true
      }
    },

    activeDropdown: {
      control: { type: 'boolean' },
      options: [true, false],

      table: {
        disable: true,
      },


    },
    validationText: {
      control: { type: 'text' },
      description: 'Property for describing validation',
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


  },
} as Meta<typeof FoamInput>;

const Template: StoryFn<typeof FoamInput> = () => {
  return {
    components: { FoamInput },
    template: '<foam-input  v-bind="args" placeholder="placeholder"/>',
  };
};

export const Default = Template.bind({});
Default.args = {
  variant: 'text',
  placeholder: 'placeholder'
};

export const Variants: StoryFn<typeof FoamInput> = (args, { argTypes }) => ({
  components: { FoamInput },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; flex-direction:column; flex-wrap: wrap;">
    <foam-input v-bind="args" v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" placeholder ="placeholder" />
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
  placeholder: {
    table: {
      disable: true,
    },
  },
  text: {
    description: 'Property for text content inside the input',
  },
};

export const Validation: StoryFn<typeof FoamInput> = (args, { argTypes }) => {
  return {
    components: { FoamInput },
    setup() {
      return { args, argTypes};
    },
    template: `
    <div style="display: flex; flex-direction: column;">
    <foam-input variant="text" helpertext="helpertext" validationText="validationText" :isValid=false v-bind="args"  />
    <foam-input variant="text" 
    helpertext="helpertext"  validationText="validationText"  :isValid=true v-bind="args"  />
    </div>
  `,
  };
};

export const Accordian: StoryFn<typeof FoamInput> = () => {
  return {
    components: { FoamInput },
    template: `
    <div style="display: flex; flex-direction: column;">
      <foam-input variant="text" v-bind="args" accordian placeholder="placeholder"  >
      <template #sentContent>
      Slot content
    </template>
      </foam-input >
    </div>
  `,
  };
};

Accordian.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },

  text: {
    description: 'Property for text content inside the input',
  },
};



Validation.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },

  text: {
    description: 'Property for text content inside the input',
  },
};

export const Disabled: StoryFn<typeof FoamInput> = (args, { argTypes }) => ({
  components: { FoamInput },
  setup() {
    return { args, argTypes };
  },
  template: `
  <div style="display: flex; flex-direction: column; flex-wrap: wrap">
    <foam-input disabled v-bind="args" v-for="variant in argTypes.variant.options" :key="variant" :text="variant" :variant="variant" />
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
    description: 'Property for text content inside the input',
  },
};
