<template>
  <Text :value="value" type="date" @change="handleDate"/>
</template>

<script lang="ts" setup>
import Text from "~/components/common/fields/Text.vue"

interface DatePickerEmits {
  (e: 'change', value: string): void
}

interface DatePickerProps {
  value: string
}

const props = defineProps<DatePickerProps>()
const emits = defineEmits<DatePickerEmits>()

const handleDate = (value: string) => {
  emits('change', value)
}


</script>
