export class Track {
  id: string;
  name: string;

  preview_url: string;

  album: {
    id: string;
    name: string;
    images: {
      height: number;
      url: string;
      width: number
    }[]
  };

  artists: {
    id: string;
    name: string;
    external_urls: {
      spotify: string
    }
  }[];

  external_urls: {
    spotify: string
  };
}

