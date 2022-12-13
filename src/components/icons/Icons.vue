<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

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
</template>
