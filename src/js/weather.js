var urlPath = "http://weather.livedoor.com/forecast/webservice/json/v1?city=400040";

$(function(){
  $.ajax({
    type: "GET",
    url: urlPath,
    scriptCharset: 'UTF-8',
    data: decodeURIComponent ,
    data: {
      city: "400040"
    },
    success: function(data){

      for (var i in data) {

      }
      //data.find("name").each(function(){

      //});

      //var info = data.
      //console.log("データだよ！："　+ JSON.stringify(info));



      var dataText = JSON.stringify(data);
      var dataText2 = $.parseXML(data.responseText);
      console.log("データ："　+ dataText);
      console.log("データです："　+ JSON.stringify(dataText2));




    }, error: function(e) {
      console.log("エラー："　+ JSON.stringify(e));

    }, complete : function(data) {
      //console.log(JSON.stringify(data));
    }
  });
});
