import FoamBadge from "./badge.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Badge",
  component: FoamBadge,
  argTypes: {},
} as Meta<typeof FoamBadge>;

const Template: StoryFn<typeof FoamBadge> = (args: any) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: '<foam-badge  v-bind="args" />',
});

export const allBadgesOutline: StoryFn<typeof FoamBadge> = () => ({
    components: { FoamBadge },
    template:
      "<foam-badge outline variant='primary' icon='warning' text='Primary' />" +
      "<foam-badge outline variant='secondary' icon='warning' text='Secondary' />" +
      "<foam-badge outline variant='success' icon='warning' text='Success' />" +
      "<foam-badge outline variant='warning' icon='warning' text='Warning' />" +
      "<foam-badge outline variant='danger' icon='warning' text='Danger' />",
  });

