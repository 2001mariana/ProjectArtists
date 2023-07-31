import ArtistBio from "./ArtistBio"
import ArtistSimilar from "./ArtistSimilar"
import LastArtistSetList from "./LastArtistSetList"

export default interface GetArtistDetailResult {
    lastArtistSetList: LastArtistSetList,
    artist: {
        name: string,
        mbid: string,
        url: string,
        similar: {
            artist: ArtistSimilar[]
        },
        bio: ArtistBio,
    }
}