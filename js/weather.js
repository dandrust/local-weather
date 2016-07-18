$(document).ready(function() {

  // Declare global vars set default to F
  var tempX = 1.8;
  var tempY = -459.67;
  var windFactor = 2.23694;
  var tempLabel = "F";
  var windLabel = "mph";
  var wCode = 0;
  var main = "";
  var temp = "";
  var tempRaw = "";
  var humid = "";
  var wind = "";
  var windRaw = "";
  var cloud = "";
  var imgSrc = "";
  var gKey = "";
  var weatherCodes = {
    200: "lightning",
    201: "lightning",
    202: "lightning",
    210: "lightning",
    211: "lightning",
    212: "lightning",
    221: "lightning",
    230: "lightning",
    321: "lightning",
    232: "lightning",
    300: "drizzle",
    301: "drizzle",
    302: "drizzle",
    310: "drizzle",
    311: "drizzle",
    312: "drizzle",
    313: "drizzle",
    314: "drizzle",
    321: "drizzle",
    500: "rainy-day",
    501: "rainy-day",
    502: "rainy-day",
    503: "rainy-day",
    504: "rainy-day",
    511: "rainy-day",
    520: "rainy-day",
    521: "rainy-day",
    522: "rainy-day",
    531: "rainy-day",
    600: "hail-storm",
    601: "hail-storm",
    602: "hail-storm",
    611: "hail-storm",
    612: "hail-storm",
    615: "hail-storm",
    616: "hail-storm",
    620: "hail-storm",
    621: "hail-storm",
    622: "hail-storm",
    701: "mist",
    711: "smog",
    721: "smog",
    731: "overcast-day",
    741: "foggy",
    751: "overcast-day",
    761: "overcast-day",
    762: "overcast-day",
    771: "windy-day",
    781: "windy-day",
    800: "sunny-day",
    801: "partialy-cloudy",
    802: "partialy-cloudy",
    803: "partialy-cloudy",
    804: "overcast-day",
    900: "windy-day",
    901: "hurricane",
    902: "hurricane",
    903: "hot-weather",
    904: "hot-weather",
    905: "windy-day",
    906: "snow-cloud",
    951: "sunny-day",
    952: "breeze",
    953: "breeze",
    954: "breeze",
    955: "breeze",
    956: "windy-day",
    957: "windy-day",
    598: "windy-day",
    959: "windy-day",
    960: "lightning",
    961: "lightning",
    962: "hurricane"
  }

  // Declare functions
  var toggleUnit = function(event) {
    var unit = event.target.id;
    //console.log(unit);
    //console.log("Inside toggleUnit");
    //console.log("current unit labels are:" + tempLabel + windLabel)
    if (unit === "C") {
      console.log("Inside if=C");
      $("#C").addClass("active");
      $("#F").removeClass("active");
      tempX = 1;
      tempY = -273.15;
      temp = Math.floor(tempRaw * tempX + tempY);
      windFactor = 1;
      wind = Math.floor(windRaw * windFactor);
      tempLabel = "C";
      windLabel = "m/s";
      //console.log(tempLabel + windLabel);

    } else if (unit === "F") {
      //console.log("Inside if=F");
      $("#F").addClass("active");
      $("#C").removeClass("active");
      tempX = 1.8;
      tempY = -459.67;
      temp = Math.floor(tempRaw * tempX + tempY);
      windFactor = 2.23694;
      wind = Math.floor(windRaw * windFactor);
      tempLabel = "F";
      windLabel = "mph";
      //console.log(tempLabel + windLabel);
    }; //endif
    writeData();
  }; //end toggleUnit

  var writeData = function() {
    console.log("Inside writeData()")
    $("#weather-icon").attr("src",imgSrc);
    $("#main").html(main);
    $("#temp").html(temp);
    $("#humid").html(humid);
    $("#wind").html(wind);
    $("#cloud").html(cloud);
    $("#temp-label").html(tempLabel);
    $("#wind-label").html(windLabel);
  }; // end write Data

  var imgCode = function() {
    console.log("Inside imgCode()")
    imgSrc = "media/weather_icons/"+ weatherCodes[wCode] + ".png";
    console.log(imgSrc);
    /*if (imgSrc === "lightning") {
      gKey = "0B10YlyxsqvtaazJwc1IzZTZQR2M"
    } else if (imgSrc === "drizzle") {
      gKey = "0B10YlyxsqvtaUnI4SXVrdmhJYXc"
    } else if (imgSrc === "rainy-day") {
      gKey = "0B10YlyxsqvtaREZOOVktdlZBUmM"
    } else if (imgSrc === "hail-storm") {
      gKey = "0B10YlyxsqvtaLVRPOXYyWGwyUms"
    } else if (imgSrc === "mist") {
      gKey = "0B10YlyxsqvtaWWZFU0VXblZlb3c"
    } else if (imgSrc === "smog") {
      gKey = "0B10YlyxsqvtaZG1zUzFDd0huTms"
    } else if (imgSrc === "overcast-day") {
      gKey = "0B10YlyxsqvtaaXBsa2E3a0pUYlk"
    } else if (imgSrc === "foggy") {
      gKey = "0B10YlyxsqvtaM2Rfb1doSlpURjQ"
    } else if (imgSrc === "windy-day") {
      gKey = "0B10YlyxsqvtaR0ZMbVNsT3laNEE"
    } else if (imgSrc === "sunny-day") {
      gKey = "0B10YlyxsqvtaZTZ5REJpSjJrNHM"
    } else if (imgSrc === "partialy-cloudy") {
      gKey = "h0B10YlyxsqvtaQkc4TlVWbElkWFU"
    } else if (imgSrc === "hurricane") {
      gKey = "0B10YlyxsqvtaMzRzV25wbFRxNDg"
    } else if (imgSrc === "hot-weather") {
      gKey = "0B10YlyxsqvtaVzFuTTNXX2lDaEU"
    } else if (imgSrc === "snow-cloud") {
      gKey = "0B10YlyxsqvtacHVyR285aWtMMWM"
    } else if (imgSrc === "breeze") {
      gKey = "0B10YlyxsqvtaYzJPeUR0QTZHdTQ"
    }; // end if statement

    imgSrc = "https://drive.google.com/uc?id=" + gKey;
    console.log(imgSrc); */

  }; // end imgCode

  var getData = function() {
    $(".progress").removeClass("hidden");
    $(".progress").addClass("show");
    $("#icon-credit").removeClass("show");
    $("#icon-credit").addClass("hidden");
    $(".pbar").html("Getting loc");
    $(".pbar").css("width", "35%");
    $.getJSON("http://freegeoip.net/json/", function(json) {
      $(".pbar").html("Received loc");
      $(".pbar").css("width", "45%");
      var placeName = json.city
      var lat = json.latitude;
      var lon = json.longitude;
      var appId = "3b5bcb94ae83f3a0d97a6b139d9c6c3c";
      var fetchUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appId;
      if (!placeName) {
        $("#locale").html("City unavailable");
      } else $("#locale").html(placeName);
      $(".pbar").html("Getting weather");
      $(".pbar").css("width", "75%");
      $.getJSON(fetchUrl, function(weather, val) {
        console.log(weather);
        $(".pbar").html("Success!");
        $(".pbar").css("width", "100%");
        wCode = weather.weather[0].id;
        main = weather.weather[0].main;
        tempRaw = weather.main.temp;
        temp = Math.floor(weather.main.temp * tempX + tempY);
        humid = Math.floor(weather.main.humidity);
        wind = Math.floor(weather.wind.speed * windFactor);
        windRaw = weather.wind.speed;
        cloud = Math.floor(weather.clouds.all);
        console.log(wCode);
        $(".progress").removeClass("show");
        $(".progress").addClass("hidden");
        $("#icon-credit").removeClass("hidden");
        $("#icon-credit").addClass("show");

        imgCode();
        writeData();
      }); //end get weather
    }); //end get location

  }; //end getData

  var setImgHeight = function() {
    var windowHeight = $(window).height();
    var topbarHeight = $("#topbar").height();
    var data1Height = $("#data1").height();
    var data2Height = $("#data2").height();
    var footerHeight = $("#footer").height();
    console.log(windowHeight, topbarHeight, data1Height, data2Height, footerHeight);
    $("#weather-icon").css("height", windowHeight - (topbarHeight + data1Height + data2Height + footerHeight + 30));
  };

  $("#C").on('click', toggleUnit);
  $("#F").on('click', toggleUnit);
  $(".glyphicon-refresh").on('click', getData)
  $(window).resize(setImgHeight);

  setImgHeight();
  getData();

}); //end $(document)
