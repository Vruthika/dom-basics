const userName=prompt("Enter your name")
const userAge=prompt("Enter your age")
const userHobbies=prompt("Enter your hobbies.Separate by comma")

const nameID=document.getElementById("uname")
const ageID=document.getElementById("uage")
const hobbiesID=document.getElementById("uhobbies")

nameID.innerText=userName
ageID.innerText=userAge
//hobbiesID.innerText=userHobbies

const ho=userHobbies.split(', ')
const hobbiesArray=[]

ho.forEach((hobby) => {
    hobbiesArray.push(`<span class="badge text-bg-primary">${hobby}</span>`);
    
});
hobbiesID.innerHTML=hobbiesArray.join(" ")