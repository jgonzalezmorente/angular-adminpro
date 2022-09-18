import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  
  @Input() title: string = 'Sin título';
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input() data: number[] = [ 350, 450, 100 ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [], backgroundColor: [ '#6857e6', '#009fee', '#f02059' ] },
    ]
  };
  
  ngOnInit(): void {
    this.doughnutChartData.datasets[0].data = this.data;
    this.doughnutChartData.labels = this.doughnutChartLabels;
  }
}
