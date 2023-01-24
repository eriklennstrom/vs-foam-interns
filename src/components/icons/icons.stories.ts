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
    variant: {
      control: { type: 'select' },
      options: ['success', 'danger', 'secondary', 'primary']
    },
    size: {
      control: { type: 'select' },
      options: [10, 12, 14, 16, 18, null],
      table: {
        defaultValue: null
      }
    },
    icon: {
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
Default.args = { icon: 'warning' };

export const Variants: StoryFn<typeof FoamIcon> = (args, { argTypes }) => ({
  components: { FoamIcon },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div style="display: flex; gap: 1em">
      <foam-icon v-for="icon in argTypes.icon.options" :size="18" v-bind="args" :icon="icon" />
    </div>`
});

Variants.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },
  variant: {
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
      <foam-icon v-for="size in argTypes.size.options" :size="size"   />
    </div>`
});

Size.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },

  variant: {
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
      <foam-icon v-for="variant in argTypes.variant.options" icon="warning" :variant="variant" />
    </div>`
});

Color.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },
  variant: {
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