let p=document.querySelectorAll(".over");
console.log(p);
function toggleopen()
{ 
    console.log("hy");
    this.classList.toggle("active");
    console.log("hy1");
}
p.forEach(p1=>p1.addEventListener('click',toggleopen));
