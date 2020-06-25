<template>
  <div class="modal is-active">
    <div class="modal-background" v-on:click="$emit('close')"></div>
    <div class="modal-content">
      <div class="content box">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "title"],
};
</script>
