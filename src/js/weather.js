var urlPath = "http://weather.livedoor.com/forecast/webservice/json/v1?city=400040";

$(function(){
  $.ajax({
    type: "GET",
    url: urlPath,
    data: {
      city: "400040"
    },
    success: function(data){
      var dataText = JSON.stringify(data);

      console.log("データ："　+ dataText);


    }, error: function(e) {
      console.log("エラー："　+ JSON.stringify(e));

    }, complete : function(data) {
      //console.log(JSON.stringify(data));
    }
  });
});
