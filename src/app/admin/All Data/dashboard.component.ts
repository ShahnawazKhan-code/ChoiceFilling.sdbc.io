import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import Chart, { LogarithmicScale } from 'chart.js/auto';
import { WebapiService } from 'src/app/webapi.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
        Array1: any=[];     
        constructor(private web:WebapiService) { }     
        ngOnInit(): void {
          this.web.requetlist().subscribe((rec) => {
            console.log(rec);
            this.Array1 = rec;
          });
        }
        getOption(){
         var A=document.getElementById('A').innerHTML
          var obj ={"Enrollment_No": this.Array1.Enrollment_No,
          "Group": A,
          "Name_of_Students": this.Array1.Name_of_Students,
          "SGPA":this.Array1.SGPA,     
          "SectionPriorities":this.Array1.SectionPriorities }
         this.web.updateBySir(obj).subscribe((rec) => {
          console.log(rec);
          this.Array1 = rec;
        });
        }
        getOption1(){
          var B=document.getElementById('B').innerHTML
          var obj ={"Enrollment_No": this.Array1.Enrollment_No,
          "Group": B,
          "Name_of_Students": this.Array1.Name_of_Students,
          "SGPA":this.Array1.SGPA,     
          "SectionPriorities":this.Array1.SectionPriorities }
         this.web.updateBySir(obj).subscribe((rec) => {
          console.log(rec);
          this.Array1 = rec;
        });
        }
        getOption2(){
          var C=document.getElementById('C').innerHTML
          var obj ={"Enrollment_No": this.Array1.Enrollment_No,
          "Group": C,
          "Name_of_Students": this.Array1.Name_of_Students,
          "SGPA":this.Array1.SGPA,     
          "SectionPriorities":this.Array1.SectionPriorities }
         this.web.updateBySir(obj).subscribe((rec) => {
          console.log(rec);
          this.Array1 = rec;
        });
        }
        getOption3(){
          var D=document.getElementById('D').innerHTML
          var obj ={"Enrollment_No": this.Array1.Enrollment_No,
          "Group": D,
          "Name_of_Students": this.Array1.Name_of_Students,
          "SGPA":this.Array1.SGPA,     
          "SectionPriorities":this.Array1.SectionPriorities }
         this.web.updateBySir(obj).subscribe((rec) => {
          console.log(rec);
          this.Array1 = rec;
        });
        }
        getOption4(){
            debugger;
          var E=document.getElementById('E').innerHTML
          var obj ={"Enrollment_No": this.Array1.Enrollment_No,
          "Group": E,
          "Name_of_Students": this.Array1.Name_of_Students,
          "SGPA":this.Array1.SGPA,     
          "SectionPriorities":this.Array1.SectionPriorities }
         this.web.updateBySir(obj).subscribe((rec) => {
          console.log(rec);
          this.Array1 = rec;
        });
        }
        Accept(list:any){
          debugger;
          this.Array1= list;
          this.web.postVeriData(list).subscribe((rec) => {
            console.log(rec);
            // this.Array1 = rec;
      
          });       
          this.web.History(list).subscribe((rec) => {
            console.log(rec);
            this.Array1 = rec;     
          });            
          this.web.delFromReqlist(list.Id).subscribe((res: any) => {
            console.log(this.Array1.Id); 
            this.ngOnInit();   
           });
          
        }
        Delete(list:any){
          this.web.delFromReqlist(list.Id).subscribe((res: any) => {
            console.log(this.Array1.Id);    
           });
           this.web.History(list).subscribe((rec) => {
            console.log(rec);
            this.Array1 = rec;
            this.ngOnInit();
          });
          
        }
      
      }