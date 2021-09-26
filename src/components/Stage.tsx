import React, { useRef } from 'react'

import './Stage.less'
interface appProps {
    setScore: Function,
    setLevel: Function,
    score: number,
    level: number
}

export default function Stage ({score, level, setScore, setLevel}: appProps){
    let [newX, setNewX] = React.useState(0)
    let [newY, setNewY] = React.useState(0)
    let [foodX, setFoodX] = React.useState(Math.round(Math.random()*29)*10)
    let [foodY, setFoodY] = React.useState(Math.round(Math.random()*29)*10)
    const [snakeBodyList, setSnakeBodyList] = React.useState<number[]>([])
    const [snakeBodyX, setSnakeBodyX] = React.useState(0)
    const [snakeBodyY, setSnakeBodyY] = React.useState(0)
    const [direction, setDirection] = React.useState('')
    let [timerID, setTimerID] = React.useState(0)
    const snakeRef = useRef<HTMLDivElement>(null)
    const foodRef = useRef<HTMLDivElement>(null)
    React.useEffect(() => {

        if (newX < 0 || newX >= 300 || newY < 0 || newY >= 300){
            clearInterval(timerID)
            alert('Game Over!')
            setNewX(0)
            setNewY(0)
        }
        if (newX === foodX && newY === foodY){
            setFoodX(Math.round(Math.random()*29)*10)
            setFoodY(Math.round(Math.random()*29)*10)
            setScore(score+1)
            setSnakeBodyList([...snakeBodyList, 1])
            // if (snakeBodyList.length !== 0){
            //     setInterval(()=>{
            //         if (direction === 'left') {
            //             setSnakeBodyX(newX + snakeBodyList.length*10)
            //             setSnakeBodyY(newY)
            //         }else if (direction === 'right'){
            //             setSnakeBodyX(newX - snakeBodyList.length*10)
            //             setSnakeBodyY(newY)
            //         }else if (direction === 'up'){
            //             setSnakeBodyX(newX)
            //             setSnakeBodyY(newY + snakeBodyList.length*10)
            //         }else if (direction === 'down'){
            //             setSnakeBodyX(newX)
            //             setSnakeBodyY(newY - snakeBodyList.length*10)
            //         }
            //     }, 250)
            //}
            
            
        }
        console.log(newX, newY)
        
        
    }, [newX, newY])

    document.onkeyup = (e) => {
        let timer1: number
        clearInterval(timerID)
        timer1 = setInterval(() => {
            if (e.key === 'ArrowRight') {
                setNewX(newX => newX + 10)
                setDirection('right')
            }else if (e.key === 'ArrowLeft'){
                setNewX(newX => newX - 10)
                setDirection('left')
            }else if (e.key === 'ArrowUp'){
                setNewY(newY => newY - 10)
                setDirection('up')
            }else if (e.key === 'ArrowDown'){
                setNewY(newY => newY + 10)
                setDirection('down')
            }else clearInterval(timerID)
        }, 250)
        setTimerID(timer1)
    }

    return (
        <div className="stage-wrapper">
            <div className="snake" ref={snakeRef} >
                <div style={{ left: newX, top: newY }}></div>
                {/* <div style={{ left: newX-10, top: newY }}></div> */}
                {
                    snakeBodyList.map((item, index)=>{
                        return (
                            <div 
                                key={index} 
                                style={
                                    { 
                                        left: direction === 'left'? newX + (index+1)*10 : direction === 'right'? newX - (index+1)*10: newX, 
                                        top: direction === 'up'? newY + (index+1)*10 : direction === 'down'? newY - (index+1)*10: newY
                                    }
                                }
                            />
                        ) 
                    })
                }
            </div>
            <div className="food" ref={foodRef} style={{left: foodX, top: foodY}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
