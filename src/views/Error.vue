<template>
    <div class="App Error">
        Não conseguimos encontrar resultados. Por favor, entre em contato com o administrador.
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "app-error"
  });
  </script>

<style lang="scss">
  $white: #FFFFFF;

  .Error {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    font-size: 1.5rem;
    font-weight: 800;
  }

</style>