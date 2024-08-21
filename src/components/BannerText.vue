<script setup>
const props = defineProps({
  title: {
    require: true
  },
  subList: {
    type: Array,
    require: true
  }
})

const pList = [
  '灵活自定义招聘流程',
  '打造通畅的人才企业互动模式',
  '优化企业招聘的各个环节',
  '从细节出发，提升招聘效率'
]

const pcFirst = pList.slice(0, 2).join('，')
const pcSecond = pList.slice(2).join('，')
</script>

<template>
  <div class="shrink-0 px-5 text-center text-slate-800 md:text-left">
    <h2 class="mb-6 text-4xl">{{ props.title }}</h2>
    <!-- mobile -->
    <div class="flex flex-col gap-2 text-lg md:hidden">
      <p v-for="(item, k) in props.subList" :key="k">{{ item }}</p>
    </div>
    <!-- ipad/pc -->
    <div class="hidden flex-col gap-2 text-lg md:flex">
      <p>{{ pcFirst }}</p>
      <p>{{ pcSecond }}</p>
    </div>
  </div>
</template>
