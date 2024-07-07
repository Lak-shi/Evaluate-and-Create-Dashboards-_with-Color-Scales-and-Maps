const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const path = d3.geoPath();
const projection = d3.geoMercator()
  .scale(140)
  .center([0, 20])
  .translate([width / 2, height / 2]);

let data = new Map();
const legendData = [50, 100, 150, 200, 1400];
//const colorRange = ["#2C2C54", "#474787", "#6161c0", "#8585ff", "#c5c5ff","#dcdcf7"];
const colorRange = ["#dcdcf7", "#b7b7fb", "#8585ff", "#6161c0", "#474787","#2C2C54"];
const colorScale = d3.scaleThreshold()
  .domain(legendData)
  .range(colorRange);

Promise.all([
  d3.json("../data/world.geojson"),
  d3.csv("../data/world_population.csv", function(d) {
    data.set(d.code, +d.pop);
  })
]).then(function(loadData) {
  const topo = loadData[0];

  let mouseOver = function(d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .5);
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black");
  };

  let mouseLeave = function(d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .8);
    d3.select(this)
      .transition()
      .duration(200)
      .style("stroke", "transparent");
  };

  svg.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath().projection(projection))
    .attr("fill", function (d) {
      d.total = data.get(d.id) || 0;
      return colorScale(d.total);
    })
    .style("stroke", "transparent")
    .attr("class", "Country")
    .style("opacity", 0.8)
    .append("title") // Add a tooltip to each country
    .text(d => `${d.properties.name}: ${data.get(d.id) || 'N/A'}`); // Tooltip text - Modify according to your data

  svg.selectAll(".Country")
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseLeave);

  const legend = d3.select(".legend")
    .select("svg")
    .select(".legend-scale")
    .selectAll("g")
    .data(legendData)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0, ${i * 20})`);

  legend.append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", d => colorScale(d));

  legend.append("text")
    .attr("x", 25)
    .attr("y", 10)
    .text(d => d);
});
