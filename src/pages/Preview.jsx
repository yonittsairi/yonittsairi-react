import React from 'react'

export function Preview({ cycle }) {
    return <div>
        <div className="flex align-center prev"><div className="card"><img src={cycle.imgUrl} /></div><div><h2>{cycle.title}</h2><p>{cycle.desc}</p></div></div>

        {cycle.title === "Rosemary Filet Mignon" && < hr />}
        {cycle.title === "Seared Salmon Fillet" && < hr />}

    </div >
}

