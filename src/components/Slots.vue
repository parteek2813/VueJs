<template lang="">
    <Child1>
        <template v-slot:header>
         <h1 >Parteek</h1>
        </template>
        <template  v-slot:content>
            
            <p>A vue js slot</p>
        </template>
        <template v-slot:footer>
            <button > buy now</button>
        </template>
        
    </Child1>
</template>

<script>
import Child1 from "./Child1.vue"
export default {
    name: "Slots",
    components: {
        Child1
    }

}
</script>

<style lang="">

</style>

<!-- INterview question -->

<!-- To set the default value of the slots we can have the default
value in the slots tag in the child component. Due to this, if no value is passed
from the parent component then a default value will be acquired from the child component 
and then it will be used there in place of the slots -->