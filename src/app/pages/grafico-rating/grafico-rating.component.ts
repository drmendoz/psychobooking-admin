import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../service/request.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts/lib/base-chart.directive';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafico-rating',
  templateUrl: './grafico-rating.component.html',
  styleUrls: ['./grafico-rating.component.css']
})
export class GraficoRatingComponent implements OnInit {
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
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(0,0,255,0.3)','rgba(0,0,255,0.3)'],
    },
  ];
  pieChartLabels: Label[]=[['1'],['2'],['3'],['4'],['5']]

  constructor(public service:RequestService) { }

  ngOnInit() {
     this.getRatings()
  }

  async getRatings(){
    const response= await  this.service.getRatings()
    if (response[0]){
      this.rating=response[1]
      console.log(this.rating)
      this.pieChartData.push(Number(this.rating["1"]))
      this.pieChartData.push(Number(this.rating["2"]))
      this.pieChartData.push(Number(this.rating["3"]))
      this.pieChartData.push(Number(this.rating["4"]))
      this.pieChartData.push(Number(this.rating["5"]))
      console.log(this.pieChartData)
      console.log("hola")
    }
  }

}
