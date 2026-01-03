const reservations = [];

function book() {
  const room = document.getElementById("room").value;

  if (reservations.includes(room)) {
    alert("Salle déjà réservée");
    return;
  }

  reservations.push(room);
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  reservations.forEach(r => list.innerHTML += `<li>${r}</li>`);
}