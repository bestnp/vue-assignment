<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <p>❤️ ถูกใจแล้ว {{ store.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <input v-model="store.username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>

    <RouterLink to="/summary">ไปหน้า Summary</RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
import axios from "axios";
import { useFavoriteStore } from "../stores/favorite";
import { RouterLink } from "vue-router";

const courses = ref([]);
const store = useFavoriteStore();

onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    courses.value = res.data;
  } catch (e) {
    console.error(e);
  }
});
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
}
</style>
