<template>
  <div class='report-container'>
    <div class="dropdown-block">
      <select v-model="selected" v-on:change="changeItem($event)">
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
          value: 'SaleReports',
        },
        {
          name: 'overall orders',
          value: 'OrderReports',
        },
        {
          name: 'overall click through rate',
          value: 'ClickThroughRate',
        },
        {
          name: 'overall page view',
          value: 'PageViewReports',
        },
      ],
      selected: '',
      onReload: true,
    };
  },
  mounted() {
    // set dropdown value after component is added to the DOM.
    if(this.$route.name) {
      this.selected = this.$route.name;
    } else {
      this.selected = this.dropDownValues[0].value;

    }
  },
  watch: {
    // apply watch on selected data and preform navigation through router
    selected(val) {
      if(!this.onReload) {
        this.$router.push({ name: val });
      }
    },
  },
  methods: {
    /**
     * @method: changeItem()
     * @description: to set the value of selected by using event.target.value
     * also set onReload to be false.
     */
    changeItem: function changeItem(event) {
      this.selected = event.target.value;
      this.onReload = false;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-block{
  background: #CCC;
}
</style>
