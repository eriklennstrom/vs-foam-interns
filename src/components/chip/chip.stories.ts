import FoamChip from '@/components/chip/chip.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import chipDocs from '@/components/chip/chip.md?raw';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Components/Chip',
  component: FoamChip,
  parameters: {
    docs: {
      description: {
        component: chipDocs,
      },
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filter', 'input'],
      description: 'Property to add chosen variant',
    },
    icon: {
      control: { type: 'select' },
      options: ['warning','xmark', 'check', 'arrow-down', 'circle-down', null],
      description: 'Property to add chosen icon',
    },
    text: {
      control: {type: 'text'},
      description: 'Property for text content inside the chip',
    },
    outline: {
      control: { type: 'boolean' },
      options: [true, false],
      description: 'Property to add outline to the "Input" variant',
    },
    removable: {
      control: { type: 'boolean' },
      options: [true, false],
      description: 'Property to make an "Input" chip variant removable',
    },
    selected: {
      control: { type: 'select' },
      options: [false, true, null],
      description: 'Property to show a chip as selected',
    },
    disabled: {
      control: { type: 'boolean' },
      options: [false, true],
      description: 'Property to disable a chip',
    },
    click: {
      table: {
        disable: true
      }
    }

  },
} as Meta<typeof FoamChip>;

const Template: StoryFn<typeof FoamChip> = (args) => ({
  components: { FoamChip },
  setup() {      
    return { args };
    },
    template: '<foam-chip v-bind="args" />'
  });
    
  export const Default = Template.bind({});
  Default.args = {
    variant: 'input',
    disabled: false,
    selected: null,
    removable: false,
    outline: false,
    text: 'Default Chip'
  }
  
  export const SelectableChip: StoryFn<typeof FoamChip> = (args) => {
    const [_, updateArgs] = useArgs();
  
    return {
      components: { FoamChip },
      setup() {
        const handleClick = () => {
          updateArgs({ selected: !args.selected });
        };
  
        return { args, handleClick };
      },
      template: `
      <div style="display: flex; gap: 1em">
        <foam-chip text="Click to select" v-bind="args" @click="handleClick"/>
      </div>
      `
    };
  };
  
  SelectableChip.args = {
    selected: false,
    disabled: false,
    outline: false,
  };

  SelectableChip.argTypes = {
    removable : {
      table:{
        disable: true
      }
    }
  }

  export const RemovableChip: StoryFn<typeof FoamChip> = (args) => {
    const [_, updateArgs] = useArgs();
    
    return {
      components: { FoamChip },
      setup() {
        const handleClick = () => {
          updateArgs({ removable: !args.removable });
          if(args.removable) {
            updateArgs({ text: 'Removed, click to restore', outline : true });
          } else {
            updateArgs({ text: 'Click to remove', outline: false });
          }
        };
  
        return { args, handleClick };
      },
      template: `
      <div style="display: flex; gap: 1em">
        <foam-chip class="remove-chip" text="Click to remove" v-bind="args" @click="handleClick"/>
      </div>
      `
    };
  };
  RemovableChip.args = {
    removable: true,
    disabled: false
  }
  RemovableChip.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  removable: {
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

export const Input: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
) => ({
  components: { FoamChip },
  setup() {
    const docu = document.querySelector('body')
    let darkMode = false
    if(docu?.classList.contains('dark')) {
      darkMode = false
    } else {
      darkMode = true
    }
    return { args, argTypes, darkMode };
  },
  template: `
  <div style="display: flex; gap: 1em; flex-direction: column; flex-wrap: wrap">
    <p>Hover and press to see colors</p>
    <div style="display: flex; gap: 1em; flex-wrap: wrap">
      <foam-chip v-bind="args" text="Input Chip" variant="input" removable />

      <foam-chip v-bind="args" text="Input Selected" variant="input" selected />
    </div>
    <div style="display: flex; gap: 1em; flex-wrap: wrap">
      <foam-chip v-bind="args" text="Outline Input" variant="input" outline removable />

      <foam-chip v-bind="args" text="Outline Selected" variant="input" outline selected />
    </div>
  </div>
  `,
});

export const Filter: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
) => ({
  components: { FoamChip },
  setup() {
    return { args, argTypes };
  },
  template: '<foam-chip v-bind="args" variant="filter" />',
});