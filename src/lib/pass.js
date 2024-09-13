const correct = process.env.ADMIN_PASSWORD

async function passCheck(pass) {
    if (pass === correct) {
        setIsLogged(true)
        const expirationTime = new Date().getTime() + sessionDuration;
        localStorage.setItem('sessionExpiration', expirationTime.toString());
        console.log('correct')
    } else {
        setIsLogged(false)
        console.log('wrong')
    }
}

passCheck();