<script setup lang="ts">
import { onBeforeMount, ref, type Ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { iconMixin } from "../mixins/jsMixins";

type IconProps = {
    variant: string;
    color?: string;
    size?: number;
};
const props = withDefaults(defineProps<IconProps>(), {
  variant: "secondary",
  color:  "primary",
});


let size: Ref = ref<string>("100%");
let iconColor: Ref = ref<string>(props.color);
let iconName: Ref = ref<string>(props.variant);
props.size ? (size.value = props.size + "px") : null;

onBeforeMount(() => {
  iconMixin.verifyColor(props.color)
    ? null
    : (console.error('Incorrect color value. Value set to default "primary"'),
      (iconColor.value = "primary"));
  iconMixin.verifyVariant(iconName.value)
    ? (iconName.value = "fa-" + iconName.value)
    : (console.error(
        'Icon value is incorrect or not included. Value set to default "warning"'
      ),
      (iconName.value = "fa-warning"));
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
  @import "./icons.scss";
</style>
