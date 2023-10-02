<template>
  <div class="container">
    <Header/>
    <main>
      <div class="content">
        <slot/>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/common/Header.vue"
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  height: 100%;
  display: flex;
}

.content {
  min-width: 50vw;
  margin: 2rem auto 0;
}
</style>
