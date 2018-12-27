<template>
    <div class="new_music">
        <!-- <mt-navbar v-model="selected" ref="list">
            <mt-tab-item 
            :id="item.type" 
            v-for="item in topList" 
            :key="item.type">
                {{item.name}}
            </mt-tab-item>
        </mt-navbar> -->
    </div>
</template>

<script>
// import {getMusicTop, getMusicTopDetails} from '../../api/getData.js'
export default {
    data() {
        return {
            // topList:[],
            // mList:[],
            // defultType: 1,
            // selected: true
        }
    },
    mounted() {
        let _this = this;
        // getMusicTop().then(res=> {
        //     console.log(res)
        //     if(res.code == 200) {
        //         _this.topList = res.result
        //         console.log(_this.topList)
        //         // getMusicTopDetails(_this.topList[0].type).then(res=> {
        //         //     console.log(res)
        //         //     _this.mList = res.result
        //         // })
        //     }
        // })
    }
}
</script>

<style scoped>
.mint-navbar {
    width: 100%;
    overflow-y: scroll;
}
.mint-navbar::-webkit-scrollbar {
    display: none;
}
.mint-navbar::-moz-scrollbar {
    display: none;
}
.mint-navbar::-o-scrollbar {
    display: none;
}
.mint-navbar::-ms-scrollbar {
    display: none;
}
.mint-navbar .mint-tab-item {
    padding: 17px 20px;
    flex: none;
}
</style>
