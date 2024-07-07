d3.csv("../data/International Migrants and Refugees.csv").then(function(data) {
    // Define chart dimensions and margins
    var margin = { top: 20, right: 30, bottom: 40, left: 50 };
    var width = 800 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // Append an SVG element to the chart container
    var svg = d3.select("#lineChart")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Parse data and convert years to numbers
    data.forEach(function(d) {
        d.Year = +d.Year;
        d["International migrant stock: Both sexes (% total population)"] = +d["International migrant stock: Both sexes (% total population)"];
    });

    // Create x and y scales
    var xScale = d3.scaleLinear()
        .domain(d3.extent(data, function(d) { return d.Year; }))
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return d["International migrant stock: Both sexes (% total population)"]; })])
        .range([height, 0]);

    // Create x and y axes
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // Add x and y axes to the chart
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    // Create a line generator function
    var line = d3.line()
        .x(function(d) { return xScale(d.Year); })
        .y(function(d) { return yScale(d["International migrant stock: Both sexes (% total population)"]); });

    // Create a path element for each country's line
    var countries = Array.from(new Set(data.map(d => d.Country)));

    // Define color scale for countries
    var colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.Country))
        .range(["#2C2C54", "#474787", "#6161c0", "#8585ff", "#c5c5ff"]); // Add more colors as needed

    // Create a line element for each country's line
    countries.forEach(function(country) {
        var countryData = data.filter(function(d) {
            return d.Country === country;
        });

        svg.append("path")
            .datum(countryData)
            .attr("class", "line") // Set the class to "line" for styling
            .attr("d", line) // Use the line generator to define the path
            .style("stroke", function() {
                return colorScale(country);
            })
            .style("fill", "none") // Ensure that the area under the line is not filled
            .style("stroke-width", 2) // Set the stroke width for the line
            .on("mouseover", function(event, d) {
                // Show tooltip on hover
                var tooltip = d3.select("#tooltip");
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(country + "<br>" + d[0].Year + ": " + d[0]["International migrant stock: Both sexes (% total population)"] + "%")
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 30) + "px");
            })
            .on("mousemove", function(event, d) {
                // Update tooltip content and position as the mouse moves along the line
                var tooltip = d3.select("#tooltip");
                var mouseX = d3.pointer(event)[0]; // Get the x-coordinate of the mouse
                var bisect = d3.bisector(function(d) { return d.Year; }).left;
                var x0 = xScale.invert(mouseX); // Convert mouse x-coordinate to data value

                // Find the data point that corresponds to the current mouse position
                var i = bisect(d, x0, 1);
                var d0 = d[i - 1];
                var d1 = d[i];
                var dataPoint = x0 - d0.Year > d1.Year - x0 ? d1 : d0;

                tooltip.html(country + "<br>" + dataPoint.Year + ": " + dataPoint["International migrant stock: Both sexes (% total population)"] + "%")
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 30) + "px");
            })
            .on("mouseout", function() {
                // Hide tooltip on mouseout
                var tooltip = d3.select("#tooltip");
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    });
    
    // Legend data (unchanged)
    var legendData = countries;

    // Create Legend (unchanged)
    var legend = d3.select('#legend')
        .selectAll('.legend-item')
        .data(legendData)
        .enter()
        .append('div')
        .attr('class', 'legend-item');

    legend.append('div')
        .attr('class', 'legend-color')
        .style('background-color', d => colorScale(d));

    legend.append('div')
        .text(d => d);

    // Add labels and titles (unchanged)
    svg.append("text")
        .attr("class", "x-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom)
        .text("Year");

    svg.append("text")
        .attr("class", "y-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -height/1.2)
        .attr("y", -margin.left+20)
        .text("International Migrant Stock (%)");

});
