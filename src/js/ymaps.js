function initMap() {
  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 12
    }, {
      balloonMaxWidth: 200,
      searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects.add( //определение координат по IP
      new ymaps.Placemark(
        [ymaps.geolocation.latitude, ymaps.geolocation.longitude], {
          balloonContentHeader: ymaps.geolocation.country,
          balloonContent: ymaps.geolocation.city,
          balloonContentFooter: ymaps.geolocation.region
        }
      )
    );

    myMap.events.add('click', function (e) {
      let coords = e.get('coords');
      console.log(coords);
      
      ymaps.geocode(coords).then(function (res) {
            let firstGeoObject = res.geoObjects.get(0);
            let address = firstGeoObject.properties.get('text');
            console.log(address);
      })

      if (!myMap.balloon.isOpen()) {
        myMap.balloon.open(coords, {
          contentHeader: ['Событие!'],
          contentBody: '<p>Кто-то щелкнул по карте.</p>' +
            '<p>Координаты ' + [
              coords[0].toPrecision(6),
              coords[1].toPrecision(6)
            ].join(', ') + '</p>',
          contentFooter: '<sup>Щелкните еще раз</sup>'
        });
      } else {
        myMap.balloon.close();
      }

      // const address = geocode.geoObjects.get(0)
      // console.log(address);
      // var myReverseGeocoder = ymaps.geocode([61.79, 34.36]);
      // console.log(myReverseGeocoder);

    })
  })
}

export {
  initMap
}