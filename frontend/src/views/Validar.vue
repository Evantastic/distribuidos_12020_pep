<template>
  <div class="container section box mt-4">
    <div class="field has-addons">
      <p class="control">
        <a class="button is-static">
          ID del permiso
        </a>
      </p>
      <div class="control is-expanded">
        <input
          class="input"
          type="text"
          placeholder="Id"
          v-model="id"
          v-bind:readonly="!isHidden"
        />
      </div>
      <div class="control">
        <a
          class="button"
          v-bind:class="{ 'is-static': !isHidden }"
          v-on:click="handleClick"
        >
          Buscar
        </a>
      </div>
    </div>
    <div class="content mt-6" v-bind:class="{ 'is-hidden': isHidden }">
      <div v-if="hasResponse">
        <article
          class="message"
          v-bind:class="{
            'is-success': response.es_valido,
            'is-danger': !response.es_valido,
          }"
        >
          <div class="message-header">
            <p v-if="response.es_valido">Permiso valido</p>
            <p v-else>Permiso no valido</p>
            <button
              class="delete"
              aria-label="delete"
              v-on:click="isHidden = !isHidden"
            ></button>
          </div>
          <div class="message-body">
            Permido valido hasta {{ response.hora_limite }}
          </div>
        </article>
      </div>
      <article class="message is-danger" v-else>
        <div class="message-header">
          <p>Permiso no encontrado</p>
          <button
            class="delete"
            aria-label="delete"
            v-on:click="isHidden = !isHidden"
          ></button>
        </div>
        <div class="message-body">
          Permiso no encontrado, por favor, intentar de nuevo con otro id.
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isHidden: true,
      id: "",
      response: {},
      hasResponse: false,
      buttonText: "Buscar",
    };
  },
  methods: {
    handleClick: function() {
      axios
        .get(`http://localhost:3000/api/permisos/${this.id}`)
        .then((response) => {
          this.response = response.data;
          this.hasResponse = true;
        })
        .catch((error) => {
          this.response = {};
          this.hasResponse = false;
          console.log(error);
        })
        .then(() => {
          this.buttonText = "Cerrar";
        });
      this.isHidden = !this.isHidden;
    },
  },
};
</script>
