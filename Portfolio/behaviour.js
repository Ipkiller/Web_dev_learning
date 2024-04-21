document.querySelector(".bar").onclick = function () {
    document.querySelector(".bar_window").classList.toggle("translate");
}
document.querySelector("main").onclick = function () {
    document.querySelector(".bar_window").classList.remove("translate");
}
var condition = true;
document.querySelector("nav .theme").onclick = function () {
    let elements = document.querySelectorAll("body, .eclips1,.eclips2,.btn,.theme");
    elements[0].classList.toggle("dark_theme");
    elements[0].classList.toggle("light_theme");
    elements[1].classList.toggle("dark_eclips");
    elements[1].classList.toggle("light_eclips");
    elements[2].classList.toggle("dark_eclips");
    elements[2].classList.toggle("light_eclips");
    elements[4].classList.toggle("dark_btn");
    elements[4].classList.toggle("light_btn");
    let content_A = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0004 6.87499C8.27841 6.87499 6.87542 8.27799 6.87542 9.99999C6.87542 11.722 8.27841 13.125 10.0004 13.125C11.7224 13.125 13.1254 11.722 13.1254 9.99999C13.1254 8.27799 11.7224 6.87499 10.0004 6.87499ZM18.0212 9.49543L14.9386 7.95572L16.0291 4.68749C16.1755 4.24478 15.7556 3.82486 15.3162 3.9746L12.0479 5.06509L10.505 1.97916C10.2966 1.56249 9.70419 1.56249 9.49586 1.97916L7.95615 5.06184L4.68466 3.97134C4.24195 3.82486 3.82203 4.24478 3.97177 4.68423L5.06227 7.95246L1.97958 9.49543C1.56292 9.70377 1.56292 10.2962 1.97958 10.5045L5.06227 12.0443L3.97177 15.3157C3.82529 15.7585 4.24521 16.1784 4.68466 16.0286L7.95289 14.9381L9.4926 18.0208C9.70094 18.4375 10.2934 18.4375 10.5017 18.0208L12.0414 14.9381L15.3097 16.0286C15.7524 16.1751 16.1723 15.7552 16.0226 15.3157L14.9321 12.0475L18.0147 10.5078C18.4379 10.2962 18.4379 9.70377 18.0212 9.49543ZM12.9464 12.946C11.322 14.5703 8.6788 14.5703 7.05445 12.946C5.4301 11.3216 5.4301 8.67838 7.05445 7.05403C8.6788 5.42968 11.322 5.42968 12.9464 7.05403C14.5707 8.67838 14.5707 11.3216 12.9464 12.946Z" fill="#374151"/>
    </svg>`
    let content_B = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M10.8858 18.3333C13.4561 18.3333 15.8037 17.1639 17.359 15.2476C17.589 14.9642 17.3382 14.5501 16.9826 14.6178C12.9395 15.3878 9.22668 12.2878 9.22668 8.2065C9.22668 5.85552 10.4852 3.69364 12.5307 2.52961C12.846 2.35019 12.7667 1.87216 12.4084 1.80598C11.9061 1.71337 11.3965 1.66673 10.8858 1.66666C6.28586 1.66666 2.55243 5.39423 2.55243 9.99999C2.55243 14.5999 6.28 18.3333 10.8858 18.3333Z"
        fill="#F9FAFB" />
</svg>`
    if (condition) {
        elements[3].innerHTML = content_A;
        document.querySelector(".bar svg").style.fill = "#1F2937"
        condition = false;
    } else {
        elements[3].innerHTML = content_B;
        document.querySelector(".bar svg").style.fill = "#E5E7EB"
        condition = true;
    }

}