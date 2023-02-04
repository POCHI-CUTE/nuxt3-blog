<script setup lang="ts">
import { getDocs, collection } from 'firebase/firestore'

const { $db } = useNuxtApp()
const db = $db()
// TODO:cache実装
const getData = (await getDocs(collection(db, 'articles'))).docs

const sortData = computed(() => {
  return getData.sort((a, b) => {
    return b.data().postTime - a.data().postTime
  })
})
</script>

<template>
  <div class="article__index">
    <ul>
      <li v-for="article in sortData" :key="article.id">
        <NuxtLink :to="`/${article.id}`">
          <article class="article">
            <h2 class="article__title">{{ article.data().title }}</h2>
            <div class="article__posttime">{{ article.data().postTime.toDate().toDateString() }}</div>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$basecolor1: #2c3532;
$basecolor2: #91a3a3;
$basecolor3: #cecaba;
$basecolor4: #d5d2c7;

.article__index {
}

ul {
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  width: 50em;
}
li > article {
  width: 50em;
  display: inline-block;
  text-align: left;
}
.article {
  margin-bottom: 0.99em;
  padding: 1.5% 0 calc(1.5% + 0.1em) 7px;
  border-bottom: 0.7px solid #b6b29f;

  &__title {
    display: inline-block;
    text-align: left;
  }

  &__posttime {
    padding-top: 1em;
    color: #91a3a3;
  }
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #2c3532;
}
</style>
