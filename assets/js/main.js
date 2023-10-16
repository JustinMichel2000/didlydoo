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

document.addEventListener('DOMContentLoaded', function() { 

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
    const list = document.getElementById("dateList");
    const datesArray = [];
    
    addDate.addEventListener("click", event => {
        event.preventDefault();
        
        const date = document.getElementById("date").value;
    
        if (date) {
            const listItem = document.createElement("li");
            listItem.textContent = date;
            list.appendChild(listItem);
            datesArray.push(date);
        
            document.getElementById("date").value = "";
        }
    });
    
    
    
    });
    
    // // function to put id in url
    // function putID() {
    //     const id = getID();
    //     const form = document.getElementById("form");
    //     form.action = `http://localhost:3000/api/events/${id}`;
    // }
    
    //function to get id
    // function getID() {
    //     const url = window.location.href;
    //     const urlSplit = url.split("/");
    //     const id = urlSplit[urlSplit.length - 1];
    //     return id;
    // }
    
    
    /////////////////////// array ID //////////////////////////////

    /////////////////////// arrayid events //////////////////////////////
    fetch("http://localhost:3000/api/events", {})
        .then(response => response.json())
        .then(events => {
            console.table(events);
    
            const numblist = [];
            const arrayid = [];
            
            for (let a = 0; a < events.length; a++) {
                numblist.push(a);
            }
            
            
            numblist.forEach((numb) => {
                let listid = document.createElement("span");
                listid.textContent = (events[numb].id);
            
                arrayid.push(listid.textContent);

                // console.log(arrayid);
            });
    
    
   /////////////////////// display event //////////////////////////////    
            

            arrayid.forEach((id) => {
            fetch(`http://localhost:3000/api/events/${id}`, {})
            .then(response => response.json())
            .then(event => {

                const eventHeader = document.getElementById("eventHeader");

                const divevent = document.createElement('div');
                divevent.className = 'divevents'
                eventHeader.appendChild(divevent);


                const name = document.createElement("h2");
                name.classList.add("eventName");
                name.textContent = event.name;
                divevent.appendChild(name);
    
                const author = document.createElement("p");
                author.classList.add("eventAuthor");
                author.textContent = event.author;
                divevent.appendChild(author)
    
                const description = document.createElement("p");
                description.classList.add("eventDescription");
                description.textContent = event.description;
                divevent.appendChild(description);

                ////////////ADD DELETE BUTTON///////////////

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => {
                    deleteEvent(event.id);
                });
                divevent.appendChild(deleteButton);

                ////////// FUNCTION FETCH METHOD DELETE///////////

                function deleteEvent(id) {
                    fetch(`http://localhost:3000/api/events/${id}`, {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json',
                            },
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log("Event deleted:", data);
                            // Refresh the list of events
                            displayEvents();
                        })
                        .catch(error => {
                            console.error("Error deleting event:", error);
                        });
                }

        

/////////////////////// Input Attendee //////////////////////////////

                const eventFooter = document.createElement("div");
                divevent.appendChild(eventFooter);

                let attendeeName = document.createElement("input");
                attendeeName.type = 'text';
                attendeeName.id = 'attendeeName';
                attendeeName.placeholder = 'Attendee Name';
                eventFooter.appendChild(attendeeName);

                let booleanChoice = document.createElement('input')
                booleanChoice.type = 'checkbox';
                booleanChoice.id = 'booleanChoice';
                booleanChoice.value = 'false';
                eventFooter.appendChild(booleanChoice);

                let submitFooter = document.createElement('button');
                submitFooter.type = 'submit';
                submitFooter.id = 'submitFooter';
                submitFooter.textContent = 'submitFooter';
                eventFooter.appendChild(submitFooter);
            

   /////////////////////// display Attendee //////////////////////////////
   
   /////////////////////// arrayid Attendee //////////////////////////////
    
   fetch(`http://localhost:3000/api/attendees`, {})
        .then(response => response.json())
        .then(Attendee => {
            console.table(Attendee);
    
    //         const numblist = [];
    //         const arrayid = [];
            
    //         for (let a = 0; a < events.length; a++) {
    //             numblist.push(a);
    //         }
            
            
    //         numblist.forEach((numb) => {
    //             let listid = document.createElement("span");
    //             listid.textContent = (Attendee[numb].id);
            
    //             arrayid.push(listid.textContent);

    //             // console.log(arrayid);
    //         });
        });
    
    
   /////////////////////// display event //////////////////////////////    
    //         const eventHeader = document.getElementById("eventHeader");
    
    //         arrayid.forEach((id) => {
    //         fetch(`http://localhost:3000/api/attendees/${id}`, {})
    //         .then(response => response.json())
    //         .then(Attendee => {
    //             onsole.log(Attendee);
                
   
    //             const eventBoard = document.createElement('div');
    //             appendChild(eventBoard)
   
    //             const AttendeeName = document.createElement('span');

    //             const eventDates = document.createElement('span');

    //             const availables = document.createElement('span');
                
    //         })
    //         .catch(error => console.error(error));
            
    //    });
     });
});

});

       
    

