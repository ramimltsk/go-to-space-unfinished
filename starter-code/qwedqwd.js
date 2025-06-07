const travelTime = document.querySelector(".travelTime")

const avgDistance = document.querySelector(".avgDistance")

const marsbtn = document.querySelector(".marsbtn")

const moonbtn = document.querySelector(".moonbtn")

const europabtn = document.querySelector(".europabtn")

const titanbtn = document.querySelector(".titanbtn")

const marstxt = document.querySelector(".marstxt")

const planetname = document.querySelector(".planetname")

const planetimage = document.querySelector(".planetimage")
const moon = document.querySelector(".moon")

const europaimg = document.querySelector(".europaimg")

const titanimg = document.querySelector(".titanimg")




marsbtn.addEventListener("click", () => {
    marsbtn.classList.add("chosenplanet")
    moonbtn.classList.remove("chosenplanet")
    europabtn.classList.remove("chosenplanet")
    titanbtn.classList.remove("chosenplanet")

    titanimg.style.opacity = "0"
    moon.style.opacity = "0"
    europaimg.style.opacity = "0"
    planetimage.style.left = "20%"
    planetimage.style.opacity = "1"

    planetname.textContent = "MARS"

    marstxt.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"

    travelTime.textContent = "9 months"
    avgDistance.textContent = "225 mil. km"

})

moonbtn.addEventListener("click", () => {
    moonbtn.classList.add("chosenplanet")
    marsbtn.classList.remove("chosenplanet")
    europabtn.classList.remove("chosenplanet")
    titanbtn.classList.remove("chosenplanet")

    titanimg.style.opacity = "0"
    europaimg.style.opacity = "0"
    planetimage.style.opacity = "0"
    moon.style.left = "20%"
    moon.style.opacity = "1"

    planetname.textContent = "MOON"

    marstxt.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."

    travelTime.textContent = "3 days"
    avgDistance.textContent = "384,400 km"
})


europabtn.addEventListener("click", () => {
    europabtn.classList.add("chosenplanet")
    moonbtn.classList.remove("chosenplanet")
    marsbtn.classList.remove("chosenplanet")
    titanbtn.classList.remove("chosenplanet")

    titanimg.style.opacity = "0"
    moon.style.opacity = "0"
    planetimage.style.opacity = "0"
    europaimg.style.left = "20%"
    europaimg.style.opacity = "1"

    planetname.textContent = "EUROPA"

    marstxt.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."

    travelTime.textContent = "3 years"
    avgDistance.textContent = "628 mil. km"
})


titanbtn.addEventListener("click", () => {
    titanbtn.classList.add("chosenplanet")
    moonbtn.classList.remove("chosenplanet")
    europabtn.classList.remove("chosenplanet")
    marsbtn.classList.remove("chosenplanet")

    europaimg.style.opacity = "0"
    moon.style.opacity = "0"
    planetimage.style.opacity = "0"
    titanimg.style.left = "20%"
    titanimg.style.opacity = "1"

    planetname.textContent = "TITAN"

    marstxt.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."

    travelTime.textContent = "7 years"
    avgDistance.textContent = "1.6 bil. km"
})










