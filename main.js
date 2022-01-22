let mouseCursor = document.querySelector(".cursor");

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

// 커스텀한 커서의 left&top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}