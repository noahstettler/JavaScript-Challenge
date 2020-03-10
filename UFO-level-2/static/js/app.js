// from data.js
const tableData = data;

// YOUR CODE HERE!

// Assign the data from `data.js` to a descriptive variable
const button = d3.select("#filter-btn");
const tbody = d3.select("tbody")


const handler = function () {
    console.log(`handler called`)
    let datetime = d3.select("#datetime").property("value")
    console.log(datetime)
    
    // Use the form input to filter by date and time
    let filterData = data.filter(e => e.datetime === datetime)
    filterData.forEach(e => {
      console.log(e)
      let row = tbody.append("tr")
      row.append("td").text(e.datetime)
      row.append("td").text(e.city)
      row.append("td").text(e.state)
      row.append("td").text(e.country)
      row.append("td").text(e.shape)
      row.append("td").text(e.durationMinutes)
      row.append("td").text(e.comment)
    })
  }
  
  // Complete the click handler for the form
  button.on("click", handler)
  
  // buggy: makes change, but then refreshed it
  //input.on("change", handler)