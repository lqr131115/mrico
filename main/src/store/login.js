import { ref } from 'vue';

export const loginStatus = ref(!!window.localStorage.getItem('login'));

export const login = () => {
  loginStatus.value = true;
};

export const logout = () => {
  loginStatus.value = false;
};
