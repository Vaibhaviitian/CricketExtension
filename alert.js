let storedArray = localStorage.getItem("counts");

// Parse the stored JSON string back to an array
let addtofavarray = JSON.parse(storedArray);
document.querySelector(".karo").addEventListener('click',()=>{
location.reload();
})
console.log(addtofavarray);
console.log(addtofavarray[0]);
var currentDate = new Date();
var dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

var timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
var formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);

console.log(formattedDate); 
console.log(formattedTime); 


document.querySelector(".livetime").innerHTML = `${formattedDate}-${formattedTime}`;


    async function timing() {
        try {
        let response = await fetch("https://api.cricapi.com/v1/cricScore?apikey=b09fb881-14b7-41da-9331-eec85e3a0232");
        response = await response.json();
        console.log(response);
        array = response.data;
        console.log(array);

        addtofavarray.forEach((a,i) =>{
            document.querySelectorAll(".T1")[i].innerHTML = `${array[a].t1}`;
            document.querySelectorAll(".T2")[i].innerHTML = `${array[a].t2}`;
            if (array[a].t1s) {
                document.querySelectorAll(".sn1")[i].innerHTML = `${array[a].t1s}`;
            }
            else {
                document.querySelectorAll(".sn1")[i].innerHTML = `T1`;
            }
            if (array[a].t2s) {
                document.querySelectorAll(".sn2")[i].innerHTML = `${array[a].t2s}`;
            }
            else {
                document.querySelectorAll(".sn2")[i].innerHTML = `T2`;
            }

            let i1 = document.querySelectorAll(".i1")[i];
            let new1 = document.createElement("img");
            new1.src = `${array[a].t1img}`;
            new1.alt = `I1`
            new1.classList.add("img");
            i1.appendChild(new1);
    
    
    
            let i2 = document.querySelectorAll(".i2")[i];
            let new2 = document.createElement("img");
            new2.src = `${array[a].t2img}`;
            new2.alt = `I1`
            new2.classList.add("img");
            i2.appendChild(new2);
        })
       document.querySelector(".refer").addEventListener('click',()=>{
        location.reload();
        console.log("Clicked");
       })
    }
   

    catch (e) {
        console.log(e);
    }
}
timing();


