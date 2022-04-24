<template>
  <div class="box">
    <div class="progress-outer">
      <div class="progress" :style="{ width: calcWidth() }"></div>
    </div>
    <div class="text">{{ makeTextForTimer() }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProgressTimer',
  props: {
    secondsTotal: {
      type: Number,
      required: true,
      validator (value) {
        return value > 0
      }
    },
    secondsLeft: {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    makeTextForTimer () {
      const minutes = Math.floor(this.secondsLeft / 60)

      const seconds = (
        this.secondsLeft - minutes * 60
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })

      return `${minutes}:${seconds}`
    },
    calcWidth () {
      let percent = (this.secondsLeft / this.secondsTotal) * 100

      percent = 100 - percent

      return `${percent}%`
    }
  }
}
</script>

<style scoped>

</style>
