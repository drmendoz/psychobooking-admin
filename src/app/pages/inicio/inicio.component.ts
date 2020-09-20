import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public service:RequestService) { }

  ngOnInit(): void {
    this.loadScript();
    this.getPsicologosRating();
  }

  public loadScript(){
    console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = '../../../assets/js/admin-charts.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
  }

 async getPsicologosRating(){
    await this.service.getPsicologosRating()
  }
}
