<script setup lang="ts">
import { ButtonHTMLAttributes, computed, defineProps, withDefaults } from 'vue'

type ButtonVariants = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants
    type?: ButtonHTMLAttributes['type']
  }>(),
  {
    variant: 'primary',
    type: 'button',
  }
)

const classes = computed(() => {
  const defaultClasses = ['btn']

  switch (props.variant) {
    case 'primary':
      defaultClasses.push('btn--primary')
      break
    case 'secondary':
      defaultClasses.push('btn--secondary')
      break
    default:
      return defaultClasses
  }

  return defaultClasses
})
</script>

<template>
  <button
    :class="classes"
    :type="type"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  font-weight: 700;
  color: #f4f6f9;
  border: 0;
  padding: 14px 31px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  &--primary {
    background-color: #403432;
  }
  &--secondary {
    background-color: #5b3a32;
    padding-left: 8px;
    padding-right: 9px;
  }
  &:hover {
    background-color: #776763;
  }
  &:disabled {
    background-color: #c1b4b1;
    cursor: not-allowed;
  }
}
</style>
