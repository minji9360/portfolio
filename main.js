let cursorPointer = document.querySelector(".cursor__pointer");
let cursorImage = document.querySelector(".cursor__image");

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

// 커스텀한 커서의 left&top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
    cursorPointer.style.left = e.pageX + "px";
    cursorPointer.style.top = e.pageY - scrollY + "px";
    cursorImage.style.left = e.pageX + 6 + "px";
    cursorImage.style.top = e.pageY - scrollY - 4 + "px";
}