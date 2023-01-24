import React from 'react'
import ReactDOM from 'react-dom/client'

function List() {
    return (
        <>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
                quisquam expedita molestiae quod sit nemo laboriosam! Ut rerum,
                nobis distinctio quaerat reiciendis inventore aspernatur
                repellat, ullam saepe vitae doloremque.
            </p>
        </>
    )
}

type TitleProps = {
    name: string
    text: string
    year: number
}

const Title = ({ name, text, year }: TitleProps) => {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>Year: {year}</div>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title
                name="App"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                year={2023}
            />
            <Title
                name="React"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                exercitationem corporis atque consequunt,"
                year={2022}
            />
            <Title
                name="TS"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                exercitationem corporis atque consequunt,"
                year={2021}
            />
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
