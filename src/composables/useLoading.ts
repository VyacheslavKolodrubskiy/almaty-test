import { ref, computed } from 'vue'

const count = ref(0)

export function useLoading() {
  function start() {
    count.value = 1
  }

  function stop() {
    count.value = 0
  }

  const isLoading = computed(() => !!count.value)

  return {
    start,
    stop,
    isLoading,
  }
}
