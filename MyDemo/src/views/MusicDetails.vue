<template>
    <div class="music-details">
        <Header :title="title"></Header>
    </div>
</template>


<script>
import Header from '../components/Header'
// import {getMusicDetails} from '../api/getData.js'
export default {
    data() {
        return {
            title: "歌曲详情",
            album_id: ''
        }
    },
    components: {
        Header
    },
    created() {
        // let _this = this
        // _this.album_id = _this.$route.query.album_id;
        // getMusicDetails(_this.album_id).then(res=> {
        //     console.log(res)
        // })
    }
}
</script>

<style scoped>

</style>
