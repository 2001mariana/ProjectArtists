import axios from "axios";
import GetAllArtistsParams from "@/Interfaces/GetAllArtistsParams";
import GetAllArtistsResult from "@/Interfaces/GetAllArtistsResult";

export default async function GetAllArtists(params: GetAllArtistsParams): Promise<GetAllArtistsResult> {
    return (
      await axios.get<GetAllArtistsResult>(
        `http://localhost:8080/artist?nameArtist=${params.nameArtist}&page=${params.page}`
      )
    ).data;
}