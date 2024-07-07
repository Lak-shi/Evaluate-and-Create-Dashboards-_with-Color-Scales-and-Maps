const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

const projection = d3.geoMercator()
  .center([0, 20])
  .scale(150)
  .translate([width / 2, height / 2]);

Promise.all([
  d3.json("../data/world.geojson"),
  d3.csv("../data/dot.csv").then(data => {
    return data.map(d => ({
      homelat: +d.homelat,
      homelog: +d.homelog,
      homecontinent: d.homecontinent,
      Capital_city_pop: +d.Capital_city_pop,
      country: d.country,
      capital: d.capital
    }));
  })
]).then(function (initialize) {
  let dataGeo = initialize[0];
  let data = initialize[1];

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.homecontinent))
    .range(d3.schemePaired);

  svg.append("g")
    .selectAll("path")
    .data(dataGeo.features)
    .join("path")
    .attr("fill", "#b8b8b8")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "none")
    .style("opacity", 0.3);

  // Create a color scale for countries
  const colorByCountry = d3.scaleOrdinal()
    .domain(data.map(d => d.country))
    .range(["#2C2C54", "#474787", "#6161c0", "#8585fe", "#c5c5ff"]); // Change the color scheme if desired

  const dots = svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "dot-group")
    .each(function (d) {
      let dotsCount = 1;
      let dotRadius = 1; // Set default radius

      if (d.Capital_city_pop >= 2000 && d.Capital_city_pop < 4000) {
        dotsCount = 5;
        dotRadius = 5;
      } else if (d.Capital_city_pop >= 4000 && d.Capital_city_pop < 20000) {
        dotsCount = 10;
        dotRadius = 5;
      } else if (d.Capital_city_pop >= 20000 && d.Capital_city_pop < 30000) {
        dotsCount = 30;
        dotRadius = 5;
      } else if (d.Capital_city_pop >= 30000 && d.Capital_city_pop < 50000) {
        dotsCount = 40;
        dotRadius = 5;
      }

      for (let i = 0; i < dotsCount; i++) {
        d3.select(this).append("circle")
          .attr("cx", projection([d.homelog, d.homelat])[0])
          .attr("cy", projection([d.homelog, d.homelat])[1])
          .attr("r", dotRadius) // Set the radius based on population range
          .attr("transform", `translate(${Math.random() * 40},${Math.random() * 40})`)
          .style("fill", colorByCountry(d.country)) // Use the country-based color scale
          .attr("stroke", "none")
          .attr("fill-opacity", 0.6)
          .append("title")
          .text(`Country: ${d.country}\nCapital City: ${d.capital}\nCapital City Population: ${d.Capital_city_pop}`);
      }
    });

  // Legends for country colors
  const uniqueCountries = Array.from(new Set(data.map(d => d.country)));

  const countryLegendGroup = svg.append('g')
    .attr('class', 'country-color-legend')
    .attr('transform', 'translate(20, 200)');

  countryLegendGroup.selectAll('.country-legends')
    .data(uniqueCountries)
    .enter()
    .append('circle')
    .attr('cx', 0)
    .attr('cy', (d, i) => i * 20+100)
    .attr('r', 5)
    .style('fill', d => colorByCountry(d))
    .attr('fill-opacity', 0.7);

  countryLegendGroup.selectAll('.country-text')
    .data(uniqueCountries)
    .enter()
    .append('text')
    .attr('x', 20)
    .attr('y', (d, i) => i * 20 + 105)
    .text(d => `Country: ${d}`);

  // Your existing code...
  svg.append("text")
    .attr("text-anchor", "end")
    .style("fill", "black")
    .attr("x", width - 10)
    .attr("y", height - 30)
    .attr("width", 90)
    .html("WHERE SURFERS LIVE")
    .style("font-size", 14);
});
