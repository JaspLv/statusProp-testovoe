<template>
  <div class="field">
    <label class="field_label">{{ label }}</label>
    <input v-model.trim="changeValue"
           :placeholder="placeholder"
           :type="hide? 'password' : type === 'password'? 'text' : type"
           class="field_input"
    />
    <div v-show="type === 'password'" :class="{slash: hide}" class="icon" @click="handleTextHide">
    </div>
  </div>
</template>

<script lang="ts" setup>

export interface FieldProps {
  value: string,
  label?: string,
  type: string,
  placeholder?: string
}

export interface FieldEmits {
  (e: 'change', value: string): void
}


const props = defineProps<FieldProps>()
const emits = defineEmits<FieldEmits>()

const hide = ref(props.type === 'password')

const changeValue = computed({
  get() {
    return props.value
  },
  set(value) {
    emits('change', value)
  }
})

const handleTextHide = () => {
  hide.value = !hide.value
}

</script>

<style lang="scss" scoped>

.field {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &_input {
    background-color: #f8f8f8;
    border: 1px solid #9f9f9f;
    border-radius: 6px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 100%;
    padding: 12px 20px 12px 20px;
    width: 100%;
    transition: all .2s ease-in-out;

    &:focus-visible {
      box-shadow: 0 0 0 1px #446eda;
      outline: none;
    }
  }
}

.icon {
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url("/assets/icons/eye.png");
  right: 2%;
  top: 47%;

  &.slash {
    background-image: url("/assets/icons/eye-slash.png");
  }
}

</style>

