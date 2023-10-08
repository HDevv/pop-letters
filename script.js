const target = document.getElementById("target");
let array = ["vaste", "JS", "technique", "pratique", "fluide"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  // on créer un span qui sera l'enfant de letter
  const letter = document.createElement("span");
  target.appendChild(letter);

  //on attribue la class letter à tous les span
  letter.classList.add("letter");
  letter.style.opacity = "0";
  letter.style.animation = "anim 5s ease forwards";
  // forwards = elle reste dans son état final, ne repars pas à 0
  letter.textContent = array[wordIndex][letterIndex];
  // prend le wordIndex, va sur l'élément du tableau (mots)
  // letterIndex, rentre dans l'élément et fais 0 1 2 3 4 ..

  // supr la lettre au bout de 2s
  setTimeout(() => {
    letter.remove();
  }, 2000);
};

// ALL LETTERS

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();

      // Si letter index est inf au mot actuel, array... .length
      // Si il reste encore des lettre à évoquer dans ce mot
    } else if (letterIndex < array[wordIndex].length) {
      //on créer une lettre avec un nouvel index et on relance le loop()
      createLetter();
      letterIndex++;
      loop();
    } else {
      letterIndex = 0;
      wordIndex++;

      // on met un timeout au loop pour éviter qu'il affcihe tous les mots d'un coup
      // on le déclenche à partir de 2s
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 80);
};

loop();
