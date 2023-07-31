<template>
  <div class="SimilarArtists">
    <h2 class="Title">Quem viu este artista também se interessou:</h2>

    <div class="SimilarArtists__container">
        <div 
            v-for="artist in similarArtists" 
            :key="artist.url"
            class="SimilarArtists__card"
            @click="redirectRoute(artist.url)"
        >
            {{ artist.name }}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import ArtistSimilar from '@/Interfaces/ArtistSimilar';

export default defineComponent({
  name: "similar-artists",
  props: {
    similarArtists: {
        type: Object as PropType<ArtistSimilar[]>,
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

$transparent-black: #00000060;
$semitransparent-black: #00000080;
$transparent-grey: #73d1eb60;
$white: #FFFFFF;
$grey: #ccc;

.SimilarArtists {
  display: flex;
  flex-direction: column;
  flex: 1; 
  padding: 0 4rem 2rem 4rem;
}

.SimilarArtists__card {
    background-color: $semitransparent-black;
    border: 1px solid $transparent-grey;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.85rem;
    font-size: 0.85rem;
    padding: 0 0.65em;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s;
    
    &:hover {
      cursor: pointer;
      background-color: $transparent-black;
      box-shadow: 0 0 0 3.5px $transparent-grey;
    }
}

.SimilarArtists__card:not(:first-child) {
    margin: 0.35rem;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
}
</style>