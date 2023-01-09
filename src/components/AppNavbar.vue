<script setup lang="ts">
interface Link {
  href: string
  label: string
}

const menuLinks: Link[] = [
  {
    href: '#',
    label: 'Каталог',
  },
  {
    href: '#',
    label: 'Доставка',
  },
  {
    href: '#',
    label: 'Оплата',
  },
  {
    href: '#',
    label: 'Контакты',
  },
  {
    href: '#',
    label: 'О галерее',
  },
]
</script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        class="menu__list-item"
        v-for="({ href, label }, index) in menuLinks"
        :key="index"
      >
        <a
          class="menu__list-link"
          :href="href"
        >
          {{ label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  // .menu__list
  &__list {
    display: flex;
    align-items: center;
  }
  // .menu__list-item
  &__list-item {
    &:not(:last-child) {
      margin-right: 48px;
    }
  }
  // .menu__list-link
  &__list-link {
    transition: color 0.2s ease-out;
    &:hover {
      color: lighten(#343030, 25%);
    }
  }
}
</style>
