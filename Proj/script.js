document.addEventListener("DOMContentLoaded", function() {
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
    
    const cards = document.querySelectorAll('.card');
    
    let card_array = Array.from(cards);
    
    data.sort(() => 0.5 - Math.random())

    card_array.forEach((card,i) => {
    
        const card_image = card.querySelector('img');
        card_image.src = data[i].image;
        console.log(data[i].image);
        
        const card_title = card.querySelector('h1');
        card_title.textContent = data[i].title;
        
        const card_status = card.querySelector('.status-text');
        card_status.textContent = data[i].status;

        if(data[i].status.split(" ")[0] == "Dead")
        {
            card.querySelector('.status').style.background = 'red'; 
        }
        else if(data[i].status.split(" ")[0] == "Alive")
        {
            card.querySelector('.status').style.background = 'rgb(85, 204, 68)';
        }
        else if(data[i].status.split(" ")[0] == "Unknown")
        {
            card.querySelector('.status').style.background = 'rgb(158, 158, 158)';
        }

        const card_location = card.querySelector('.card-location');
        card_location.querySelector('.bold-title-card').textContent = data[i].location;

        const card_first_seen = card.querySelector('.card-first');
        card_first_seen.querySelector('.bold-title-card').textContent = data[i].first_seen;
    });
    });