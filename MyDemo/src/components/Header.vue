<template>
    <div class="header">
        <mt-header fixed :title=title></mt-header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            c_title:''
        }
    },
    props: ['title'],
    created() {
       
    }
}
</script>

<style scoped>
.mint-header {
    z-index: 999
}
</style>
