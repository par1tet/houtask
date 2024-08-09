export class activeCalendarStore{
    activeDays = [];

    constructor(activeDays){
        this.activeDays = activeDays
    }

    setActiveDays(activeDays){
        this.activeDays = activeDays
    }
}