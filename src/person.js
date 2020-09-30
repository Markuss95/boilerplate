export const isAdult = (age) => {
    if(age >= 18){
        return 'this person is adult';
    }else {
        return 'this person is a kid';
    }
}

export const canDrink = (age) => {
    if(age >= 21){
        return 'this person can drink';
    }else{
        return 'this person can not drink';
    }
}

const isSenior = (age) => age >= 65 ;
export default isSenior;