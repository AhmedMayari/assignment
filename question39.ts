function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    let album: Record<string, any> = {
        "artist": artist,
        "title": title
    }
    if (tracks !== undefined) {
        album["tracks"] = tracks
    }
    return album
}

let album1 = make_album("Artist 1", "Album 1")
let album2 = make_album("Artist 2", "Album 2", 12)
let album3 = make_album("Artist 3", "Album 3")

console.log(album1)
console.log(album2)
console.log(album3)
