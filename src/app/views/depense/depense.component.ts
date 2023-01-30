import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import api, { pagination } from 'src/app/const/api';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit{
  public ready = false;
  public listeDepense = [  {
    _id: "63cc2499a5aedf3be52d3e9a",
    date: "",
    depense: "Loyer",
    montant: 4500,
    __v: 0
},];
 public index!:number;
  public page = 0;
  public liveDemoVisible = false;
  public liveDemoVisible1 = false;
  dismissible = true;
  public pageNumber = 2;
  public date = '';
  loading = false;
  submitted = false;
  public paginations!:number[];
  form! :FormGroup;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getDepense(this.page,this.pageNumber);
    const date = new Date(Date.now());
    this.date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    const f = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
        console.log(this.date);
    this.form = this.formBuilder.group({
      date: [null],
      montant: ['', Validators.required],
      depense: ['', Validators.required],
    });
    
  }

  pageCreate(){
    this.liveDemoVisible = true;
  }

  pageModifier(i:number){
    this.form = this.formBuilder.group({
      date: [this.listeDepense[i].date, Validators.required],
      montant: [this.listeDepense[i].montant, Validators.required],
      depense: [this.listeDepense[i].depense, Validators.required],
    });
    console.log(this.form);
    this.index = i;
    this.liveDemoVisible1 = true;
  }

  handleLiveDemoChange(event: boolean) {
    this.form = this.formBuilder.group({
      date: [null],
      montant: ['', Validators.required],
      depense: ['', Validators.required],
    });
    this.submitted = false;
    this.liveDemoVisible = event;
  }
  handleLiveDemoChange1(event: boolean) {
    this.form = this.formBuilder.group({
      date: [null],
      montant: ['', Validators.required],
      depense: ['', Validators.required],
    });
    this.submitted = false;
    this.liveDemoVisible1 = event;
  }

  getDepense = (page:number,pageNumber:number) => {
    this.http.get(api('Depense?page='+page+'&pageNumber='+pageNumber)).subscribe((result : any) => {
      this.paginations = pagination(Number(result.data.totalPage));
      this.listeDepense = result.data.depense;
      this.page = page;
      this.pageNumber = pageNumber;
      this.ready = true;
    }, error => {})
  }

  deleteDepense(i:string){
    this.http.delete(api('Depense/'+i)).subscribe((result => {
      this.getDepense(0,this.pageNumber);
    }))
  }

  get f() { 
    return this.form.controls; 
  }

  comparaison(page: number,i:number){
    
    if(page == i){
      return true;
    }
    else{
      return false;
    }
   }


  createDepense(){
    this.submitted = true;
    console.log(this.f['date'].value,"date");
    
    if(  this.f['depense'].value !== '' &&  this.f['montant'].value !=='' && this.f['date'].value !==''){
      this.loading = true;
    this.http.post(api('Depense'),{depense: this.f['depense'].value, montant:this.f['montant'].value, date:this.f['date'].value}).subscribe((data) => {
      this.getDepense(this.paginations.length-1,this.pageNumber);
      this.loading = false;
      this.liveDemoVisible = false;
      this.submitted = false;
      this.form = this.formBuilder.group({
        date: [null],
        montant: ['', Validators.required],
        depense: ['', Validators.required],
      });
    },error => {
      this.loading = false;
    })
  }
  }

  modifier(){
      this.submitted = true;
      console.log(this.f['date'].value,"date");
      
      if(  this.f['depense'].value !== '' &&  this.f['montant'].value !=='' && this.f['date'].value !==''){
        this.loading = true;
      this.http.put(api('Depense/'+this.listeDepense[this.index]._id),{depense: this.f['depense'].value, montant:this.f['montant'].value, date:this.f['date'].value}).subscribe((data) => {
        this.getDepense(this.page,this.pageNumber);
        this.loading = false;
        this.liveDemoVisible = false;
        this.submitted = false;
        this.form = this.formBuilder.group({
          date: [null],
          montant: ['', Validators.required],
          depense: ['', Validators.required],
        });
      },error => {
        this.loading = false;
      })
    }
  }
}
