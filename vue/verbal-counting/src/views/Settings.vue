<template>
  <div class="settings-page">
    <h1>Привет!</h1>
    <p class="summary">
      Добро пожаловать на {{day}} тренировочный день! <br>Ваш последний результат - решено
      {{lastSolved}} из {{lastTotal}}. <br>Общая точность - {{accuracy}}%
    </p>
    <div class="settings">
      <Slider :min="minDuration" :max="maxDuration" :startValue="duration" caption="Длительность" captionExt="минут" v-on:slider-changed="onParamChanged('duration', $event)"></Slider>
      <Slider :min="minDifficulty" :max="maxDifficulty" :startValue="difficulty" caption="Сложность" captionExt="" v-on:slider-changed="onParamChanged('difficulty', $event)"></Slider>
      <CheckBox caption="Суммирование" :startValue="summ" v-on:checkbox-changed="onParamChanged('summ', $event)"></CheckBox>
      <CheckBox caption="Разность" :startValue="subs" v-on:checkbox-changed="onParamChanged('subs', $event)"></CheckBox>
      <CheckBox caption="Умножение" :startValue="multi" v-on:checkbox-changed="onParamChanged('multi', $event)"></CheckBox>
      <CheckBox caption="Деление" :startValue="divide" v-on:checkbox-changed="onParamChanged('divide', $event)"></CheckBox>
      <CheckBox caption="Возведение в степень" :startValue="pwr" v-on:checkbox-changed="onParamChanged('pwr', $event)"></CheckBox>
    </div>
    <div class="btn-group">
      <button class="play" @click="play">
        Play!
      </button>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import CheckBox from '../components/CheckBox.vue'
import store from '../store'

export default {
  name: 'Settings',
  data () {
    return {
      duration: store.getVal('duration'),
      difficulty: store.getVal('difficulty'),
      summ: Boolean(store.getVal('summ')),
      subs: Boolean(store.getVal('subs')),
      multi: Boolean(store.getVal('multi')),
      divide: Boolean(store.getVal('divide')),
      pwr: Boolean(store.getVal('pwr')),
      day: store.getVal('day'),
      lastSolved: store.getVal('lastSolved'),
      lastTotal: store.getVal('lastTotal'),
      accuracy: store.getVal('accuracy'),
      minDuration: 1,
      maxDuration: 15,
      minDifficulty: 1,
      maxDifficulty: 10
    }
  },
  components: {
    Slider,
    CheckBox
  },
  methods: {
    play: function () {
      this.$router.push('/game/')
    },
    onParamChanged: function (paramName, val) {
      this[paramName] = val
      store.setVal(paramName, val)
    }
  }
}
</script>

<style scoped>
.settings-page {
  width: 400px;
  margin: 0 auto;
  padding-top: 50px;
  text-align: left;
  font-style: normal;
  font-weight: 400;
}

.summary {
  font-size: 18px;
  margin-top: 40px;
  line-height: 1.3;
}

.settings {
  margin-top: 20px;
}

.btn-group {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}

.play {
  width: 80px;
  height: 40px;
  font-size: 18px;
  background-color: #fff;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px #ddd;
  cursor: pointer;
}

.play:active {
  box-shadow: none;
  transform: translateY(2px);
}
</style>
