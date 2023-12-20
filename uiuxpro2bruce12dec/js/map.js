let map;

const locationmap = {
  montreal: {
    center: { lat: 45.548110, lng: -73.620052 },
    label: "Montreal",
    // radius: 0,
  },
  verdun: {
    center: { lat: 45.4620975, lng: -73.5613857 },
    label: "Plage urbaine de Verdun",
    // activities: ["swim", "launch"],
    radius: 50,
  },
  est: {
    center: { lat: 45.697815, lng: -73.4796578 },
    label: "Plage de l'est",
    radius: 50,
  },
  capjacques: {
    center: { lat: 45.4618468, lng: -73.9419723 },
    label: "Parc-nature du Cap-Saint-Jacques Beaches",
    radius: 50,
  },
  jeandore: {
    center: { lat: 45.4985211, lng: -73.5255105 },
    label: "Plage Jean-Doré",
    radius: 50,
  },
  ilebizard: {
    center: { lat: 45.515134, lng: -73.897973 },
    label: "Parc-nature du Bois-de-l'île-Bizard",
    radius: 50,
  },
  stlouis: {
    center: { lat: 45.4326746, lng: -73.7004581 },
    label: "Parc Saint-Louis",
    radius: 50,
  },

  summerlea: {
    center: { lat: 45.4380988, lng: -73.7195371 },
    label: "Parc Summerlea",
    radius: 50,
  },
  noelspinelli: {
    center: { lat: 45.4336037, lng: -73.6875198 },
    label: "Parc Noël-Spinelli",
    radius: 50,
  },
  lachine: {
    center: { lat: 45.4306389, lng: -73.6832277 },
    label: "Nouveau parc riverain de Lachine",
    radius: 50,
  },
  rose: {
    center: { lat: 45.5086457, lng: -73.7854759 },
    label: "Pierrefonds-Roxboro Boat Ramp, rue Rose",
    radius: 50,
  },
  coursol: {
    center: { lat: 45.4661656, lng: -73.893922 },
    label: "Pierrefonds-Roxboro Boat Ramp, Parc Coursol",
    radius: 50,
  },
  lasalle: {
    center: { lat: 45.4151034, lng: -73.6314309 },
    label: "LaSalle Boat Ramp",
    radius: 50,
  },
  pat: {
    center: { lat: 45.6585049, lng: -73.4951992 },
    label: "Pointe-aux-Trembles Boat Ramp",
    radius: 50,
  },

};

async function initMap() {
  // Montreal
  const position = { lat: 45.548110, lng: -73.620052 };
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered on Montreal
  map = new Map(document.getElementById("map"), {
    zoom: 11,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // markers with labels for each location
  for (const location in locationmap) {
    if (location !== "montreal") {

      // Add circle for this location to the map
      // const cityCircle = new google.maps.Circle({
      //   strokeColor: "#337CCF",
      //   strokeOpacity: 0.75,
      //   strokeWeight: 5,
      //   fillColor: "#8acaca",
      //   fillOpacity: 0.55,
      //   map,
      //   center: locationmap[location].center,
      //   radius: Math.sqrt(locationmap[location].radius) * 100,
      // });

      // Add marker with label and custom icon for each location
      const marker = new google.maps.Marker({
        position: locationmap[location].center,
        map: map,
        label: {
          text: locationmap[location].label || location,
          color: 'darkblue',
          fontSize: '16px',
          fontWeight: 'bold',
        },
        // icon: {
        //   // url: getIconUrl(locationmap[location].activities), // Function to get the appropriate icon URL
        //   // scaledSize: new google.maps.Size(32, 32), // Adjust the size of the icon as needed
        // },
        icon: {
          url: 'images/sunwaves.png', // Replace with the path to your custom PNG icon
          scaledSize: new google.maps.Size(50, 50), // Adjust the size of the icon as needed
        },
      });
    }
  }
}

// Function to get the appropriate icon URL based on activities
// function getIconUrl(activities) {
//   if (activities.includes("swimming")) {
//     return "path/to/swimming-icon.png"; // Provide the path to your swimming icon
//   } else if (activities.includes("boating")) {
//     return "path/to/boating-icon.png"; // Provide the path to your boating icon
//   } else if (activities.includes("sports")) {
//     return "path/to/sports-icon.png"; // Provide the path to your sports icon
//   } else {
//     return "path/to/default-icon.png"; // Provide a default icon for other cases
//   }
// }
    
  //blue marker showing Huttopia
  //   const svgMarker = {
  //   path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  //   fillColor: "blue",
  //   fillOpacity: 1,
  //   strokeWeight: 0,
  //   rotation: 0,
  //   scale: 3,
  //   anchor: new google.maps.Point(0, 20),
  // };
    
  // Marker
  // new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: svgMarker,
  //   map: map,
  // });
    
    // circle for each location, scale based on the radius.
//   for (const location in locationmap) {
//     // add circle for this location to the map.
//     const cityCircle = new google.maps.Circle({
//       strokeColor: "blue",
//       strokeOpacity: 1,
//       strokeWeight: 5,
//       fillColor: "blue",
//       fillOpacity: 0.15,
//       map,
//       center: locationmap[location].center,
//       radius: Math.sqrt(locationmap[location].radius) * 100,
//     });
//   }
// }

initMap();


