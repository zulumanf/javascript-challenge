//similar to the BLOOD type activity Day3-9

//variable that will hold the data  
var tableData = ufo_data;

// Reference the table body based on the html tag
var tbody = d3.select("table_body");

// Display data pulled from the data.js file
console.log(ufo_data);

//Table building function
function createTable(ufo_data){
    //Clears the table when its first loaded
    tbody.html("")
    
    //Add data to each row
    ufo_data.forEach(function(ufoData) {
        
        //Displays the data/prints the data
        console.log(ufoData);
        
        // Define row to append data to
        var row = tbody.append("tr");
        
        //Pulls the data based on the specific key & value pairing
        Object.entries(ufoData).forEach(function([key, value]){
            
            //Adds the data to each row based on the td class
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

//Function that will run through the data and then display it based on the data
//has to compare the date to make sure its the same
function clickRun(){
    // Defining Variables to be used in this function
    var date = d3.select("#dateform").property("value");
    var formData = tableData;
    //conditional if statement comparing the dates
    if(date){
        formData = formData.filter(x => x.dateform === date);
    }
    //Console log the filtered data
    console.log(formData);
    createTable(formData);
}
//Event handlers for click
d3.select("#form-btn").on("click", clickRun);

//Event handlers for enter button 
d3.select("#form-btn").on("submit",clickRun);

//Build table data function
createTable(tableData);