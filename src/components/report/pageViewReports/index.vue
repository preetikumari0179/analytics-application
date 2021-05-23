<template>
  <div class='page-view-reports'>
    <GChart
        type="LineChart"
        :data="pageViewDataReports"
        :options="chartOptions"
        name="sale"
    />
  </div>
</template>
<script src="./pageViewReports.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./pageViewReports.css"></style>
