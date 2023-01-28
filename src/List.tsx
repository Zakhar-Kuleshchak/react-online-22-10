import React from 'react'
import './List.css'

type Props = {}

export const List = (props: Props) => {
    let data = false
    let styleObj = {
        color: 'white',
        backgroundColor: data ? 'purple' : 'tomato',
        padding: '15px',
    }
    return (
        <>
            <ul>
                <li>list 1</li>
                <li>list 2</li>
                <li>list 3</li>
            </ul>
            <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                adipisci maiores, obcaecati facilis eius veritatis accusantium
                blanditiis hic consequuntur, unde rerum aspernatur cupiditate
                libero animi aut vitae. Beatae, quod laborum?
            </p>
            <p style={styleObj}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
                quisquam expedita molestiae quod sit nemo laboriosam! Ut rerum,
                nobis distinctio quaerat reiciendis inventore aspernatur
                repellat, ullam saepe vitae doloremque.
            </p>
        </>
    )
}

// export default List
