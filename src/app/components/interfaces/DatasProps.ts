export interface DatasProps{
    name: string,
    country?: string,
    lat: number,
    lon: number,
    state?: string
}

export interface cityProps {
    city: string
    state: string
}

export interface datasUtilizableProps {
weather: string
main: string
img: string
temp: number
feeks_like: number
temp_max: number
temp_min: number
wind: number
humidity: number
}