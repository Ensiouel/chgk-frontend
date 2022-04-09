<template>
  Table ID: {{ $route.params.id }}
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container justify-content-center">
      <span class="fs-5 text-white text-uppercase">Малыши</span>
      <span class="border fs-5 text-white bg-dark border-white border-3 ps-3 pe-3 m-2 rounded">3 : 2</span>
      <span class="fs-5 text-white text-uppercase">Зрители</span>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-2">
        <div class="sidebar-heading d-flex justify-content-between align-items-center m-2 mb-0 fw-bold">
          <span>Знатоки</span>
        </div>
        <ol class="list-group">
          <li
              v-for="expert in experts"
              class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>
                {{ expert.name }}
              </div>
            </div>
            <span class="badge bg-dark">{{ expert.score }}</span>
          </li>
        </ol>
      </div>

      <div class="col-8 p-4 d-flex">
        <div id="chart"></div>
        <div id="question"><h1></h1></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TablePage",
  data() {
    return {
      experts: [
        {name: 'Фаря', score: 1, capitan: true},
        {name: 'Сима', score: 0},
        {name: 'Гитарист', score: 1},
        {name: 'Дэн', score: 2},
        {name: 'Романыч', score: 0},
        {name: 'Лёха', score: 3},
    ]
    }
  },
  mounted() {

    let self = this;

    let spin = (d) => {

      console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
      if (oldpick.length === data.length) {
        console.log("done");
        return;
      }
      let ps = (360 / data.length),
          rng = Math.floor((Math.random() * 360 * 4) + 360);

      rotation = (rng / ps) * ps;

      picked = Math.round(data.length - (rotation % 360) / ps);
      picked = picked >= data.length ? (picked % data.length) : picked;
      if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
      } else {
        let slices = document.getElementsByClassName('slice')
        oldpick.forEach(i => {
          slices[i].getElementsByTagName('text')[0].innerHTML = ''
        })
        oldpick.push(picked);
      }
      rotation += 90 - Math.round(ps / 2);
      vis.transition()
          .duration(5000)
          .attrTween("transform", rotTween)
          .each("end", function () {
            //populate question
            d3.select("#question h1")
                .text(data[picked].label);
            oldrotation = rotation;

            console.log(self.experts)

            /* Get the result value from object "data" */
            console.log(data[picked].value)
            /* Comment the below line for restrict spin to sngle time */
            // container.on("click", spin);
          });
    }
    let padding = {top: 0, right: 0, bottom: 0, left: 0},
        w = 512 - padding.left - padding.right,
        h = 512 - padding.top - padding.bottom,
        r = Math.min(w, h) / 2,
        rotation = 0,
        oldrotation = 0,
        picked = 1000,
        oldpick = []

    let data = [
      {"label": "Вопрос 1", "value": 1},
      {"label": "Вопрос 2", "value": 2},
      {"label": "Вопрос 3", "value": 3},
      {"label": "Вопрос 4", "value": 4},
      {"label": "Вопрос 5", "value": 5},
      {"label": "Вопрос 6", "value": 6},
      {"label": "Вопрос 7", "value": 7},
      {"label": "Вопрос 8", "value": 8},
      {"label": "Вопрос 9", "value": 9},
      {"label": "Вопрос 10", "value": 10},
      {"label": "Вопрос 11", "value": 11},
      {"label": "Вопрос 12", "value": 12}
    ];

    let svg = d3.select('#chart')
        .append("svg")
        .data([data])
        .attr("width", w + padding.left + padding.right)
        .attr("height", h + padding.top + padding.bottom);
    let container = svg.append("g")
        .attr("class", "chartholder")
        .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
    let vis = container
        .append("g");

    let pie = d3.layout.pie().sort(null).value(function (d) {
      return 1;
    });

    let arc = d3.svg.arc().outerRadius(r);

    let arcs = vis.selectAll("g.slice")
        .data(pie)
        .enter()
        .append("g")
        .attr("class", "slice");

    arcs.append("path")
        .attr("fill", function (d, i) {
          return (i % 2 === 0) ? '#212529' : '#343a40';
        })
        .attr("d", function (d) {
          d.endAngle += 0.01
          return arc(d);
        });

    arcs.append("text")
        .attr("transform", function (d) {
          d.innerRadius = 0;
          d.outerRadius = r;
          d.angle = (d.startAngle + d.endAngle) / 2;
          return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
        })
        .attr("text-anchor", "end")
        .style({"font-weight": "normal", "font-size": "24px", "fill": "#f8f9fa"})
        .text(function (d, i) {
          return data[i].label;
        });

    //make arrow
    svg.append("g")
        .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
        .append("path")
        .attr("d", "M-" + (r * .15) + ",0L0," + (r * .1) + "L0,-" + (r * .1) + "Z")
        .style({"fill": "black"});
    //draw spin circle
    container.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 60)
        .style({"fill": "white", "cursor": "pointer"})
        .on("click", spin);
    //spin text
    container.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .text("SPIN")
        .style({"font-size": "30px", "cursor": "pointer"})
        .on("click", spin);

    let rotTween = (to) => {
      let i = d3.interpolate(oldrotation % 360, rotation);
      return function (t) {
        return "rotate(" + i(t) + ")";
      };
    }
  },
  methods: {}
}
</script>

<style>

#chart {
  position: relative;
  width: 512px;
  height: 512px;
  float: left;
}

#question {
  position: relative;
}

#question h1 {
  font-size: 48px;
  position: relative;
}
</style>