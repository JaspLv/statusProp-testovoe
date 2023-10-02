<template>
  <Head>
    <Title>Главная</Title>
  </Head>
  <WithAuth>
    <Home/>
  </WithAuth>
</template>
<script lang="ts" setup>
import WithAuth from "~/layouts/withAuth.vue"
import Home from "~/screens/Home.vue"

</script>
