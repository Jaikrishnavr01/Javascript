function handleLogin(){
    let fullName = document.getElementById("username").value
    let pass = document.getElementById("password").value
    let temppass ;
    let database = [{username:'dhilip',
                    password:'dhilip',
                    email:'dhilip@gmail.com'},
                    {username:'akash',
                    password:'akash',
                    email:'akash@gmail.com'}]
if(database.map((value)=>{if(value.username == fullName){temppass = value.password}})){
        if(temppass == pass){
            alert("You are Logged In")
        }else{
            alert("Enter the password correctly")
        }
    }else{
        alert("Enter the username correctly")
    }
}