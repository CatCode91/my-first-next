import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PersonFromFile() {
    const { data, error } = useSwr('/api/persons', fetcher)

    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>

    return (
        <ul>
            {data.map((person) => (
                <li key={person.id}>
                    <p>  {person.name} has car {person.car} </p>
                </li>
            ))}
        </ul>
    )
}
