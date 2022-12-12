<script setup lang="ts">import { ref, type Ref } from 'vue';

    const props = defineProps(['iconType', 'color'])
    const iconType : Ref = ref<string>(props.iconType)
    const iconColor : Ref = ref<string>(props.color)
    
</script>

<template>
    <i class="bi" :class="{[iconType]: true}" style="font-size: 2rem;" :style="{ color: props.color}"></i>
</template>

<style>
.icon {
    font-size: 2em;
    width: 5em;
    height: 5em;

}
</style>