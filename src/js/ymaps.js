function initMap() {
  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 12
    });

    let cluster = new ymaps.Clusterer({
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: false,
      clusterBalloonContentLayout: 'cluster#balloonCarousel',
      clusterBalloonPanelMaxMapArea: 0,
      clusterBalloonContentLayoutWidth: 320,
      clusterBalloonContentLayoutWidth: 200,
      clusterBalloonPagerSize: 5,
      preset: 'islands#darkBlueClusterIcons',
      balloonContentBody: 'balloonContentBody'
    
    })
    myMap.geoObjects.add(cluster);

    var myPlacemark = new ymaps.Placemark([55.8, 37.6]);
    myMap.geoObjects.add(myPlacemark);

    var myPlacemark1 = new ymaps.Placemark([55.85, 32.64], {
      // Задаем содержимое балуна метки.
      // Это содержимое будет отображаться при клике по кластеру.
      balloonContentHeader: 'Метка 1',
      balloonContentBody: 'balloonContentBody'
    });
    myMap.geoObjects.add(myPlacemark1);
    
  });
}

function getMapPosition(e) {
  const coords = e.get('coords');
  const geocode = ymaps.geocode(coords);
  const address = geocode.geoObjects.get(0).properties.get('text')

  return {
    address,
    coords
  }

function createPlacemark(pos) {
  const newPlacemark = new ymaps.Placemark(pos.coords, {
    hintContent: pos.address,
    balloonContent: `тык ${pos.address}`
  });

  cluster.add(newPlacemark);

}

}



// myPlacemark.events.add('click', function () {
//   console.log('ok');
// });


export {
  initMap,
  getMapPosition
}