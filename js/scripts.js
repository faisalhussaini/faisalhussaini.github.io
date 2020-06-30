        $(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
   
   

        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });

    



// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 43.6596, lng: -79.3977};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
    
var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMYVMT9Umu8EY1tCjG_euqhUbh7pGi7X0&callback=initMap';
    document.body.appendChild(script); 