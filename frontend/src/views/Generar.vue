<template>
  <div>
    <Modal
      v-show="modal"
      @close="modal = false"
      message="Aprobado"
      title="Aprobado"
    ></Modal>
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
            <select v-model="formulario.motivo">
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

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link" v-on:click="handleEnviar">
            Enviar
          </button>
        </div>
        <div class="control">
          <button class="button is-light">
            Cancelar
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
        motivo: null,
      },
      motivos: [],
      modal: false,
    };
  },
  methods: {
    handleEnviar: function() {
      console.log(JSON.stringify(this.formulario));
      this.modal = true;
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
