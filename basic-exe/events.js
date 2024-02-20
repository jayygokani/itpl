const events = [
{
    title: 'workshop 2024',
    date: '2024-01-01',
    session: [
    {
        subtitle: 'Javascript',
        speaker: 'Munir',
        duration: 45
    },
    {
        subtitle: 'Go',
        speaker: 'Daniel',
        duration: 30
    },
    {
        subtitle: 'Linux',
        speaker: 'Danish bhai',
        duration: 75
    }]
},
{
    title: 'workshop 2024',
    date: '2024-01-02',
    session: [
    {
        subtitle: 'DataBase',
        speaker: 'Munir',
        duration: 75
    },
    {
        subtitle: 'Docker',
        speaker: 'Daniel',
        duration: 45
    },
    {
        subtitle: 'Linux',
        speaker: 'Danish bhai',
        duration: 30
    }]
}
];
const speakers = {
    Munir:{
        fullname: 'Munir Khakhi',
        email: 'munir@itpl.com',
        phone: '123-456-789-0'
    },
    Daniel:{
        fullname: 'Daniel Black',
        email: 'db@itpl.com',
        phone: '123-456-789-0'
    },
    'Danish Bhai':{
        fullname: 'Munir Khakhi',
        email: 'munir@itpl.com',
        phone: '123-456-789-0'
    }
}


const today = new Date().toISOString().slice(0, 10);

// 1) Filter today's event
const todayEvents = events.filter(event => event.date === today);

// 2) Get titles of events with 75 minutes sessions
const eventsWith75MinSessions = events
  .filter(event => event.session.some(session => session.duration === 75))
  .map(event => event.title);

// 3) Year-wise descending order
const eventsYearDescending = events.sort((a, b) => {
  const yearA = parseInt(a.title.match(/\d{4}/)[0]);
  const yearB = parseInt(b.title.match(/\d{4}/)[0]);
  return yearB - yearA;
});

// 4) Speaker bio
function getSpeakerBio(speakerName) {
  const speaker = speakers[speakerName];
  if (speaker) {
    return {
      fullname: speaker.fullname,
      email: speaker.email,
      phone: speaker.phone
    };
  } else {
    return "Speaker not found";
  }
}

// Example usage
console.log("Today's Event:", todayEvents);
console.log("Title of Events with 75min Sessions:", eventsWith75MinSessions);
console.log("Year-wise Descending Order:", eventsYearDescending);
console.log("Speaker Bio:", getSpeakerBio("Munir"));





// let d = '2024-01-01'

// function filterSessionByDate(array, date){
//     let dt = new Date(date)

//     return array.filter((element) => {
//         if (new Date(element.date).getTime() == dt.getTime()){
//             return true;
//         }
//     })
// }

// function fetchSessionByDate(array, date){

//     let sessionFetched = filterSessionByDate(array, date);

//     return sessionFetched[0];
// }

// function displaySession(array, date){
//     let toDisplay = fetchSessionByDate(array, date)

//     console.table(toDisplay.session);    
// }


// function getSessionTotalHours(array, date){
//     // displaySession(events, d);
//     let dArray = fetchSessionByDate(array, date);

//     let dSum = dArray.session;
//     // console.log(dSum[0]);

//     let fSum = dSum.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue.duration;
//     }, 0);
//     console.log(fSum)
// }

// getSessionTotalHours(events, d);





/*
function masterFilter(){
    function filterSessionByDate(array, date){
        let dt = new Date(date)
    
        return array.filter((element) => {
            if (new Date(element.date).getTime() == dt.getTime()){
                return true;
            }
        })
    }
    
    function fetchSessionByDate(array, date){
    
        let sessionFetched = filterSessionByDate(array, date);
    
        return sessionFetched[0];
    }
    
    function displaySession(array, date){
        let toDisplay = fetchSessionByDate(array, date)
    
        console.table(toDisplay.session);    
    }

    return {
        fetchSessionByDate: fetchSessionByDate,
        displaySession: displaySession
    }
}
let nf = masterFilter();
nf.displaySession(events, d)
*/



function printArray(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}









































// sessionFetched = filterSessionByDate(events, d);
// let {session} =  sessionFetched[0];
// console.log(session[0])
// console.log(sessionFetched[0]);

/*
let d = '2024-01-01'
function filterSessionByDate(date){
    let dt = new Date(date)

    for (let i = 0; i < events.length; i++){
        var sessionDate = new Date(events[i].date).getTime()
        if(sessionDate == dt.getTime()){
            return events[i];
        }
    };
    return null;
}
console.log(filterSessionByDate(d))
*/







// console.table(events)
// let {date} = events[0];
// console.log(date)

// let {session: s} = events[0];
// console.log(s);
// console.log(events[0].date);