import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from 'src/app/webapi.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-book-apointment',
  templateUrl: './book-apointment.component.html',
  styleUrls: ['./book-apointment.component.css']
})
export class BookApointmentComponent implements OnInit {
  getEmail: FormGroup = new FormGroup({
    Quantity: new FormControl('')
  });
  arr1: any;
  arr2: any;
  recipient: any;
  newReq: any = [];
  arr3: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private web: WebapiService, private router: Router) { }


  ngOnInit(): void {
    this.arr1 = JSON.parse(sessionStorage.getItem("detail"));
    this.arr2 = this.arr1[0];
    this.recipient = this.arr2.DA;
    console.log(this.arr1[0], 'dgfhjdsf', this.recipient)

  }
  // arr = ['al', 'a2', 'a3', 'a4', 'a5'];
  arr = {
    'al': false,
    'a2': false,
    'a3': false,
    'a4': false,
    'a5': false,
    'bl': false,
    'b2': false,
    'b3': false,
    'b4': false,
    'b5': false,
    'cl': false,
    'c2': false,
    'c3': false,
    'c4': false,
    'c5': false,
    'dl': false,
    'd2': false,
    'd3': false,
    'd4': false,
    'd5': false,
    'el': false,
    'e2': false,
    'e3': false,
    'e4': false,
    'e5': false,
  }




  reset = () => {
    for (let key in this.arr) {
      // console.log(key+ " -> ",this.arr[key]);
      
      let currElem = document.getElementById(key);
      // currElem?.setAttribute("disabled", "false");
      currElem?.removeAttribute('disabled');
    }
  }

  check = (section) => {
    for (let key in this.arr) {
      let currElem = document.getElementById(key);
      
      if (currElem?.getAttribute('disabled') != null) {
        console.log(currElem);
        
        let sec = currElem?.id[0];
        let no = currElem?.id[1];
        //this.disableField(sec, no);
      }
      
    }
  }

  // disable all radio buttons of different section and same no
  disableField = (section, no) => {
    if (no == 1)
    {
      const crrarr = [ 'a1', 'b1', 'c1', 'd1', 'e1'] ;
      for (let k in crrarr) {
       if (section != crrarr[k]) {
           let elem = document.getElementById(crrarr[k]);
          elem?.setAttribute("disabled", "true");
         this.arr[section + no] = true;
         console.log(k);
       }
      }

      }
        for (let key in this.arr) {
      if (key[0] != section && key[1]==no) {
      
        
        let elem = document.getElementById(key);
        // elem.style.display="no
        // console.log(elem);
        if (elem?.getAttribute('disabled') === null) {
          elem?.setAttribute("disabled", "true");
          this.arr[section + no] = true;
        }
        
      }
    }
    
  }

  disablesection = (section) => {
    for (let k = 1; k <= 5; k++){
      let elem = document.getElementById(section + k);
      elem?.setAttribute('disabled', 'true');
    }
  }

 
  handleOnClick = (event: any) => {
    let currId = event.target.id;
    let section = currId[0];
    let no = currId[1];
  //  this.reset();
   // this.check(section);

    // this.disableField(section,no);
    for (let key in this.arr) {
      if (key[0] == section && key[1] != no) {
        this.disableField(section, no);
        this.disablesection(section);
      }
    }

    for (let key in this.arr) {
      if (key[0] != section && key[1] == no) {

        console.log("Renable: " + key);
       }
    }
    
    this.arr[currId] = true
    console.log(this.arr);
    console.log(event.target.id);
    console.log(event.target.value);
    console.log(event.target.checked);
    
    
    
  }
 
  getdata() {
    // debugger;
     var data = "";
    for(let keys in this.arr){
      if (this.arr[keys])
        data += keys;
      
    }
    console.log(data);

    var obj = { "Enrollment_No": this.arr2.Enrollment_No, "Name_of_Students": this.arr2.Name_of_Students, "SGPA": this.arr2.SGPA, "SectionPriorities": data };
    console.log(obj, "sabgsh");
    this.web.Postreq(obj).subscribe((res: any) => {
      console.log(res);
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      this.router.navigate([""])
    });

  }
  
}


