var day = prompt('введите день')
var month = prompt('введите месяц')
if (day >= 21 && month === 'Март' && day <= 31 || day >= 1 && month === 'Апрель' && day <= 20){
    console.log('Oven')
}else if (day >= 21 && month === 'Апрель' && day <= 30 || day >= 1 && month === 'Май' && day <= 20){
    console.log('Telets')
}else if (day >= 21 && month === 'Май' && day <= 31 || day >= 1 && month === 'Июнь' && day <= 21){
    console.log('Bliznetsy')
}else if (day >= 22 && month === 'Июнь' && day <= 30 || day >= 1 && month === 'Июль' && day <= 22){
    console.log('Rac')
}else if (day >= 23 && month === 'Июль' && day <= 31 || day >= 1 && month === 'Август' && day <= 23){
    console.log('Lev')
}else if (day >= 24 && month === 'Август' && day <= 31 || day >= 1 && month === 'Сентябрь' && day <= 23){
    console.log('Deva')
}else if (day >= 24 && month === 'Сентябрь' && day <= 30 || day >= 1 && month === 'Октябрь' && day <= 23){
    console.log('Vesy')
}else if (day >= 24 && month === 'Октябрь' && day <= 31 || day >= 1 && month === 'Ноябрь' && day <= 22){
    console.log('Skorpion')
}else if (day >= 23 && month === 'Ноябрь' && day <= 30 || day >= 1 && month === 'Декабрь' && day <= 21){
    console.log('Strelets')
}else if (day >= 22 && month === 'Декабрь' && day <= 31 || day >= 1 && month === 'Январь' && day <= 20){
    console.log('Kozerog')
}else if (day >= 21 && month === 'Январь' && day <= 31 || day >= 1 && month === 'Февраль' && day <= 20){
    console.log('')
}else if (day >= 21 && month === 'Февраль' && day <= 28 || day >= 1 && month === 'Март' && day <= 20){
    console.log('')
}
else {
    console.log('Введите конкретный месяц или день нап.Декабрь от 1 до 31')
}