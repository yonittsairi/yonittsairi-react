import React from 'react'
import { Preview } from './Preview';

export function List({ cycles }) {
    return cycles.map((cycle) => {
        return (

            <Preview cycle={cycle} key={cycle.title} />
        )

    })
}

