<template>
  <div class="select">
    <div :class="{active: open}" class="select_current" @click="handleOpen">
      <div class="select_current_value">
        {{ currentValue.name }}
      </div>
      <div class="select_current_arrow">

      </div>
    </div>
    <div v-show="open" class="select_list list">
      <div v-for="option in options"
           :key="Date.now()" class="select_listItem"
           @click="handleCurrent(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Option {
  name: string,

  [key: string]: any
}

interface SelectProps {
  options: Option[]
  title: string
  current: Option
}

interface SelectEmits {
  (e: 'change', o: Option): void
}

const emits = defineEmits<SelectEmits>()
const props = defineProps<SelectProps>()

const open = ref(false)

const currentValue = ref<Option>(props.current)

const handleOpen = () => open.value = !open.value


const handleCurrent = (o: Option) => {
  currentValue.value = o
  open.value = false
  emits('change', o)
}

</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &_list {
    position: absolute;
    background-color: #F8F8F8;
    width: 100%;
    border: 1px solid #446eda;
    border-top: none;
    top: 90%;
  }

  &_listItem {
    cursor: pointer;
    padding: 1rem;

    &:hover {
      color: #446eda;
      background-color: white;
    }
  }

  &_current {
    background-color: #f8f8f8;
    padding: 12px 20px 12px 20px;
    cursor: pointer;
    border: 1px solid #9f9f9f;
    border-radius: 6px;

    &.active {
      border: 1px solid #446eda;
      border-bottom: none;
    }
  }
}
</style>
