let myGroups;
let myVars;
// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 1000 - margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

// Build X scales and axis:
const x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myGroups.map((val, idx) => idx))
  .padding(0.01);

// svg.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x)
//     .tickFormat(function(d, i) {
//       // tickFormat accepts a function that returns the label to use in the axis/scale/sth
//       // function param == Array.prototype.map() param
//       return myGroups[d]
//     })
//   )

// Build Y scales and axis:
// const y = d3.scaleBand()
//   .range([ height, 0 ])
//   .domain(myVars.map((val, idx) => idx))
//   .padding(0.01);

// svg.append("g")
//   .call(d3.axisLeft(y)
//     .tickFormat(function(d) { return myVars[d] }));

// Build color scale
const myColor = d3.scaleLinear()
  .range(["#ffffff", "#69b3a2"])
  .domain([1,50])

// // Draw rects from array of object
// function drawRects(data) {
//   svg.selectAll()
//       .data(data, function(d) { return d.group+':'+d.variable; })
//       .enter()
//       .append("rect")
//         .attr("x", function(d) { return x(myGroups.indexOf(d.group)) })
//         .attr("y", function(d) { return y(myVars.indexOf(d.variable)) })
//         .attr("width", x.bandwidth() )
//         .attr("height", y.bandwidth() )
//         .style("fill", function(d) { return myColor(d.value) })
//
// }

// // Draw rects from array of object
// function drawRects(data) {
//   svg.selectAll()
//       .data(data, function(d) { return d.group+':'+d.variable; })
//       .enter()
//       .append("rect")
//         .attr("x", function(d) { return x(parseInt(d.group)) })
//         .attr("y", function(d) { return y(parseInt(d.variable)) })
//         .attr("width", x.bandwidth() )
//         .attr("height", y.bandwidth() )
//         .style("fill", function(d) { return myColor(d.value) })
//
// }

// Draw rects from array of object
function drawRects(data, x_range, y_range) {
  svg.selectAll()
      .data(data, function(d) { return d.group+':'+d.variable; })
      .enter()
      .append("rect")
        .attr("x", function(d) { return x_range(parseInt(d.group)) })
        .attr("y", function(d) { return y_range(parseInt(d.variable)) })
        .attr("width", x_range.bandwidth() )
        .attr("height", y_range.bandwidth() )
        .style("fill", function(d) { return myColor(d.value) })

}

// fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv')
//   .then(response => response.text())
//   .then(text => { return d3.csvParse(text) })
//   .then(data => { drawRects(data) })
//   .catch(error => {
//     console.error('Error:', error);
//   });

async function g() {
    const p = await fetch(`http://0.0.0.0:8080/plot/${fetched_song_id}/params`)
    const {words}  = await p.json()
    myVars = myGroups = words
        const x_r = d3.scaleBand()
      .range([ 0, width ])
      .domain(myGroups.map((val, idx) => idx))
      .padding(0.01);
 // Build Y scales and axis:
    const y_r = d3.scaleBand()
      .range([ height, 0 ])
      .domain(myVars.map((val, idx) => idx))
      .padding(0.01);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisTop(x_r)
        .tickFormat(function(d, i) {
          // tickFormat accepts a function that returns the label to use in the axis/scale/sth
          // function param == Array.prototype.map() param
          return myGroups[d]
        })
      )
    svg.append("g")
  .call(d3.axisLeft(y_r)
    .tickFormat(function(d) { return myVars[d] }));
    fetch(`http://0.0.0.0:8080/plot/${fetched_song_id}/data`)
      .then(response => response.text())
      .then(text => { return d3.csvParse(text) })
      .then(data => { drawRects(data, x_r, y_r) })
      .catch(error => {
        console.error('Error:', error);
      });

}
g();
