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

    <RouterLink to="/summary" class="summary-link">ไปหน้า Summary</RouterLink>
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
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

header {
  margin-bottom: 24px;
}

header h2 {
  margin: 0 0 8px 0;
}

header p {
  margin: 0;
  font-size: 16px;
}

.form-section {
  margin-bottom: 24px;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.form-section label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-section input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  text-align: left;
  width: 100%;
  max-width: 400px;
  min-width: 0;
  margin-left: auto;
  margin-right: auto;
  align-items: stretch;
  box-sizing: border-box;
}

.summary-link {
  display: inline-block;
  margin-top: 24px;
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
}

.summary-link:hover {
  text-decoration: underline;
}
</style>
