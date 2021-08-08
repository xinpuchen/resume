<template>
  <div class="head">
    <a class="download" @click="print">打印</a>
    <span class="last-modified">最后更新于{{time}}</span>
  </div>
  <div class="container">
    <personal />
    <section class="body">
      <practice />
      <project />
      <skill />
    </section>
  </div>
</template>

<script setup>
import Personal from './components/Personal.vue'
import Practice from './components/Practice.vue'
import Project from './components/Project.vue'
import Skill from './components/Skill.vue'

const time = '2021年08月'

const print = () => window.print()

</script>
