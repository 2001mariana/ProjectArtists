<template>
    <button 
      :class="[diferentClass, {'display-none': displayNone}]"
      @click="clicado()" 
      :disabled="desabilitado"
    >
      <span v-if="icone" class="icon">
        <i :class="icone"></i>
      </span>
      <span v-if="texto">{{texto}}</span>
    </button>
</template>
<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonTracker",
  emits: ['clicado'],
  props: {
    desabilitado: {
      type: Boolean,
      required: false
    },
    icone: {
      type: String,
      required: false
    },
    texto: {
      type: String,
      required: false
    },
    displayNone: {
      type: Boolean,
      required: false
    },
    diferentClass: {
      type: String,
      required: true
    },
  },
  methods: {
    clicado () : void {
      this.$emit('clicado')
    }
  }
});
</script>
  
<style lang="scss">
$text-grey: #ccc;
$transparent-black: #00000040;

$button-solid-primary-bg-color: #041944;
$button-solid-primary-color: #ccc;
$button-solid-primary-disabled-bg-color: #23346240;
$button-solid-primary-focus-bg-color: #233462;
$button-solid-primary-focus-box-shadow-color: #23346240;
$button-solid-primary-hover-bg-color: #23346220;

$button-outlined-primary-border-color: #041944;
$button-outlined-primary-color: #041944;
$button-outlined-primary-disabled-border-color: #23346240;
$button-outlined-primary-disabled-color: #23346240;
$button-outlined-primary-focus-border-color: #233462;
$button-outlined-primary-focus-box-shadow-color: #23346240;
$button-outlined-primary-focus-color: #233462;
$button-outlined-primary-hover-border-color: #233462;
$button-outlined-primary-hover-bg-color: #233462;
$button-outlined-primary-hover-color: #ffffff;

button.Button.display-none {
  display: none;
}


button.Button {
    font-family: sans-serif;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: $text-grey;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    font-weight: 200;
    line-height: 1.5rem;
    letter-spacing: .075rem;
    outline: none;
    padding: 7.5px 15px;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
      color 0.75s;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: $transparent-black;
    }
  }

  button.Button--small {
    padding: 4px;
  }

  button.Button--rounded {
    border-radius: 14px;
  }
  
  button.Button--solid-primary {
    background-color: $button-solid-primary-bg-color;
    color: $button-solid-primary-color;

    &:disabled {
      background-color: $button-solid-primary-disabled-bg-color;
    }

    &:focus {
      background-color: $button-solid-primary-focus-bg-color;
      box-shadow: 0 0 0 3.5px $button-solid-primary-focus-box-shadow-color;
    }

    &:hover {
      background-color: $button-solid-primary-hover-bg-color;
    }
  }

  button.Button--outlined-primary {
    border-color: $button-outlined-primary-border-color;
    color: $button-outlined-primary-color;

    &:disabled {
      border-color: $button-outlined-primary-disabled-border-color;
      color: $button-outlined-primary-disabled-color;
    }

    &:focus {
      border-color: $button-outlined-primary-focus-border-color;
      box-shadow: 0 0 0 3.5px $button-outlined-primary-focus-box-shadow-color;
      color: $button-outlined-primary-focus-color;
    } 

    &:hover {
      border-color: $button-outlined-primary-hover-border-color;
      background-color: $button-outlined-primary-hover-bg-color;
      color: $button-outlined-primary-hover-color;
      transition: background-color 0.5s, border-color 0.5s, box-shadow 0.5s,
      color 0.5s;
    }
  }

</style>