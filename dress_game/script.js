function changeDress(option) {
  const dress = document.getElementById("dress");

  if (option === 1) {
    dress.src = "https://via.placeholder.com/150/ffb6c1";
  } else {
    dress.src = "https://via.placeholder.com/150/ff69b4";
  }
}

function changeHair(option) {
  const hair = document.getElementById("hair");

  if (option === 1) {
    hair.src = "https://via.placeholder.com/150/8b4513";
  } else {
    hair.src = "https://via.placeholder.com/150/000000";
  }
}

function changeShoes(option) {
  const shoes = document.getElementById("shoes");

  if (option === 1) {
    shoes.src = "https://via.placeholder.com/150/000000";
  } else {
    shoes.src = "https://via.placeholder.com/150/ffffff";
  }
}