<template>
<main class="columns is-gapless is-multiline">
  <div class="column conteudo">
    <div class="Header">
      <span class="Header__link" @click="redirectToHome">
        <span class="Header__link--icon"><i class="fa-solid fa-house"></i></span>
        ProjectArtists
      </span>
    </div>
    <router-view></router-view>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "App"
});
</script>

<script setup lang="ts">
const $router = useRouter();

function redirectToHome() {
  $router.push('../../getAllArtists');
}
</script>

<style lang="scss">
.Header {
  height: 60px; 
  background-color: #000;
  color: #73d1eb;
  padding: 10px 4rem;
  transition: color 0.5s;

  &:hover {
    color: #e663b8;
  }
}

.Header__link {
  cursor: pointer;
}

.Header__link--icon {
  padding-right: 8px;
}

html::-webkit-scrollbar {
  display: none;
}
</style>