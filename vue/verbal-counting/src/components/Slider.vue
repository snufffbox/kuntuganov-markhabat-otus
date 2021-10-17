<template>
  <div>
    <div class="captions">
      <div class="length-min">{{min}}</div>
      <div class="length-max">{{max}}</div>
    </div>
    <input class="range" type="range" :min="min" :max="max" step="1" v-model="value" v-on:change="onChanged" />
    <p class="slider-caption">{{caption}} - {{value}} {{captionExt}}</p>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    startValue: {
      type: Number,
      required: true,
      default: 1
    },
    caption: {
      type: String,
      required: true
    },
    captionExt: {
      type: String
    }
  },
  data () {
    return {
      value: this.startValue
    }
  },
  methods: {
    onChanged: function () {
      this.$emit('slider-changed', this.value)
    }
  }
}
</script>

<style scoped>
.captions {
  display: flex;
  flex-direction: row;
  width: 170px;
}

.length-min {
  width: 50%;
}

.length-max {
  width: 50%;
  text-align: right;
}

.range {
  width: 170px;
}

.slider-caption {
  margin-bottom: 50px;
}
</style>
