<template>
    <div class="LastEvent">
        <h1 class="Title">Último evento</h1>
         
        <div>
            <p class="Sub-title"> Nome: </p>
            <p class="LastEvent--detail"> {{ lastArtistSetList?.venue.name }} </p>
            <p class="Sub-title"> Data: </p>
            <p class="LastEvent--detail"> {{  lastArtistSetList?.eventDate! }} </p>
            <p class="Sub-title"> Última atualização: </p>
            <p class="LastEvent--detail"> {{  formatDate(lastArtistSetList?.lastUpdated!) }}</p>
            <p class="Sub-title"> Localização: </p>
            <p class="LastEvent--detail">
                {{  lastArtistSetList?.venue.city.name }}, 
                {{  lastArtistSetList?.venue.city.state }}, 
                {{  lastArtistSetList?.venue.city.country.name }}
            </p>
        </div>
        <div @click="redirectRoute(lastArtistSetList?.url!)">
            <span class="Card">Ver mais sobre último evento </span>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import LastArtistSetList from '../Interfaces/LastArtistSetList';

export default defineComponent({
  name: "last-event-artist",
  props: {
    lastArtistSetList: {
        type: Object as PropType<LastArtistSetList>,
        required: false,
    },
    redirectRoute: {
        type: Function as PropType<(route: string) => void>,
        required: true,
    }
  },
});
</script>

<script setup lang="ts">
import { formatDate } from '../utils/date';

</script>

<style lang="scss">

$white: #FFFFFF;

.Sub-title {
    color: $white;
    font-size: 1rem;
    padding: 0.5rem 0 0.2rem 0;
}

.LastEvent {
    width: 20%; 
    display: flex; 
    flex-direction: column; 
    gap: 2rem;
}

.LastEvent--detail {
    font-size: 0.85rem;
    line-height: 1.05rem;
    padding-bottom: 0.15rem;
}

</style>