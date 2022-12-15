<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <nuxt-link class="home" to="/"><img src="~/assets/image/boss.png" alt="icon" class="icon" /> </nuxt-link>
    <div class="end">
      <ul class="icon">
        <li>
          <a href="https://github.com/POCHI-CUTE"><img class="img--github" src="~/assets/image/github-mark.png" /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #02798b;
  height: 100px;
  margin: 0;
  justify-content: space-between;
}

.home {
  color: white;
  display: flex;
  align-items: center;
  margin-left: 2%;
}

.home:hover {
  color: blue;
}

.end {
  display: flex;
  align-items: center;
  margin-right: 5%;
  > .icon {
    list-style: none;
  }
}

.img {
  &--github {
    width: 2em;
    height: 2em;
  }
}

.home > .icon {
  width: 4em;
  height: 4em;
  &:hover {
    width: 5em;
    height: 5em;
  }
}
</style>
