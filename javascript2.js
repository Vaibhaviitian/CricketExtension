let btn = document.querySelector(".refresh");
btn.addEventListener("click", () => {
  location.reload();
  console.log("Clicked the button");
});
console.log("Vaibhav");
async function getmatchdata() {
  try {
    let response = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=b09fb881-14b7-41da-9331-eec85e3a0232&offset=0"
    );
    response = await response.json();
    console.log("Vaibhav");
    console.log("Vaibhav");
    const arrList = response.data;
    console.log(arrList);
    for (var i = 0; i < arrList.length; i++) {
      if (arrList[i].matchEnded === true) {
        console.log("Vaibhav", i);
        document.querySelectorAll(".date")[i].innerHTML = `${arrList[i].date}`;
        document.querySelectorAll(".matchtype")[
          i
        ].innerHTML = `${arrList[i].matchType}`;
        console.log("Vaibhav", i);
        document.querySelectorAll(".matchinfo")[
          i
        ].innerHTML = `${arrList[i].name}`;
        console.log("Vaibhav", i);
        const T1 = `${arrList[i].teamInfo[0].shortname}`;
        const T2 = `${arrList[i].teamInfo[1].shortname}`;
        if (T1) {
          document.querySelectorAll(".T1")[
            i
          ].innerHTML = `${arrList[i].teamInfo[0].shortname}`;
        } else {
          document.querySelectorAll(".T1")[
            i
          ].innerHTML = `${arrList[i].teams[0]}`;
        }
        if (T2) {
          document.querySelectorAll(".T2")[
            i
          ].innerHTML = `${arrList[i].teamInfo[1].shortname}`;
        } else {
          document.querySelectorAll(".T2")[
            i
          ].innerHTML = `${arrList[i].teams[0]}`;
        }
        console.log("Vaibhav", i);
        document.querySelectorAll(".status")[
          i
        ].innerHTML = `${arrList[i].status}`;
        document.querySelectorAll(".venue")[
          i
        ].innerHTML = `${arrList[i].venue}`;

        document.querySelectorAll(".FT1")[
          i
        ].innerHTML = `${arrList[i].teams[0]}`;

        document.querySelectorAll(".FT2")[
          i
        ].innerHTML = `${arrList[i].teams[1]}`;

        let img1 = document.querySelectorAll(".img1c")[i];
        let newimg1 = document.createElement("img");
        newimg1.classList.add("images");
        let img2 = document.querySelectorAll(".img2c")[i];
        img2.classList.add("images");
        let newimg2 = document.createElement("img");
        newimg2.classList.add("images");

        newimg1.src = `${arrList[i].teamInfo[0].img}`;
        img1.appendChild(newimg1);

        newimg2.src = `${arrList[i].teamInfo[1].img}`;
        img2.appendChild(newimg2);

        // //  vaibhav saara data iske upar hi rakhna
        //
        //
         document.querySelectorAll(".score1")[i].innerHTML = `${arrList[i].score[0].r}-${arrList[i].score[0].w}  (${arrList[i].score[0].o})`;
         document.querySelectorAll(".score2")[i].innerHTML = `${arrList[i].score[1].r}-${arrList[i].score[1].w}  (${arrList[i].score[1].o})`;
      } else {
        let body = document.querySelectorAll(".container")[i];
        body.classList.add("Newclass");
        console.log("VAIBHAV ELSE", i);
      }
    }
  } catch (error) {
    console.log(`You have an error of ${error}`);
  }
}
getmatchdata();

// document.querySelectorAll(".score1")[i].innerHTML = `${arrList[i].scor1[0].r}-${arrList[i].score[0].w}  (${arrList[i].score[0].o})`;
// document.querySelectorAll(".score2")[i].innerHTML = `${arrList[i].score[1].r}-${arrList[i].score[1].w}  (${arrList[i].score[1].o})`;
// // console.log("Running of main if ",i)&&
// arrList[i].score[1].r &&
// arrList[i].score[1].o &&
// arrList[i].score[1].w
