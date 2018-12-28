<template>
    <div class="header">
        <mt-header fixed :title=title>
            <mt-button v-if="title=='首 页'" slot="left"><img src="../assets/scanner.png" style="width:18px;height:18px;margin-top:3px;margin-left:20px"></mt-button>
        </mt-header>
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
