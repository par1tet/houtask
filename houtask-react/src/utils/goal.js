export class goal{
    constructor(name, desc) {
        this.name = name.trim(),
        this.desc = desc,
        this.activeDays = [],
        this.lastWeekActivity = []
    }

    changeGoal(name, desc){
        this.name = name
        this.desc = desc
    }
}