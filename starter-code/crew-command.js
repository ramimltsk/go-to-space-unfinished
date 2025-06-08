const doug = document.querySelector(".doug")

const ano = document.querySelector(".ano")

const mark = document.querySelector(".mark")

const victor = document.querySelector(".victor")

const opdoug = document.querySelector(".opdoug")

const opano = document.querySelector(".opano")

const opmark = document.querySelector(".opmark")

const opvictor = document.querySelector(".opvictor")

const role = document.querySelector(".role")

const name = document.querySelector(".name")

const bio = document.querySelector(".bio")

opmark.addEventListener("click", () => {
    opmark.style.opacity = "1"
    opdoug.style.opacity = "50%"
    opvictor.style.opacity = "50%"
    opano.style.opacity = "50%"

    mark.style.right = "100px"
    mark.style.opacity = "1"
    doug.style.opacity = "0"
    victor.style.opacity = "0"
    ano.style.opacity = "0"

    role.textContent = "Mission Specialist"
    name.textContent = "Mark Shuttleworth"
    bio.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
})

opdoug.addEventListener("click", () => {
    opdoug.style.opacity = "1"
    opmark.style.opacity = "50%"
    opvictor.style.opacity = "50%"
    opano.style.opacity = "50%"

    doug.style.right = "100px"
    doug.style.opacity = "1"
    mark.style.opacity = "0"
    victor.style.opacity = "0"
    ano.style.opacity = "0"

    role.textContent = "Commander"
    name.textContent = "Douglas Hurley"
    bio.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
})

opvictor.addEventListener("click", () => {
    opvictor.style.opacity = "1"
    opmark.style.opacity = "50%"
    opdoug.style.opacity = "50%"
    opano.style.opacity = "50%"

    victor.style.right = "100px"
    victor.style.opacity = "1"
    mark.style.opacity = "0"
    doug.style.opacity = "0"
    ano.style.opacity = "0"

    role.textContent = "Pilot"
    name.textContent = "Victor Glover"
    bio.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
})

opano.addEventListener("click", () => {
    opano.style.opacity = "1"
    opmark.style.opacity = "50%"
    opdoug.style.opacity = "50%"
    opvictor.style.opacity = "50%"

    ano.style.right = "100px"
    ano.style.opacity = "1"
    mark.style.opacity = "0"
    doug.style.opacity = "0"
    victor.style.opacity = "0"

    role.textContent = "Flight Engineer"
    name.textContent = "Anousheh Ansari"
    bio.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
})







