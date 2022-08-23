<template>
   <a v-bind:href="vlink">
      <div 
        class="visual-img" 
        v-bind:class="vimg"
      ></div>
      <div class="visual-txt">
        <h3 class="visual-title">{{vtitle}}</h3>
        <span class="visual-desc" v-html="vtxt"></span>
        <span class="visual-bt">
          {{vbt}}
        </span>
      </div>
  </a>
</template>

<script>
export default {
  props: ['vimg', 'vtitle', 'vtxt', 'vbt', 'vlink'],
  setup() {
    return {

    }
  }
}
</script>

<style>

</style>