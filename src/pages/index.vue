<script setup lang="ts">
import { useState } from '#app'
import { dbState } from '~/public/types/article'

const article = useState('article')
const articleObj = article.value as dbState
</script>

<template>
  <div class="article__index">
    <ul>
      <li v-for="article in articleObj" :key="article.titleId">
        <NuxtLink :to="`/${article.titleId}`">
          <article class="article">
            <h2 class="article__title">{{ article.title }}</h2>
            <div class="article__posttime">
              <div class="article__created">created : {{ article.createdDate }}</div>
              <div v-if="article.updatedDate">updated : {{ article.updatedDate }}</div>
            </div>
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
    display: flex;
    font-size: small;
    padding-top: 1em;
    color: #91a3a3;
  }
  &__created {
    margin-right: 1em;
  }
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #2c3532;
}
</style>
