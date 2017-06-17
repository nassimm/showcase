import * as moment from 'moment'

export class Entry {
  id: string;
  title: string;
  duration: string;
  definition: string;
  publishedAt: string;
  tags: string[];
  thumbnails: any;
  played: number;
  addedAt: number;
  constructor(id: string,
              title: string,
              duration: string,
              definition: string,
              publishedAt: string,
              tags: string[],
              thumbnails: string[]
              ) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.definition = definition;
    this.publishedAt = publishedAt;
    this.tags = tags;
    this.thumbnails= thumbnails;
    this.played = 0;
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

export class MostPlayedData {
  id: string;
  times: number;
  constructor(id: string, times: number) {
    this.id=id;
    this.times = times;
  }

}