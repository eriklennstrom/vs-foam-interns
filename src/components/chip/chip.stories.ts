import FoamChip from '@/components/chip/chip.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import chipDocs from '@/components/chip/chip.md?raw';

export default {
  title: 'Components/Chip',
  component: FoamChip,
  parameters: {
    docs: {
      description: {
        component: chipDocs,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['select', 'remove', 'static'],
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
  },
} as Meta<typeof FoamChip>;

const Template: StoryFn<typeof FoamChip> = (args) => ({
    components: { FoamChip },
    setup() {
      return { args };
    },
    template: '<foam-chip v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'secondary'
}

export const Static: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
) => ({
  components: { FoamChip },
  setup() {
    return { args, argTypes };
  },
  template: '<foam-chip v-bind="args" variant="static" />',
});

Static.argTypes = {
  variant: {
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

export const StaticIcon: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
  ) => ({
    components: { FoamChip },
    setup() {
      return { args, argTypes };
    },
    template: '<foam-chip v-bind="args" variant="static" icon="warning" />',
  });
  
  StaticIcon.storyName = 'Static with icon';
  StaticIcon.argTypes = {
  variant: {
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

export const Selectable: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
) => ({
  components: { FoamChip },
  setup() {
    return { args, argTypes };
  },
  template: '<foam-chip v-bind="args" variant="select" />',
});

Selectable.argTypes = {
  variant: {
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

export const SelectableIcon: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
  ) => ({
    components: { FoamChip },
    setup() {
      return { args, argTypes };
    },
    template: '<foam-chip v-bind="args" variant="select" icon="warning" />',
  });
  
SelectableIcon.storyName = 'Select with icon';
SelectableIcon.argTypes = {
  variant: {
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

export const Removable: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
) => ({
  components: { FoamChip },
  setup() {
    return { args, argTypes };
  },
  template: '<foam-chip v-bind="args" variant="remove" />',
});

Removable.argTypes = {
  variant: {
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

export const RemovableIcon: StoryFn<typeof FoamChip> = (
  args,
  { argTypes }
  ) => ({
    components: { FoamChip },
    setup() {
      return { args, argTypes };
    },
    template: '<foam-chip v-bind="args" variant="remove" icon="warning" />',
  });
  
  RemovableIcon.storyName = 'Remove with icon';
  RemovableIcon.argTypes = {
  variant: {
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