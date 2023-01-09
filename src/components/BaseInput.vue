<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  modelValue: string
  label?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label
    v-if="label"
    for="label"
    >{{ label }}</label
  >
  <input
    class="input"
    v-bind="$attrs"
    :id="label"
    :value="modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style lang="scss">
.input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e1e1e1;
  outline: none;
  &::placeholder {
    color: #9f9f9f;
  }
  &:focus {
    border-color: #b5b5b5;
  }
}
</style>
