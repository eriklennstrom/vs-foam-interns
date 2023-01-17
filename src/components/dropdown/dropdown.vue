<script setup lang="ts">
import { ref, type Ref } from 'vue';
import FoamButton from '@/components/button/button.vue';

type DropdownProps = {
    variant?: string
    text?: string
    icon?: string | null
};

const props = withDefaults(defineProps<DropdownProps>(), {
    variant: 'secondary',
    text: 'Foam Dropdown',
    icon: null
});

const foamDropdown: Ref = ref();
const showDropdown: Ref = ref<boolean>(false)

// Is this needed?
const role: Ref = ref<string>('button')

const displayDropdown: () => void = () => {
showDropdown.value = !showDropdown.value
}

</script>

<template>
  <section
    ref="foamDropdown"
    :role="role"
    :action="props.variant"
  >
    <FoamButton
      dropdown
      :text="props.text"
      :variant="props.variant"
      :active-dropdown="showDropdown"
      :icon="props.icon"
      @click="displayDropdown"
    />
  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>