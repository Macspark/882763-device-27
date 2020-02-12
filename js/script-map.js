ymaps.ready(function () {
  var map = new ymaps.Map("map", {
      center: [55.686980, 37.529654],
      zoom: 17
  });

  var mapMark = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [55.686980, 37.529654]
      }
  });

  map.geoObjects.add(mapMark);
});
