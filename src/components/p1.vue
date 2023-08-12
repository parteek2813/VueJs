<!-- <template lang="">
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
    props: {
        class: String
    }
}
</script>
<style scoped>
    
</style> -->

<template lang="">
    <h2>Computed property</h2>
    <h2 >{{getResult}}</h2>
    <h2 >{{getResult}}</h2>
    <h2 >{{getResult}}</h2>
    
</template>
<script>
export default {
    name: "Parent",
    data(){
        return {
            dollars: 100,
            rupeeVal: 70,
            discount: 10,
        }
    },
    computed: {
        getResult(){
           return  this.dollars*this.rupeeVal - this.discount
        }
    }
}
</script>
<style lang="">
    
</style>

<!-- Instead of a computed property, we can define the same function as a 
method. For the end result, the two approaches are indeed exactly the same. 
However, the difference is that computed properties are cached based on their 
reactive dependencies. -->