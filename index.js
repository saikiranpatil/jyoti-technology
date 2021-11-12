var acNumber1 = 16;
var acNumber2 = 3200;
var bool1 = false;
var bool2 = false;

function load() {
    preloader.style.opacity = 0;
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
}
function isVisibleOnScroll(el) {
    var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
        el = el.parentNode
    // Check if bottom of the element is off the page
    if (rect.bottom < 0) return false
    // Check its within the document viewport
    if (top > document.documentElement.clientHeight) return false
    do {
        rect = el.getBoundingClientRect()
        if (top <= rect.bottom === false) return false
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) return false
        el = el.parentNode
    } while (el != document.body)
    return true
};

function nxt1() {
    var e = 0;
    setInterval(() => {
        if (e != acNumber1) {
            ach1.innerHTML = ++e + "+";
            bool1 = true;
        }
    }, 100);
}

function nxt2() {
    var j = 0;
    setInterval(() => {
        if (j < acNumber2) {
            j = j + 50
            ach2.innerHTML = j + "+";
            bool2 = true;
        }
    }, 30);
}

burger.addEventListener("click", () => {
    if (navlinks.style.display == "none") {
        navlinks.style.display = "flex";
        bar1.style.transform = "translateY(10px) rotate(135deg)";
        bar2.style.transform = "scale(0)";
        bar3.style.transform = "translateY(-12px) rotate(-135deg)";
    }
    else {
        navlinks.style.display = "none";
        bar1.style.transform = "";
        bar2.style.transform = "";
        bar3.style.transform = "";
    }
})


window.addEventListener("scroll",(e)=>{
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop) {
        nav.style.top=0;
        topHeader.style.display="none";
    }
    else{
        nav.style.top='32px';
        topHeader.style.display="flex"
    }
})