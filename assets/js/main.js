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
      
    /////////////////////// array ID //////////////////////////////

    /////////////////////// arrayid events //////////////////////////////
    const arrayid = [];

    async function searchIdEvent() {
        try {
            const response = await fetch("http://localhost:3000/api/events");
            const events = await response.json();
            
            for (let a = 0; a < events.length; a++) {
                arrayid.push(events[a].id);
            }
        } catch (error) {
            console.error("Error fetching event IDs:", error);
        }
    }
    
    async function displayAllEvents() {
        await searchIdEvent();
        
        for (const id of arrayid) {
            try {
                const response = await fetch(`http://localhost:3000/api/events/${id}`);
                const event = await response.json();
                
                // Display event data here.
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        }
    }
    
    displayAllEvents();
            

        let buttondisplayAllEvent = document.querySelector('#displayAllEvent');
        buttondisplayAllEvent.addEventListener('click', displayAllEvent)


        let deleteButton = document.getElementById('Delete')

                ////////////ADD DELETE BUTTON///////////////

                // const deleteButton = document.createElement("button");
                // deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => {
                    deleteEvent(event.id);
                });
                // divevent.appendChild(deleteButton);

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
                            // must add a kind of refresh function
                            
                        })
                        .catch(error => {
                            console.error("Error deleting event:", error);
                        });
                }



////////////////////////////// EDIT //////////////////////////////

    //    const buttoneventEdit = document.createElement("button");
    //    buttoneventEdit.textContent = "Edit";
    //    buttoneventEdit.className = 'buttoneventEdit';
    //    divevent.appendChild(buttoneventEdit);

   
// function to modify an event with fetch patch

function modifyEvent(id, event) {

    fetch(`http://localhost:3000/api/events/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(event => {
        
        const eventName = document.querySelector(".eventName");
        eventName.contentEditable = true;
        eventName.style.border = "1px solid black";

        const eventAuthor = document.querySelector(".eventAuthor");
        eventAuthor.contentEditable = true;
        eventAuthor.style.border = "1px solid black";

        const eventDescription = document.querySelector(".eventDescription");
        eventDescription.contentEditable = true;
        eventDescription.style.border = "1px solid black";
    })
    .catch(error => console.error(error));
}
       
// const buttonEdit = document.getElementById("buttoneventEdit");

buttoneventEdit.addEventListener("click", modifyEvent);

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        exit();
    }
});

function exit() {
    const eventName = document.querySelector(".eventName");
    eventName.contentEditable = false;
    eventName.style.border = "none";

    const eventAuthor = document.querySelector(".eventAuthor");
    eventAuthor.contentEditable = false;
    eventAuthor.style.border = "none";

    const eventDescription = document.querySelector(".eventDescription");
    eventDescription.contentEditable = false;
    eventDescription.style.border = "none";
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
   
            
    //         })
    //         .catch(error => console.error(error));
            
    //    });
    //  });
// });

// });