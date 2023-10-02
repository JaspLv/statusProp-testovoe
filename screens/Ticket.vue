<template>
  <div class="ticket">
    <h2>{{ getCurrent.title }}</h2>
    <div class="ticket_wrapper">
      <div class="ticket_area">
        <div v-for="m in getCurrent.messages" :key="m.id" class="ticket_message">
          <div class="ticket_message_text">{{ m.text }}</div>
        </div>
      </div>
    </div>
    <div class="ticket_form">
      <div>
        <Text :value="message"
              placeholder="Введите текст"
              title="Сообщение"
              type="text"
              @change="value => message = value"
        />
      </div>
      <div>
        <Button
            color="primary"
            variant="contained"
            @click="addMessage">Отправить
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Text from "~/components/common/fields/Text.vue"
import Button from "~/components/common/Button.vue"
import {useTicketStore} from "~/store/ticket"
import {storeToRefs} from "pinia"

const ticketStore = useTicketStore()

const {getCurrent} = storeToRefs(ticketStore)

const message = ref<string>('')

const addMessage = () => {
  ticketStore.addMessage({
    text: message.value,
    id: Date.now()
  })
  message.value = ''
}


</script>

<style lang="scss" scoped>
.ticket {
  width: 100%;

  &_wrapper {
    margin-top: 1rem;
    padding: .5rem;
    background-color: #F8F8F8;
    border-radius: 7px;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
  }

  &_area {
    max-height: 50vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &_form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &_message {
    margin-left: auto;
    margin-top: 1rem;
    width: 50%;
    text-align: end;
    word-break: break-word;
    background-color: #FFF;
    padding: 1rem;
    border-radius: 10px;
  }
}
</style>
