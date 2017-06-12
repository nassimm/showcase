export class Entry {
  "id": string;
  "title": string;
  "duration": string;
  "definition": string;
  constructor(id: string, title: string, duration: string, definition: string) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.definition = definition;
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