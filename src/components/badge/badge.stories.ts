import FoamBadge from "./badge.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Badge",
  component: FoamBadge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "warning", "success"],
    },
    icon: {
      control: { type: "select" },
      options: ["warning", "arrow-down", "circle-down", null],
    },
    outline: {
      control: { type: "select" },
      options: [true, false],
    },
  },
} as Meta<typeof FoamBadge>;

const Template: StoryFn<typeof FoamBadge> = (args: any) => ({
  components: { FoamBadge },
  setup() {
    return { args };
  },
  template: '<foam-badge  v-bind="args" />',
});

// export const allBadges: StoryFn<typeof FoamBadge> = () => ({
//   components: { FoamBadge },
//   template:
//     "<foam-badge  variant='primary' icon='warning' text='Primary' />" +
//     "<foam-badge  variant='secondary' icon='warning' text='Secondary' />" +
//     "<foam-badge  variant='success' icon='warning' text='Success' />" +
//     "<foam-badge  variant='warning' icon='warning' text='Warning' />" +
//     "<foam-badge  variant='danger' icon='warning' text='Danger' />",
// });



export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = { variant: "primary", icon: "warning", text: "Primary" };
export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary", icon: "warning", text: "Secondary" };
export const Success = Template.bind({});
Success.args = { variant: "success", icon: "warning", text: "Success" };
export const Danger = Template.bind({});
Danger.args = { variant: "danger", icon: "danger", text: "Danger" };
export const Warning = Template.bind({});
Warning.args = { variant: "warning", icon: "warning", text: "Warning" };
