function initMap() {
  mapShop = new google.maps.Map(document.getElementById('address-map'), {
    center: {lat: 59.929907, lng: 30.296586},
    zoom: 12,
    disableDefaultUI: true, //отмена всех дефолтных элементов управления

     // добавление необходимых элементов управления вручную
     zoomControl: true,
     mapTypeControl: true,
     fullscreenControl: true
     // styles: gmapStyles
      // gestureHandling: 'none' //запрет на прокручивание карты
    });

  // var image = {
  //   url: '../img/icons/map-marker.png'
  //         // size: new google.maps.Size(50, 50),
  //         // origin: new google.maps.Point(0, 0),
  //         // anchor: new google.maps.Point(0, 32)

  //       };

  //   var marker = new google.maps.Marker({
  //         position: {lat: 55.746512, lng: 37.392270},
  //         icon: image 
  //       });

  //   marker.setMap(mapShop);
}