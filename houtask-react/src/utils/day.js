export class day{
    constructor(data, isActive){
        this.data = data
        this.isActive = isActive
    }

    setIsActive(newActive){
        this.isActive = newActive
    }
}

export function createArrayDay(count, month, activeDays){
    let answer = []

    for(let i = 1;i !== count+1;i++){
        if (activeDays.includes(i)){
            answer.push(new day(`${month}:${i}`,true))
        }else{
            answer.push(new day(`${month}:${i}`,false))
        }
    }

    return answer
}