<template>
  <button :class="variant, color" class="btn" @click.prevent="$emit('click')">
    <slot/>
  </button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  variant: 'contained' | 'outlined'
  color: 'secondary' | 'primary'
}

interface ButtonEmits {
  (e: 'click'): void
}

defineProps<ButtonProps>()
defineEmits<ButtonEmits>()

</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #3c3cfc;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all .5s ease-in-out;

  &.primary {
    background-color: #446eda;
    color: #FFF;

    &.outlined {
      color: #446eda;
      background-color: #FFF;
      border: 1px solid #446eda;

      &:hover {
        background-color: #446eda;
        color: #FFF;
      }
    }

  }

  &.secondary {
    background-color: #b80000;
    color: #FFF;

    &.outlined {
      color: #b80000;
      background-color: #FFF;
      border: 1px solid #b80000;

      &:hover {
        background-color: #b80000;
        color: #FFF;
      }
    }
  }
}
</style>
