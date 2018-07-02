import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas') lineCanvas;
  pieChart: any;
  etiquetas = [];
  valores = [];
  function = '';
  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.derivada();
    this.graficar();
  }
  
  derivada() {
    this.function= 'd(Sin(x))/dx';
    const h = 1;
    let part = 0;
    for(let i = 0; i<=4 ; i++){
      this.etiquetas.push(i.toString());
      part = Math.round(Math.random());
      let numero = Math.round(Math.random() + h);
      let Derivada = (numero - part)/h;
      this.valores.push(Derivada);
    }
  }

  graficar() {
    this.pieChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.etiquetas,
        datasets: [
          {
            label: this.function,
            data: this.valores,
            lineTension: 0,
            backgroundColor:[ 
              "rgba(192,85,225,98)",
              "rgba(25,75,192,10)",
              "rgba(55,129,76,15)",
              "rgba(96,78,198,36)",
              "rgba(181,10,59,66)",
          ],
            borderColor: [
            "rgba(135,255,99,5)",
            "rgba(135,255,99,5)",
            "rgba(135,255,99,5)",
            "rgba(135,255,99,5)",
            "rgba(135,255,99,5)",
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                  }
                }]
            }
        }
    });
  }
}