'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true

  });



  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */

    var nowChart = new Chart($("#now-chart"), {
        type: 'pie',
        data: {
          labels: ["渠道", "出版商", "作者"],
          datasets: [{
            data: [60, 30, 10],
            backgroundColor: [
              'rgba(184, 184, 184, 1)',
              'rgba(154, 154, 154, 1)',
              'rgba(142, 166, 230, 1)'
            ],
            borderWidth: 1
          }]
        }
    })

    var futureChart = new Chart($("#future-chart"), {
        type: 'pie',
        data: {
          labels: ["作者", "用户", "平台"],
          datasets: [{
            data: [49, 49, 2],
            backgroundColor: [
              'rgba(142, 166, 230, 1)',
              'rgba(142, 229, 200, 1)',
              'rgba(200, 144, 122, 1)'
            ],
            borderWidth: 1
          }]
        }
    })

    var contentChart = new Chart($("#content-chart"), {
        type: 'doughnut',
        data: {
          labels: ["收费内容", "付费内容"],
          datasets: [{
            data: [90, 10],
            backgroundColor: [
              'rgba(142, 166, 230, 1)',
              'rgba(142, 229, 200, 1)'
            ],
            borderWidth: 1
          }]
        }
    })
});
