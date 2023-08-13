<template lang="">
<h1>Slots in Vue</h1>
<Child1>
    <h1>Code step by step</h1>
</Child1>
<Child1><a href="#">Code step by step</a></Child1>
<Child1><img src="https://live.staticflickr.com/4561/38054606355_26429c884f_b.jpg" alt="Not rendered" /></Child1>
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
and then it will be used there in place of the slots  -->