<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-5 has-text-black">
          Comisaria virtual
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/validar" class="button is-info">
              <strong>Validar</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
