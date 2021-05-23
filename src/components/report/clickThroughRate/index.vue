<template>
  <div class='click-through-rate'>
    <GChart
        type="LineChart"
        :data="clickThruRateDataReports"
        :options="chartOptions"
        name="click-through-rate"
    />
  </div>
</template>
<script src="./clickThroughRate.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./clickThroughRate.css" scoped></style>
