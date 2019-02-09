function printWeather(city, temp) {
  let fah = (9.0/5.0)*(temp - 273.15) + 32
  let cel = temp - 273.15
  let text = "The current weather at " + city + " is " + parseInt(fah) + " degrees Fahrenheit or " + parseInt(cel) + " degrees Celsius."

  console.log(text);
  document.getElementById("weather_info").innerHTML = text;
}

$( document ).ready(function() {

  var weather_dict;

  document.getElementById('answer').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {

      let city = this.value;
      let apiKey = 'bb269d8e162aec31d2b3ee12bb9a8fbd'
      let url_ =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      
      $.ajax({
        url:url_,
        async:false,
        dataType: "text",
        success:function(data) {

          weather_dict = JSON.parse(data);

          var temp = weather_dict["main"]["temp"]

          printWeather(city, temp);
    
        }
      });

      return false;
    }
  }


});
