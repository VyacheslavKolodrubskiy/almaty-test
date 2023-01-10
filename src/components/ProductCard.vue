<script setup lang="ts">
import { Product } from '@/shared'
import { defineProps, computed, defineEmits, ref } from 'vue'
import { useLoading } from '@/composables'
import BaseButton from '@/components/BaseButton.vue'
import AppSpinner from '@/components/AppSpinner.vue'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits(['click'])

const { isLoading } = useLoading()

const selectedProductId = ref<null | number>(null)

const isSpinnerShown = computed(() => {
  return (
    isLoading.value &&
    !props.product.bought &&
    selectedProductId.value === props.product.id
  )
})

const buttonText = computed(() => {
  if (isSpinnerShown.value) {
    return ''
  }

  if (props.product.bought) {
    return 'В корзине'
  }

  return 'Купить'
})

const sold = computed(() => {
  return !props.product.oldPrice && !props.product.currentPrice
})

function handleClick(id: number) {
  emit('click', id)

  selectedProductId.value = id
}
</script>

<template>
  <div
    class="product__card"
    :class="{ 'product__card-sold': sold }"
  >
    <img
      class="product__card-img"
      :src="product.picture"
      :alt="product.title"
      width="280"
      height="160"
    />
    <div class="product__card-content">
      <h2 class="product__card-title">{{ product.title }}</h2>
      <div class="product__card-footer">
        <div
          v-if="!sold"
          class="product__card-price"
        >
          <p
            v-if="product.oldPrice"
            class="product__card-price-old"
          >
            {{ product.oldPrice }}
          </p>
          <p class="product__card-price-current">{{ product.currentPrice }}</p>
        </div>

        <BaseButton
          v-if="!sold"
          class="product__card-btn-buy"
          :class="{ 'product__card-btn-bought': product.bought }"
          :variant="product.bought ? 'secondary' : 'primary'"
          @click="handleClick(product.id)"
        >
          <img
            v-if="product.bought"
            class="product__card-check-icon"
            width="20"
            height="20"
            src="@/assets/images/icons/check.svg"
            alt="Check icon"
          />
          <span>{{ buttonText }}</span>
          <AppSpinner v-if="isSpinnerShown" />
        </BaseButton>
      </div>
      <h3 v-if="sold">Продана на аукционе</h3>
    </div>
  </div>
</template>

<style lang="scss">
.product__card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  // product__card-sold
  &-sold {
    opacity: 0.5;
    product__card-title {
      margin-bottom: 34px;
    }
  }
  // product__card-btn-bought
  &-btn-bought {
    display: flex;
    align-items: center;
  }
  // product__card-img
  &-img {
  }
  // product__card-check-icon
  &-check-icon {
    margin-right: 4px;
  }
  // product__card-content
  &-content {
    height: 100%;
    padding: 20px 24px 24px;
  }
  // product__card-title
  &-title {
    margin-bottom: 22px;
  }
  // product__card-footer
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // product__card-price
  &-price {
  }
  // product__card-price-old
  &-price-old {
    font-weight: 300;
    color: #a0a0a0;
    text-decoration-line: line-through;
  }
  // product__card-price-current
  &-price-current {
    font-weight: 700;
    font-size: 16px;
  }
  // product__card-btn-buy
  &-btn-buy {
  }
}
</style>
