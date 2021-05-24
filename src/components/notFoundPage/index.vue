<template>
  <div class='not-found-container'>
    <div class="container">
      <div class="row">
        <div class="span-12">
          <h2>Whoops! We can't seem to find that page.</h2>
        </div>
      </div>
      <div class="row" id="servererror">
        <div class="span-2 tablet-span-1 mobile-span-1"><img src="../../assets/icon-error-document.png" id="icon" alt="Error"></div>
        <div id="message" class="span-10 tablet-span-5 mobile-span-3">
          <p>
            <strong>The page you requested is not available. (Error 404)</strong><br>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./notFoundPage.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./notFoundPage.css"></style>
