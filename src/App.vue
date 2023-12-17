<template>
  <div class="head">
    <a class="print" @click="print">打印</a>
    <span class="last-modified">最后更新于{{time}}</span>
  </div>
  <div class="container">
    <personal />
    <section class="body">
      <practice />
      <evaluation />
    </section>
  </div>
</template>

<script setup>
import Personal from './components/Personal.vue'
import Practice from './components/Practice.vue'
// import Project from './components/Project.vue'
// import Skill from './components/Skill.vue'
import Evaluation from './components/Evaluation.vue'

const time = '2023年12月'

const print = () => window.print()

</script>
