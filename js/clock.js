function time(show, fut) {
    var now = new Date();
    let showup = show;
    let future = fut;
  
    var timeLeft = future - now;
    var milli = timeLeft;
    var mills = now.getMilliseconds();
    var seconds = milli / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
  
    var spareMills = milli.toString().charAt(milli.toString().length-3);
    var spareSeconds = seconds % 60;
    var spareMinutes = minutes % 60;
    var spareHours = hours % 24;
    var spareDays = days % 365;
  
    minutes = parseInt(minutes);
    hours = parseInt(hours);
    days = parseInt(days);
    spareSeconds = parseInt(spareSeconds);
    spareMinutes = parseInt(spareMinutes);
    spareHours = parseInt(spareHours);
    spareDays = parseInt(spareDays);
  
    days = padNumber(days);
    hours = padNumber(hours);
    minutes = padNumber(minutes);
    spareSeconds = padNumber(spareSeconds);
    spareMinutes = padNumber(spareMinutes);
    spareHours = padNumber(spareHours);
    spareDays = padNumber(spareDays);
  
    timeLeft = ` 倒數:${spareDays}天${spareHours}時${spareMinutes}分${spareSeconds}秒`;
    var mySpan = document.getElementById("timer");
  
    mySpan.innerHTML = timeLeft;
    mySpan.style.display = "none";
  
    if (milli <= 0) {
      //Time's run out! If all values go to zero
      mySpan.innerHTML = "倒數: 00天00時00秒";
    }
    if (now - showup >= 0) {
      mySpan.style.display = "block";
      // if (future - now <= 0) {
      //     mySpan.style.display = 'none';
      // }
    }
  }
  
  function padNumber(number) {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }
  
  setInterval(function () {
    let now = new Date();
  
    // 倒數計時出現
    let show = new Date("7/16/2023 14:59:00");
  
    // 第一次活動截止時間
    let fut =  new Date("11/11/2023 23:59:59");
  
    // 第二次活動截止時間
    let fut2 =  new Date("11/14/2023 09:59:59");
  
    time(show, fut);
    if (now - fut >= 0) {
      time(fut, fut2);
    }
  }, 1);