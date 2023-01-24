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

function Title() {
    return <h1>Hello TS</h1>
}

const App = () => {
    return (
        <div className="app">
            <Title />
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
