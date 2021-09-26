import React from 'react'

import './Panel.less'


interface appProps {
    score: number,
    level: number
}
export default function Panel({score, level}: appProps) {
    return (
        <div className="panel-wrapper">
            <div>Score : {score}</div>
            <div>level: 1</div>
            
        </div>
    )
}
