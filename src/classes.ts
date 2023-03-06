export class Song {
    title: string;
    artist: string;
    tempo: number;

    constructor(title: string, artist: string, tempo: number) {
        this.title = title;
        this.artist = artist;
        this.tempo = tempo;
    }
}

export class SetList {
    id: string | null;
    name: string;
    songs: Song[];
    spotifyPlaylist: string;

    constructor(name: string, songs: Song[], spotifyPlaylist = "",  id = null) {
        this.id = id;
        this.name = name;
        this.songs = songs;
        this.spotifyPlaylist = spotifyPlaylist;
    }
}