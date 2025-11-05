<template>
  <div class="course-list">
    <div class="course-card">
      <h3>ชื่อคอร์ส: {{ Courses.title }}</h3>
      <p>ราคา: {{ Courses.price }} บาท</p>
      <button @click="addToFavorite">เพิ่มในรายการโปรด</button>
    </div>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favoriteStore";
const props = defineProps({course: {
    type: Object,
    required: true,
  },
});
const favoriteStore = useFavoriteStore();
const addToFavorite = () => favoriteStore.add(props.course);
// TODO: import { useFavoriteStore } แล้วเขียนฟังก์ชันเพิ่มคอร์สลง store
// TODO: defineProps({ course: Object })
</script>

<style scoped>
.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: auto;
  padding: 16px;
}

.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

p {
  margin: 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2c9c6d;
}
</style>
