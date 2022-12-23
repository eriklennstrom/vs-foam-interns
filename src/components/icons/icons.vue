<script setup lang="ts">
import { onBeforeMount, ref, type Ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defaultNameMixin, defaultVariantMixin, validIconNames, iconVariants } from '@/helpers/mixins/jsMixins'; 

type IconProps = {
    icon?: string
    variant?: string
    size?: number | null
};
const props = withDefaults(defineProps<IconProps>(), {
  icon: 'warning',
  variant: 'primary',
  size: null
});


const size: Ref = ref<string>('100%');
const iconVariant: Ref = ref<string>('icon--' + props.variant);
const iconName: Ref = ref<string>(props.icon);
props.size ? (size.value = props.size + 'px') : size.value = '100%';

onBeforeMount(() => {
  defaultVariantMixin(iconVariants).verifyVariant(props.variant)
    ? null
    : (console.error('Incorrect style value. Value set to default "primary"'),
      (iconVariant.value = 'icon--primary'));
    defaultNameMixin(validIconNames).verifyName(iconName.value)
    ? (iconName.value = 'fa-' + iconName.value)
    : (console.error(
        'Icon value is incorrect or not included. Value set to default "warning"'
      ),
      (iconName.value = 'fa-warning'));
});
</script>

<template>
  <font-awesome-icon
    :icon="iconName"
    :class="iconVariant"
    :style="{ fontSize: size }"
  />
</template>

<style lang="scss" scoped>
  @import "@/components/icons/icons.scss";
</style>
