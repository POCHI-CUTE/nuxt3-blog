<script setup lang="ts">
import { getDocs, collection } from 'firebase/firestore'
import marked from 'marked'
import highlight from 'highlight.js'

const { $db } = useNuxtApp()
const db = $db()
const getData = (await getDocs(collection(db, 'articles'))).docs

// highlight付ける
// marked.setOptions({
//   highlight: (code) => {
//     return highlight.highlightAuto(code).value
//   },
// })
// TODO: postTimeでの並び順にする
</script>

<template>
  <div class="article__index">
    <ul>
      <li v-for="article in getData" :key="article.id">{{ article.data().text }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$basecolor1: #2c3532;
$basecolor2: #0f6466;
$basecolor3: #d8b08c;
$basecolor4: #ffcb9a;
$basecolor5: #d2e8e3;

.article__index {
}
</style>
