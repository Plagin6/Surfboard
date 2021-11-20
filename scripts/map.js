(function () {

    let myMap;

    const init = () => {
        myMap = new ymaps.Map("map", {
            center: [55.746573, 37.606451],
            zoom: 14,
            controls: []
        });

        const coords = [
            [55.747616, 37.599121],
            [55.761958, 37.613692]
        ];

        const myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: "./img/marker.svg",
            iconImageSize: [46, 57],
            iconImageOffset: [-35, -52]
        });

        coords.forEach(coord => {
            myCollection.add(new ymaps.Placemark(coord));
        });

        myMap.geoObject.add(myCollection);ы

        myMap.behaviors.disable('scrollZoom');
    }

    ymaps.ready(init);

}());