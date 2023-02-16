import { Item } from "./tracks.entity"

export interface CitiesData {
  city: string
  state: string
  date: string
  temperature: number
  genrer: string
  tracks: Item[]
}
