<script setup>
import { useRouter } from 'vue-router'
import { getToken } from '@/utils'

const router = useRouter()

console.log(getToken())

if (!getToken()) {
  router.replace({
    name: 'hr-login'
  })
} else {
  router.push({
    name: 'hr-dashboard'
  })
}
</script>

<template>?</template>
