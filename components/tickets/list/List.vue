<template>
  <div class="catalog">
    <div class="catalog_list">
      <div
          v-for="t in getAll"
          :key="t.id"
          class="catalog_list_item"
          @click="goto(t.id)"
      >
        {{ t.title }}
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {useTicketStore} from "~/store/ticket"

const router = useRouter()

const ticketStore = useTicketStore()

const {getAll} = storeToRefs(ticketStore)

const goto = (id: number) => {
  router.push(`/${id}`)
}
</script>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  margin-top: 2rem;

  &_list {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &_item {
      padding: 2rem;
      cursor: pointer;
      background-color: #EDEDED;
      border-radius: 10px;
      box-shadow: 2px 2px 2px #b4b3b3;
      transition: all .5s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
