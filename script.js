const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

if (screen.width <= 1199) { document.location = "alert.html"; }

//document.getElementById('foot').style.visibility = "hidden";