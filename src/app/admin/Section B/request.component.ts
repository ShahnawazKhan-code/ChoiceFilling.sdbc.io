import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  Array1: any=[];

  constructor(private web:WebapiService) { }

  ngOnInit(): void {
    this.web.GetB().subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
    });
  }
  


}
