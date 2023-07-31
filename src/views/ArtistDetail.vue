<template>
  <AppError v-if="error" />
    <div v-else class="App ArtistDetail">
        <div class="ArtistDetail__content">
            <ArtistBio 
                :artist-name="lastArtistSetList?.artist.name" 
                :artist-bio="artistDetail?.artist.bio.content" 
                :redirect-route="redirectRoute" 
                :link-artist-last="artistDetail?.artist.url"
                :link-artist-set-list="lastArtistSetList?.artist.url"
            />
            
            <LastEventArtist 
                :last-artist-set-list="lastArtistSetList" 
                :redirect-route="redirectRoute" 
            />
        </div>
       
        <SimilarArtists :similarArtists="similarArtists" :redirect-route="redirectRoute" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import ArtistBio from "@/components/ArtistBio.vue";

export default defineComponent({
  name: "artist-detail"
});
</script>

<script setup lang="ts">
import { useRoute } from "vue-router";
import GetArtistDetail from "../services/GetArtistDetail"
import GetArtistDetailResult from '../Interfaces/GetArtistDetailResult';
import ArtistSimilar from '../Interfaces/ArtistSimilar';
import LastArtistSetList from '../Interfaces/LastArtistSetList';
import LastEventArtist from "@/components/LastEventArtist.vue";
import SimilarArtists from "@/components/SimilarArtists.vue";
import AppError from './Error.vue'

const $route = useRoute();

const error = ref<boolean>(false);
const idArtist = ref($route.params.mbid);
const artistDetail = ref<GetArtistDetailResult>()
const similarArtists = ref<ArtistSimilar[]>()
const lastArtistSetList = ref<LastArtistSetList>()

onBeforeMount(async() => {
  try {
    artistDetail.value = await GetArtistDetail(idArtist.value as string)

    if (artistDetail.value) {
        similarArtists.value = artistDetail.value.artist.similar.artist;
        lastArtistSetList.value = artistDetail.value.lastArtistSetList;
        error.value = false;
    }
  } catch {
    error.value = true;
  }
})

function redirectRoute(artistUrl: string) {
  window.open(artistUrl, "_blank");
}

</script>

<style lang="scss">

$transparent-black: #00000060;
$semitransparent-black: #00000080;
$transparent-grey: #73d1eb60;
$white: #FFFFFF;
$grey: #ccc;

.ArtistDetail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $grey;
  padding-top: 2rem;
}

.ArtistDetail__content {
    display: flex; 
    flex: 3; 
    flex-direction: row; 
    justify-content: space-between; 
    padding-bottom: 4rem;
}



h1.Title {
    color: $white;
    font-size: 1.75rem;
}

h2.Title {
    padding: 0.65rem 0;
    color: $white;
    font-size: 1.15rem;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Error {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-size: 1.5rem;
  font-weight: 800;
}

.Card {
    background-color: $semitransparent-black;
    border: 1px solid $transparent-grey;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.85rem;
    font-size: 0.85rem;
    padding: 0.5em 1.5em;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s;
    
    &:hover {
      cursor: pointer;
      background-color: $transparent-black;
      box-shadow: 0 0 0 3.5px $transparent-grey;
    }
}
</style>