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



const addEvent = document.getElementById("addEvent");

addEvent.addEventListener("click", event => {
    event.preventDefault();

    const form = document.createElement("form");
    form.id = "form";
    document.body.appendChild(form);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "Name";
    form.appendChild(nameInput);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    form.appendChild(dateInput);

    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.placeholder = "Author";
    form.appendChild(authorInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.placeholder = "Description";
    form.appendChild(descriptionInput);


    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "submit";
    buttonSubmit.id = "submitForm";
    buttonSubmit.innerText = "Submit";
    form.appendChild(buttonSubmit);
   
});

const submitForm = document.getElementById("form");

if (submitForm) {
    submitForm.addEventListener("submit", event => {
        event.preventDefault();
    
        const name = document.getElementById("name").value;
        const dates = document.getElementById("date").value;
        const author = document.getElementById("author").value;
        const description = document.getElementById("description").value;
    
        // fetch("http://localhost:3000/api/events", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/JSON"
        //     },
        //     body: JSON.stringify({
        //         name: string, 
        //         dates: ['YYYY-MM-DD'], 
        //         author: string, 
        //         description: string,
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => console.error(error));

        fetch('http://localhost:3000/api/events', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'YourEventName',
                dates: ['YYYY-MM-DD'],
                author: 'EventAuthor',
                description: 'EventDescription',
            }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Event created:', data);
                })
                .catch(error => {
                    console.error('Error creating event:', error);
                });
    });
}