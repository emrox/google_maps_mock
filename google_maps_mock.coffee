@google = maps:
  event: {}
  MapTypeId:
    ROADMAP: 1

  Animation:
    BOUNCE: 1

class google.maps.Map
  constructor: (mapElement, options) ->
    @mapElement = mapElement
    @options = options
  fitBounds: ->

class google.maps.LatLng
  constructor: (lat, lng) ->
    @latitude = parseFloat(lat)
    @longitude = parseFloat(lng)
  lat: -> @latitude
  lng: -> @longitude

class google.maps.LatLngBounds
  constructor: (ne, sw) ->
    @ne = ne
    @sw = sw
  getSouthWest: -> @sw
  getNorthEast: -> @ne
  union: ->
  getCenter:->

class google.maps.OverlayView
class google.maps.MarkerImage
class google.maps.Point
class google.maps.Size
class google.maps.event.addListener
class google.maps.event.addListenerOnce

class google.maps.Marker
  setTitle: ->
  setClickable: ->
  setDraggable: ->
  setMap: ->
  setIcon: ->
  setAnimation: ->
  setVisible: ->
  getPosition: ->
    lat: ->
    lng: ->

class google.maps.InfoWindow
  open: (mapObject) ->
    @dynamicInfoWindow = document.getElementById("_infoWindow")  unless @dynamicInfoWindow
    unless @dynamicInfoWindow
      newInfoWindow = document.createElement("div")
      newInfoWindow.setAttribute "id", "_infoWindow"
      assignTo = document.getElementsByTagName("body")[0]
      assignTo = mapObject.mapElement  if mapObject and mapObject.mapElement
      assignTo.appendChild newInfoWindow
      @dynamicInfoWindow = newInfoWindow

  close: ->

  setContent: (content) ->
    return  unless @dynamicInfoWindow
    hasChild = @dynamicInfoWindow.firstChild
    @dynamicInfoWindow.removeChild @dynamicInfoWindow.firstChild  if hasChild
    @dynamicInfoWindow.appendChild content

class google.maps.Geocoder
  geocode: (inLocation, callback) ->
    response =
      results: [
        address_components: [
          long_name: "45"
          short_name: "45"
          types: ["street_number"]
        ,
          long_name: "Pinnasberg"
          short_name: "Pinnasberg"
          types: ["route"]
        ,
          long_name: "Altona-Altstadt"
          short_name: "Altona-Altstadt"
          types: ["sublocality", "political"]
        ,
          long_name: "Altona"
          short_name: "Altona"
          types: ["sublocality", "political"]
        ,
          long_name: "Hamburg"
          short_name: "Hamburg"
          types: ["locality", "political"]
        ,
          long_name: "Hamburg"
          short_name: "HH"
          types: ["administrative_area_level_1", "political"]
        ,
          long_name: "Germany"
          short_name: "DE"
          types: ["country", "political"]
        ,
          long_name: "20359"
          short_name: "20359"
          types: ["postal_code"]
        ]
        formatted_address: "Pinnasberg 45, 20359 Hamburg, Germany"
        geometry:
          location:
            lat: 53.54627150
            lng: 9.95394140

          location_type: "ROOFTOP"
          viewport:
            northeast:
              lat: 53.54762048029150
              lng: 9.955290380291503

            southwest:
              lat: 53.54492251970850
              lng: 9.952592419708498

        types: ["street_address"]
      ]
      status: "OK"

    if /London/i.test(inLocation.address)
      response =
        results: [
          address_components: [
            long_name: "Tower Bridge"
            short_name: "Tower Bridge"
            types: ["point_of_interest", "establishment"]
          ,
            long_name: "Tower Bridge Rd"
            short_name: "Tower Bridge Rd"
            types: ["route"]
          ,
            long_name: "London"
            short_name: "London"
            types: ["locality", "political"]
          ,
            long_name: "London Borough of Tower Hamlets"
            short_name: "London Borough of Tower Hamlets"
            types: ["administrative_area_level_3", "political"]
          ,
            long_name: "Greater London"
            short_name: "Gt Lon"
            types: ["administrative_area_level_2", "political"]
          ,
            long_name: "United Kingdom"
            short_name: "GB"
            types: ["country", "political"]
          ,
            long_name: "SE1 2UP"
            short_name: "SE1 2UP"
            types: ["postal_code"]
          ]
          formatted_address: "Tower Bridge, Tower Bridge Rd, London Borough of Tower Hamlets, London SE1 2UP, UK"
          geometry:
            location:
              lat: 51.50552910
              lng: -0.07542270

            location_type: "APPROXIMATE"
            viewport:
              northeast:
                lat: 51.51247370
                lng: -0.05941530

              southwest:
                lat: 51.49858340
                lng: -0.09143010

          types: ["point_of_interest", "establishment"]
        ]
        status: "OK"
    else if /notMatchingLocation/i.test(inLocation.address)
      response =
        results: []
        status: "ZERO_RESULTS"
    callback response.results, response.status
    return

google.maps.GeocoderStatus =
  ERROR: "ERROR"
  INVALID_REQUEST: "INVALID_REQUEST"
  OK: "OK"
  OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT"
  REQUEST_DENIED: "REQUEST_DENIED"
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
  ZERO_RESULTS: "ZERO_RESULTS"
