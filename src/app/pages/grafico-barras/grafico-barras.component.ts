import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Aprobadas', 'Pendientes', 'Canceladas'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Aprobadas' },
    { data: [], label: 'Pendientes' },
    { data: [], label: 'Canceladas' }
  ];

    

  constructor(public service:RequestService) { }

  ngOnInit(): void {
    this.getBarras()
  }


  async getBarras(){
    const response= await this.service.getGraficoBarras()
    if(response[0]){
      this.barChartData[0].data=[response[1]['Aprobadas']]
      this.barChartData[1].data=[response[1]['Pendientes']]
      this.barChartData[2].data=[response[1]['Canceladas']]
      console.log(this.barChartData[0])
    }
  }
}
