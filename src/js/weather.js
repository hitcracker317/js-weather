var apiKey = "11dcf40ee93ab1d540f1931d73bdfefa";
var baseURL = "http://api.openweathermap.org/data/2.5/";


$(function(){
  apiURL = baseURL + "weather?q=tokyo&units=metric&appid=" + apiKey;

  $.ajax({
    type: "GET",
    url: apiURL,
    scriptCharset: 'UTF-8',
    dataType: "json",
    success: function(data){
      //天気情報をを取得
      var weather = data["weather"][0]["main"];
      var nowTemperature = data["main"]["temp"];
      var minTemperature = data["main"]["temp_min"];
      var maxTemperature = data["main"]["temp_max"];

      console.log("天気："　+ JSON.stringify(weather));
      console.log("気温："　+ nowTemperature);
      console.log("最低気温："　+ minTemperature);
      console.log("最高気温："　+ maxTemperature);


    }, error: function(e) {
      console.log("エラー："　+ JSON.stringify(e));

    }, complete : function(data) {
      //console.log(JSON.stringify(data));
    }
  });
});
