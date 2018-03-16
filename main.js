// document.querySelector('body').innerHTML = '<h1>Manas</h1>';
// $('h1').html('Manas');

// (function() {
//     document.getElementById('get').onclick = function(e) {
//         alert('Yahoo!!');
//     }
// }())

// function doGet() {
//     alert("Zooyimama");
// }

// (function() {
//     $('#get').on('click', function() {
//         getWeather();
//     })

//     function getWeather() {
//         alert('Senorita');
//     }
// }())

(function() {
    var city;
    $('#get').on('click', getWeather)

    function getWeather() {
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0395cc6470b6d19682437de52db3b4b5"
        }).done(function(data) {
            $('.desc').html(data.weather[0].description);
            $('.temp').html(data.main.temp);
            $('.wind').html(data.wind.speed);
        });
    }

    $(".dropdown-menu .dropdown-item").click(function(){
        city = $(this).text();
        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());
    });
}())