<template>
  <Head>
    <Title>Тикет</Title>
  </Head>
  <WithAuth>
    <Ticket/>
  </WithAuth>
</template>

<script lang="ts" setup>
import WithAuth from "~/layouts/withAuth.vue"
import Ticket from "~/screens/Ticket.vue"
import {useTicketStore} from "~/store/ticket"

const route = useRoute()

const ticketStore = useTicketStore()

const getTicket = () => {
  const id = Number(route.params.id)
  if (!id) return
  ticketStore.setCurrent(id)
}

onMounted(getTicket)
</script>
