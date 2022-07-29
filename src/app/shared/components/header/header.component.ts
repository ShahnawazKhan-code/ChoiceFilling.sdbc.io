import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WebapiService } from 'src/app/webapi.service';
// import { Router } from '@angular/router';
interface blood {
 
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  Array1: Object;
  reqbloodvalue: FormGroup;
  Bloods: blood[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'o+', viewValue: 'o+' },
    { value: 'o-', viewValue: 'o-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB+', viewValue: 'AB+' },
  ];
  constructor(private web : WebapiService,
    private formbuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.reqbloodvalue = this.formbuilder.group({
      email: new FormControl(''),
      Quantity: new FormControl(''),
      blood_g:new FormControl(''),
      DA:new FormControl('recipient')
    })
  }
  reqblood(value){
      debugger;
      this.web.reqblood(value).subscribe((rec) => {
        console.log(rec);
        this.Array1 = rec;
        
      });
    
  }
}
