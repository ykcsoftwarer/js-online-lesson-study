//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eger input girilmediyse Kullaniciya uyari ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;


    
    //! eger rastgele!= input.value
} else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* again basildiginda oyunu baslangic degerlerin kur
document.querySelector(".again-btn").addEventListener("click", () => {
    score = 10;
    randomNumber = Math.round(Math.random() = 100);
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success bg-danger");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText


});



//! eger rastgele sayi == input.value
//? tebrikler bildiniz.
//? background = green
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! değilse
//! eger score > 0
//!! score = score - 1
    //? eger rastgele sayi < input.value
    //?     AZALT
    //? degilse
    //?     ARTTIR
//! değilse
//? Uzgunuz kaybettiniz.

//* againBtn basildiğinda kontrolleri yap