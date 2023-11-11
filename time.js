let dateTime = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    let date = dateTime.getDate();
    let month = dateTime.getMonth()+1;
    let year = dateTime.getFullYear();
    let wd = weekday[dateTime.getDay()];

    if(hr>12){
        hr = hr - 12
        document.getElementById('ampm').innerHTML = 'pm'
    }
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('secs').innerHTML = sec
    document.getElementById('secs').innerHTML = sec
    document.getElementById('secs').innerHTML = sec
    document.getElementById('date').innerHTML = date
    document.getElementById('month').innerHTML = month
    document.getElementById('year').innerHTML = year
    document.getElementById('weekday').innerHTML = wd
    }
function padZero(num)
{
    return num<10?"0"+num:num
}
setInterval(displayTime,500)