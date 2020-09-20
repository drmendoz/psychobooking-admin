import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from './../../environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RequestService{
    loading=false;

    constructor(private http: HttpClient, private router: Router) {
      moment.locale('es')
      }

      getPsicologosRating() {
        this.loading = true;
        return new Promise(resolve => {
          this.http.get(`${environment.url}/psicologos/reporteRating`,).subscribe((response: any) => {
            this.loading = false;
            resolve([true, response.Ratings]);
          }, (error: any) => {
            this.loading = false;
            this.showAlert(error.error.error.detail, 'error');
            
            resolve([false]);
          });
        });
      }

      getCitas() {
        this.loading = true;
        return new Promise(resolve => {
          this.http.get(`${environment.url}/citas`).subscribe((response: any) => {
            this.loading = false;
            resolve([true, response.Citas]);
          }, (error: any) => {
            this.loading = false;
            this.showAlert(error.error.error.detail, 'error');
            
            resolve([false]);
          });
        });
      }

      showAlert(message: string, tipo: any, confirmBtnText: string = 'Intentar nuevamente') {
        Swal.fire({
          title: 'Psychobooking Admin',
          text: message,
          icon: tipo,
          confirmButtonText: confirmBtnText
        });
      }

      changeCita(id:string,data:any){
        this.loading = true;
        return new Promise(resolve => {
          this.http.put(`${environment.url}/citas/${id}`,data).subscribe((response: any) => {
            this.loading = false;
            resolve(true);
          }, (error: any) => {
            this.loading = false;
            this.showAlert(error.error.error.detail, 'error');
            
            resolve(false);
          });
        });
      }

      getRatings() {
        this.loading = true;
        return new Promise(resolve => {
          this.http.get(`${environment.url}/psicologos/reporteRating`).subscribe((response: any) => {
            this.loading = false;
            resolve([true, response]);
          }, (error: any) => {
            this.loading = false;
            this.showAlert(error.error.error.detail, 'error');
            
            resolve([false]);
          });
        });
      } 

      getGraficoBarras(){
        this.loading = true;
        return new Promise(resolve => {
          this.http.get(`${environment.url}/citas/reporteEstado`).subscribe((response: any) => {
            this.loading = false;
            resolve([true, response]);
          }, (error: any) => {
            this.loading = false;
            this.showAlert(error.error.error.detail, 'error');
            
            resolve([false]);
          });
        });
      }

      getPieConsultas(){
        this.loading = true;
        return new Promise(resolve => {
          this.http.get(`${environment.url}/citas/reporteEstado?porcentual=true`).subscribe((response: any) => {
            this.loading = false;
            resolve([true, response]);
          }, (error: any) => {
            this.loading = false;
            this.showAlert(error.error.error.detail, 'error');
            
            resolve([false]);
          });
        });
      }

}