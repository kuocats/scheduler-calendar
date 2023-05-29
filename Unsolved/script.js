


function setHourColors(){
    var now = dayjs();
    for (var i = 9; i < 18;i++){
        if (i < now.hour ()){
            $("#hour" + i + "textarea").addClass("past)");
        } else if (i == now.hour()){
            $("#hour" + i + "textare").addClass("present");
        }
    }
}

function loadStoredData(){
    const eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData){
        eventsData = {
            hour9: "",
            hour10:"",
            hour11:"",
            //Etc
        }
    }
}

function handleSaveClick(event) {
    //grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    //modify our data object
    eventsData["hour" + hour] = value;

    //TODO store this hour's data in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}
