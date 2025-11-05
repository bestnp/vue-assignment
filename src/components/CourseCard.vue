<template>
  <div class="course-list">
    <div class="course-card">
      <div>
        <h3>ชื่อคอร์ส: {{ course.title }}</h3>
        <p>ราคา: {{ course.price }} บาท</p>
      </div>
      <button
        :disabled="!favoriteStore.username"
        @click="addToFavorite"
      >
        เพิ่มในรายการโปรด
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";
const props = defineProps({
  course: {
    type: Object,
    required: true
  }
});
const favoriteStore = useFavoriteStore();
const addToFavorite = () => {
  if (!favoriteStore.username) return;
  favoriteStore.addFavorite(props.course);
};
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
