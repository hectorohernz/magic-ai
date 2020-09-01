export default function currentDateData() {

    const date = new Date(); // Creating a new date object
    const DateInfomation = {}; // Gathering local date date into a new object
    
    DateInfomation.currentDayOfMonth = date.getDate(); // Day of the month:  1-31
    DateInfomation.currentYear = date.getFullYear();  // Number of year in the year : Example: 2020. 
  
    // Day of the week 
    switch (date.getDay()) {
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
  
    // Month Of The Year
    switch (date.getMonth()){
      case 0:
        DateInfomation.currentMonth = "January";
        break;
      case 1:
        DateInfomation.currentMonth = "February";
        break;
      case 2:
        DateInfomation.currentMonth = "March";
        break;
      case 3:
        DateInfomation.currentMonth = "April";
        break;
      case 4:
        DateInfomation.currentMonth = "May";
        break;
      case 5:
        DateInfomation.currentMonth = "June";
        break;
      case 6:
        DateInfomation.currentMonth = "July";
        break;
      case 7:
        DateInfomation.currentMonth = "August";
        break;
      case 8:
        DateInfomation.currentMonth = "September";
        break;
      case 9:
        DateInfomation.currentMonth = "October";
        break;
      case 10:
        DateInfomation.currentMonth = "November";
        break;
      case 11:
        DateInfomation.currentMonth = "December";
        break;
      default:
        DateInfomation.currentMonth = "Error In Month";
    }
  
    // Fixing the current minute for user interface.  
    if (date.getMinutes() < 10) {
      DateInfomation.currentMinutes = `0${date.getMinutes()}`;
    } else {
      DateInfomation.currentMinutes = `${date.getMinutes()}`;
    }
  
    // military time conversion
    if (date.getHours() > 12) {
      DateInfomation.currentTime = `${date.getHours() - 12}:${
        DateInfomation.currentMinutes
      }`;
    } else {
      DateInfomation.currentTime = `${date.getHours()}:${
        DateInfomation.currentMinutes
      }`;
    }
  
    // Returning the date 
    return DateInfomation;
  }
  
