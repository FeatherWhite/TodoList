<template>
  <div></div>
</template>

<script>
import { logout } from "@/account/logout";

export default {
  created() {
    logout().then(() => {
      localStorage.name = "";
      this.$router.push("login")
    }).catch((err)=>{
      console.log(err);
    });
  },
};
</script>

<style></style>
