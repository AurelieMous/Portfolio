const navLinks = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]
const bontonC = document.getElementById("boutonC")

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
//Quand je clique sur mon boutonC cela m'envois à la section 6 du tableau sections en utilisation un effet de scrolling Smooth//

boutonC.addEventListener("click", addScrollSmoothContact)

function addScrollSmoothContact() {
    window.scrollTo({
        top: sections.at(6).offsetTop,
        behavior: "smooth"
    })
}

window.addEventListener("resize", PositionCalculation)
