<script type="text/javascript">

    function updateMap(selectControl)   {
    alert(selectControl);
        switch(selectControl)
        {
    case 'school1':
      var polyline = new google.maps.Polyline({
  path: [
  new google.maps.LatLng(51.408664,0.114405),
  new google.maps.LatLng(51.412973,0.114973),
  new google.maps.LatLng(51.417979,0.097195),
  new google.maps.LatLng(51.421214,0.023720)],
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2
});

      var latLng = new google.maps.LatLng(51.41859298,0.089179345)
      break;
    case 'school2':
      var polyline = new google.maps.Polyline({
  path: [
  new google.maps.LatLng(51.408664,0.114405),
  new google.maps.LatLng(51.412973,0.114973),
  new google.maps.LatLng(51.417979,0.097195),
  new google.maps.LatLng(51.421214,0.023720)],
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2

  });

      var latLng = new google.maps.LatLng(51.382522,0.045018)
      break;
    default:
      break;
    }
    initialize(polyline, latLng);
    }

    function initialize(polyline, schoolLatLng) {
        var myLatLng = schoolLatLng;
        var myOptions = {
          zoom: 13,
          center: myLatLng,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };


       var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

       polyline.setMap(map);

      }

    //end

</script>