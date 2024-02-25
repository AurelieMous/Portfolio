const navLinks = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]
const bontonC = document.getElementById("boutonC")
const back = document.getElementById("back")

let sectionPosition;

function PositionCalculation () {
    sectionPosition = sections.map(section => section.offsetTop)
}

PositionCalculation()

console.log(sectionPosition)

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e){
    const linkIndex = navLinks.indexOf(e.target);
    window.scrollTo({
        top: sectionPosition[linkIndex],
        behavior: "smooth"
    })
}
//Quand je clique sur mon boutonC cela m'envois à la section 4 du tableau sections en utilisation un effet de scrolling Smooth//

boutonC.addEventListener("click", addScrollSmoothContact)

function addScrollSmoothContact() {
    window.scrollTo({
        top: sections.at(3).offsetTop,
        behavior: "smooth"
    })
}

back.addEventListener("click", addScrollReturn)

function addScrollReturn() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("resize", PositionCalculation)