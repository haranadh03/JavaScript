const validation = (event) => {
    let username = event.target.username 
    let password = event.target.password
    let error=document.getElementById("error")
    if(username.value === ""){
        event.preventDefault()
        error.innerHTML = "please enter username"
        username.style.borderColor="red"
        return
    }
    if(username.value === ""){
        event.preventDefault()
        error.innerHTML = "please enter password"
        username.style.borderColor="red"
        return 
    }
    alert("login Successful");
}
