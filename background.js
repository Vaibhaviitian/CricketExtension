let alarm_id = "alarm_id";
let addtofavarraytime;
let addtofavarrayfav;
let a;
try {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "mycricketAlarm") {
      let storedArraytime = localStorage.getItem("timedifference");
       addtofavarraytime = JSON.parse(storedArraytime);
      let storedArrayfav = localStorage.getItem("counts");
       addtofavarrayfav = JSON.parse(storedArrayfav);
    addtofavarrayfav.forEach((a) =>{
      let alarmsetmin = addtofavarraytime[a];
      try {
        chrome.alarms.create(alarm_id, {
          delayInMinutes:alarmsetmin
        });
        console.log("ALarm is successfully fixed");
      } catch (e) {
        console.log("Error is ", e);
      }
    })
      console.log("ALarm is recieved in background js successfully");
      console.log(chrome.alarms);
     
    }
  });
} catch (e) {
  console.log(`${e}`);
}

chrome.alarms.onAlarm.addListener((alarm) => {
  try {
    console.log("alarmn call");

    // Delay creating the window to allow the audio to play
    setTimeout(() => {
      chrome.windows.create({
        width: 350,
        height: 450,
        top: 200,
        left: 400,
        type: "popup",
        url: "alert.html",
      });
    }, 1000); // You can adjust the delay as needed
  } catch (e) {
    console.log(e);
  }
});
