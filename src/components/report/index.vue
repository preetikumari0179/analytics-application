<template>
  <div class='report-container'>
    <div class="dropdown-block">
      <select v-on:change="changeItem($event)">
        <option
            :value="dropDownValue.value"
            v-for="dropDownValue in dropDownValues"
            :key="dropDownValue.value">
          {{dropDownValue.name}}
        </option>
      </select>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Report',
  data() {
    return {
      dropDownValues: [
        {
          name: 'overall sales',
          value: 'SaleReports'
        },
        {
          name: 'overall orders',
          value: 'OrderReports'
        },
        {
          name: 'overall click through rate',
          value: 'ClickThroughRate'
        },
        {
          name: 'overall page view',
          value: 'PageViewReports'
        },
      ],
      selected: ''
    };
  },
  mounted() {
    this.selected = this.dropDownValues[0].value;
  },
  watch: {
    selected: function(val) {
      this.$router.push({ name: val});
    }
  },
  methods: {
    changeItem: function changeItem(event) {
      this.selected =  event.target.value;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-block{
  background: #CCC;
}
</style>
