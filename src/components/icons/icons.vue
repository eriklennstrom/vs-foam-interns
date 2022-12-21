<script setup lang="ts">
import { onBeforeMount, ref, type Ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defaultVariantMixin, defaulColorMixin, iconColors, iconVariant } from '@/helpers/mixins/jsMixins'; 

type IconProps = {
    variant?: string
    color?: string
    size?: number | null
};
const props = withDefaults(defineProps<IconProps>(), {
  variant: 'warning',
  color: 'primary',
  size: null
});


const size: Ref = ref<string>('100%');
const iconColor: Ref = ref<string>('icon--' + props.color);
const iconName: Ref = ref<string>(props.variant);
props.size ? (size.value = props.size + 'px') : size.value = '100%';

onBeforeMount(() => {
  defaulColorMixin(iconColors).verifyColor(props.color)
    ? null
    : (console.error('Incorrect style value. Value set to default "primary"'),
      (iconColor.value = 'icon--primary'));
    defaultVariantMixin(iconVariant).verifyVariant(iconName.value)
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
    :class="iconColor"
    :style="{ fontSize: size }"
  />
</template>

<style lang="scss" scoped>
  @import "@/components/icons/icons.scss";
</style>
