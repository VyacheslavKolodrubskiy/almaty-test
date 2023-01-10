<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__block">
          <AppLogo bg-color="#403432" />
          <AppNavbar />
        </div>

        <address class="footer__address">
          <a
            class="footer__phone"
            href="tel:+74955555555"
            >+7 (495) 555-55-55</a
          >
          <div class="footer__region">г. Москва, ул. Расплетина, 24</div>
        </address>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 24px 0;
  background-color: #eceaea;
  color: #555555;
  // .footer__block
  &__block {
    display: flex;
    align-items: center;
    > * {
      &:not(:last-child) {
        margin-right: 48px;
      }
    }
  }
  // .footer__inner
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // .footer__address
  &__address {
    display: flex;
    align-items: center;
    font-style: normal;
    > * {
      &:not(:last-child) {
        margin-right: 51px;
      }
    }
  }
  // .footer__phone
  // .footer__region
  &__phone,
  &__region {
    position: relative;
    padding-left: 24px;
    transition: color 0.2s ease-out;
    &::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      color: lighten(#555555, 15%);
    }
  }
  // .footer__phone
  &__phone {
    &::before {
      background: url('@/assets/images/icons/phone.svg') no-repeat;
    }
  }
  // .footer__region
  &__region {
    &::before {
      background: url('@/assets/images/icons/location.svg') no-repeat;
    }
    cursor: pointer;
  }
}
</style>
