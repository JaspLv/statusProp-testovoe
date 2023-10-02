<template>
  <div class="tickets">
    <h2>Мои вопросы</h2>
    <List/>
  </div>
</template>

<script lang="ts" setup>
import {useTicketStore} from "~/store/ticket"
import List from "~/components/tickets/list/List.vue"

const ticketStore = useTicketStore()

ticketStore.getTickets()

const getCatalog = () => ticketStore.getTickets()

onMounted(getCatalog)
</script>
