<template>
  <div>
    <input type="checkbox" v-model="value" v-on:change="onChanged" />
    <span>{{caption}}</span>
  </div>
</template>

<script>

export default {
  name: 'CheckBox',
  props: {
    startValue: {
      type: Boolean,
      required: true,
      default: false
    },
    caption: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: this.startValue
    }
  },
  methods: {
    onChanged: function () {
      this.$emit('checkbox-changed', this.value)
    }
  }
}
</script>

<style scoped>

</style>
