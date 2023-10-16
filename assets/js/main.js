// get
// fetch("http://localhost:3000/api/events", {
//     method: "GET",
// })
//     .then(response => response.json())
//     .then(events => {
//         console.log(events);
//     })
//     .catch(error => console.error(error));

// post
// fetch("http://localhost:3000/api/events", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "My first event",
//         description: "This is my first event",
//         author: "5e9b9a0f1c9d440000f0f4e4",
//         start: "2020-01-01T10:00:00.000Z",
//         end: "2020-01-01T12:00:00.000Z"
//     })
// })
//     .then(response => response.json())
//     .then(event => {
//         console.log(event);
//     })
//     .catch(error => console.error(error));

fetch("http://localhost:3000/api/events", {})
    .then(response => response.json())
    .then(events => {
        console.table(events);
    })
    .catch(error => console.error(error));

const form = document.getElementById("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dates = datesArray;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;

    fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            dates: dates,
            author: author,
            description: description,
        }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Event created:', data);
                putID();
                displaySingleEvent();
            })
            .catch(error => {
                console.error('Error creating event:', error);
            });
});

const addDate = document.getElementById("addDate");

const datesArray = [];

addDate.addEventListener("click", event => {
    event.preventDefault();
    
    const date = document.getElementById("date").value;
    datesArray.push(date);
    document.getElementById("date").value = "";
});

// function to put id in url
function putID() {
    const id = getID();
    const form = document.getElementById("form");
    form.action = `http://localhost:3000/api/events/${id}`;
}

//function to get id
function getID() {
    const url = window.location.href;
    const urlSplit = url.split("/");
    const id = urlSplit[urlSplit.length - 1];
    return id;
}

// function to display a single event by id
function displaySingleEvent() {
    const eventHeader = document.getElementById("eventHeader");
    const id = getID();

    fetch(`http://localhost:3000/api/events/${id}`, {})
        .then(response => response.json())
        .then(event => {
            const name = document.createElement("h2");
            name.classList.add("eventName");
            name.textContent = event.name;
            eventHeader.appendChild(name);

            const author = document.createElement("p");
            author.classList.add("eventAuthor");
            author.textContent = event.author;
            eventHeader.appendChild(author);

            const description = document.createElement("p");
            description.classList.add("eventDescription");
            description.textContent = event.description;
            eventHeader.appendChild(description);
        })
        .catch(error => console.error(error));
}