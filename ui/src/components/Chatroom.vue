<template>
  <div id="chatroom-container">
    <ul>
      <li v-for="(message, index) in messages" v-bind:key="index">
        {{ message }}
      </li>
    </ul>
    <form v-on:submit="send">
      <input class="message-input" v-model="message" autocomplete="off">
      <button class="message-submit" type="submit">发送</button>
    </form>
  </div>
</template>

<script>
import socket from '../services/ws';

export default {
  data() {
    return {
      message: '',
      messages: [],
    };
  },
  created() {
    socket.on('chat message', (message) => {
      this.messages.push(message);
    });
  },
  methods: {
    send(e) {
      e.preventDefault();
      socket.emit('chat message', this.message);
      this.message = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
.message-input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
.message-submit { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
#chatroom-container { list-style-type: none; margin: 0; padding: 0; }
#chatroom-container li { padding: 5px 10px; }
#chatroom-container li:nth-child(odd) { background: #eee; }
</style>
