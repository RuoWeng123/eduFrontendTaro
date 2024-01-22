// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    id: 1,
    name: 'John Doe',
    token: '123'
  });
  const isLogin = computed(() => !!user.value.token);
  const resetUser = () => {
    user.value = {
      id: 0,
      name: '',
      token: ''
    }
  }
  const setUser = (newUser: any) => {
    user.value = newUser
  }

  return { user, isLogin, resetUser, setUser}
})

export const useCurrentRoute = defineStore('route', () => {
  const route = ref('');
  const setRoute = (newRoute: string) => {
    route.value = newRoute
  }
  return { route, setRoute }
});
// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })
