
// Load data from CSV file
d3.csv('../data/Population Growth Rates.csv').then(function(data) {
    // Parse numerical values
    data.forEach(function(d) {
        d.Year = +d.Year; // Convert Year to a number
        d['Capital city population (as a percentage of total population)'] = +d['Capital city population (as a percentage of total population)'];
        d['Capital city population (thousands)'] = +d['Capital city population (thousands)'];
        d['Rural population (percent growth rate per annum)'] = +d['Rural population (percent growth rate per annum)'];
        d['Urban population (percent growth rate per annum)'] = +d['Urban population (percent growth rate per annum)'];
    });

    // Rest of your code for creating the grouped bar chart
    var width = 850;
    var height = 400;
    var padding = 80;

    // Define color scale for countries
    var colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.Country))
        .range(["#2C2C54", "#474787", "#6161c0", "#8585ff", "#c5c5ff"]); // Add more colors as needed

    // Group data by year
    var groupedData = d3.group(data, d => d.Year);

    // Extract years and countries
    var years = Array.from(groupedData.keys());
    var countries = Array.from(new Set(data.map(d => d.Country)));

    // Create SVG for the grouped bar chart
    var svg = d3.select('#barChart')
        .attr('width', width)
        .attr('height', height);

    // Create scales for X and Y axes
    var xScale = d3.scaleBand()
        .domain(years)
        .range([padding, width - padding])
        .padding(0.1);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d['Capital city population (thousands)'])])
        .nice()
        .range([height - padding, padding]);

    // Create X-axis
    var xAxis = d3.axisBottom(xScale);
    svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height - padding})`)
        .call(xAxis);

    // Create Y-axis
    var yAxis = d3.axisLeft(yScale);
    svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${padding}, 0)`)
        .call(yAxis);

    // Create the grouped bars
    var barWidth = xScale.bandwidth() / countries.length;

    svg.selectAll('.group')
        .data(groupedData)
        .enter()
        .append('g')
        .attr('class', 'group')
        .selectAll('rect')
        .data(d => d[1])
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.Year) + countries.indexOf(d.Country) * barWidth)
        .attr('y', d => yScale(d['Capital city population (thousands)']))
        .attr('width', barWidth)
        .attr('height', d => height - padding - yScale(d['Capital city population (thousands)']))
        .attr('fill', d => colorScale(d.Country))
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut);

    // Create X-Axis Label
    svg.append('text')
        .attr('class', 'axis-label')
        .attr('x', (width) / 2)
        .attr('y', height - 20)
        .attr('text-anchor', 'middle')
        .text('Year');

    // Create Y-Axis Label
    svg.append('text')
        .attr('class', 'axis-label')
        .attr('x', -height/2)
        .attr('y', padding/4)
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text('Capital City Population (thousands)');

    // Legend data
    var legendData = countries;

    // Create Legend
    var legend = d3.select('#legend')
        .selectAll('.legend-item')
        .data(legendData)
        .enter()
        .append('div')
        .attr('class', 'legend-item')
        .style('cursor', 'pointer') // Set cursor to pointer for interactivity
        .on('click', toggleCountry); // Attach click event handler

    legend.append('div')
        .attr('class', 'legend-color')
        .style('background-color', d => colorScale(d));

    legend.append('div')
        .text(d => d);

    // Initialize activeCountries with all countries
    var activeCountries = countries.slice();

    // Function to toggle the visibility of bars for a specific country
    function toggleCountry(country) {
        // Check if the country is already active (visible)
        var index = activeCountries.indexOf(country);
        if (index !== -1) {
            // Country is active, so remove it to hide its bars
            activeCountries.splice(index, 1);
        } else {
            // Country is not active, so add it to show its bars
            activeCountries.push(country);
        }

        // Update the bars' visibility based on activeCountries
        svg.selectAll('.group rect')
            .style('display', d => (activeCountries.includes(d.Country) ? 'block' : 'none'));
    }

    // Tooltip
    var tooltip = d3.select('#tooltip');

    function handleMouseOver(event, d) {
        var tooltipHtml = `
            <strong>${d.Country}</strong><br>
            Capital City: ${d['Capital city']}<br>
            Year: ${d.Year}<br>
            Capital City Population: ${d['Capital city population (thousands)']}
        `;

        tooltip.html(tooltipHtml)
            .style('left', (event.clientX + 10) + 'px')
            .style('top', (event.clientY - 20) + 'px')
            .style('opacity', 0.9)
            .style('position', 'absolute');
    }

    function handleMouseOut() {
        tooltip.style('opacity', 0);
    }
}).catch(function(error) {
    console.error('Error loading data:', error);
});
