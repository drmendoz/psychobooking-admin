import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RequestService } from '../../service/request.service';
@Component({
  selector: 'app-pie-consultas',
  templateUrl: './pie-consultas.component.html',
  styleUrls: ['./pie-consultas.component.css']
})
export class PieConsultasComponent implements OnInit {

  rating:any;
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
   pieChartData: number[]=[];
  pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  pieChartLabels: Label[]=[['Aprobado'],['Pendiente'],['Cancelado']]
  constructor(public service:RequestService) { }

  ngOnInit(): void {
    this.getConsultasPie()
  }

  async getConsultasPie(){
    const response=await this.service.getPieConsultas()
    if (response[0]){
      this.rating=response[1]
      this.pieChartData.push(Number(this.rating["Aprobadas"]))
      this.pieChartData.push(Number(this.rating["Pendientes"]))
      this.pieChartData.push(Number(this.rating["Canceladas"]))
    }
  }

}
