//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");

h1.onmouseover = function () {
    h1.style.color = "red";
};

h1.onmouseout = () => {
    h1.style.color = "black";
    h1.style.fontWeight = "900";
}

h1.addEventListener("click", () => {
    alert("H1 pressed");
} );


//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener('click', function(){
    const input = document.querySelector("#input")
    //if(!input.value){
    //    alert("Please Enter an İtem");
    // }  else {
    //    alert(`${input.value} entered`);
    //}

    !input.value
        ? alert("Please Enter an İtem")
        : alert(`${input.value} entered`);

        input.value = "";
});

//* EXAMPLE-3
//* ----------------------------------------------------

const list = document.querySelectorAll(".list"); //?nodelist

list.forEach((li) => {
    li.style.transition = "all 0.8s"

    li.onmouseover = () => {
        li.style.fontSize = "2rem";
        li.style.transform = "translateX(10px)";
    };

    li.onmouseout = () => {
        li.style.fontSize = "1rem";
        li.style.transform = "translateX(-10px)";
    };
        
});


//* EXAMPLE-3 (onLoad)
//* ----------------------------------------------------
window.onload = function() {
    document.querySelector("#input").focus();
};


const print = () => {
    clg("Starting");
};

print();

