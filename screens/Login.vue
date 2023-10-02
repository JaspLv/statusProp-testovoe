<template>
  <div class="login">
    <div class="login_container">
      <h2 class="login_title">Авторизация</h2>
      <form class="login_form form" @keyup="handleKey">
        <div class="login_name field">
          <Text
              :value="login"
              label="Логин"
              placeholder="Введите логин"
              type="text"
              @change="value => login = value"
          />
        </div>
        <div class="login_pass field">
          <Text
              :value="password"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
              @change="value => password = value"
          />
        </div>
        <div class="login_action">
          <Button color="primary" type="button" variant="contained" @click="auth">Войти</Button>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
import Button from '~/components/common/Button.vue'
import Text from "~/components/common/fields/Text.vue"
import {useProfileStore} from "~/store/profile"

const login = ref<string>('')
const password = ref<string>('')

const router = useRouter()

const profileStore = useProfileStore()

const handleKey = (event: any) => {
  if (event.keyCode === 13) {
    auth()
  }
}

const auth = async () => {
  if (!login.value || !password.value) return
  const res = await $fetch('/api/login', {
    method: 'POST',
    body: {
      login: login.value,
      password: password.value
    }
  })
  profileStore.setAuth(res)
  if (res) {
    await router.push('/')
  }
}


</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &_container {
    background-color: #FFFF;
    width: 500px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 1rem;
  }

  &_title {
    text-align: center;
  }

  &_action {
    margin-top: auto;
    text-align: center;
  }

  &_form {
    margin-top: 2rem;

    & > .field {
      margin-bottom: 2rem;
    }
  }
}
</style>
