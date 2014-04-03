var geocoder;
var mode;
var country = new Array (3);

for (var i=0; i<3; i++){
  country[i] = new Array();
}
country[0][0] = "Canada";
country[0][1] = "United States";
country[0][2] = "China";
country[0][3] = "Russia";
country[0][4] = "Mexico";
country[0][5] = "United Kingdom";
country[0][6] = "Australia";
country[0][7] = "France";
country[0][8] = "Italy";
country[0][9] = "Brazil";
country[0][10] = "Japan";
country[0][11] = "Germany";
country[0][12] = "India";
country[0][13] = "Spain";
country[0][14] = "Ireland";
country[0][15] = "South Africa";
country[0][16] = "Egypt";
country[0][17] = "Iceland";
country[0][18] = "Sweden";
country[0][19] = "Portugal";
country[0][20] = "Argentina";
country[0][21] = "Norway";
country[0][22] = "Iran";
country[0][23] = "New Zealand";
country[0][24] = "South Korea";
country[0][25] = "Iraq";
country[0][26] = "Finland";
country[0][27] = "Greece";
country[0][28] = "Turkey";
country[0][29] = "North Korea";
country[0][30] = "Poland";
country[0][31] = "Cuba";
country[0][32] = "Denmark";
country[0][33] = "Ukraine";
country[0][34] = "Madagascar";
country[0][35] = "Pakistan";
country[0][36] = "The Netherlands";
country[0][37] = "Saudi Arabia";
country[0][38] = "Afghanistan";
country[0][39] = "Austria";
country[0][40] = "Thailand";
country[0][41] = "Indonesia";
country[0][42] = "Mongolia";
country[1][0] = "Morocco";
country[1][1] = "Peru";
country[1][2] = "Switzerland";
country[1][3] = "Vietnam";
country[1][4] = "Niger";
country[1][5] = "Belgium";
country[1][6] = "Colombia";
country[1][7] = "Chile";
country[1][8] = "Israel";
country[1][9] = "Democratic Republic of the Congo";
country[1][10] = "Congo";
country[1][11] = "Panama";
country[1][12] = "Uruguay";
country[1][13] = "Sudan";
country[1][14] = "Malaysia";
country[1][15] = "Philippines";
country[1][16] = "Venezuela";
country[1][17] = "Paraguay";
country[1][18] = "Haiti";
country[1][19] = "Libya";
country[1][20] = "Kenya";
country[1][21] = "Kazakhstan";
country[1][22] = "Romania";
country[1][23] = "Hungary";
country[1][24] = "Nigeria";
country[1][25] = "Czech Republic";
country[1][26] = "Jamaica";
country[1][27] = "Algeria";
country[1][28] = "Somalia";
country[1][29] = "Croatia";
country[1][30] = "Latvia";
country[1][31] = "Nepal";
country[1][32] = "Sri Lanka";
country[1][33] = "Papua New Guinea";
country[1][34] = "Estonia";
country[1][35] = "United Arab Emirates";
country[1][36] = "Lithuania";
country[1][37] = "Slovakia";
country[1][38] = "Chad";
country[1][39] = "Yemen";
country[1][40] = "Laos";
country[1][41] = "Costa Rica";
country[1][42] = "Oman";
country[1][43] = "Taiwan";
country[1][44] = "Belarus";
country[1][45] = "Slovenia";
country[1][46] = "Albania";
country[1][47] = "Honduras";
country[1][48] = "Dominican Republic";
country[1][49] = "South Sudan";
country[1][50] = "El Salvador";
country[1][51] = "Cambodia";
country[2][0] = "Dominica";
country[2][1] = "Singapore";
country[2][2] = "Ethiopia";
country[2][3] = "Syria";
country[2][4] = "Ecuador";
country[2][5] = "Luxembourg";
country[2][6] = "Bulgaria";
country[2][7] = "Jordan";
country[2][8] = "Zimbabwe";
country[2][9] = "Bolivia";
country[2][10] = "Republic of the Union of Myanmar";
country[2][11] = "Tunisia";
country[2][12] = "Serbia";
country[2][13] = "Uzbekistan";
country[2][14] = "Ghana";
country[2][15] = "Guatemala";
country[2][16] = "Bosnia and Herzegovina";
country[2][17] = "Bangladesh";
country[2][18] = "Bahamas";
country[2][19] = "Cote d'Ivoire";
country[2][20] = "Mali";
country[2][21] = "Georgia";
country[2][22] = "Nicaragua";
country[2][23] = "Belize";
country[2][24] = "Uganda";
country[2][25] = "Turkmenistan";
country[2][26] = "Cyprus";
country[2][27] = "Angola";
country[2][28] = "Tanzania";
country[2][29] = "Vatican City";
country[2][30] = "Zambia";
country[2][31] = "Guyana";
country[2][32] = "Fiji";
country[2][33] = "Guinea";
country[2][34] = "Andorra";
country[2][35] = "Macedonia (FYROM)";
country[2][36] = "Lebanon";
country[2][37] = "Qatar";
country[2][38] = "Botswana";
country[2][39] = "Monaco";
country[2][40] = "Mozambique";
country[2][41] = "Liberia";
country[2][42] = "Namibia";
country[2][43] = "Moldova";
country[2][44] = "Rwanda";
country[2][45] = "Kuwait";
country[2][46] = "Liechtenstein";
country[2][47] = "Malta";
country[2][48] = "Suriname";
country[2][49] = "Togo";
country[2][50] = "Armenia";
country[2][51] = "Cameroon";
country[2][52] = "Trinidad and Tobago";
country[2][53] = "Central African Republic";
country[2][54] = "Bhutan";
country[2][55] = "Montenegro";
country[2][56] = "Barbados";
country[2][57] = "Senegal";
country[2][58] = "Swaziland";
country[2][59] = "Tajikistan";
country[2][60] = "Eritrea";
country[2][61] = "Lesotho";
country[2][62] = "San Marino";
country[2][63] = "Malawi";
country[2][64] = "Sierra Leone";
country[2][65] = "Kyrgyzstan";
country[2][66] = "Mauritania";
country[2][67] = "Benin";
country[2][68] = "Gambia";
country[2][69] = "Bahrain";
country[2][70] = "Djibouti";
country[2][71] = "Saint Kitts and Nevis";
country[2][72] = "Gabon";
country[2][73] = "Saint Lucia";
country[2][74] = "Antigua and Barbuda";
country[2][75] = "Equatorial Guinea";
country[2][76] = "Burkina Faso";
country[2][77] = "Solomon Islands";
country[2][78] = "Guinea-Bissau";
country[2][79] = "Brunei";
country[2][80] = "Burundi";
country[2][81] = "Marshall Islands";
country[2][82] = "Saint Vincent and the Grenadines";
country[2][83] = "Timor-Leste";
country[2][84] = "Grenada";

var currCountry;
var prev;
var score = 0;
var questions = 0;
var map;
function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(51, 0),
        zoom: 2
      };

        var styles = [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
      ];

      mode = 1;
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      map.setOptions({styles: styles});

      geocoder = new google.maps.Geocoder();

      google.maps.event.addListener(map, 'click', function(e) {
        placeMarker(e.latLng, map);
      });

      document.getElementById("winner").innerHTML="<p align='center' style='color:#7CFC00'>Correct!</p>";
      document.getElementById("winner").style.display = "none";
      document.getElementById("loser").innerHTML="<p align='center' style='color:#FF0000'>Incorrect!</p>";
      document.getElementById("loser").style.display = "none";
      document.getElementById("message").innerHTML="<p align='center' style='color:#000000'>Last Location: N/A</p>";
      document.getElementById("score").innerHTML="<p align='center' style='color:#000000'>Score: "+score+"/"+questions+"</p>";
      newCountry();
    }

    var marker;
    var zoomer;

    function check() {
      document.getElementById("submit").src = "images/submit2.PNG";
    }

    function ret() {
      if (marker != null)
        checkCountry(marker.getPosition(), map);
      document.getElementById("submit").src = "images/submit.PNG";
    }

    function checkCountry(latlng, map) {
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK)
        {
          if (results[0]) {
            var cname = "";
            try {
              for (var j=0; j<results[0].address_components.length;j++) {
                var xty = results[0].address_components[j].types;
                if (xty.indexOf('country')!=-1) {
                  cname = results[0].address_components[j].long_name;
                }
              }
              
              document.getElementById("message").innerHTML="<p align='center' style='color:#000000'>Last Location: "+cname+"</p>";
              document.getElementById("score").style.display = "none";
              if (cname == currCountry) {
                newCountry();
                score++;
                document.getElementById("winner").style.display = "block";
                setTimeout(function() {
                  document.getElementById("winner").style.display = "none";
                }, 1000);
              } else {
                if (currCountry == "Georgia") {
                  map.panTo(new google.maps.LatLng(42,44));
                  placeMarker2(new google.maps.LatLng(42,44), map);
                } else {
                  geocoder.geocode({'address': currCountry}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                      map.panTo(results[0].geometry.location);
                      placeMarker2(results[0].geometry.location,map);
                    } else {
                      alert("Not successful for " + status);
                    }
                  });
                }
                newCountry();
                document.getElementById("loser").style.display = "block";
                setTimeout(function() {
                  document.getElementById("loser").style.display = "none";
                }, 1000);
              }
              questions++;
              document.getElementById("score").innerHTML="<p align='center' style='color:#000000'>Score: "+score+"/"+questions+"</p>";
              setTimeout(function() {
                  document.getElementById("score").style.display = "block";
                }, 1000);
            } catch(err) {
              document.getElementById("message").innerHTML="<p align='center' style='color:#000000'>[none]</p>";
            }
          }
        }
        else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
          setTimeout(function() {
            checkCountry(latlng,map);
          }, 10);
        }
        else {
          document.getElementById("message").innerHTML="<p align='center' style='color:#000000'>N/A</p>";
        }
      });
    }

    function placeMarker(position, map) {
        if (marker != null) {
          marker.setMap(null);
        }
        marker = new google.maps.Marker({
        position: position,
        map: map
      });
    }

    function placeMarker2(position, map) {
        if (marker != null) {
          marker.setMap(null);
        }
        var contentString = '<h1>'+prev+'</h1>';
        var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker = new google.maps.Marker({
        position: position,
        map: map
        });
        infoWindow.open(map,marker);
    }

    function newCountry() {
        var difficulty = Math.floor(Math.random()*100);
        var thresholds = new Array(2);
        if (mode == 1) {
          thresholds[0] = 50;
          thresholds[1] = 85;
        } else if (mode == 2) {
          thresholds[0] = 35;
          thresholds[1] = 75;
        } else {
          thresholds[0] = 15;
          thresholds[1] = 50;
        }
        if (difficulty < thresholds[0])
          difficulty = 0;
        else if (difficulty < thresholds[1])
          difficulty = 1;
        else
          difficulty = 2;
        var selection = Math.floor(Math.random()*country[difficulty].length);
        prev = currCountry;
        currCountry = country[difficulty][selection];
        document.getElementById("find").innerHTML="<p align='center' style='color:#000000'>Find: "+currCountry+"</p>";
    }

    google.maps.event.addDomListener(window, 'load', initialize);