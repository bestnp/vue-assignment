<template>
  <div class="course-card">
    <div class="course-info">
      <h3>ชื่อคอร์ส: {{ course.title }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>
    </div>
    <button
      :disabled="isDisabled"
      @click="addToFavorite"
    >
      เพิ่มในรายการโปรด
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useFavoriteStore } from "../stores/favorite";
const props = defineProps({
  course: {
    type: Object,
    required: true
  }
});
const favoriteStore = useFavoriteStore();
const isDisabled = computed(() => !favoriteStore.username || favoriteStore.username.trim() === "");

const addToFavorite = () => {
  if (isDisabled.value) return;
  favoriteStore.addFavorite(props.course);
};
</script>

<style scoped>
.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 16px;
  min-height: 80px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.course-info {
  flex: 1 1 0;
  min-width: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  overflow: hidden;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  line-height: 1.4;
  max-width: 100%;
  overflow: hidden;
  color: #555;
}

p {
  margin: 0;
  color: #555;
  font-size: 14px;
  line-height: 1.4;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 14px;
  min-width: 140px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: background-color 0.2s ease;
}

button:disabled {
  background-color: #42b883;
  cursor: not-allowed;
  opacity: 0.5;
}

button:hover:not(:disabled) {
  background-color: #2c9c6d;
  cursor: pointer;
}
</style>
