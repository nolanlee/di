<template>
  <div class="hello">
    <p>您的昵称叫: {{ nickname }}</p>
    <form v-on:submit="enterChatroom">
      <input name="nickname" type="text" placeholder="请输入昵称" v-on:input="writeNickname">
      <button type="submit">进入聊天室</button>
    </form>
    <p>{{ alertMessage }}</p>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'welcome',
  data() {
    return {
      nickname: localStorage.getItem('nickname') || '',
      alertMessage: '',
    };
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem('nickname')) router.push('chatroom');
    next();
  },
  methods: {
    writeNickname(e) {
      this.nickname = e.target.value;
    },
    enterChatroom(e) {
      e.preventDefault();
      if (!this.nickname.trim()) {
        this.alertMessage = '请输入昵称';
      } else {
        localStorage.setItem('nickname', this.nickname);
        router.push('chatroom');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
