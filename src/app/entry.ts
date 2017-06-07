export class Entry {
  "kind": string;
  "etag": string;
  "id": {
    "kind": string,
    "videoId": string,
    "channelId": string,
    "playlistId": string
  };
  "snippet": {
    "publishedAt": string;
    "channelId": string;
    "title": string;
    "description": string;
    "thumbnails": {
      (key): {
        "url": string,
        "width": number,
        "height": number
      }
    },
    "channelTitle": string,
    "liveBroadcastContent": string
  }
}

export class Playlist {
  id: number;
  name: string;
  entries: Entry[];
  constructor(id: number, name: string) {
    this.id=id;
    this.name = name;
    this.entries = [];
  }
}