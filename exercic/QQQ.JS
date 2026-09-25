const prompt = require("prompt-sync")();
const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "07:30",
    arrivalTime: "08:30",
    price: 25,
    availableSeats: 50,
  },
  {
    id: 2,
    departure: "Safi",
    destination: "Marrakech",
    departureTime: "08:00",
    arrivalTime: "10:30",
    price: 90,
    availableSeats: 50,
  },
  {
    id: 3,
    departure: "Safi",
    destination: "Casablanca",
    departureTime: "09:00",
    arrivalTime: "13:00",
    price: 140,
    availableSeats: 50 - 2,
  },
  {
    id: 4,
    departure: "Youssoufia",
    destination: "Marrakech",
    departureTime: "09:15",
    arrivalTime: "11:00",
    price: 65,
    availableSeats: 50,
  },
  {
    id: 5,
    departure: "Youssoufia",
    destination: "Casablanca",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 110,
    availableSeats: 50 - 1,
  },
  {
    id: 6,
    departure: "Marrakech",
    destination: "Casablanca",
    departureTime: "11:30",
    arrivalTime: "14:30",
    price: 120,
    availableSeats: 50,
  },
  {
    id: 7,
    departure: "Marrakech",
    destination: "Rabat",
    departureTime: "12:00",
    arrivalTime: "16:00",
    price: 150,
    availableSeats: 50,
  },
  {
    id: 8,
    departure: "Casablanca",
    destination: "Rabat",
    departureTime: "14:00",
    arrivalTime: "15:15",
    price: 40,
    availableSeats: 50,
  },
  {
    id: 9,
    departure: "Casablanca",
    destination: "Kenitra",
    departureTime: "15:00",
    arrivalTime: "16:45",
    price: 55,
    availableSeats: 50,
  },
  {
    id: 10,
    departure: "Rabat",
    destination: "Kenitra",
    departureTime: "16:00",
    arrivalTime: "16:45",
    price: 30,
    availableSeats: 50,
  },
  {
    id: 11,
    departure: "Rabat",
    destination: "Fes",
    departureTime: "17:00",
    arrivalTime: "19:30",
    price: 95,
    availableSeats: 50,
  },
  {
    id: 12,
    departure: "Kenitra",
    destination: "Fes",
    departureTime: "17:30",
    arrivalTime: "20:00",
    price: 85,
    availableSeats: 50,
  },
  {
    id: 13,
    departure: "Fes",
    destination: "Meknes",
    departureTime: "08:30",
    arrivalTime: "09:20",
    price: 35,
    availableSeats: 50,
  },
  {
    id: 14,
    departure: "Fes",
    destination: "Oujda",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 130,
    availableSeats: 50,
  },
  {
    id: 15,
    departure: "Meknes",
    destination: "Rabat",
    departureTime: "11:00",
    arrivalTime: "13:30",
    price: 80,
    availableSeats: 50,
  },
  {
    id: 16,
    departure: "Meknes",
    destination: "Casablanca",
    departureTime: "12:00",
    arrivalTime: "15:00",
    price: 105,
    availableSeats: 50,
  },
  {
    id: 17,
    departure: "Casablanca",
    destination: "El Jadida",
    departureTime: "16:30",
    arrivalTime: "18:00",
    price: 50,
    availableSeats: 50,
  },
  {
    id: 18,
    departure: "El Jadida",
    destination: "Safi",
    departureTime: "18:30",
    arrivalTime: "20:30",
    price: 60,
    availableSeats: 50,
  },
  {
    id: 19,
    departure: "Marrakech",
    destination: "Agadir",
    departureTime: "15:00",
    arrivalTime: "18:30",
    price: 100,
    availableSeats: 50,
  },
  {
    id: 20,
    departure: "Agadir",
    destination: "Safi",
    departureTime: "19:00",
    arrivalTime: "22:00",
    price: 95,
    availableSeats: 50,
  },
];
const tickets = [
  { id: 1, passengerName: "Ahmed", tripId: 3, seatNumber: 1, price: 140 },
  { id: 2, passengerName: "Sarah", tripId: 3, seatNumber: 2, price: 140 },
  { id: 3, passengerName: "Youssef", tripId: 5, seatNumber: 14, price: 110 },
];
let nextticketId = 4;

function Menu_principal() {
  console.log("=================================\n");
  console.log("         RAILWAY MANAGER          \n");
  console.log("=================================\n\n\n");
  console.log("1. Afficher les trajets");
  console.log("2. Acheter un ticket");
  console.log("3. Afficher les tickets");
  console.log("4. Annuler un ticket");
  console.log("5. Rechercher un ticket");
  console.log("6. Filtrer les trajets");
  console.log("7. Trier les trajets");
  console.log("0. Quitter\n");
}

function AfficherLesTtrajets(trips) {
  console.log("=== TRAJETS DISPONIBLES ===\n");
  trips.forEach((trip) => {
    console.log("#", trip.id, trip.departure, "→", trip.destination);
    console.log("Départ :", trip.departureTime);
    console.log("Arrivée :", trip.arrivalTime);
    console.log("Prix :", trip.price, "DH");
    console.log("Places disponibles : ", trip.availableSeats, "\n\n");
  });
}

function Acheter_un_ticket() {
  let Nom_du_passager = prompt("entrez votre nom et prenom ");
  let Identifiant_du_trajet = Number(
    prompt("entrez le identifiant de trajet "),
  );
  let trajet = trips.find((trip) => {
    return trip.id === Identifiant_du_trajet;
  });
  if (!trajet) {
    console.log("Trajet introuvable.");
  } else if (trajet.availableSeats === 0) {
    console.log("Train complet.");
  } else {
    let seatNumber = 1;
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].tripId === trajet.id) {
        if (tickets[i].seatNumber === seatNumber) {
          seatNumber++;
          i = -1;
        }
      }
    }
    let idticket = nextticketId;
    nextticketId++; // 3tit user id dyal ticket
    trajet.availableSeats--;
    let ticket = {
      id: idticket,
      passengerName: Nom_du_passager,
      tripId: trajet.id,
      seatNumber: seatNumber,
      price: trajet.price,
    };
    tickets.push(ticket);
    console.log("Ticket acheté avec succès.");
    console.log("Ticket #", ticket.id);
    console.log("Passager :", ticket.passengerName);
    console.log("Trajet :", trajet.departure, " → ", trajet.destination);
    console.log("Place :", ticket.seatNumber);
    console.log("prix:", ticket.price, "DH");
  }
}

function AfficherLesTickets(tickets) {
  console.log("=== TICKETS ===");
  if (tickets.length === 0) {
    console.log("Aucun ticket enregistré.");
  } else {
    for (let i = 0; i < tickets.length; i++) {
      let ticket = tickets[i];
      for (let j = 0; j < trips.length; j++) {
        if (trips[j].id === ticket.tripId) {
          console.log("Ticket #", ticket.id);
          console.log("Passager :", ticket.passengerName);
          console.log(
            "Trajet :",
            trips[j].departure,
            " → ",
            trips[j].destination,
          );
          console.log("Place :", ticket.seatNumber);
          console.log("prix:", ticket.price, "DH");
        }
      }
    }
  }
}

function Annuler_un_ticket(tickets) {
  let idTicket = Number(prompt("Entrez l'identifiant du ticket : "));

  let trouve = false;

  for (let i = 0; i < tickets.length; i++) {
    let ticket = tickets[i];

    if (ticket.id === idTicket) {
      trouve = true;

      for (let j = 0; j < trips.length; j++) {
        if (trips[j].id === ticket.tripId) {
          trips[j].availableSeats++;

          for (let k = i; k < tickets.length - 1; k++) {
            tickets[k] = tickets[k + 1];
          }

          tickets.length--;
          console.log("Ticket annulé avec succès.");
        }
      }
    }
  }
  if (trouve === false) {
    console.log("Ticket introuvable.");
  }
}
function Rechercher_un_ticket(tickets) {
  let nom = prompt("Nom du passager : ");
  let trouve = false;
  console.log("Nom du passager :\n\n", nom);

  for (let i = 0; i < tickets.length; i++) {
    let ticket = tickets[i];
    if (ticket.passengerName === nom) {
      trouve = true;

      console.log("Ticket #", ticket.id);
      console.log("Passager :", ticket.passengerName);
      for (let j = 0; j < trips.length; j++) {
        let trajet = trips[j];
        if (trajet.id === ticket.tripId) {
          console.log("Trajet :", trajet.departure, "→", trajet.destination);
        }
      }
      console.log("Place :", ticket.seatNumber);
      console.log("Prix :", ticket.price, "DH");
    }
  }
  if (trouve === false) {
    console.log("Aucun ticket trouvé.");
  }
}
function FiltrerLesTrajets(trips) {
  let ville = prompt("Entrez la ville de départ : ");
  let trouve = false;
  for (let i = 0; i < trips.length; i++) {
    let trip = trips[i];
    if (trip.departure === ville) {
      trouve = true;
      console.log(ville, "→ ", trip.destination, ":", trip.price, "DH");
    }
  }
  if (trouve === false) {
    console.log("Aucun trajet trouvé.");
  }
}
function Trier_les_trajets(trips) {
  for (let i = 0; i < trips.length; i++) {
    for (let j = i + 1; j < trips.length; j++) {
      if (trips[i].price > trips[j].price) {
        let temp = trips[i];
        trips[i] = trips[j];
        trips[j] = temp;
      }
    }
  }
  console.log("=== TRAJETS TRIES PAR PRIX ===");

  for (let i = 0; i < trips.length; i++) {
    console.log(
      trips[i].departure,
      "→",
      trips[i].destination,
      ":",
      trips[i].price,
      "DH",
    );
  }
}

let choix;
while (choix != 0) {
  Menu_principal();
  choix = Number(prompt("Votre choix : "));
  switch (choix) {
    case 1:
      AfficherLesTtrajets(trips);
      break;
    case 2:
      Acheter_un_ticket();
      break;
    case 3:
      AfficherLesTickets(tickets);
      break;
    case 4:
      Annuler_un_ticket(tickets);
      break;
    case 5:
      Rechercher_un_ticket(tickets);
      break;
    case 6:
      FiltrerLesTrajets(trips);
      break;
    case 7:
      Trier_les_trajets(trips);
      break;
    case 0:
      console.log("Au revoir !");
      break;
    default:
      console.log("Choix invalide.");
  }
}