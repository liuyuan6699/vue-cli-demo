<template>
    <div class="settings">
        <Header :title="title"></Header>
        <div class="mui-scroll-wrapper" data-scroll="2">
            <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell mui-media">
                        <a class="mui-navigate-right" href="#account">
                            <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../assets/logo.png">
                            <div class="mui-media-body">
                                Hello MUI
                                <p class="mui-ellipsis">账号:hellomui</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <a href="#account" class="mui-navigate-right">账号与安全</a>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <a href="#notifications" class="mui-navigate-right">新消息通知</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#privacy" class="mui-navigate-right">隐私</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#general" class="mui-navigate-right">通用</a>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V2.7.0</i></a>
                    </li>
                </ul>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" style="text-align: center;">
                        <a>退出登录</a>
                    </li>
                </ul>
            </div>
        <div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: none; height: 518px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>
        
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    data() {
        return {
            title: "设 置"
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

<style lang="scss" scoped>
.settings {
    .mui-scroll-wrapper {
        padding: 40px 0 50px;
        .mui-scroll {
            padding: 0 3px;
            ul {
                margin-top: 25px;
            }
        }
    }
}
</style>
