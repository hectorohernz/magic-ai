


function renderTimeApiToUi(){
    // Checklist 
    /*

        [] -  add month into object
        [] -  add year 
        
       
    */


    // Intizting date contronstor 
    const date = new Date();
    const DateInfomation = {};

    // Current Date (Number) of the month 
    DateInfomation.currentDayOfMonth = date.getDate();
    
    // Day Of the Week 

    switch(date.getDay()){
        case 0:
            DateInfomation.currentDayOfWeek = "Sunday";
            break;
        case 1:
            DateInfomation.currentDayOfWeek = "Monday";
            break;
        case 2:
            DateInfomation.currentDayOfWeek = "Tuesday";
            break;
        case 3:
            DateInfomation.currentDayOfWeek = "Wednesday";
            break;
        case 4:
            DateInfomation.currentDayOfWeek = "Thursday";
            break;
        case 5:
            DateInfomation.currentDayOfWeek = "Friday";
            break;
        case 6:
            DateInfomation.currentDayOfWeek = "Saturday";
            break;
        default:
            DateInfomation.currentDayOfWeek = "Error";
    }



    if(date.getMinutes() < 10){
        DateInfomation.currentMinutes = `0${date.getMinutes()}`
    } else{
        DateInfomation.currentMinutes = `${date.getMinutes()}`
    }


    // Covert Hours into Normal Time
    if(date.getHours() > 12){
        DateInfomation.currentTime = `${date.getHours() - 12}:${DateInfomation.currentMinutes}`;
    } else{
        DateInfomation.currentTime  = `${date.getHours()}:${DateInfomation.currentMinutes}`;
    }

    
    console.log(DateInfomation);
}

renderTimeApiToUi();