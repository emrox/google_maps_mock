// Generated by CoffeeScript 1.3.3

this.google = {
  maps: {
    event: {},
    MapTypeId: {
      ROADMAP: 1
    },
    Animation: {
      BOUNCE: 1
    }
  }
};

google.maps.Map = (function() {

  function Map(mapElement, options) {
    this.mapElement = mapElement;
    this.options = options;
  }

  Map.prototype.fitBounds = function() {};

  return Map;

})();

google.maps.LatLng = (function() {

  function LatLng(lat, lng) {
    this.latitude = parseFloat(lat);
    this.longitude = parseFloat(lng);
  }

  LatLng.prototype.lat = function() {
    return this.latitude;
  };

  LatLng.prototype.lng = function() {
    return this.longitude;
  };

  return LatLng;

})();

google.maps.LatLngBounds = (function() {

  function LatLngBounds(ne, sw) {
    this.ne = ne;
    this.sw = sw;
  }

  LatLngBounds.prototype.getSouthWest = function() {
    return this.sw;
  };

  LatLngBounds.prototype.getNorthEast = function() {
    return this.ne;
  };

  LatLngBounds.prototype.union = function() {};

  LatLngBounds.prototype.getCenter = function() {};

  return LatLngBounds;

})();

google.maps.OverlayView = (function() {

  function OverlayView() {}

  return OverlayView;

})();

google.maps.MarkerImage = (function() {

  function MarkerImage() {}

  return MarkerImage;

})();

google.maps.Point = (function() {

  function Point() {}

  return Point;

})();

google.maps.Size = (function() {

  function Size() {}

  return Size;

})();

google.maps.event.addListener = (function() {

  function addListener() {}

  return addListener;

})();

google.maps.event.addListenerOnce = (function() {

  function addListenerOnce() {}

  return addListenerOnce;

})();

google.maps.Marker = (function() {

  function Marker() {}

  Marker.prototype.setTitle = function() {};

  Marker.prototype.setClickable = function() {};

  Marker.prototype.setDraggable = function() {};

  Marker.prototype.setMap = function() {};

  Marker.prototype.setIcon = function() {};

  Marker.prototype.setAnimation = function() {};

  Marker.prototype.setVisible = function() {};

  Marker.prototype.getPosition = function() {
    return {
      lat: function() {},
      lng: function() {}
    };
  };

  return Marker;

})();

google.maps.InfoWindow = (function() {

  function InfoWindow() {}

  InfoWindow.prototype.open = function(mapObject) {
    var assignTo, newInfoWindow;
    if (!this.dynamicInfoWindow) {
      this.dynamicInfoWindow = document.getElementById("_infoWindow");
    }
    if (!this.dynamicInfoWindow) {
      newInfoWindow = document.createElement("div");
      newInfoWindow.setAttribute("id", "_infoWindow");
      assignTo = document.getElementsByTagName("body")[0];
      if (mapObject && mapObject.mapElement) {
        assignTo = mapObject.mapElement;
      }
      assignTo.appendChild(newInfoWindow);
      return this.dynamicInfoWindow = newInfoWindow;
    }
  };

  InfoWindow.prototype.close = function() {};

  InfoWindow.prototype.setContent = function(content) {
    var hasChild;
    if (!this.dynamicInfoWindow) {
      return;
    }
    hasChild = this.dynamicInfoWindow.firstChild;
    if (hasChild) {
      this.dynamicInfoWindow.removeChild(this.dynamicInfoWindow.firstChild);
    }
    return this.dynamicInfoWindow.appendChild(content);
  };

  return InfoWindow;

})();

google.maps.Geocoder = (function() {

  function Geocoder() {}

  Geocoder.prototype.geocode = function(inLocation, callback) {
    var response;
    response = {
      results: [
        {
          address_components: [
            {
              long_name: "45",
              short_name: "45",
              types: ["street_number"]
            }, {
              long_name: "Pinnasberg",
              short_name: "Pinnasberg",
              types: ["route"]
            }, {
              long_name: "Altona-Altstadt",
              short_name: "Altona-Altstadt",
              types: ["sublocality", "political"]
            }, {
              long_name: "Altona",
              short_name: "Altona",
              types: ["sublocality", "political"]
            }, {
              long_name: "Hamburg",
              short_name: "Hamburg",
              types: ["locality", "political"]
            }, {
              long_name: "Hamburg",
              short_name: "HH",
              types: ["administrative_area_level_1", "political"]
            }, {
              long_name: "Germany",
              short_name: "DE",
              types: ["country", "political"]
            }, {
              long_name: "20359",
              short_name: "20359",
              types: ["postal_code"]
            }
          ],
          formatted_address: "Pinnasberg 45, 20359 Hamburg, Germany",
          geometry: {
            location: {
              lat: 53.54627150,
              lng: 9.95394140
            },
            location_type: "ROOFTOP",
            viewport: {
              northeast: {
                lat: 53.54762048029150,
                lng: 9.955290380291503
              },
              southwest: {
                lat: 53.54492251970850,
                lng: 9.952592419708498
              }
            }
          },
          types: ["street_address"]
        }
      ],
      status: "OK"
    };
    if (/London/i.test(inLocation.address)) {
      response = {
        results: [
          {
            address_components: [
              {
                long_name: "Tower Bridge",
                short_name: "Tower Bridge",
                types: ["point_of_interest", "establishment"]
              }, {
                long_name: "Tower Bridge Rd",
                short_name: "Tower Bridge Rd",
                types: ["route"]
              }, {
                long_name: "London",
                short_name: "London",
                types: ["locality", "political"]
              }, {
                long_name: "London Borough of Tower Hamlets",
                short_name: "London Borough of Tower Hamlets",
                types: ["administrative_area_level_3", "political"]
              }, {
                long_name: "Greater London",
                short_name: "Gt Lon",
                types: ["administrative_area_level_2", "political"]
              }, {
                long_name: "United Kingdom",
                short_name: "GB",
                types: ["country", "political"]
              }, {
                long_name: "SE1 2UP",
                short_name: "SE1 2UP",
                types: ["postal_code"]
              }
            ],
            formatted_address: "Tower Bridge, Tower Bridge Rd, London Borough of Tower Hamlets, London SE1 2UP, UK",
            geometry: {
              location: {
                lat: 51.50552910,
                lng: -0.07542270
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 51.51247370,
                  lng: -0.05941530
                },
                southwest: {
                  lat: 51.49858340,
                  lng: -0.09143010
                }
              }
            },
            types: ["point_of_interest", "establishment"]
          }
        ],
        status: "OK"
      };
    } else if (/notMatchingLocation/i.test(inLocation.address)) {
      response = {
        results: [],
        status: "ZERO_RESULTS"
      };
    }
    callback(response.results, response.status);
  };

  return Geocoder;

})();

google.maps.GeocoderStatus = {
  ERROR: "ERROR",
  INVALID_REQUEST: "INVALID_REQUEST",
  OK: "OK",
  OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
  REQUEST_DENIED: "REQUEST_DENIED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  ZERO_RESULTS: "ZERO_RESULTS"
};
