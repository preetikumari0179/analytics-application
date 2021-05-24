<template>
  <div class='click-through-rate'>
    <g-chart
        type="LineChart"
        :data="getReports"
        :options="chartOptions"
        name="click-through-rate"
    />
  </div>
</template>
<script src="./clickThroughRate.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./clickThroughRate.css" scoped></style>
