<template>
    <div class="message">
        <Header :title="title"></Header>
        <!-- <el-autocomplete
            class="inline-input"
            prefix-icon="el-icon-search"
            v-model="inputValue"
            :fetch-suggestions="getSearchList"
            placeholder="请输入内容"
            @select="handleSelect"
            
        >
            <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick">
            </i>
            <template slot-scope="{ item }">
                <div class="title">{{ item.title }}</div>
                <span class="author">{{ item.author }}</span>
            </template>
        </el-autocomplete>   

        <template>
            <Tabs :active-key="1" @on-click="handleClick">
                <Tab-pane :label="item.name"  v-for="(item,index) in topList" :key="item.type" :ref="index" :type="item.type">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="ele in mList" :key="ele.album_id">
                            <router-link :to="{path:'/MusicDetails',query:{album_id: ele.album_id}}">
                                <!<img class="mui-media-object mui-pull-left" v-if="dImg" src="../assets/default.png"> -->
                                <!-- <img class="mui-media-object mui-pull-left" :src="ele.pic_small">
                                <!<img class="mui-media-object mui-pull-left" v-else src="../assets/default.png"> -->
                                <!-- <div class="mui-media-body">
                                    {{ele.title}}
                                    <p class="mui-ellipsis">{{ele.author}}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </Tab-pane>
            </Tabs>
        </template> -->

    </div>
</template>


<script>
import Router from 'vue-router'
import Header from '../components/Header'
// import NewTopMusic from './toplist/NewTopMusic'
// import {getMusicTop, getMusicTopDetails, getSearchMusic} from '../api/getData.js'

export default {
    data() {
        return {
            dImg: true,
            title: "音 乐",
            value: '',
            selected: 1,
            topList:[],
            mList:[],
            activeName: '新歌榜',
            type:'',
            inputValue: '',
            result:'',
            searchList: []
        }
    },
    methods: {
        // handleClick(tab, event) {
        //     getMusicTopDetails(this.$refs[tab][0].$vnode.key).then(res=> {
        //         this.mList = res.result;
        //         dImg = false
        //     })
        // },
        // getSearchList(queryString, cb) {
        //     if(queryString=='') return false;
        //     getSearchMusic(queryString).then(res=> {
        //         console.log(res.result);
        //         this.searchList = [];
        //         res.result.filter((item,index)=> {
        //             return this.searchList.push({"title":item.title, "author":item.author})
        //         })
        //         console.log(this.searchList)
        //         cb(this.searchList)
        //     })
            
        // },
        // handleSelect(item) {
        //     console.log(item)
        // },
        // handleIconClick(ev) {
        //     console.log(ev);
        // }
    },
    mounted() {
        // let _this =this
        // _this.$store.state.title = _this.title;
        // getMusicTop().then(res=> {
        //     if(res.code == 200) {
        //         _this.topList = res.result
        //     }
        // })
        // getMusicTopDetails(_this.selected).then(res=> {
        //     _this.mList = res.result
        // })
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.sh {
    padding: 8px
}
.el-tabs__header {
    height: 50px;
}
.mint-search {
    height: 45px;
}
.mui-media-body {
    font-size: 12px;
}
.ivu-input-icon {
    line-height: 40px;
}
.el-autocomplete {
    width: 100%;
    padding: 5px;
}
.el-autocomplete-suggestion {
    left: 1px!important;
}
.el-popper {
    left: 0px!important;
}
.title {
    font-size: 14px;
    font-weight: 700;
}
.author {
    font-size: 12px;
}
/* .mint-navbar {
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
} */
</style>
