import FoamIcon from '@/components/icons/icons.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import iconDocs from './icon.md?raw';

export default {
  title: 'components/Icons',
  component: FoamIcon,
  parameters: {
    docs: {
      description: {
        component: iconDocs
      }
    }
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'danger', 'secondary', 'primary'],
      table: {
        defaultValue: 'primary',
      }
    },
    size: {
      control: { type: 'select' },
      options: [10, 12, 14, 16, 18, null],
      table: {
        defaultValue: null
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['user-secret', 'warning', 'arrow-down', 'circle-down'],
      table: {
        defaultValue: 'warning',
      }
    }
  }
} as Meta<typeof FoamIcon>;

const Template: StoryFn<typeof FoamIcon> = (args) => ({
  components: { FoamIcon },
  setup() {
    return { args };
  },
  template: '<foam-icon v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = { variant: 'warning'};

export const Variants: StoryFn<typeof FoamIcon> = (args, { argTypes }) => ({
  components: { FoamIcon },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-icon v-for="variant in argTypes.variant.options" :size="18" v-bind="args" :variant="variant" />
    </div>`
});

Variants.argTypes = {
  variant: {
    table: {
      disable: true
    }
  },
  color: {
    table: {
      disable: true
    }
  },
  size: {
    table: {
      disable: true
    }
  }
};

export const Size: StoryFn<typeof FoamIcon> = (args, { argTypes }) => ({
  components: { FoamIcon },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-icon v-for="size in argTypes.size.options" variant="warning" :size="size" color="primary"  />
    </div>`
});

Size.argTypes = {
  variant: {
    table: {
      disable: true
    }
  },
  color: {
    table: {
      disable: true
    }
  },
  size: {
    table: {
      disable: true
    }
  }
};

export const Color: StoryFn<typeof FoamIcon> = (args, { argTypes }) => ({
  components: { FoamIcon },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-icon v-for="color in argTypes.color.options" variant="warning" :color="color" />
    </div>`
});

Color.argTypes = {
  variant: {
    table: {
      disable: true
    }
  },
  color: {
    table: {
      disable: true
    }
  },
  size: {
    table: {
      defaultValue: 20,
      disable: true
    }
  }
};