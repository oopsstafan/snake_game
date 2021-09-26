import {makeObservable, observable, action} from 'mobx'


export const store = makeObservable(
    {
        score: 0,
        level: 1,
        increment(value){
            this.count = this.count + value*1
        }, 
        decrement(value){
            this.count = this.count - value*1
        },
        incrementAsync(){
            this.timer = setInterval(()=>{
                this.count = this.count + 1
            }, 1000)
        },
        stopTimer(){
            clearInterval(this.timer)
        }
    },
    {
        count: observable,
        increment: action,
        decrement: action,
    }
)