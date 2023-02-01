import FoamNumbers from '@/components/number-input/number-input.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, type Ref } from 'vue';
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
    label: {
      control: { type: 'text'},
      table: {
        default: 'Label'
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
    validationText: {
      control: { type: 'text' },
      table: {
        defaultValue: 'validation text',
      }
    },
    change: {
      table: {
        disable: true,
      }
    },
    
    'update:modelValue': {
      table: {
        disable: true,
      }
    },
  }
} as Meta<typeof FoamNumbers>;

 const Template: StoryFn<typeof FoamNumbers> = (args) => ({
  components: { FoamNumbers },
  setup() {
    const test:Ref= ref(0)
    return { args, test };

  },
  template: '<foam-numbers v-bind="args" v-model="test" />'
}); 


export const Default = Template.bind({});
Default.args = {
 };


export const Variants: StoryFn<typeof FoamNumbers> = (args, { argTypes }) => ({
  components: { FoamNumbers },
  setup() {
    const test:Ref= ref(0)
    return { args, argTypes, test };
  },
  template: `
    <div style="display: flex; gap:1em">
      <foam-numbers v-for="direction in argTypes.direction.options"  v-bind="args" :direction="direction" v-model="test" />
    </div>`
});

Variants.argTypes = {
  label: {
    label: 'Label'
  },

  direction: {
    table: {
      disable: true
    }
  }
};



export const Validation: StoryFn<typeof FoamNumbers> = (args, { argTypes }) => ({
  components: { FoamNumbers },
  setup() {
    const test:Ref= ref(0)
    return { args, argTypes, test };
  },
  template: `
    <div style="display: flex; gap: 1em; flex-wrap: wrap">
      <foam-numbers v-for="options in argTypes.isValid.options" v-bind="args" :isValid=options v-model="test" />
    </div>
    <div style="display: flex; gap: 1em; flex-wrap: wrap">
    <foam-numbers v-for="options in argTypes.isValid.options" v-bind="args" :isValid=options  direction="vertical" v-model="test" />
  </div>`
});

Validation.argTypes = {

  label: {
    label: 'Label'
  },
  validationText: {
    validationText: 'validationText'
  },
  variant: {
    table: {
      disable: true
    }
  },
};

export const Helper: StoryFn<typeof FoamNumbers> = (args, { argTypes }) => ({
  components: { FoamNumbers },
  setup() {
    const test:Ref= ref(0)
    return { args, argTypes, test };
  },
  template: `
      <foam-numbers v-bind="args" helpertext="Helpertext" v-model="test" />`
});

Helper.argTypes = {

  label: {
    label: 'Label'
  },
  validationText: {
    validationText: 'validationText'
  },
  variant: {
    table: {
      disable: true
    }
  },
};

export const Disabled: StoryFn<typeof FoamNumbers> = (args, { argTypes }) => ({
  components: { FoamNumbers },
  setup() {
    const test:Ref= ref(0)
    return { args, argTypes, test };
  },
  template: `
      <foam-numbers v-bind="args" disabled v-model="test" />`
});

Disabled.argTypes = {

  label: {
    label: 'Label'
  },
  validationText: {
    validationText: 'validationText'
  },
  variant: {
    table: {
      disable: true
    }
  },
};






Variants.args = {
  label: 'Label'
 };

 Validation.args = {
  label: 'Label'
 };
