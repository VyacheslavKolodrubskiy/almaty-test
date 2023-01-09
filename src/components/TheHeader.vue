<script setup lang="ts">
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import AppNavbar from './AppNavbar.vue'

const searchQuery = ref('')
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__block">
          <AppLogo />
          <AppNavbar />
        </div>
        <div class="header__search">
          <BaseInput
            class="header__search-input"
            v-model="searchQuery"
            placeholder="Поиск по названию картины"
          />
          <BaseButton class="header__search-btn">Найти</BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 24px 0;
  border-bottom: 1px solid #e1e1e1;
  // .header__inner
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // .header__block
  &__block {
    display: flex;
    align-items: center;
    > * {
      &:not(:last-child) {
        margin-right: 48px;
      }
    }
  }
  // .header__search
  &__search {
    width: 100%;
    max-width: 416px;
    display: flex;
    align-items: center;
    position: relative;
  }
  // .header__search-input
  &__search-input {
    padding-right: 112px;
  }
  // .header__search-btn
  &__search-btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
}
</style>
