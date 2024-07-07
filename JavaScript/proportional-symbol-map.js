const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

const projection = d3.geoMercator()
  .center([0, 20])
  .scale(120)
  .translate([width / 2, height / 2]);

Promise.all([
  d3.json("../data/world.geojson"),
  d3.csv("../data/proportional.csv").then(data => {
    return data.map(d => ({
      homelat: +d.homelat,
      homelog: +d.homelog,
      homecontinent: d.homecontinent,
      Infant_mortality: +d.Infant_mortality,
      Life_expectancy: +d.Life_expectancy,
      Country: d.country
    }));
  })
]).then(function (initialize) {
  let dataGeo = initialize[0];
  let data = initialize[1];

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.homecontinent))
    .range(d3.schemePaired);

  const valueExtent = d3.extent(data, d => d.Infant_mortality);

  const size = d3.scaleSqrt()
    .domain(valueExtent)
    .range([10, 100]);

  svg.append("g")
    .selectAll("path")
    .data(dataGeo.features)
    .join("path")
    .attr("fill", "#b8b8b8")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "none")
    .style("opacity", 0.3);

    svg.selectAll("myCircles")
    .data(data.sort((a, b) => b.Infant_mortality - a.Infant_mortality).filter((d, i) => i < 1000))
    .join("circle")
    .attr("cx", d => projection([d.homelog, d.homelat])[0])
    .attr("cy", d => projection([d.homelog, d.homelat])[1])
    .attr("r", d => size(d.Infant_mortality))
    .style("fill", "blue")
    .attr("stroke", "none") // Assuming no stroke for these bubbles
    .attr("fill-opacity", 0.4)
    .append("title")
    .text(d => `Country: ${d.Country}\nInfant Mortality: ${d.Infant_mortality}\nLife Expectancy: ${d.Life_expectancy}`);

  svg.append("text")
    .attr("text-anchor", "end")
    .style("fill", "black")
    .attr("x", width - 10)
    .attr("y", height - 30)
    .attr("width", 90)
    .html("WHERE SURFERS LIVE")
    .style("font-size", 14);

  const valuesToShow = [1, 10, 30];
  const xCircle = 140;
  const xLabel = 130;

  svg.selectAll("legend")
    .data(valuesToShow)
    .join("circle")
    .attr("cx", xCircle)
    .attr("cy", d => height - size(d))
    .attr("r", d => size(d))
    .style("fill", "none")
    .attr("stroke", "black");

  svg.selectAll("legend")
    .data(valuesToShow)
    .join("line")
    .attr('x1', d => xCircle + size(d))
    .attr('x2', xLabel)
    .attr('y1', d => height - size(d))
    .attr('y2', d => height - size(d))
    .attr('stroke', 'black')
    .style('stroke-dasharray', ('2,2'));

  svg.selectAll("legend")
    .data(valuesToShow)
    .join("text")
    .attr('x', xLabel)
    .attr('y', d => height - size(d))
    .text(d => d)
    .style("font-size", 10)
    .attr('alignment-baseline', 'middle');
});
