<template>
  <Head>
    <Title>Профиль</Title>
  </Head>
  <WithAuth>
    <Profile/>
  </WithAuth>
</template>
<script lang="ts" setup>
import WithAuth from "~/layouts/withAuth.vue"
import Profile from "~/screens/Profile.vue"
import {useProfileStore} from "~/store/profile"
import {definePageMeta} from "#imports"

definePageMeta({
  head: {
    title: "Profile"
  }
})

const profileStore = useProfileStore()

profileStore.getProfileServer()

</script>
