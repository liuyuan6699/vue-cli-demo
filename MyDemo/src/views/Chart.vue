<template>
    <div class="chart">
        <Header :title="title"></Header>
        <h1>chart</h1>
    </div>
</template>


<script>
import Header from '../components/Header'
export default {
    data() {
        return {
            title: "分 类"
        }
    },
    methods: {
        
    },
    mounted() {
        this.$store.state.title = this.title
    },
    components: {
        Header
    }
}
</script>

<style scoped>

</style>
