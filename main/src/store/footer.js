import { ref } from 'vue'

export const showFooter = ref(true)

export const changeFooter = (type) => {
  showFooter.value = type
}
