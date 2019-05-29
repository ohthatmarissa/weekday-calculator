
export function getUserDate(dateInput) {
    let dateNumber = dateInput.getDay();
  
    let dayOfTheWeek = "";
    if (dateNumber === 0) {
      dayOfTheWeek = "Monday";
    }
    if (dateNumber === 1) {
      dayOfTheWeek = "Tuesday";
    }
    if (dateNumber === 2) {
      dayOfTheWeek = "Wednesday";
    }
    if (dateNumber === 3) {
      dayOfTheWeek = "Thursday"; 
    }
    if (dateNumber === 4) {
      dayOfTheWeek = "Friday";
    }
    if (dateNumber === 5) {
      dayOfTheWeek = "Saturday";
    }
    if (dateNumber === 6) {
      dayOfTheWeek = "Sunday";
    }
    return dayOfTheWeek;
  }