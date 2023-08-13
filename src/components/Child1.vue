<template lang="">
    <div>
    <header>
        <slot name="header"></slot>
    </header>
    <content>
        <slot name="content"></slot>
    </content>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
</template>
<script>
export default {
    name: "Child1",
}
</script>
<style scoped>
    
</style>