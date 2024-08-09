export function getDaysByMonth(month){
    if (month < 1 || month > 12) {
        throw new Error("Месяц должен быть числом от 1 до 12");
    }

    return new Date(new Date().getFullYear(), month, 0).getDate();
}