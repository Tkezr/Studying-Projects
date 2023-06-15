document.addEventListener('DOMContentLoaded', function() {
var data = [
    {
        "image":"Image/pic1.jpeg",
        "title": "Armothy",
        "status": "Dead - Unknown",
        "location": "Planet Earth",
        "first_seen": "Planet Mars"
    },
    {
        "image":"Image/pic2.jpeg",
        "title": "Horse",
        "status": "Dead - Alien",
        "location": "Planet Earth",
        "first_seen": "Planet Mars"
    },
    {
        "image":"Image/pic3.jpeg",
        "title": "Lady",
        "status": "Unknown - Human",
        "location": "Unknown",
        "first_seen": "Mortyville"
    },
    {
        "image":"Image/pic4.jpeg",
        "title": "Bug",
        "status": "Alive - Alien",
        "location": "Planet Earth",
        "first_seen": "Planet Mars"
    },
    {
        "image":"Image/pic5.jpeg",
        "title": "Toxic Morty",
        "status": "Dead - Humanoid",
        "location": "Earth (Replacement Dimension)",
        "first_seen": "Rest and Ricklaxation"
    },
    {
        "image":"Image/pic6.jpeg",
        "title": "Kevin",
        "status": "Unknown - Alien",
        "location": "Zigerion's Base",
        "first_seen": "M. Night Shaym-Aliens!"
    },
    {
        "image":"Image/pic7.jpeg",
        "title": "Body Guard Morty",
        "status": "Dead - Human",
        "location": "Citadel of Ricks",
        "first_seen": "The Ricklantis Mixup"
    },
    {
        "image":"Image/pic8.jpeg",
        "title": "Mr Celery & Friends",
        "status": "Alive - Unknown",
        "location": "Ricks's Story",
        "first_seen": "Never Ricking Morty"
    }

];

data.sort(() => 0.5 - Math.random());

data = data.slice(0,4);

const main_content = document.querySelector(".main-content"); 

data.forEach( (Data , i) => {

    //Creating all the elements and assigning their classes
    let card_element = document.createElement("div");
    card_element.className = "card";
    let card_image = document.createElement("img");
    let card_title_link = document.createElement("a");
    let card_title = document.createElement("h1");
    let card_data_element = document.createElement("div");
    card_data_element.className = "data";
    let card_status_element = document.createElement("div");
    card_status_element.className = "card-status";
    let status_element = document.createElement("span");
    status_element.className = "status";
    let status_text_element = document.createElement("span");
    status_text_element.className = "status-text"; 
    let card_first_seen_element = document.createElement("div");
    card_first_seen_element.className = "card-first seen";
    let card_location_element = document.createElement("div");
    card_location_element.className = "card-location seen";
    let first_seen_text_element = document.createElement("a");
    first_seen_text_element.className = "bold-title-card";
    let location_text_element = document.createElement("a");
    location_text_element.className = "bold-title-card";
    let location_element = document.createElement("p");
    let first_seen_element = document.createElement("p");

    
    //Assigning all the values for the card
    card_image.src = Data.image;
    card_title.textContent = Data.title;
    status_text_element.textContent = Data.status;
    location_text_element.textContent = Data.location;
    first_seen_text_element.textContent = Data.first_seen;
    card_title_link.href = 'www.netflix.com';
    location_element.textContent = "Last Known Location:";
    first_seen_element.textContent = "First Seen in:";

    //Appending title
    card_title_link.appendChild(card_title);

    //Appending Status
    card_status_element.appendChild(status_element);
    card_status_element.appendChild(status_text_element);

    if(Data.status.split(" ")[0] == "Dead")
        {
            status_element.style.background = 'red'; 
        }
        else if(Data.status.split(" ")[0] == "Alive")
        {
            status_element.style.background = 'rgb(85, 204, 68)';
        }
        else if(Data.status.split(" ")[0] == "Unknown")
        {
            status_element.style.background = 'rgb(158, 158, 158)';
        }



    //Appending Location on card
    card_location_element.appendChild(location_element);
    card_location_element.appendChild(location_text_element);

    //Appending First Seen of Card
    card_first_seen_element.appendChild(first_seen_element);
    card_first_seen_element.appendChild(first_seen_text_element);

    //Appending all the data of the card
    card_data_element.appendChild(card_title_link);
    card_data_element.appendChild(card_status_element);
    card_data_element.appendChild(card_location_element);
    card_data_element.appendChild(card_first_seen_element);

    //Appending the entire card
    card_element.appendChild(card_image);
    card_element.appendChild(card_data_element);


    //Appending to the main
    console.log(card_element)
    main_content.appendChild(card_element);
    
});

});
