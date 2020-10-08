function runToken () {
getToken().then(token => {
    console.log('token',token)
    getWowTokenPrize(token)
})
}
async function getToken() {
    let key = '5c558b74e4e045368d038927f331577e'
    let secret = 'xVRntRxMKOakhT6Q5SFpBtPawGMIumSy'
    let response = await fetch('https://us.battle.net/oauth/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache'
        }
    })
    let json = await response.json()
    console.log(json, 'json')
    return json.access_token
}

async function getWowTokenPrize(accessToken){
    try {
    let response = await fetch('https://us.api.blizzard.com/data/wow/connected-realm/60/auctions ', {
        method: 'GET',
        credentials: 'include',
        headers: {
           
            'Authorization': 'Bearer ' + accessToken,
        }
    })
    console.log(response, 'response')
    let json = await response.json();
    console.log(json)
} catch(e) {
    console.log(e)
}
}