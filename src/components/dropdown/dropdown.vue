<script setup lang="ts">
import { computed, defineAsyncComponent, ref, type Ref} from 'vue';
import { defaultTypeMixin, dropdownRoles} from '@/helpers/mixins/jsMixins';

type DropdownProps = {
    role?: string
    variant?: string
    text?: string
    icon?: string | null
    width?: number | null
    align?: string
    disabled?: boolean
    position?: string
    placeholder?: string
};

const props = withDefaults(defineProps<DropdownProps>(), {
    variant: 'secondary',
    text: 'Foam Dropdown',
    icon: null,
    width: null,
    align: 'end',
    disabled: false,
    role: 'button',
    position: '',
    placeholder: ''
});

const dropdownRole: Ref = ref<string>(props.role)

defaultTypeMixin(dropdownRoles).verifyType(props.role)
  ? ''
  : (dropdownRole.value = 'button');

// dynamic component import
const DropdownButton = computed(() => {
  if (dropdownRole.value == 'button') {
    const Icon = defineAsyncComponent(
      () => import('@/components/dropdown/dropdown-button/dropdown-button.vue')
    );
    return Icon;
  } 
  return null;
});

const DropdownInput = computed(() => {
  if (dropdownRole.value == 'input') {
    const Icon = defineAsyncComponent(
      () => import('@/components/dropdown/dropdown-input/dropdown-input.vue')
    );
    return Icon;
  } 
  return null;
});

</script>

<template>
  <section>
    <DropdownButton
      v-if="dropdownRole == 'button'"
      :variant="props.variant"
      :text="props.text"
      :icon="props.icon"
      :width="props.width"
      :align="props.align"
      :disabled="props.disabled"
    >
      <slot />
    </DropdownButton>
    <DropdownInput
      v-else
      :text="props.text"
      :position="props.position"
      :placeholder="props.placeholder"
    >
      <slot />
    </DropdownInput>
  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>