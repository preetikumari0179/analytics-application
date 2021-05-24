<template>
  <div class='sale-reports'>
    <GChart
        type="LineChart"
        :data="getReports.sales"
        :options="chartOptions"
    />
  </div>
</template>

<script src="./saleReports.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./saleReports.css"></style>
