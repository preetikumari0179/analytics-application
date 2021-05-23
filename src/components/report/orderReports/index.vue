<template>
  <div class='order-reports'>
    <GOrderChart
        type="LineChart"
        :data="orderDataReports"
        :options="chartOptions"
        name="order"
    />
  </div>
</template>
<script src="./orderReports.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./orderReports.css"></style>
