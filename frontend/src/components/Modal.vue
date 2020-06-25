<template>
  <div class="modal is-active">
    <div class="modal-background" v-on:click="$emit('close')"></div>
    <div class="modal-content">
      <div class="content box">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.texto }}</p>
        <div class="content">
          <ul>
            <li><strong>ID</strong>: {{ data.data.id }}</li>
            <li>
              <strong>Hora de emision</strong>: {{ data.data.hora_emision }}
            </li>
            <li><strong>Valido hasta</strong>: {{ data.data.valido_hasta }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
