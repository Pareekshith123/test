// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {
//   isLoading: boolean = true;
//   myData: any[] = [];
//   departmentName = "";

//   constructor(private http: ApiService) {}

//   ngOnInit(): void {
//     this.fetchData();
//   }

//   fetchData() {
//     this.http.fetchData().subscribe(
//       (res: any) => {
//         console.log(res);
//         this.myData = res;
//         this.isLoading = false;
//         this.renderChart();
//       },
//       (err) => {
//         console.log(err);
//         this.isLoading = false;
//       }
//     );
//   }

//   renderChart() {
//     const dataPoints = this.myData.flatMap((item: {
//       projectAbstractDTOs: any[];
//       departmentName: any;
//       projectDTOs: any;
//       milestonesOverviewDTOz: any;
//       packageDetailsDTOs:any
//       projectId: any;
//     }) =>
//       item.projectAbstractDTOs.map((project: any) => ({
//         name: item.projectId > 0 ? item.departmentName : '',
//         y: item.projectId,
//         abc: project.hasEOT,
//         stack: 'yourStackName' // Specify the stacking group name
//       }))
//     );
  
//     const categories: string[] = [];
//     dataPoints.forEach((dataPoint) => {
//       if (!categories.includes(dataPoint.name)) {
//         categories.push(dataPoint.name);
//       }
//     });
  
//     console.log("categories", categories);
  
//     const seriesData = categories.map((category) => ({
//       name: category,
//       data: dataPoints
//         .filter((dataPoint) => dataPoint.name === category)
//         .map((dataPoint) => dataPoint.y)
//         .slice(0, 8) 
//     }));
  
//     console.log("seriesData", seriesData);
  
//     const options: Highcharts.Options = {
//       chart: {
//         type: 'column'
//       },
//       title: {
//         text: 'contractors vs Department'
//       },
//       xAxis: {
//         categories: categories
//       },
//       yAxis: {
//         min: 0,
//         title: {
//           text: 'Contractor'
//         },
//         stackLabels: {
//           enabled: true
//         }
//       },
//       legend: {
//         align: 'right',
//         x: -30,
//         verticalAlign: 'top',
//         y: 25,
//         floating: true,
//         backgroundColor: 'white',
//         borderColor: '#CCC',
//         borderWidth: 1,
//         shadow: false
//       },
//       plotOptions: {
//         column: {
//           stacking: 'normal'
//         }
//       },
//       series: seriesData as Highcharts.SeriesOptionsType[]
//     };
  
//     Highcharts.chart('container', options);
//   }
  
// }

// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {
//   isLoading: boolean = true;
//   myData: any[] = [];
//   departmentName = "";

//   constructor(private http: ApiService) {}

//   ngOnInit(): void {
//     this.fetchData();
//   }

//   fetchData() {
//     this.http.fetchData().subscribe(
//       (res: any) => {
//         console.log(res);
//         this.myData = res;
//         this.isLoading = false;
//         this.renderChart();
//       },
//       (err) => {
//         console.log(err);
//         this.isLoading = false;
//       }
//     );
//   }

//   countContractorsByCategory(data: any[]): { [key: string]: number } {
//     const contractorCounts: { [key: string]: number } = {};

//     data.forEach((item) => {
//       const departmentName = item.departmentName;
//       if (departmentName) {
//         // Check if the departmentName is defined
//         if (!contractorCounts[departmentName]) {
//           contractorCounts[departmentName] = 0;
//         }
//         // Assuming contractorName is a unique identifier for contractors
//         const contractors = item.packageDetailsDTOs.map((packageDetail: any) => packageDetail.contractorName);
//         const uniqueContractors = Array.from(new Set(contractors));
//         contractorCounts[departmentName] += uniqueContractors.length;
//         console.log("con",contractors);
        
//       }
//     });


//     return contractorCounts;
//   }

//   renderChart() {
//     const contractorCounts = this.countContractorsByCategory(this.myData);

//     const categories: string[] = Object.keys(contractorCounts);
//     const data: number[] = Object.values(contractorCounts);

//     const options: Highcharts.Options = {
//       chart: {
//         type: 'column'
//       },
//       title: {
//         text: 'Contractors vs Department'
//       },
//       xAxis: {
//         categories: categories,
//         crosshair: true
//       },
//       yAxis: {
//         min: 0,
//         title: {
//           text: 'Contractor Count'
//         }
//       },
//       legend: {
//         enabled: false
//       },
//       plotOptions: {
//         column: {
//           pointPadding: 0.2,
//           borderWidth: 0
//         }
//       },
//       series: [
//         {
//           name: 'Contractor Count',
//           data: data,
//           colorByPoint: true,
//           dataLabels: {
//             enabled: true,
//             format: '{point.y}'
//           }
//         } 
//       ] as Highcharts.SeriesOptionsType[]
//     };

//     Highcharts.chart('container', options);
//   }
// }


import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  isLoading: boolean = true;
  myData: any[] = [];
  departmentName = "";

  constructor(private http: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.fetchData().subscribe(
      (res: any) => {
        console.log(res);
        this.myData = res;
        this.isLoading = false;
        this.renderChart();
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  countContractorsByCategory(data: any[]): { [key: string]: number } {
    const contractorCounts: { [key: string]: number } = {};

    data.forEach((item) => {
      const departmentName = item.departmentName;
      if (departmentName) {
        // Check if the departmentName is defined
        if (!contractorCounts[departmentName]) {
          contractorCounts[departmentName] = 0;
        }
        // Assuming contractorName is a unique identifier for contractors
        const contractors = item.packageDetailsDTOs.map((packageDetail: any) => packageDetail.contractorName);
        const uniqueContractors = Array.from(new Set(contractors));
        contractorCounts[departmentName] += uniqueContractors.length;
      }
    });

    return contractorCounts;
  }

  renderChart() {
    const contractorCounts = this.countContractorsByCategory(this.myData);

    const categories: string[] = Object.keys(contractorCounts);
    const data: number[] = Object.values(contractorCounts);

    const contractorNames = categories.map((category) => {
      const contractorsForCategory = this.myData
        .filter((item) =>          
        item.departmentName === category)
        .flatMap((item) => item.packageDetailsDTOs.map((packageDetail: any) => packageDetail.contractorName));
      return contractorsForCategory.join(', ');
    });
    console.log("contractorNames",contractorNames);


    const options: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Contractors vs Department'
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Contractor Count'
        },
        labels: {
          formatter: function () {
            const categoryIndex = this.value;
            // @ts-ignore
            if (categoryIndex < contractorNames.length) {
            // @ts-ignore
              return contractorNames[categoryIndex];
            }
            return ''; // Return an empty string for values outside the index
          }
        }
      },
      tooltip: {
        formatter: function () {
          // @ts-ignore
          const categoryIndex = this.x;
           // @ts-ignore
          if (categoryIndex < contractorNames.length) {
          // @ts-ignore
            const contractorName = contractorNames[categoryIndex];
            return `Contractors: ${contractorName}<br>Count: ${this.y}`;
          }
          return `Count: ${this.y}`;
        }
      },
      legend: {
        enabled: true,
        title: {
          text: 'Contractors'
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Contractor Count',
          data: data,
          colorByPoint: true,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      ] as Highcharts.SeriesOptionsType[]
    };

    Highcharts.chart('container', options);
  }
}
