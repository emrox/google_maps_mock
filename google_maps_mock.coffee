@google = maps:
  event: {}

class google.maps.LatLng
  constructor: (lat, lng) ->
    @latitude  = parseFloat(lat)
    @longitude = parseFloat(lng)
  
  lat: -> @latitude
  lng: -> @longitude

class google.maps.LatLngBounds
  constructor: (@ne, @sw) ->

  getSouthWest: -> @sw
  getNorthEast: -> @ne
  
class google.maps.OverlayView
  
class google.maps.Marker

class google.maps.MarkerImage
  
class google.maps.Map

class google.maps.Point
  
class google.maps.Size

google.maps.Geocoder = (->
  Geocoder = ->
  Geocoder::geocode = ->
    return

  Geocoder
 )()

google.maps.GeocoderStatus =
  ERROR: "ERROR"
  INVALID_REQUEST: "INVALID_REQUEST"
  OK: "OK"
  OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT"
  REQUEST_DENIED: "REQUEST_DENIED"
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
  ZERO_RESULTS: "ZERO_RESULTS"

google.maps.event.addListener = (->
  addListener = ->
  addListener
)()

