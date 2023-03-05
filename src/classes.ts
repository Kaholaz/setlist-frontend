export class Song {
    title: string;
    artist: string;
    tempo: number;
    timeSignature: number;

    constructor(title: string, artist: string, tempo: number, timeSignature: number) {
        this.title = title;
        this.artist = artist;
        this.tempo = tempo;
        this.timeSignature = timeSignature;
    }
}

export class SetList {
    songs: Song[];
    name: string;

    constructor(name: string, songs: Song[]) {
        this.name = name;
        this.songs = songs;
    }
}