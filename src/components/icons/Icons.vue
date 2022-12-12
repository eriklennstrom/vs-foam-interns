<script setup lang="ts">
    const props = defineProps(['iconType', 'color'])
</script>

<template>
    <i class="bi" :class="{[props.iconType]: true}" :style="{ color: props.color}"></i>
</template>

<style>

</style>