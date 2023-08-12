<template lang="">
    <div>
        <h3 v-bind="$attrs">Peter</h3>
        <h3>Bruce</h3>
        <h3>Anil</h3>
        <h3 v-bind="$attrs">{{class}}</h3> 

        <!-- To get the non props data, we should not define the 
        props argument as the string value and then on the root of it 
        the value will be passed on that element.

        To get the data in any div class we can use [v-bind="$attrs"] and
        this will give that tag the atttributes as props
        -->
       
    </div>
</template>
<script>
export default {
    name: "child",
    inheritAttrs: false
    // props: {
    //     class: String
    // }
}
</script>
<style scoped>
    .hello {
        color: red
    }
</style>