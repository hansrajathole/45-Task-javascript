
let teams = ["CSK","MI","RCB","KKR","GT","LGS","PK","SRH"]
let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    let team = Math.floor(Math.random()*teams.length)
    let h1 = document.querySelector("h1")
    h1.innerText = teams[team]
})
