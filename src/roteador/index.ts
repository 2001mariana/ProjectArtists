import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import GetAllArtists from '../views/GetAllArtists.vue'
import ArtistDetailVue from "@/views/ArtistDetail.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'GetAllArtists',
        component: GetAllArtists
    },
    {
        path: '/:mbid',
        name: 'ArtistDetail',
        component: ArtistDetailVue
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;
