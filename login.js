

function validate()
{
    let email=document.getElementById("email");
    let pwd=document.getElementById("pwd");
    if(email.value===""||pwd.value==="")
    {
        alert("fields cannot be empty");
        return false;
    }
    else
    {
        return true;
    }
}