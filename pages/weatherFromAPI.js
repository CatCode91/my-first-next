import useSwr from 'swr'

const weatherEndpoint = "http://api.weatherapi.com/v1/current.json?key=3cf67d491b50492083d155357210107&q=Minsk&aqi=no"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PersonFromFile() {
    const { data, error } = useSwr(weatherEndpoint, fetcher)

    if (error) return <div>Failed to load weather</div>
    if (!data) return <div>Loading...</div>

    return<div>
        <p>Today is {new Intl.DateTimeFormat("en-EN", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(new Date(data.location.localtime))}
        </p>
        <p>Weather in {data.location.name} is <b>{data.current.temp_c} &deg;C</b>  ({data.current.condition.text})</p>
    </div>
}
