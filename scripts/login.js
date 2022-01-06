async function hashSha512(message) {

    const msgBuffer = new TextEncoder().encode(message);     
    const hashBuffer = await crypto.subtle.digest("SHA-512", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));                
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

    return hashHex;
}

hashSha512("string to hash").then((value) => {console.log(value)});
