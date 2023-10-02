<template>
  <header class="header">
    <div v-show="getAuth" class="header_navigation">
      <div class="header_navigation_item">
        <NuxtLink to="/profile">Профиль</NuxtLink>
      </div>
      <div class="header_navigation_item">
        <NuxtLink to="/">Главная</NuxtLink>
      </div>
      <div class="header_navigation_item">
        <div @click="logout">Выход</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {useProfileStore} from "~/store/profile"
import {storeToRefs} from "pinia"

const profileStore = useProfileStore()

const {getAuth} = storeToRefs(profileStore)

const router = useRouter()

const logout = () => {
  profileStore.logout()
  router.push('/login')
}

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #F8F8F8;
  padding: 1rem;

  &_navigation {
    display: flex;
    gap: 20px;
    justify-content: center;

    &_item {
      padding: 1rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
        transition: all .5s;
      }
    }
  }
}
</style>
