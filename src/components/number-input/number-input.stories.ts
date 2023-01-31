import FoamNumbers from '@/components/number-input/number-input.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import numberInputDocs from './number-input.md?raw';

export default {
  title: 'components/NumberInput',
  component: FoamNumbers,
  parameters: {
    docs: {
      description: {
        component: numberInputDocs
      }
    }
  },
  argTypes: {
    text: {
      control: { type: 'text'},
      table: {
        defaultValue: 'Label'
      }
    },
    isValid: {
      control: { type: 'select' },
      options: [true, false, null],
      table: {
        defaultValue: null
      }
    },
    
    direction: {
      control: { type: 'select' },
      options: ['horizontal','vertical'],
      table: {
        defaultValue: 'horizontal',
      }
    },

    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: false,
      }
    },
    placeholder: {
      control: { type: 'number' },
      table: {
        disable:true,
        defaultValue: 0,
      }
    },
    helpertext: {
      control: { type: 'text' },
      table: {
        defaultValue: '',
      }
    },
    maxLength: {
      control: { type: 'number' },
      table: {
        defaultValue: '',
      }
    },
    defaultvalue: {
      control: { type: 'number' },
      table: {
        disable:true,
        defaultValue: 0,
      }
    },
    increment: {
      control: { type: 'number' },
      table: {
        defaultValue: 1,
      }
    },
    maxValue: {
      control: { type: 'number' },
      table: {
        defaultValue: 999999,
      }
    },

    
  }
} as Meta<typeof FoamNumbers>;

const Template: StoryFn<typeof FoamNumbers> = (args) => ({
  components: { FoamNumbers },
  setup() {
    return { args };
  },
  template: '<foam-numbers v-bind="args"  />'
});

export const Default = Template.bind({});
Default.args = {
  
 };

export const Variants: StoryFn<typeof FoamNumbers> = (args, { argTypes }) => ({
  components: { FoamNumbers },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap:1em">
      <foam-numbers v-for="direction in argTypes.direction.options" v-bind="args" :direction="direction" />
    </div>`
});

Variants.argTypes = {
  text: {
    table: {
      disable: true
    }
  },

  direction: {
    table: {
      disable: true
    }
  }
};

export const ErrorHandle: StoryFn<typeof FoamNumbers> = (args, { argTypes }) => ({
  components: { FoamNumbers },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em; flex-wrap: wrap">
      <foam-numbers v-for="options in argTypes.isValid.options" v-bind="args" :isValid=options validationText ="validationText"  />
    </div>
    <div style="display: flex; gap: 1em; flex-wrap: wrap">
    <foam-numbers v-for="options in argTypes.isValid.options" v-bind="args" :isValid=options validationText ="validationText" direction="vertical" />
  </div>`
});

ErrorHandle.argTypes = {
  variant: {
    table: {
      disable: true
    }
  },
};

