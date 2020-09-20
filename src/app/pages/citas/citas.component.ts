import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citas=[]
  constructor(public service:RequestService) { }

  ngOnInit(): void {
    this.getCitas()
  }

  
   async getCitas(){
     const response = await this.service.getCitas();
    if(response[0]){
      this.citas=response[1];
    }
   }

   async changeCita(id:string,estado:string){
      const body={
        estado:estado
      }
      const response= await this.service.changeCita(id,body)
      if (response){
        this.getCitas();
      }
   }

   async changeEstadoCita(id:string,estado:string){
    const body={
      estado_cita:estado
    }
    const response= await this.service.changeCita(id,body)
    if (response){
      this.getCitas();
    }
 }
}
