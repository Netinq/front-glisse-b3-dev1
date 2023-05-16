<template>
  <div>
    <div class="chatbox-button" @click="toggleChatbox">
      <img src="/src/assets/img/comment-solid.svg" alt="chatbox" />
    </div>
    <div class="chatbox" :class="{ active: isChatboxOpen }">
      <div class="chatbox-header">
        <h3>Messagerie</h3>
        <button class="close-button" @click="toggleChatbox">
          <i class="icon-close">❌</i> 
        </button>
      </div>
      <div class="users">
        <div class="user" v-for="item in data" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <div class="content">
            <p class="name">{{ item.name }}</p>
            <p class="message">{{ item.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = [
  {
    name: 'Quentin Sar',
    message: 'Salut, tu fais quoi ?',
    image: 'https://fakeimg.pl/300/',
  },
  {
    name: 'Jathursan Mehavarnan',
    message: 'Rien de fou et toi ?',
    image: 'https://fakeimg.pl/300/',
  },
];

const isChatboxOpen = ref(false);

function toggleChatbox() {
  isChatboxOpen.value = !isChatboxOpen.value;
}
</script>

<style scoped>
.chatbox-button {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 75px;
  height: 75px;
  background: linear-gradient(90deg, #12ddf8 0%, #0654d0 100%);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatbox-button img {
  width: 25px;
  height: 25px;
}
.chatbox {
  width: 25vw;
  height: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  z-index: 10000;
  background-color: #fff;
}

.chatbox-header {
  background: linear-gradient(90deg, #12ddf8 0%, #0654d0 100%);
  padding: 10px;
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.chatbox-header h3 {
  margin: 0;}
.users {
  height: calc(100% - 50px);
  overflow-y: scroll;
}
.user {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.user .content {
  display: flex;
  flex-direction: column;
}
.user .content .name {
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
.user .content .message {
  font-size: 0.8rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
.close-button {
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.close-button:hover {
  color: #ff0000;
}

i.icon-close {
  font-style: normal;
}
</style>