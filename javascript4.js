let countlist = [];
console.log("Vaibhav");
const btna = document.querySelector(".refer");
btna.addEventListener("click", () => {
  location.reload();
  console.log("CLicked");
});
let other =
  "https://www.gettyimages.in/detail/photo/cricket-batsman-about-to-strike-ball-royalty-free-image/180868820";
function sendtofavorites(matchdata) {
  if (chrome.runtime) {
    chrome.runtime.sendMessage({
      action: "addtofavourite",
      data: matchdata,
    });
  }
}
console.log("Vaibhav");
async function getMatchData() {
 
    let response = await fetch(
      "https://api.cricapi.com/v1/cricScore?apikey=b09fb881-14b7-41da-9331-eec85e3a0232"
    );
    response = await response.json();
    const arrList = response.data;
    console.log(arrList);
    let  i;


    // Making an arrray of differnee of minutes 
    let currentDate = new Date();
    let timeDifference = [];
    for (let i = 1; i < 15; i++) {
      console.log("Vaibhav");
      let futureDate = new Date(arrList[i].dateTimeGMT);
      let formattedCurrentDate = currentDate.toISOString().slice(0, 19);
      let currentDateTime = new Date(formattedCurrentDate);
      //   console.log(arrList[i].dateTimeGMT);
      let timeDifferenceInMilliseconds = futureDate - currentDateTime;
      //   console.log(timeDifferenceInMilliseconds);
      let timeDifferenceInMinutes = Math.floor(
        timeDifferenceInMilliseconds / (1000 * 60)
      );
        console.log(timeDifferenceInMinutes);
        console.log(timeDifference);
      timeDifference.push(timeDifferenceInMinutes);
      localStorage.setItem("timedifference", JSON.stringify(timeDifference));
    }

    

    
    for (let i = 0; i <= 15; i++) {
      if (arrList[i].status === "Match not started") {
        console.log("Runs the index of", i);
        let isoDateTime = arrList[i].dateTimeGMT;
        let dateObject = new Date(isoDateTime);
        let options = { day: "numeric", month: "short", year: "numeric" };
        let formattedDate = dateObject.toLocaleDateString("en-US", options);
        document.querySelectorAll(".date")[
          i
        ].innerHTML = `${formattedDate}`;
        document.querySelectorAll(".matchtype")[
          i
        ].innerHTML = `${arrList[i].matchType}`;
        document.querySelectorAll(".status")[
          i
        ].innerHTML = `${arrList[i].status}`;

        document.querySelectorAll(".T1")[i].innerHTML = `${arrList[i].t1}`;

        document.querySelectorAll(".T2")[i].innerHTML = `${arrList[i].t2}`;

        let img1 = document.querySelectorAll(".img1c")[i];
        let newimg1 = document.createElement("img");
        if (arrList[i].t1img) {
          newimg1.src = `${arrList[i].t1img}`;
          newimg1.classList.add("img2");
          img1.appendChild(newimg1);
        } else {
          newimg1.src = "Black simple Film Lonely Girls Ebook Cover.png";
          newimg1.classList.add("img2");
          img1.appendChild(newimg1);
        }

        let img2 = document.querySelectorAll(".img2c")[i];
        let newimg2 = document.createElement("img");
        if (arrList[i].t2img) {
          newimg2.src = `${arrList[i].t2img}`;
          newimg2.classList.add("img2");
          img2.appendChild(newimg2);
        } else {
          newimg2.src = "Black simple Film Lonely Girls Ebook Cover.png";
          newimg2.classList.add("img2");
          img2.appendChild(newimg2);
        }

       
        



      } else {
        console.log(`NOt runs the inx of`, i);
        let cont = document.querySelectorAll(".container")[i];
        cont.classList.add("blank");
      }
    }




   
    let countlist = [];
    for (let m = 0; m <= 14; m++) {
      document.querySelectorAll(".fav")[m].addEventListener("click", () => {
        console.log("clicked", m);
        countlist.push(m);
        alert("Match is successfully saved in favorites");
        chrome.runtime.sendMessage({
          action: "mycricketAlarm",
        });

        console.log(countlist);
        localStorage.setItem("counts", JSON.stringify(countlist));
        var ting = new Audio('ting.mp3');
        let timeinmin = timeDifference[m];
        let timemilli = (timeinmin*60*1000);
        console.log("Buzzer is on ");
        setTimeout(()=>{
         ting.play();
         console.log("Buzzer is played ");
        },timemilli);
      });
    }
}
getMatchData();
