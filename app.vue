<template>
  <NuxtLayout name="default">
    <WithAuth>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </WithAuth>
  </NuxtLayout>
</template>
<script setup lang="ts">
import WithAuth from "~/layouts/withAuth.vue";
import {NuxtLoadingIndicator} from "#components";
</script>
