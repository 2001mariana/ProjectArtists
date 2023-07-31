<template>
  <AppError v-if="error" />
    <div v-else className="App">
      <div className='App__container'>
        <div className='App__form centralizar'>
          <input 
            class="Input"
            placeholder='Nome do artista' 
            v-model="searchedArtist"
          />
          <Button 
            diferentClass="Button Button--solid-primary" 
            icone="fas fa-search" 
            :onClicado="getAllArtists"
            texto="Pesquisar" 
          />
        </div>
        <div 
          v-if="allArtists === undefined || allArtists.artist.length === 0" 
          className='App__container--no-list centralizar'
        >
          <span>Não encontramos resultados para sua busca, tente novamente. </span>
        </div>
        <div v-else class="App__container--list">
          <div 
            class="ListItem cursor-pointer" 
            v-for="artist in allArtists?.artist" 
            :key="artist.mbid"
            @click="changeRouteToArtist(artist)"
          >
            {{artist.name}}
          </div>
        </div>
        <div v-if="allArtists !== undefined" class="Paginacao centralizar">
          
          <Button 
            :onClicado="backPage" 
            :display-none="atualPage === 1"
            icone="fas fa-arrow-left"
            diferent-class="Button Button--small Button--rounded"  
          />
          <div class="Paginacao__atual centralizar">{{atualPage}}</div>
          <Button 
            :onClicado="nextPage" 
            :display-none="allArtists.artist.length < 30"
            icone="fas fa-arrow-right"
            diferent-class="Button Button--small Button--rounded"  
          />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "get-all-artists"
});
</script>


<script setup lang="ts">
import { ref, watch } from "vue";
import GetAllArtists from '../services/GetAllArtists';
import GetAllArtistsResult from '../Interfaces/GetAllArtistsResult';
import Artist from '../Interfaces/Artist';
import Button from "@/components/Button.vue";
import AppError from './Error.vue'

const error = ref<boolean>(false);
const searchedArtist = ref<string>('');
const allArtists = ref<GetAllArtistsResult>();
const atualPage = ref<number>(1);

const $router = useRouter();

watch(atualPage, () => { getAllArtists()})

watch(searchedArtist, () => { 
  if (searchedArtist.value === '') {
    restartPage();
  }
})

function backPage () {
  if (atualPage.value > 1) {
    atualPage.value = atualPage.value - 1;
  }
}

function nextPage () {
  atualPage.value = atualPage.value + 1;  
}

function restartPage () {
  atualPage.value = 1;  
}

function changeRouteToArtist (artist: Artist) {
  $router.push(artist.mbid);
}

async function getAllArtists () {
  if (searchedArtist.value !== '') {
    try {
      const response: GetAllArtistsResult = await GetAllArtists({nameArtist: searchedArtist.value, page: atualPage.value})
      allArtists.value = response;
    } catch {
      error.value = true;
    }
  } else {
    allArtists.value = undefined;
    restartPage()
  }
}
</script>

<style lang="scss">

$text-grey: #ccc;
$transparent-white: #ffffff10;
$transparent-black: #00000040;

$input-primary-color: #8084bb;
$input-primary-placeholder-color: #424f80;
$input-primary-border-color: #8084bb;
$input-primary-border-focus-color: #8084bb;


.display-none {
  display: none;
}

.cursor-pointer:hover {
  cursor: pointer;
  transition: cursor 0.85s;

}

.Paginacao {
  color: $text-grey;
  padding: 0.5rem 0;
}

.Paginacao__atual {
  color: $text-grey;
  padding: 0.5rem 2rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  background-color: $transparent-black;
}

.App {
    height: calc(100vh - 60px);
    background: no-repeat center linear-gradient(
      to bottom,
      rgb(0,0,0, 0.9),
      rgb(0, 25, 84, 0.3),
      rgb(41, 63, 127, 0.3),
    ), url(../assets/images/dark_bg.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;

}
  
  .App__container {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 0;
  }
  
  .App__form {
    margin-top: 10rem;
    width: 100%;
    gap: 1rem;
  }
  
  .centralizar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .App__container--no-list {
    color: $text-grey;
    font-family: sans-serif;
    font-size: 1rem;
    padding: 1.25rem 0;
  }
  
  .App__container--list {
    // 
    color: $text-grey;
    height: 280px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .App__container--list::-webkit-scrollbar {
    width: 8px;
  }
  
  .App__container--list::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .App__container--list::-webkit-scrollbar-thumb {
    background-color: #ffffff80;
    border-radius: 20px;
  }

  input.Input  {
    border: none;
    border-bottom: 1px solid $input-primary-border-focus-color;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    color: $input-primary-color;
    background-color: $transparent-white;
    padding-left: 0.5rem;
  }

    
  input.Input::placeholder {
    color: $input-primary-placeholder-color;
    padding-left: 0.5rem;
  }

  input.Input:focus {
    border-bottom: 2px solid $input-primary-border-color;
    outline: none;
  }

  .ListItem {
   color: #ccc;
   font-family: sans-serif;
   font-size: 0.9rem;
   line-height: 1.2rem;
   width: 96%;
   padding: 0.8rem 0.6rem;
   display: flex;
   flex-direction: row;
   gap: 0.5rem;
   background-color: $transparent-black;
   border-radius: 8px;
   margin: 0.1rem;
  }

</style>