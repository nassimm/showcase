export class Entry {
  "id": string;
  "title": string;
  "duration": string;
  "definition": string;
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