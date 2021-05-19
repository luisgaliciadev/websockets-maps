import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socketStatus = false;

  constructor(
    private _socket: Socket
  ) { 
   
    this.checkStatus();
  }

  checkStatus() {
    // Cliente conectado
    this._socket.on('connect', () => {
      this.socketStatus = true;
    });

    // Cliente desconectado
    this._socket.on('disconnect', () => {
      this.socketStatus = false;
    });
  }

  // Emitir
  emit(evento: string, payload?: any, callback?: Function) {
    console.log('Emitiendo: ', evento);
    this._socket.emit(evento, payload, callback);
  }

  // Escuchar/recibir
  listen(evento: string) {
    return this._socket.fromEvent(evento);
  }


}
