
// Load data from CSV file
d3.csv('../data/Population, Surface Area and Density.csv').then(function(data) {
    // Parse numerical values
    data.forEach(function(d) {
        d.Year = +d.Year;
        d['Population aged 0 to 14 years old (percentage)'] = +d['Population aged 0 to 14 years old (percentage)'];
        d['Population aged 60+ years old (percentage)'] = +d['Population aged 60+ years old (percentage)'];
        d['Population density'] = +d['Population density'];
        d['Population mid-year estimates (millions)'] = +d['Population mid-year estimates (millions)'];
        d['Sex ratio (males per 100 females)'] = +d['Sex ratio (males per 100 females)'];
    });

    var margin = { top: 20, right: 30, bottom: 60, left: 70 };
    var width = 600 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;

    var svg = d3.select('#ScatterPlot2')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var xDomain = [d3.min(data, d => d['Population mid-year estimates (millions)']), d3.max(data, d => d['Population mid-year estimates (millions)'])];
    var yDomain = [0, d3.max(data, d => d['Population density'])];
    var xLabel = "Population Mid-Year";
    var yLabel = "Population Density";
    var xVariable = 'Population mid-year estimates (millions)';
    var yVariable = 'Population density';

    var xScale = d3.scaleLinear()
        .domain(xDomain)
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain(yDomain)
        .range([height, 0]);

    var fixedRadius = 8;

    // Define color scale for countries
    var colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.Country))
        .range(["#2C2C54", "#474787", "#6161c0", "#8585ff", "#c5c5ff"]); // Add more colors as needed

    var legendItems = svg.selectAll('.legend')
        .data(Array.from(new Set(data.map(d => d.Country))))
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => 'translate(0,' + (i * 30) + ')')
        .on('click', function (d) {
            // Toggle highlight for circles of the selected country and fade out others
            svg.selectAll('circle')
                .classed('highlighted', function (circleData) {
                    return circleData.Country === d;
                });
        });

    legendItems.append('rect')
        .attr('x', width - 18)
        .attr('y', 119)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', colorScale);

    legendItems.append('text')
        .attr('x', width - 24)
        .attr('y', 130)
        .attr('dy', '.45em')
        .style('text-anchor', 'end')
        .attr('class', 'legend-text')
        .text(d => d);

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d[xVariable]))
        .attr('cy', d => yScale(d['Population density']))
        .attr('r', fixedRadius)
        .attr('class', 'dot')
        .style('fill', d => colorScale(d.Country))
        .on('mouseover', function (event, d) {
            var coordinates = d3.pointer(event);
            var x = coordinates[0];
            var y = coordinates[1];

            var tooltipX = x + 300;
            var tooltipY = y + 30;

            d3.select('#tooltip')
                .style('display', 'block')
                .html(`<strong>${d.Country}</strong><br>Year: ${d.Year}<br>Population Density: ${d['Population density']}<br>Population mid-year estimates (millions): ${d['Population mid-year estimates (millions)']}`)
                .style('left', tooltipX + 'px')
                .style('top', tooltipY + 'px');

        })
        .on('mouseout', function () {
            d3.select('#tooltip').style('display', 'none');
        });

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale).ticks(5).tickFormat(d3.format("d")));

    svg.append('g')
        .attr('class', 'axis y-axis')
        .call(d3.axisLeft(yScale).ticks(5));

    // Update the x-axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 5)
        .style("text-anchor", "middle")
        .text(xLabel);

    // Update the y-axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 25)
        .style("text-anchor", "middle")
        .text(yLabel);
        
}).catch(function(error) {
    console.log(error);
});
