document.addEventListener('DOMContentLoaded', function() { 

    fetch("http://localhost:3000/api/events", {})
        .then(response => response.json())
        .then(events => {
            console.table(events);
            // console.table(events[3].dates);
            // console.table(events[3].dates[0].attendees[0].available);
            // console.table(events[3].dates[0].attendees[0].name);
            // console.table(events[3].dates[0].date);
            
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
                    // console.log('Event created:', data);
                    // putID();
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

// function clearevent (){
//     const eventHeader = document.getElementById('eventHeader')
//     eventHeader.textContent = '';
// }


async function displayAllEvents() {
    await searchIdEvent();
    
    for (const id of arrayid) {
        try {
            const response = await fetch(`http://localhost:3000/api/events/${id}`);
            const event = await response.json();
            
            // console.table(event);
            console.table(event.dates);
            // console.table(event.dates[0].attendees[0].available);
            // console.table(event.dates[0].attendees[0].name);
            // console.table(event.dates[0].date);

            
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

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.id = "Delete";
                deleteButton.className = "Delete";
                divevent.appendChild(deleteButton);

                const buttoneventEdit = document.createElement("button");
                buttoneventEdit.textContent = "Edit";
                buttoneventEdit.className = 'buttoneventEdit';
                divevent.appendChild(buttoneventEdit);

                const buttonsingleEvent = document.createElement('button');
                buttonsingleEvent.id='buttonsingleEvent';
                buttonsingleEvent.textContent = 'buttonsingleEvent';
                divevent.appendChild(buttonsingleEvent)

                const containerattendee = document.createElement("div");
                containerattendee.classList.add("containerattendee");
                divevent.appendChild(containerattendee);

                let attendeeName = document.createElement("input");
                attendeeName.type = 'text';
                attendeeName.id = 'attendeeName';
                attendeeName.placeholder = 'Attendee Name';
                containerattendee.appendChild(attendeeName);

                let booleanChoice = document.createElement('input')
                booleanChoice.type = 'checkbox';
                booleanChoice.id = 'booleanChoice';
                booleanChoice.value = 'false';
                containerattendee.appendChild(booleanChoice);

                let submitFooter = document.createElement('button');
                submitFooter.type = 'submit';
                submitFooter.id = 'submitFooter';
                submitFooter.textContent = 'submitFooter';
                containerattendee.appendChild(submitFooter);

                const attendeetable = document.createElement("div");
                attendeetable.classList.add("attendeetable");
                divevent.appendChild(attendeetable);

                const attendeetabledate = document.createElement("div");
                attendeetabledate.classList.add("attendeetabledate");
                attendeetable.appendChild(attendeetabledate);

                const attendeetableinfo = document.createElement("div");
                attendeetableinfo.classList.add("attendeetableinfo");
                attendeetable.appendChild(attendeetableinfo);

                event.dates.forEach(element => {
                    const attendeedate = document.createElement('span');
                    attendeedate.className = 'attendeedate';
                    attendeedate.textContent = element.date; 
                    attendeetabledate.appendChild(attendeedate);   
                    

                });    

                event.dates.attendees.forEach(element => {
                    const attendeeinfo = document.createElement('span');
                    attendeeinfo.textContent = element.available;
                    attendeetableinfo.appendChild(attendeeinfo);    

              });
                    // console.log(attendeechoice);
                    // console.log(attendeeinfo);

                    
                    attendeetableinfo.appendChild(attendeechoice);


            // });
                

        } catch (error) {
            console.error("Error fetching event:", error);
        }
    }
}


        

        let buttondisplayAllEvent = document.querySelector('#displayAllEvent');
        buttondisplayAllEvent.addEventListener('click', displayAllEvents)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function displaySingleEvent(id) {
//             fetch(`http://localhost:3000/api/events/${id}`)
//                 .then(response => response.json())
//                 .then(event => {
//                     // create elements to display event details
//                     const eventDiv = document.createElement('div');
//                     const eventName = document.createElement('h2');
//                     const eventDate = document.createElement('p');
//                     const eventDescription = document.createElement('p');
        
//                     // set text content of elements
//                     eventName.textContent = event.name;
//                     eventDate.textContent = event.date;
//                     eventDescription.textContent = event.description;
        
//                     // append elements to event div
//                     eventDiv.appendChild(eventName);
//                     eventDiv.appendChild(eventDate);
//                     eventDiv.appendChild(eventDescription);
        
//                     // append event div to page
//                     const eventsContainer = document.querySelector('#events-container');
//                     eventsContainer.appendChild(eventDiv);
//                 })
//                 .catch(error => console.error(error));
//         }

                
//         buttonsingleEvent.addEventListener('click', displaySingleEvent);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////        


//                 ////////////ADD DELETE BUTTON///////////////
//                  let deleteButton = document.getElementById('Delete')
//                 // const deleteButton = document.createElement("button");
//                 // deleteButton.textContent = "Delete";
//                 deleteButton.addEventListener("click", () => {
//                     deleteEvent(event.id);
//                 });
//                 // divevent.appendChild(deleteButton);

//                 ////////// FUNCTION FETCH METHOD DELETE///////////

//                 function deleteEvent(id) {
//                     fetch(`http://localhost:3000/api/events/${id}`, {
//                         method: "DELETE",
//                         headers: {
//                             'Content-Type': 'application/json',
//                             },
//                     })
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log("Event deleted:", data);
//                             // must add a kind of refresh function
                            
//                         })
//                         .catch(error => {
//                             console.error("Error deleting event:", error);
//                         });
//                 }



// ////////////////////////////// EDIT //////////////////////////////

//     //    const buttoneventEdit = document.createElement("button");
//     //    buttoneventEdit.textContent = "Edit";
//     //    buttoneventEdit.className = 'buttoneventEdit';
//     //    divevent.appendChild(buttoneventEdit);

   
// // function to modify an event with fetch patch

// function modifyEvent(id, event) {

//     fetch(`http://localhost:3000/api/events/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(event)
//     })
//     .then(response => response.json())
//     .then(event => {
        
//         const eventName = document.querySelector(".eventName");
//         eventName.contentEditable = true;
//         eventName.style.border = "1px solid black";

//         const eventAuthor = document.querySelector(".eventAuthor");
//         eventAuthor.contentEditable = true;
//         eventAuthor.style.border = "1px solid black";

//         const eventDescription = document.querySelector(".eventDescription");
//         eventDescription.contentEditable = true;
//         eventDescription.style.border = "1px solid black";
//     })
//     .catch(error => console.error(error));
// }
       
// // const buttonEdit = document.getElementById("buttoneventEdit");

// buttoneventEdit.addEventListener("click", modifyEvent);

// document.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         exit();
//     }
// });

// function exit() {
//     const eventName = document.querySelector(".eventName");
//     eventName.contentEditable = false;
//     eventName.style.border = "none";

//     const eventAuthor = document.querySelector(".eventAuthor");
//     eventAuthor.contentEditable = false;
//     eventAuthor.style.border = "none";

//     const eventDescription = document.querySelector(".eventDescription");
//     eventDescription.contentEditable = false;
//     eventDescription.style.border = "none";
// }



// /////////////////////// Input Attendee //////////////////////////////
// const containerattendee = document.getElementById('containerattendee');

// const eventFooter = document.createElement("div");
// divevent.appendChild(eventFooter);

// let attendeeName = document.createElement("input");
// attendeeName.type = 'text';
// attendeeName.id = 'attendeeName';
// attendeeName.placeholder = 'Attendee Name';
// containerattendee.appendChild(attendeeName);

// let booleanChoice = document.createElement('input')
// booleanChoice.type = 'checkbox';
// booleanChoice.id = 'booleanChoice';
// booleanChoice.value = 'false';
// containerattendee.appendChild(booleanChoice);

//                 let submitFooter = document.createElement('button');
//                 submitFooter.type = 'submit';
//                 submitFooter.id = 'submitFooter';
//                 submitFooter.textContent = 'submitFooter';
//                 containerattendee.appendChild(submitFooter);

                
                

   /////////////////////// display Attendee //////////////////////////////
   
            
    //         })
    //         .catch(error => console.error(error));
            
    //    });
    //  });
// });

// });