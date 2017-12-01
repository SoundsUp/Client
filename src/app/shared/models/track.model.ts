export class Track {
  id: number;
  spotifyId: string;
  name: string;

  previewUrl: string;
  album: {
    id: string,
    name:string,
    imageUrl: string
  };
  artist: {
    id: string,
    name: string
  };
  externalUrls: {
    spotify: string
  };
}

