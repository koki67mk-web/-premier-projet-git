const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let tickets=[];
 let nextticketId = 1;
 let annuléTeckets={};
function MenuPrincipal(){
    
    console.log(`
=================================
       RAILWAY MANAGER
=================================
1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter
`)
const choix = Number(prompt(" entrez votre choix "));
switch(choix){
    case 1:
        AfficherTrajets();
        break;
    case 2 :
        AcheterTicket();
        break;



}
};
MenuPrincipal();
function AfficherTrajets(){
console.log ("=== TRAJETS DISPONIBLES ===");
for(let i = 0 ;i < trips.length ; i++){
    let trip = trips[i];
    console.log("#", trip.id, trip.departure, " → " , trip.destination);
    console.log("Départ :", trip.departureTime );
    console.log("Arrivée : ", trip.arrivalTime );
    console.log("Prix :", trip.price, );
    console.log("Places disponibles : ", trip.availableSeats );
    console.log(" ");
};
}; 

function AcheterTicket(){
    const IdentifiantTrajet = Number(prompt(" entrer un Identifiant "));
    let trajet ;
     for(let i = 0 ; i <trips.length ;i++){
        if (trips[i].id === IdentifiantTrajet){
        trajet = trips[i]
        console.log(trajet);
        };
         } 
         if (!trajet) {
    console.log("Trajet introuvable.");
    return;
        }else{
        if (trajet.availableSeats >= 0) {
    console.log("Place disponible");
} else {
    console.log("Aucune place disponible");
    
}
    }
     const NomPassager = prompt(" entre ton nom ");

   let seatNumber = 1;
   for(let i = 0 ; i< tickets.length ; i++ ){
    if (tickets[i].seatNumber === seatNumber) {
          seatNumber++;    
   }
   }
  
    let idticket = nextticketId;
    nextticketId++; 
    trajet.availableSeats--;
    let ticket = {
      id: idticket,
      passengerName: NomPassager,
      tripId: trajet.id,
      seatNumber: seatNumber,
      price: trajet.price
    };
        tickets.push(ticket);
console.log("Ticket acheté avec succès");
console.log(" === TICKETS === ");
console.log("Tecket", "#" , ticket.id );
console.log()
console.log("seatNumber :", ticket.seatNumber);
console.log("price :", ticket.price);
console.log(ticket)


    Ticket #1
Passager : Ahmed
Trajet : Safi → Marrakech
Place : 1
Prix : 90 DH
    
}

     


