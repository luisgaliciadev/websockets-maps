import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Lugar } from '../interfaces/lugar';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;
  marcadores: google.maps.Marker[] = [];
  infoWindows: google.maps.InfoWindow[] = []; 
  lugares: Lugar[] = [];

  constructor(
    private _http: HttpClient,
    public _websocketService: WebsocketService
  ) { }

  ngOnInit(): void {
    this._http.get('https://server-sockets-maps.herokuapp.com/mapa').subscribe(
      (lugares: Lugar[]) => {
        this.lugares = lugares;
        this.cargarMapa();  
      });
      this.escucharSockets();
  }

  ngAfterViewInit() {
  }

  escucharSockets() {
    // Marcador nuevo
    this._websocketService.listen('marcador-nuevo').subscribe(
      (marcador: Lugar) => {
        console.log(marcador);
        this.agregarMarcador(marcador);
      }
    );

    // Marcado mover
    this._websocketService.listen('marcador-mover').subscribe(
      (marcador: Lugar) => {
        for (let i in this.marcadores) {
          if (this.marcadores[i].getTitle() === marcador.id) {
            let latLng = new google.maps.LatLng(marcador.lat, marcador.lng);
            this.marcadores[i].setPosition(latLng);
            break;
          }
        }
      }
    );
   

    // Marcador borrar
    this._websocketService.listen('marcador-borrar').subscribe(
      (id: string) => {
        for (let i in this.marcadores) {
          if (this.marcadores[i].getTitle() === id) {
            this.marcadores[i].setMap(null);
            break;
          }
        }
      }
    );
  }

  cargarMapa() {
    console.log(this.mapElement.nativeElement);
    const latLng = new google.maps.LatLng(37.784679, -122.395936);
    const mapaOpciones: google.maps.MapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapaOpciones);
  
    this.map.addListener('click', (coors) => {
      let nuevoMarcador: Lugar = {
        nombre: 'Nuevo Lugar',
        lat: coors.latLng.lat(),
        lng: coors.latLng.lng(),
        id: new Date().toISOString()
      };

      this.agregarMarcador(nuevoMarcador);

      // Emitir evento de sockets para agregar marcador
      this._websocketService.emit('marcador-nuevo', nuevoMarcador);
    });

    for (let lugar of this.lugares) {
      this.agregarMarcador(lugar);
    };


  }

  agregarMarcador(marcador: Lugar) {
    const latLng = new google.maps.LatLng(marcador.lat, marcador.lng);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      draggable: true,
      title: marcador.id
    });

    this.marcadores.push(marker);

    // Contenido de marcado
    let contenido = `<b>${marcador.nombre}</b>`;
    let infoWindow = new google.maps.InfoWindow({
      content: contenido
    });

    this.infoWindows.push(infoWindow);

     // Evento click
     google.maps.event.addDomListener(marker, 'click', ()=> {
      this.infoWindows.forEach(infoW => infoW.close());
      infoWindow.open(this.map, marker);
    });

    // Evento doble click
    google.maps.event.addDomListener(marker, 'dblclick', (coors)=> {
      // Borrar marcador
      marker.setMap(null);
 
      // Disparar evento de sockets para borra el marcador de todos
      this._websocketService.emit('marcador-borrar', marcador.id);

    });

    // Evento drag
    google.maps.event.addDomListener(marker, 'drag', (coors:any)=> {
      // Obtener coordenedas      
      let nuevoMarcador = {
        lat: coors.latLng.lat(),
        lng: coors.latLng.lng(),
        nombre: marcador.nombre,
        id: marker.getTitle()
      };
      console.log(nuevoMarcador);

      // Disparar evento de sockets para mover el marcador
       this._websocketService.emit('marcador-mover', nuevoMarcador);
    });
  }
}
