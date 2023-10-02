<template>
  <slot/>
</template>

<script lang="ts" setup>
import {useProfileStore} from "~/store/profile"

const profileStore = useProfileStore()

definePageMeta({
  middleware: [
    'checkAuth',
  ],
});


const router = useRouter()
const route = useRoute()

const checkAuth = async () => {
  const auth = await profileStore.checkAuth()
  if (!auth) {
    await router.push('/login')
  }
  if (route.name === 'login' && Boolean(auth)) {
    await router.push('/')
  }
}

onMounted(() => {
  checkAuth()
})
</script>
