<template>
  <div>
    <Modal v-show="modal" @close="modal = false" v-bind:data="response"></Modal>
    <form
      id="generar"
      class="container section box mt-4"
      action="javascript:void(0);"
    >
      <div class="field">
        <label class="label">RUT/Pasaporte</label>
        <div class="control">
          <input
            class="input is-dark is-rounded"
            type="text"
            placeholder=""
            v-model="formulario.rut"
          />
        </div>
        <p class="help">No usar puntos ni guiones</p>
      </div>

      <div class="field">
        <label class="label">Region</label>
        <div class="control">
          <input
            class="input is-dark is-rounded"
            type="text"
            placeholder=""
            v-model="formulario.region"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Comuna</label>
        <div class="control">
          <input
            class="input is-dark is-rounded"
            type="text"
            placeholder=""
            v-model="formulario.comuna"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Direccion</label>
        <div class="control">
          <input
            class="input is-dark is-rounded"
            type="text"
            placeholder=""
            v-model="formulario.direccion"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Motivo</label>
        <div class="control">
          <div class="select">
            <select v-model="formulario.ventana">
              <option
                v-for="(motivo, index) in motivos"
                :key="index"
                :value="motivo.ventana"
              >
                {{ motivo.descripcion }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-link is-pulled-right" v-on:click="handleEnviar">
            Enviar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import axios from "axios";

export default {
  components: {
    Modal,
  },
  data: function() {
    return {
      formulario: {
        rut: null,
        region: "",
        comuna: "",
        direccion: "",
        ventana: null,
      },
      motivos: [],
      modal: false,
      response: {
        data: {},
        titulo: "",
        texto: "",
      },
    };
  },
  methods: {
    handleEnviar: function() {
      axios
        .post("http://localhost:3000/api/permisos/", {
          id_persona: this.formulario.rut,
          region: this.formulario.region,
          comuna: this.formulario.comuna,
          direccion: this.formulario.direccion,
          ventana: this.formulario.ventana,
        })
        .then((response) => {
          this.response.data = response.data;
          this.response.titulo = "Permiso aprobado";
          this.response.texto =
            "La informacion respecto de su permiso se detalla a continuacion";
        })
        .catch(() => {
          this.response.titulo = "Permiso denegado";
          this.response.texto = "Informacion entregada no valida";
        })
        .then(() => {
          this.modal = true;
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/motivos")
      .then((response) => {
        this.motivos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
