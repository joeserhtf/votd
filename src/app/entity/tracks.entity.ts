export interface Musics {
  query: string
  tracks: Tracks
}

export interface Tracks {
  totalCount: number
  items: Item[]
  pagingInfo: PagingInfo
}

export interface Item {
  data: Data
}

export interface Data {
  uri: string
  id: string
  name: string
  albumOfTrack: AlbumOfTrack
  artists: Artists
  contentRating: ContentRating
  duration: Duration
  playability: Playability
}

export interface AlbumOfTrack {
  uri: string
  name: string
  coverArt: CoverArt
  id: string
  sharingInfo: SharingInfo
}

export interface CoverArt {
  sources: Source[]
}

export interface Source {
  url: string
  width: number
  height: number
}

export interface SharingInfo {
  shareUrl: string
}

export interface Artists {
  items: Item2[]
}

export interface Item2 {
  uri: string
  profile: Profile
}

export interface Profile {
  name: string
}

export interface ContentRating {
  label: string
}

export interface Duration {
  totalMilliseconds: number
}

export interface Playability {
  playable: boolean
}

export interface PagingInfo {
  nextOffset: number
  limit: number
}
