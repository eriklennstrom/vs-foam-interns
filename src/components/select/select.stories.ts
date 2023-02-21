import FoamSelect from '@/components/select/select.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import readme from '@/components/select/select.md?raw';

export default {
    title: 'Components/Select',
    component: FoamSelect,
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    }, 
    argTypes: {
        label: {
            control: { type: 'text' },
            description: 'Property for text content rendered as the label',
          },
        position: {
            control: { type: 'select' },
            options: ['top', 'inside'],
            description: 'Property for the label position',
        },
        options: {
          control: { type: 'array' },
          description: 'Array property for the options',
        },
        defaultoption: {
          control: { type: 'text' },   
          description: 'String property for the first default choice in the options list',
        },
        sort: {
          control: { type: 'boolean' },
          description: 'Property to sort the options list alphabetically',
        },
        change: {
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
  } as Meta<typeof FoamSelect>;
  
  const Template: StoryFn<typeof FoamSelect> = (args) => ({
    setup() {      
        return { args };
    },
    components: { FoamSelect },

    template: `
    <div style="display: flex; justify-content: center; gap: 24px;" >
        <foam-select v-bind="args" />
    </div>
    `
  });

  export const Default = Template.bind({});

  Default.args = {
    options: [
      {
          id: 1,
          text: 'C Option 3',
          value: 'option-3'
      },
      {
          id: 2,
          text: 'D Option 4',
          value: 'option-4'
      },
      {
          id: 3,
          text: ' A Option 1',
          value: 'option-1'
      },
      {
          id: 4,
          text: 'B Option 2',
          value: 'option-2'
      }
    ]
  }

  export const Position: StoryFn<typeof FoamSelect> = (args, { argTypes }) => ({
    components: { FoamSelect },
    setup() {
      return { args, argTypes };
    },
    template: `
      <div style="display: flex; justify-content: center; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
            <foam-select label="Top Label" position="top" v-bind="args" sort />
            <foam-select label="Inside Label" v-bind="args" sort />
      </div>
    `,
  }); 

  Position.args = {
    options: [
      {
          id: 1,
          text: 'C Option 3',
          value: 'option-3'
      },
      {
          id: 2,
          text: 'D Option 4',
          value: 'option-4'
      },
      {
          id: 3,
          text: ' A Option 1',
          value: 'option-1'
      },
      {
          id: 4,
          text: 'B Option 2',
          value: 'option-2'
      }
    ]
  }

  Position.argTypes = {
    label: {
        table: {
            disable: true,
        },
    },
    position: {
        table: {
            disable: true,
        },
    },
    options: {
        table: {
            disable: true,
        },
    },
    defaultoption: {
        table: {
            disable: true,
        },
    },
    sort: {
        table: {
            disable: true,
        },
    },
  };

  export const Sort: StoryFn<typeof FoamSelect> = (args, { argTypes }) => ({
    components: { FoamSelect },
    setup() {
      return { args, argTypes };
    },
    template: `
      <div style="display: flex; justify-content: center; gap: 24px; flex-direction: row; 1em; flex-wrap: wrap">
        <foam-select label="Not Sorted" v-bind="args"  />
        <foam-select label="Sorted" v-bind="args" sort  />
      </div>
    `,
  }); 

  Sort.args = {
    options: [
      {
          id: 1,
          text: 'C Option 3',
          value: 'option-3'
      },
      {
          id: 2,
          text: 'D Option 4',
          value: 'option-4'
      },
      {
          id: 3,
          text: ' A Option 1',
          value: 'option-1'
      },
      {
          id: 4,
          text: 'B Option 2',
          value: 'option-2'
      }
    ]
  }

  Sort.argTypes = {
    label: {
        table: {
            disable: true,
        },
    },
    position: {
        table: {
            disable: true,
        },
    },
    sort: {
        table: {
            disable: true,
        },
    },
  };