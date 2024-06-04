
function showTostify(msg, type) {
    let bgColor = "";
    switch (type) {
        case "success":
            bgColor = "green";
            break;
        case "error":
            bgColor = "red";
            break;
        default:
            bgColor = "#000";
            break;
    }
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: bgColor,
    }).showToast();
}
const getRandamId = () => {
    return Math.random().toString().slice(2);
};

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let arr = [];

let user = {};
const register = () => {
    
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById("registerPassword").value;
        let existingUser = arr.find((user) => user.email === email);
    
        if (existingUser) {
            showTostify("User already registered", "error");
            return;
        }
        
        if (!emailRegex.test(email)) {
            showTostify("Please enter your email correctly", "error");
            return;
        }
        
        if (!password) {
            showTostify("Please enter your password", "error");
            return;
        }
    
        arr.push({ 
            id: getRandamId(),
            email: email,
            password: password,
            status:"Active",
            createdAt : new Date()
        });
        showTostify("Successfully registered", "success");
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "block";
       
     };
     const login = () => {
        let email = document.getElementById('loginEmail').value;
    let password = document.getElementById("loginPassword").value;
    let existingUser = arr.find((user) => user.email === email);
    let user = arr.find((user) => user.email === email && user.password === password);
    if (!emailRegex.test(email)) {
        showTostify("Please enter your email correctly", "error");
        return;
    }
    
    if (!password) {
        showTostify("Please enter your password", "error");
        return;
    }
    if (user) {
        // document.getElementById("register").style.display = "none";
        document.getElementById("heademail").innerHTML = ` Wellcome email : ${email}`;
        showTostify("User successfully logged in", "success");
        document.getElementById("login").style.display = "none";
        document.getElementById("todo").style.display = "block";
    } 

}
const todo = () => {
    
    arr.push({ 
        id: getRandamId(),
        email: email,
        password: password,
        status:"Active",
        createdAt : new Date()
    });
}


    
    