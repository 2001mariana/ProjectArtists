import GetArtistDetailResult from "@/Interfaces/GetArtistDetailResult";
import axios from "axios";

export default async function GetArtistDetail(mbid: string): Promise<GetArtistDetailResult> {
    return (
      await axios.get<GetArtistDetailResult>(
        `http://localhost:8080/artist/${mbid}`
      )
    ).data;
}