<template>
    <div class="menu">
        <Header :title="title"></Header>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Menu">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">首页</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Message">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-custom"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">音乐</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Chart">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                        <div class="mui-media-body">分类</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">周边</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">电话</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Settings">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">设置</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">关于</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">更多</div></router-link></li>
            </ul> 
		</div>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    data() {
        return { 
            title: "首 页"
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
.mint-swipe {
    height: 200px;
}
.mint-swipe-item:first-of-type {
    background-color: lightblue;
}
.mint-swipe-item:nth-child(2) {
    background-color: hotpink;
}
.mint-swipe-item:last-of-type {
    background-color: deeppink;
}
</style>
