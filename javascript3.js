console.log("Vaibhavk");
async function getMatchData() {
    try {
        let response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=b09fb881-14b7-41da-9331-eec85e3a0232&offset=0");
        response = await response.json();
        const arrList = response.data;
        console.log(arrList);
        for (let i = 0; i <= arrList.length; i++) {
            if (arrList[i].matchEnded === false && arrList[i].matchStarted === true) {

                console.log("Match is coming of ", i);
                document.querySelectorAll('.date')[i].innerHTML = `${arrList[i].date}`;
                document.querySelectorAll(".matchtype")[i].innerHTML = `${arrList[i].matchType}`;
                console.log("Vaibhav", i);
                document.querySelectorAll(".matchinfo")[i].innerHTML = `${arrList[i].name}`;
                console.log("Vaibhav", i);

                let shortname1 = arrList[i].teamInfo[0].shortname;
                if (shortname1) {
                    document.querySelectorAll(".T1")[i].innerHTML = `${shortname1}`;
                }
                else {
                    document.querySelectorAll(".T1")[i].innerHTML = `T1`;
                }

                let shortname2 = arrList[i].teamInfo[1].shortname;
                if (shortname2) {
                    document.querySelectorAll(".T2")[i].innerHTML = `${shortname2}`;
                }
                else {
                    document.querySelectorAll(".T2")[i].innerHTML = `T2`;
                }


                document.querySelectorAll(".status")[i].innerHTML = `${arrList[i].status}`;
                document.querySelectorAll(".venue")[i].innerHTML = `${arrList[i].venue}`;

                document.querySelectorAll(".FT1")[i].innerHTML = `${arrList[i].teams[0]}`;

                document.querySelectorAll(".FT2")[i].innerHTML = `${arrList[i].teams[1]}`;




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
                img2.appendChild(newimg2)

                if (arrList[i].score.length > 0) {
                    if (arrList[i].score[0].r &&
                        arrList[i].score[0].o &&
                        arrList[i].score[0].w) {
                        document.querySelectorAll(".score1")[i].innerHTML = `${arrList[i].score[0].r}-${arrList[i].score[0].w}  (${arrList[i].score[0].o})`;
                    }
                    else {
                        console.log("Haviig no data of score 1 or team 1 of index", i)
                    }

                    if (arrList[i].score[1].r &&
                        arrList[i].score[1].o &&
                        arrList[i].score[1].w) {
                        document.querySelectorAll(".score2")[i].innerHTML = `${arrList[i].score[1].r}-${arrList[i].score[1].w}  (${arrList[i].score[1].o})`;
                        console.log("Running of main if ", i)
                    }
                    else {
                        console.log("Haviig no data of score 2 or team 2 of index ", i)
                    }
                }

                else {
                    console.log("score length is zero");
                }
            }
            else {
                console.log("Not coming of inx", i);
                let body = document.querySelectorAll('.container')[i];
                body.classList.add("Newclass")
                console.log("VAIBHAV ELSE", i);
            }

        }
    }
    catch (e) {
        console.log("error is ", e);
    }
}
getMatchData();
document.querySelector(".refer").addEventListener('click', () => {
    location.reload();
})