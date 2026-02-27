document
.getElementById("userForm")
.addEventListener("submit",function(e){

e.preventDefault();

let form=this;
let formData=new FormData(form);

/* SEND DATA */
fetch("submit.php",{
method:"POST",
body:formData
})
.then(response=>response.text())
.then(data=>{

if(data.trim()==="success"){

/* LOCAL STORAGE */
let user={
fullname:formData.get("fullname"),
email:formData.get("email"),
phone:formData.get("phone"),
role:formData.get("role"),
contribution:formData.get("contribution")
};

localStorage.setItem(
"EcoLoopUser",
JSON.stringify(user)
);

document.getElementById("successMsg")
.innerText="✅ Application Submitted Successfully!";

form.reset();

}else{
alert("Database Insert Failed");
}

})
.catch(()=>{
alert("Server Error");
});

});