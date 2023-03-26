<script setup lang="ts">
import { dbState } from '~/public/types/article'
import { marked } from 'marked'
import hljs from 'highlight.js'

const routeAPI = useRoute()
const article = useState('article')
const articleObj = article.value as dbState
let mdText!: string, title: string

for (const content in articleObj) {
  if (articleObj[content].titleId === routeAPI.params.articleId) {
    title = articleObj[content].title
    mdText = articleObj[content].content
    break
  }
}
marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value
  },
})
const htmlText = marked(mdText)
</script>

<template>
  <div>
    <main id="article">
      <h1 class="title">{{ title }}</h1>
      <article>
        <div id="content" v-html="htmlText"></div>
      </article>
    </main>
  </div>
</template>
<style lang="scss" scoped>
#article {
  margin-top: 40px;
  padding: 0 20em 0 20em;
  min-width: 30em;
  max-width: 80em;
}
.title {
  font-weight: 700;
  line-height: 1.25;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
