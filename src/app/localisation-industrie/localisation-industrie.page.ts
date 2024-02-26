import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-localisation-industrie',
  templateUrl: './localisation-industrie.page.html',
  styleUrls: ['./localisation-industrie.page.scss'],
})
export class LocalisationIndustriePage implements OnInit {

  constructor(
    private navCtrl: NavController, private zone: NgZone
  ) { }

  ngOnInit() {
    this.initializeMap();
  }
  initializeMap() {
    const guineaBounds: L.LatLngBounds = L.latLngBounds(
      L.latLng(7.1937, -14.6910), // Coin sud-ouest de la Guinée
      L.latLng(12.6760, -7.6415)  // Coin nord-est de la Guinée
    );

    const map = L.map('map', {
      maxBounds: guineaBounds,
      maxBoundsViscosity: 1.0, // Empêche le dépassement des limites lors du zoom
    }).fitBounds(guineaBounds);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Ajoutez le correcteur de limites
    // L.control.boundsCorrector({ bounds: guineaBounds }).addTo(map);

    // Rafraîchissez la carte lorsque la vue est entrée
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 400);
    });
  }



  // initializeMap() {
  //   const map = L.map('map').setView([9.9456, -9.6966], 8); // Coordonnées de la Guinée

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '© OpenStreetMap contributors',
  //   }).addTo(map);

  //   // Marquer les usines (ajustez les coordonnées et les informations selon vos besoins)
  //   const factoryIcon = L.icon({
  //     iconUrl: 'assets/images/bx_map.png',
  //     iconSize: [32, 32],
  //     iconAnchor: [16, 32],
  //     popupAnchor: [0, -32],
  //   });

  //   const factoryMarker = L.marker([9.9456, -9.6966], { icon: factoryIcon })
  //     .addTo(map)
  //     .bindPopup('Cimenterie de Guinée');

  //   // Vous pouvez ajouter d'autres usines de la même manière
  // }
}
