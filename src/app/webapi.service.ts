import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WebapiService {
// url:any="https://localhost:44318/api/donar/"
url:any
url2:any ="https://localhost:44303/main/api"
  constructor(private http : HttpClient) { }
  PostDataD(emp:any)
  {
    debugger;
     return this.http.post(this.url+"donarinsertdata",emp);
 }
 PostDataA(emp:any)
 {
   debugger;
    return this.http.post(this.url+"acceptorinsertdata",emp);
}
GetDataA():Observable<any[]>
{
  debugger;
  return this.http.get<any>(this.url2+"/AsectionGet");
}
GetB():Observable<any[]>{
  return this.http.get<any>(this.url2+"/BsectionGet");
}
GetC():Observable<any[]>{
  return this.http.get<any>(this.url2+"/CsectionGet");
}

GetDataD():Observable<any[]>{
  return this.http.get <any>(this.url+"getdonordata");
}
GetDataAll():Observable<any[]>{
  return this.http.get <any>(this.url+"getalldata");
}
Acceptbyid(data){
  debugger;
  return this.http.get(this.url+"getbyidaccepter",data);
}
postVeriData(emp){
  debugger;
  return this.http.post(this.url+"verifiedinsertdata",emp);
}
GetE():Observable<any[]>{
  return this.http.get<any>(this.url+"/EsectionGet");
}
GetByEAP(id,password){
  debugger
  return this.http.get(this.url2+"/GET?Enrollment_No="+id+"&Name_of_Students="+password);
}
GetBloodDatadonor(){
  debugger
  return this.http.get(this.url+"getgraph");
}
getbyEmail(Email){
  return this.http.get(this.url+"getbyEmail?Email="+Email);
}
// update data aaaa
Postreq(obj){
  debugger;
 //localhost:44303/main/api/update
  return this.http.put(this.url2+"/update",obj);
}
// GET ALL DATA
requetlist():Observable<any[]>{
  return this.http.get<any>(this.url2+"/GetAllData");
}
delFromReqlist(obj){
  // Deletefromreqlist?Id=10
  return this.http.delete(this.url+"Deletefromreqlist?Id="+obj);
}
History(emp:any)
 {
   debugger;
    return this.http.post(this.url+"History",emp);
}
// getHistory
GetD():Observable<any[]>{
  return this.http.get<any>(this.url+"/EsectionGet");
}
reqblood(value){
  debugger
  return this.http.post(this.url+"reqlist",value);
}
updateBySir(value){
  debugger;
  return this.http.post(this.url2+"/updateBySir",value)
}
}


