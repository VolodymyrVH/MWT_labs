function buttonValid()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let error = false;

    if (name.trim() === "")
    {
        document.getElementById("nameError").innerHTML = "You forgot your name!";
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").style.fontSize = "10px";
        document.getElementById("name").style.border = "1px solid red";
        error = true;
    }
    else
    {
        document.getElementById("nameError").innerHTML = "";
    }
    
    if (email.trim() === "")
    {
        document.getElementById("emailError").innerHTML = "You forgot your email!";
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").style.fontSize = "10px";
        document.getElementById("email").style.border = "1px solid red";
        error = true;
    }
    else
    {
        document.getElementById("emailError").innerHTML = "";
    }

    if (message.trim() === "")
    {
        document.getElementById("messageError").innerHTML = "You forgot your message!";
        document.getElementById("messageError").style.color = "red";
        document.getElementById("messageError").style.fontSize = "10px";
        document.getElementById("message").style.border = "1px solid red";
        error = true;
    }
    else
    {
        document.getElementById("messageError").innerHTML = "";
    }
    
    if (!error)
    {
        alert("Everything is okay :)");
    }
}
