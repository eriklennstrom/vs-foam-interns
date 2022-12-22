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