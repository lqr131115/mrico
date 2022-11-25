import { ref } from 'vue'

export const currentIndex = ref(0)

export const setCurrentIndex = (key, cb) => {
  currentIndex.value = key
  cb && cb()
}

export const showHeader = ref(true)

export const changeHeader = (type) => {
  showHeader.value = type
}
