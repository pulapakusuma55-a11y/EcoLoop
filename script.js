// ===============================
// SMOOTH SCROLL
// ===============================
function scrollToSection(id){
document.getElementById(id)
.scrollIntoView({behavior:"smooth"});
}


// ===============================
// CARBON TRACKER
// ===============================
let carbon = 0;

function increaseCarbon(){
carbon += 2;

document.getElementById("carbon")
.innerText = carbon + " kg";

updateDashboard();
}


// ===============================
// AI LIFECYCLE PREDICTION
// ===============================
function predictLife(value){
document.getElementById("lifeResult")
.innerText =
"Estimated Life Remaining: " + value + "%";
}


// ===============================
// DASHBOARD ANIMATION
// ===============================
let waste = 0,
points = 0,
users = 120;

function updateDashboard(){

waste += 1;
points += 10;
users += 1;

document.getElementById("waste").innerText = waste;
document.getElementById("points").innerText = points;
document.getElementById("users").innerText = users;

}


// ===============================
// USER APPLICATION FORM SUBMISSION
// ===============================
document
.getElementById("userForm")
.addEventListener("submit", function(e){

e.preventDefault();

let form = this;
let formData = new FormData(form);

// ✅ Send data to PHP Database
fetch("submit.php",{
method:"POST",
body:formData
})
.then(response => response.text())
.then(data => {

if(data.trim() === "success"){

// ---------- Local Backup ----------
let user = {
name: formData.get("fullname"),
email: formData.get("email"),
phone: formData.get("phone"),
role: formData.get("role"),
contribution: formData.get("contribution")
};

localStorage.setItem(
"EcoLoopUser",
JSON.stringify(user)
);

// ---------- Success Message ----------
document.getElementById("successMsg")
.innerText =
"✅ Application Submitted Successfully! Welcome to EcoLoop 🌱";

form.reset();

}else{
alert("❌ Submission Failed");
}

})
.catch(error=>{
console.error(error);
alert("⚠️ Server Error!");
});

});