// Define a custom color scale
const customColorScale = d3.scaleOrdinal()
    .range(["#2C2C54"]);

// Function to create a table
function createTable(containerId, data) {
    var table = d3.select(containerId);

    // Clear existing table contents
    table.selectAll('*').remove();

    // Create table header row
    var thead = table.append('thead');
    thead.append('tr')
        .selectAll('th')
        .data(Object.keys(data[0]))
        .enter()
        .append('th')
        .text(d => d)
        .style('background-color', (d, i) => customColorScale(i)) // Set background color using the color scale
        .style('color', 'white'); // Set text color

    // Create table body rows
    var tbody = table.append('tbody');
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // Populate table cells with data
    var cells = rows.selectAll('td')
        .data(function (row) {
            return Object.values(row);
        })
        .enter()
        .append('td')
        .html(function (d) {
            return d;
        });
}

// Retrieve data from CSV file
d3.csv('../data/International Migrants and Refugees.csv').then(function (data) {
    // Create the table with the retrieved data
    createTable('#table', data);
});
