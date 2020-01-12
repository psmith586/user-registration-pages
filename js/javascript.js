function validateLogin(){
    
        
    let name = document.getElementById('uname');
    let password = document.getElementById('pwd');
    var valid = false;
    
    if (name.value == "" || password.value == ""){
        alert("Please Fill out all fields");
    } else if (name.value.length < 3){
        alert("Username must be 3 or more characters");
    } else if (password.value.length < 8){
        alert("Password must be 8 or more characters");
    } else {
        valid = true;        
    }

    if (valid == true){
        var obj = {name: name.value, password: password.value};
        var json = JSON.stringify(obj);
        console.log(json);
    }
    
    return false;
}

function validateReg(){
    let name = document.getElementById('uname');
    let password = document.getElementById('pwd');
    let confirmPwd = document.getElementById('confirmpass');
    let email = document.getElementById('email');
    var valid = false;
    var pwdTest = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
    if (name.value == "" || password.value == ""){
        alert("Please Fill out all fields");
    } else if (name.value.length < 3){
        alert("Username must be 3 or more characters");
    } else if (password.value.length < 8){
        alert("Password must be 8 or more characters");
    } else if (password.value != confirmPwd.value){
        alert("Passwords must match");
    }else if(!pwdTest.test(password.value)){
        alert("Password must contain at least 1 uppercase letter, 1 number, and 1 special character");
    }else {
        valid = true;        
    }
    
    if (valid == true){
        var obj = {name: name.value, password: password.value, confirmPassword: confirmPwd.value,
        email: email.value};
        
        var json = JSON.stringify(obj);
        console.log(json);
    }
    
    
    
    return false;
}

function getFile(){
    document.getElementById('imgFile').click();
}
function validatePost(){
    let title = document.getElementById('title');
    let desc = document.getElementById('desc');
    let path = document.getElementById('imgFile');
    var valid = false;
    
    var extensions = /(.*?)\.(jpg|png|bmp|gif)$/;
    
    if (title.value == "" || desc.value == ""){
        alert("Please fill in title and description");
    }else if(!path.value.match(extensions)){
        alert("Invalid file type");
    }else{
        valid = true;
    }
    
    if (valid == true){
        var obj = {title: title.value, desc: desc.value, filepath: path.value};
        var json = JSON.stringify(obj);
        console.log(json);
    }
    
    return false;
}


