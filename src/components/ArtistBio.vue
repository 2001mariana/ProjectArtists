<template>
    <div class="ArtistBio">
        <h1 class="Title"> {{  artistName  }} </h1>
        <div class="ArtistBio__bio App__container--list">
            {{  artistBio }}
        </div>

        <div class="ArtistBio__Links">
            <div class="Card" @click="redirectRoute(linkArtistSetList!)">
                Ver mais em SetList
            </div> 
                
            <div class="Card" @click="redirectRoute(linkArtistLast!)">
                Ver mais em Last.FM
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "similar-artists",
  props: {
    artistName: {
        type: String,
        required: false,
    },
    artistBio: {
        type: String,
        required: false,
    },
    linkArtistLast: {
        type: String,
        required: false,
    },
    linkArtistSetList: {
        type: String,
        required: false,
    },
    redirectRoute: {
        type: Function as PropType<(route: string) => void>,
        required: true,
    }
  },
});
</script>

<style lang="scss">

$text-grey: #ccc;

.ArtistBio {
    display: flex; 
    flex-direction: column; 
    gap: 1rem;
    width: 80%; 
    padding: 0 4rem; 
}

.ArtistBio__bio {
    text-align: justify;
    color: $text-grey;
}

.ArtistBio__Links {
    display: flex; 
    gap: 20px; 
}

.App__container--list {
    color: $text-grey;
    height: 320px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 8px;
  }
  
  .App__container--list::-webkit-scrollbar {
    width: 4px;
  }
  
  .App__container--list::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .App__container--list::-webkit-scrollbar-thumb {
    background-color: #ffffff80;
    border-radius: 20px;
  }
</style>