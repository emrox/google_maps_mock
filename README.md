Mocked Google Maps API
======================

Simple file to mock all Google Maps API.
I'll add classes and methods evrey time I need it. But feel free to fork and pull requests!

Usefull for Jasmine tests or integration tests (speedup, overiding API limits)

I don't plan to write tests for that for now, I'm not a masochist to write test for mock objects used to write test. But who knows, may I'll do it

News
----

-   05.12.2012 - added compiled JS and added Support for GeoCoding. 3 results are supported:
    -   Default: Pinnaserg 45, 20354 Hamburg
    -   when matching '*London*': Tower Bridge, Tower Bridge Rd, London
    -   when matching '*notMatchingLocation*': - a zero sized result
