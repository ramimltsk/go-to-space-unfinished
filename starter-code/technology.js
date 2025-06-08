const first = document.querySelector(".first")

const second = document.querySelector(".second")

const third = document.querySelector(".third")

const mainimg = document.querySelector(".mainimg")

const capsule = document.querySelector(".capsule")

const port = document.querySelector(".port")

const name = document.querySelector(".name")

const bio = document.querySelector(".bio")

first.addEventListener("click", () => {
    first.classList.add("selected")
    second.classList.remove("selected")
    third.classList.remove("selected")

    mainimg.style.right = "0"
    mainimg.style.opacity = "1"
    capsule.style.opacity = "0"
    port.style.opacity = "0"

    name.textContent = "Launch vehicle"
    bio.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
})

second.addEventListener("click", () => {
    second.classList.add("selected")
    first.classList.remove("selected")
    third.classList.remove("selected")

    capsule.style.right = "0"
    capsule.style.opacity = "1"
    mainimg.style.opacity = "0"
    port.style.opacity = "0"

    name.textContent = "Space capsule"
    bio.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
})

third.addEventListener("click", () => {
    third.classList.add("selected")
    second.classList.remove("selected")
    first.classList.remove("selected")

    port.style.right = "0"
    port.style.opacity = "1"
    capsule.style.opacity = "0"
    mainimg.style.opacity = "0"
    console.log("launch")

    name.textContent = "Spaceport"
    bio.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
})