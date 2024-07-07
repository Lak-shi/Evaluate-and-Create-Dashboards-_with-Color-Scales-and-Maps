var svg = d3.select('#pie-chart'),
    width = +svg.attr('width'),
    height = +svg.attr('height'),
    radius = Math.min(width, height) / 2,
    g = svg.append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

var yearSelector = d3.select('#year-selector');

d3.csv('../data/Population Growth Rates-pie.csv').then(data => {
    // Extract unique years from the data
    var years = Array.from(new Set(data.map(d => d.Year)));
    var currentYear = years[0];

    // Create a function to update the chart based on the selected year
    function updateChart(selectedYear) {
        var filteredData = data.filter(d => d.Year === selectedYear);

        var color = d3.scaleOrdinal()
        .domain(data.map(d => d.Country))
        .range(["#2C2C54", "#474787", "#6161c0", "#8585ff", "#c5c5ff"]); // Add more colors as needed

        var pie = d3.pie()
            .value(d => d["Capital city population (thousands)"])
            .sort(null);

        var path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var arc = g.selectAll('.arc')
            .data(pie(filteredData), d => d.data.Country);

        arc.exit().remove(); // Remove old slices

        var arcEnter = arc.enter()
            .append('g')
            .attr('class', 'arc');

        arcEnter.append('path')
            .merge(arc.select('path'))
            .attr('d', path)
            .attr('fill', d => color(d.data.Country))
            .append('title')
            .text(d => d.data.Country + ": " + d.data["Capital city population (thousands)"] + " thousands");

        // Add tooltips
        arcEnter.append('title')
            .text(d => d.data.Country + ": " + d.data["Capital city population (thousands)"] + " thousands");

        // Add labels
        arcEnter.append('text')
            .attr('transform', d => 'translate(' + path.centroid(d) + ')')
            .attr('dy', '0.35em')
            .text(d => d.data.Country);
    }

    // Populate the year selector dropdown
    yearSelector
        .selectAll('option')
        .data(years)
        .enter()
        .append('option')
        .text(d => d)
        .attr('value', d => d);

    // Handle dropdown selection change
    yearSelector.on('change', function () {
        var selectedYear = yearSelector.node().value;
        currentYear = selectedYear; // Update the current year
        updateChart(selectedYear);
    });

    updateChart(currentYear); // Initial chart rendering
});

