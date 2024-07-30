function validate(){
    var uname=document.getElementById("username");
    var userpass=document.getElementById("userpassword");

    if(uname.value=="narasimha" && userpass.value=="88"){
        document.write("hello world!!");
    }
    else{
        alert("please enter credentials !!");

    }


}