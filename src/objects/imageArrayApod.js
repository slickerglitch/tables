const imageArray = [
   '<img src="https://apod.nasa.gov/apod/image/2307/STScI-01_RhoOph.png" alt="1">',
   '<img src="https://apod.nasa.gov/apod/image/2307/WaterfallAurora_Letelier_1600.jpg" alt="2">',
   '<img src="https://apod.nasa.gov/apod/image/2307/EtaCarinae_HubbleSchmidt_1764.jpg" alt="3">',
   '<img src="https://apod.nasa.gov/apod/image/2306/NorthSaturn_Cassini_960.jpg" alt="4">',
   '<img src="https://apod.nasa.gov/apod/image/2306/M94_Brennan_1565.jpg" alt="5">',
   '<img src="https://apod.nasa.gov/apod/image/2307/CocoaBeach_BuckMoon_Seeley-201.jpg" alt="6">',
   '<img src="https://apod.nasa.gov/apod/image/2305/neptunetriton_voyager_960.jpg" alt="7">',
   '<img src="https://apod.nasa.gov/apod/image/2304/egg_hst_0.jpg" alt="8">',
   '<img src="https://apod.nasa.gov/apod/image/2304/Ma2022-3.jpg" alt="9">',
   '<img src="https://apod.nasa.gov/apod/image/2211/Butterfly_HubbleOstling_3656.jpg" alt="10">'
];

const cont = document.querySelector('.mosaic');
const ul = document.createElement('ul');
ul.setAttribute('id', 'mosaic');

const populateMosaic = (array) => { 
   for (let i = 0; i < array.length - 1; i++) { 
      let li = document.createElement('li');
      li.innerHTML = array[i];
      ul.appendChild(li);
    }
   cont.appendChild(ul);
};

populateMosaic(imageArray);