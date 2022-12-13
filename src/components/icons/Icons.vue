<script setup lang="ts">
import { onBeforeMount, onMounted, ref, type Ref } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret, faCoffee } from '@fortawesome/free-solid-svg-icons'

onBeforeMount(async ()=> {

    let { faCoffee } = await import('@fortawesome/free-solid-svg-icons');
    library.add(faCoffee)

})




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
    <font-awesome-icon :icon="props.iconType" :style="{ color: props.color ? props.color : '#000', height: size ,width: '20px'}" />
    <!-- <i ref="iconRef" class="bi" :class="{[props.iconType]: true}" :style="{ color: props.color ? props.color : '#000', fontSize: size}"></i> -->
</template>
