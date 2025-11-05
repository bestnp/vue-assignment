<script setup>
import { ref } from "vue";
const name = ref("");
const participants = ref([]);

const addParticipant = () => {
  participants.value.push(name.value);
  name.value = "";
};
</script>

<template>
  <div class="assignment-container">
    <h2 class="h1">รายชื่อผู้เข้าร่วมกิจกรรม</h2>
    <input type="text" v-model="name" placeholder="กรอกชื่อผู้เข้าร่วม" />
    <button @click="addParticipant">เพิ่มชื่อ</button>

    <div class="participant-list">
      <p v-if="participants.length === 0">ยังไม่มีผู้เข้าร่วม</p>
      <ul v-else>
        <li class="list" v-for="(participant, index) in participants" :key="index">
          {{ participant }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.assignment-container {
  max-width: 400px;
  margin: auto;
  padding: 12px;
  border-radius: 8px;
  background: #f9f9f9;
}
.h1 {
  color: black;
}
.list{
  color: black;
}
input {
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  margin-left: 8px;
}
</style>
