<template>
    <div class="login">
        <Header :title="title"></Header>
        
        <Form :model="formItem" :label-width="70" :rules="ruleValidate" ref="formItem">
            <FormItem label="账 号" prop="username">
                <i-input v-model="formItem.username" placeholder="请输入账号"></i-input>
            </FormItem>
            <FormItem label="密 码" prop="password">
                <i-input type="password" v-model="formItem.password" placeholder="请输入密码"></i-input>
            </FormItem>
            <FormItem style="{marginLeft: 50px}">
                <Button type="primary" @click="handleSubmit('formItem')">登 录</Button>
                <Button style="margin-left: 8px">注 册</Button>
            </FormItem>
        </Form>

    </div>
</template>

<script>
import Header from '../components/Header'
import {login} from '../api/getData.js'
export default {
    data() {
        return {
            title: "登  录",
            formItem: {
                username: '',
                password: ''
            },
            ruleValidate: {
                username: [
                    { required: true, message: 'The username cannot be empty', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' },
                    { message: 'Incorrect email format', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            console.log(this.formItem.password)
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.formItem)
                    login(this.formItem).then(res=> {
                        console.log(res)
                        if (res.data.err_code == 200) {
                            localStorage.setItem('token', res.data.token)
                            this.$router.push('/')
                        }else {

                        }
                    })
                } else {
                    this.$Message.error('Fail!');
                }
            })
            console.log(this.$refs[name])
            // login('00d91e8e0cca2b76f515926a36db68f5', this.$refs[username], this.$refs[password]).then(res=> {
            //     console.log(res)
            // })
        }
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
.login {
    .ivu-form {
        margin-top: 30px;
        .ivu-form-item {
            padding-right: 20px;
            .ivu-input {
                border-radius: 4px
            }
        }
        .ivu-form-item:last-of-type {
            margin-left: 50px;
        }
    }
}
</style>
