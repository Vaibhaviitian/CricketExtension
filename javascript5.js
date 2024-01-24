let storedArray = localStorage.getItem("counts");
let addtofavarray = JSON.parse(storedArray);
if(addtofavarray.length<0){
alert("Please Select your favourite Matches");
}
console.log(addtofavarray);
console.log(addtofavarray[0]);
async function get() {
  try {
    let response = await fetch(
      "https://api.cricapi.com/v1/cricScore?apikey=b09fb881-14b7-41da-9331-eec85e3a0232"
    );
    response = await response.json();
    const arrList = response.data;
    console.log(arrList);
    addtofavarray.forEach((a, i) => {
      let isoDateTime = arrList[a].dateTimeGMT;
        let dateObject = new Date(isoDateTime);
        let options = { day: "numeric", month: "short", year: "numeric" };
        let formattedDate = dateObject.toLocaleDateString("en-US", options);

        console.log(formattedDate);
      document.querySelectorAll(".date")[
        i
      ].innerHTML = `${formattedDate}`;
      document.querySelectorAll(".matchtype")[
        i
      ].innerHTML = `${arrList[a].matchType}`;
      document.querySelectorAll(".status")[
        i
      ].innerHTML = `${arrList[a].status}`;

      document.querySelectorAll(".T1")[i].innerHTML = `${arrList[a].t1}`;

      document.querySelectorAll(".T2")[i].innerHTML = `${arrList[a].t2}`;
      let img1 = document.querySelectorAll(".img1c")[i];
      let newimg1 = document.createElement("img");
      if(arrList[a].t1img){
          newimg1.src = `${arrList[a].t1img}`;
          newimg1.classList.add("img2");
          img1.appendChild(newimg1);
      }
      else{
          newimg1.src = "Orange Brown Abstract Letter Document.png";
          newimg1.classList.add("img2");
          img1.appendChild(newimg1);
      }
      
     

      let img2 = document.querySelectorAll(".img2c")[i];
      let newimg2 = document.createElement("img");
      if(arrList[a].t2img){
          newimg2.src = `${arrList[a].t2img}`;
          newimg2.classList.add("img2");
          img2.appendChild(newimg2);
      }
      else{
          newimg2.src = "Black simple Film Lonely Girls Ebook Cover.png";
          newimg2.classList.add("img2");
          img2.appendChild(newimg2);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
get();
document.querySelector(".refer").addEventListener("click", () => {
  location.reload();
});
