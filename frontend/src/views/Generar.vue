<template>
  <!--
  RUT/Pasaporte
  Region
  Comuna
  Direccion
  Motivo
  -->
  <form id="generar" class="container section box mt-4">
    <div class="field">
      <label class="label">RUT/Pasaporte</label>
      <div class="control">
        <input class="input is-dark is-rounded" type="text" placeholder="" />
      </div>
      <p class="help">No usar puntos ni guiones</p>
    </div>

    <div class="field">
      <label class="label">Region</label>
      <div class="control">
        <input class="input is-dark is-rounded" type="text" placeholder="" />
      </div>
    </div>

    <div class="field">
      <label class="label">Comuna</label>
      <div class="control">
        <input class="input is-dark is-rounded" type="text" placeholder="" />
      </div>
    </div>

    <div class="field">
      <label class="label">Direccion</label>
      <div class="control">
        <input class="input is-dark is-rounded" type="text" placeholder="" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button class="button is-link">Enviar</button>
      </div>
      <div class="control">
        <button class="button is-light">Cancelar</button>
      </div>
    </div>
  </form>
</template>
