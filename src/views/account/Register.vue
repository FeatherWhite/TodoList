<template>
  <v-app>
    <v-main>
      <v-container py-5>
        <v-layout align-center justify-center py-3>
          <v-flex xs12 sm8 md4>
            <v-card class="px-2 pb-3">
              <v-card-text>
                <v-layout justify-center pt-2>
                  <v-avatar size="40px" color="pink">
                    <v-icon red>注</v-icon>
                    <!-- <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar"> -->
                  </v-avatar>
                </v-layout>
                <v-layout justify-center py-3>
                  <div class="headline">注册</div>
                </v-layout>

                <v-form ref="form">
                  <v-text-field
                    name="userName"
                    label="用户名"
                    type="text"
                    required
                    v-model="userRegisterInfo.userName"
                    :rules="userNameRules"
                  ></v-text-field>
                  <v-text-field
                    name="login"
                    label="邮箱地址"
                    type="text"
                    required
                    v-model="userRegisterInfo.email"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="Password"
                    label="用户密码"
                    type="password"
                    required
                    v-model="userRegisterInfo.password"
                    :rules="passwordRules"
                  ></v-text-field>
                  <v-text-field
                    id="confirmPassword"
                    name="confirmPassword"
                    label="确认密码"
                    type="password"
                    required
                    v-model="userRegisterInfo.confirmPassword"
                    :rules="confirmPasswordRules"
                  ></v-text-field>
                  <v-btn block color="info" @click="submit">注册</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {register} from '@/account/register';
import jwt from 'jsonwebtoken';
import {setLocal} from '@/common/utils';
export default {
  name: "Register",
  data() {
    return {
      userRegisterInfo: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      userNameRules: [
        (v) => !!v || "请输入用户名",
      ],
      emailRules: [
        (v) => !!v || "请输入您的邮箱",
        (v) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || "无效的邮箱";
        },
      ],

      passwordRules: [
        (v) => !!v || "请输入您的密码",
        (v) => (v || "").length > 5 || "密码最少是6位",
      ],
      confirmPasswordRules: [
        (v) => v === this.userRegisterInfo.password || "前后密码不相同",
      ],
    };
  },
  methods: {
    submit() {
      let valid = this.$refs.form.validate();
      if (valid) {
        register(this.userRegisterInfo)
        .then((res)=>{
          let jti = jwt.decode(res.data);
          let name = jti.name;
          let token = res.data;
          // this.$store.dispatch("storeUserName",name)
          localStorage.name = name
          setLocal("token",token)
          this.$router.push("home")
        })
        .catch((err)=>{console.log(err)})
      }
    },
  },
};
</script>
