<template>
  <Button color="secondary" variant="outlined" @click="handleForm">
    {{ addNew ? 'Мои вопросы' : 'Задать вопрос' }}
  </Button>
  <div class="content">
    <Tickets v-if="!addNew"/>
    <Form v-else/>
  </div>
</template>

<script lang="ts" setup>
import Form from "~/components/tickets/Form.vue"
import Button from "~/components/common/Button.vue"
import Tickets from "~/components/tickets/list/Tickets.vue"

const addNew = ref(false)

const handleForm = () => {
  addNew.value = !addNew.value
}

</script>

<style lang="scss" scoped>
.content {
  margin-top: 2rem;
  min-width: 50vw;
}
</style>
