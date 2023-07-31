import Artist from "./Artist"

export default interface LastArtistSetList {
    eventDate: string,
    lastUpdated: string,
    artist: Artist,
    venue: {
        name: string,
        city: {
            name: string,
            state: string,
            country: {
                name: string
            }
        }
    },
    url: string
}
