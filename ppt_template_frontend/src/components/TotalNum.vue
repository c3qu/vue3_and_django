<script setup>
import {defineProps} from "vue";

defineProps({
  num: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="total">Total</div>
  <div class="num">{{ num }}</div>
</template>

<style scoped>
.total {
  color: #999;
  font-size: 33px;
  display: block;
}

.num {
  color: #5faedd;
  font-size: 44px;
}
</style>