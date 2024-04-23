let chars = [
  {
    pic: "https://tiermaker.com/images/template_images/2022/811266/overwatch-2-2d-hero-portraits-w--ramattra-811266/dvajpeg.png",
    name: "D.VA",
    cat: "Tank",
  },

  {
    pic: "https://www.giantbomb.com/a/uploads/scale_small/8/87790/3025942-ovw4.png",
    name: "Doomfist",
    cat: "Tank",
  },

  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjFRgaHsvOoai0zjji2D9F7nB84kx9eIdFA&s",
    name: "Junker Queen",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5Wm3LiRhViQGcsey7u7cDX3XAT36N0Nz2A&s",
    name: "Orisa",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtOpY8PWHxWDNCA2reZGHDFBLZlOrvLsICg&s",
    name: "Reinhardt",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-Va8veJNj1LvzCSBFbVd4HMh7Tqt03GiWw&s",
    name: "Roadhog",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkvxcM3syw7oAfIPy5y6EDrVLbYiYUfEnQw&s",
    name: "Sigma",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrzpu9y9-IPh46tq1N29Jt8nT5RWOkveNVw&s",
    name: "Winston",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIstwR4qfrnF1432WgNjEIclEKq-c5kZ2_Q&s",
    name: "Wrecking Ball",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zDCjAIT2HH0jKM8Q5mTgt9y-j28eWXUiGw&s",
    name: "Zarya",
    cat: "Tank",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjfrOwACeUxGl4uiGibzih8SDqSYnHWgkgQ&s",
    name: "Ashe",
    cat: "Damage",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrJYicMCAVz6_KtQg6myILHGbDucoADOEmA&s",
    name: "Bastion",
    cat: "Damage",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnc2dIXEKIAmqxTI0hh2uDzlQtBUJY1_EJ8w&s",
    name: "Cassidy",
    cat: "Damage",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXGggBuEiaMxc22ljt3v7DGCDWNMA_-Q0qw&s",
    name: "Echo",
    cat: "Damage",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSJToM6CShSSu5QJuIA3pjNrZO1Hv0cRluA&s",
    name: "Genji",
    cat: "Damage",
  },

  //Supps
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__R-z-imaudDDFtd30vsGhjLn9H-5XJiLQg&s",
    name: "Ana",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbaptiste.6737fd59.png&w=3840&q=100",
    name: "Baptiste",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrigitte.f2d1f7b6.png&w=3840&q=100",
    name: "Brigitte",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillari.e88095ad.png&w=3840&q=100",
    name: "Illari",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkiriko.2464e6a1.png&w=3840&q=100",
    name: "Kiriko",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flifeweaver.e81d7dc5.png&w=3840&q=100",
    name: "Lifeweaver",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flucio.9fd9e6ae.png&w=3840&q=100",
    name: "Lucio",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmercy.ea1158d3.png&w=3840&q=100",
    name: "Mercy",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmoira.63c6ec77.png&w=3840&q=100",
    name: "Moira",
    cat: "Support",
  },
  {
    pic: "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenyatta.18715675.png&w=3840&q=100",
    name: "Zenyatta",
    cat: "Support",
  },
];

//Declare Var
let cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
let tankCardsListElement = document.querySelector("#cards__tank");
let damageCardsListElement = document.querySelector("#cards__dps");
let suppCardsListElement = document.querySelector("#cards__supp");
console.log(cardTemplate);

let cardslist = document.querySelector(".cards__list");

//Functions
function getCardElement(cardData) {
  let cardElement = cardTemplate.cloneNode(true); //Clone Template

  let cardImageElement = cardElement.querySelector(".card__image"); //Create and Set Image
  cardImageElement.src = cardData.pic;

  let cardTextElement = cardElement.querySelector(".card__text"); //Create and Set Text
  cardTextElement.textContent = cardData.name;
  return cardElement;
}

//Filter array baed on chars category
let tankChars = chars.filter((char) => char.cat === "Tank");
let damageChars = chars.filter((char) => char.cat === "Damage");
let suppChars = chars.filter((char) => char.cat === "Support");

//Append Tank Chars
tankChars.forEach((cardData) => {
  let cardElement = getCardElement(cardData);
  tankCardsListElement.append(cardElement);
});

damageChars.forEach((cardData) => {
  let cardElement = getCardElement(cardData);
  damageCardsListElement.append(cardElement);
});

suppChars.forEach((cardData) => {
  let cardElement = getCardElement(cardData);
  suppCardsListElement.append(cardElement);
});
