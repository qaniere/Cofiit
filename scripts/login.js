const LOGIN_FORM = document.getElementById("login-form");
const USERNAME_INPUT = document.getElementById("username");
const PASSWORD_INPUT = document.getElementById("password");
const DATABASE = {
    "user1": "fee72ff13e4763ac5ac7f0456b8d60ed31a4d4ceef2ab61d51f2e7b70eeca98c8b4274617b18b2f0fbcb0a46328683056b5c2fd1c5de94302bbc7df49ebb0d30"
}

async function hashSha512(message) {

    console.log(message)

    const msgBuffer = new TextEncoder().encode(message);     
    const hashBuffer = await crypto.subtle.digest("SHA-512", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));                
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

    return hashHex;
}

async function login(username, password) {

    let passwordProvidedHashed = await hashSha512(password);

    if(DATABASE[username] == passwordProvidedHashed) {
        return true;
    }

    return false;
}

LOGIN_FORM.addEventListener("submit", (event) => {

    event.preventDefault();
    login(USERNAME_INPUT.value, PASSWORD_INPUT.value).then( (login_successful) => {

        if(login_successful) {
            alert("Connexion réussie");

        } else {
            alert("identifiants incorrects");
        }
    });
});

