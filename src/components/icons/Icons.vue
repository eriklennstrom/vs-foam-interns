<script setup lang="ts">
import { ref, type Ref } from 'vue';

const props = defineProps({
    iconType: {type: String, required: true },
    color: { type: String },
    chosenSize: { type: String}
})

let size: Ref = ref<string>('100%')
const iconRef = ref()

props.chosenSize ? size.value = props.chosenSize : null



</script>

<template>
    <i ref="iconRef" class="bi" :class="{[props.iconType]: true}" :style="{ color: props.color ? props.color : '#000', fontSize: size}"></i>
</template>
