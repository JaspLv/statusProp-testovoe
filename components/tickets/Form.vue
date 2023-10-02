<template>
  <div>
    <h2>Задай вопрос</h2>
    <div class="ticket_form">
      <div>
        <Text
            :value="message"
            placeholder="Введите текст"
            type="text"
            @change="value => message = value"
        />
      </div>
      <Button color="primary" variant="outlined" @click="addTicket">Отправить</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Text from "~/components/common/fields/Text.vue";
import Button from "~/components/common/Button.vue";
import {useTicketStore} from "~/store/ticket";

const ticketStore = useTicketStore()

const router = useRouter()

const message = ref<string>('')

const addTicket = () => {
  if (!message.value) return
  const ticketId = Date.now()
  ticketStore.addTicket({messages: [], title: message.value, id: ticketId})
  message.value = ''
  router.push(`/${ticketId}`)
}

</script>

<style lang="scss" scoped>
.ticket_form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
