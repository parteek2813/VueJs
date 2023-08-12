<template lang="">
    <h1>Parent Component</h1>
    <c1 class="hello"/>
</template>
<script>
import c1 from './c1.vue';
export default {
    name: "Parent",
    components: {
        c1,
    },
    
}
</script>
<style scoped>
    
</style>