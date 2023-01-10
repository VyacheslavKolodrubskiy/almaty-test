<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Product } from '@/shared'
import { useLoading } from '@/composables'
import ProductCard from '@/components/ProductCard.vue'
import axios from 'axios'

const products = ref<Product[]>([
  {
    id: 1,
    picture: require('@/assets/images/products/1.png'),
    title: '«Рождение Венеры» Сандро Боттичелли',
    oldPrice: '2 000 000 $',
    currentPrice: '1 000 000 $',
    bought: false,
  },
  {
    id: 2,
    picture: require('@/assets/images/products/2.png'),
    title: '«Тайная вечеря»  Леонардо да Винчи',
    oldPrice: '',
    currentPrice: '3 000 000 $',
    bought: false,
  },
  {
    id: 3,
    picture: require('@/assets/images/products/3.png'),
    title: '«Сотворение Адама» Микеланджело',
    oldPrice: '6 000 000 $',
    currentPrice: '5 000 000 $',
    bought: false,
  },
  {
    id: 4,
    picture: require('@/assets/images/products/4.png'),
    title: '«Урок анатомии»  Рембрандт',
    oldPrice: '',
    currentPrice: '',
    bought: false,
  },
])

const { start, stop } = useLoading()

const selectedProductsId = ref<number[]>([])

async function fetchPost(id: number) {
  if (!selectedProductsId.value.includes(id)) {
    selectedProductsId.value.push(id)
  } else {
    return
  }

  start()

  try {
    const { status } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )

    if (status === 200) {
      products.value = products.value.map((product) => {
        return product.id === id && !product.bought
          ? { ...product, bought: true }
          : product
      })

      localStorage.setItem('products', JSON.stringify(products.value))
    }
  } catch (error) {
    console.error(error)
  } finally {
    stop()
  }
}

onMounted(() => {
  try {
    const productsStorage = JSON.parse(
      localStorage.getItem('products') || '{}'
    ) as Product[]

    if (productsStorage.length) {
      products.value = productsStorage
      selectedProductsId.value.push(
        ...productsStorage.filter(({ bought }) => bought).map(({ id }) => id)
      )
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="product">
    <div class="container">
      <h1 class="product__title">Картины эпохи Возрождения</h1>
      <div class="product__content">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @click="fetchPost"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.product {
  padding: 45px 0px 320px 0px;
  // .product__title
  &__title {
    margin-bottom: 39px;
  }
  // .product__content
  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 31px;
  }
}
</style>
