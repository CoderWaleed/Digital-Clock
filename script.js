let showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dayNumber = date.getDay();
    let MonthNumber = date.getMonth();
    let months = ['Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const h1Element = document.querySelector('h1');
    const clockElement = document.getElementById('clock');
    const dateElement =  document.querySelector('#date');
    const dayElement = document.querySelector('#day');
     
      document.querySelector('#day').textContent = days[dayNumber];
    
    let formattedDate = date.getDate() + " / " + months[MonthNumber] + " / " + date.getFullYear();
    document.querySelector('#date').textContent = formattedDate;
    

    let currentHour24 = hours;
    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }  
    

    hours = (hours <10) ? "0" + hours : hours;
    minutes = (minutes <10) ? "0" + minutes : minutes;
    seconds = (seconds <10) ? "0" + seconds : seconds;


    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById('clock').innerHTML = time;

    if (currentHour24 > 8 && currentHour24 < 18) {
        // DAYTIME LOGIC (6:00 AM to 5:59 PM)
        document.body.style.backgroundColor = '#635c72c8'; // Daytime color
        
           h1Element.style.color = 'rgba(51, 51, 51, 0.7)';
        clockElement.style.color = 'rgba(51, 51, 51, 0.7)';
        dateElement.style.color = 'rgba(51, 51, 51, 0.7)';
        dayElement.style.color = 'rgba(51, 51, 51, 0.7)';
        
    } else { // <-- Everything for NIGHT is now properly contained here
        // NIGHTTIME LOGIC (6:00 PM to 10:59 AM)
        document.body.style.backgroundColor = '#1e2031ff'; // Nighttime color

        h1Element.style.color = 'rgb(185, 170, 159)';
        clockElement.style.color = 'rgba(204, 191, 191, 0.52)';
        dateElement.style.color = 'rgba(209, 201, 201, 0.52)';
        dayElement.style.color = 'rgba(209, 201, 201, 0.52)';
    }
}
setInterval(showTime, 1000);

showTime();
