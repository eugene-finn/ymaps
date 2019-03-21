import { initMap, getMapPosition } from './js/ymaps';

window.onload = initMap();

const map = document.querySelector('#map');

// addEventListener('click', )

myMap.events.add('click', function (e) {
      var coords = e.get('coords');
      console.log(coords);
})

myMap.events.add('click', (e) => {
  const position = getMapPosition(e);
  console.log(position);
})


const listPoints = [
  {
    name: 'Иван',
    last_name: 'Иванов',
  },
  {
    name: 'Олег',
    last_name: 'Иванов',
  }
];

map.innerHTML = render({listPoints});