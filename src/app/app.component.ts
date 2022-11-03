import { Component } from '@angular/core';
import { DisableService } from './disable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disable';
  objects:any;
  public trues=true;
  // colorStyle:any;
  // PROPERTY BINDING
  // public black ="helloworld";
  // public isDisabled =true;

    // CLASS BINDING

    // public successClass="text-success";
    // public dangerClass="text-danger";
    // public specialClass="text-special";
    // public hasErr=true;
    // public isSpecial=true;
    // public messageClass={
    //   "text-success":!this.hasErr,
    //   "text-danger":this.hasErr,
    //   "text-special":this.isSpecial
    // }

    // STYLE BINDING
    // public hasErr=false;
    // public color="red";
    // public style={
    //   color:"blue",
    //   fontStyle:"italic"
    // }

    //  EVENT BINDING
    // public geet="";
    // onClick(event:any){
    //     alert(event);
    //     console.log(event);
        
    //     this.geet="hi";
    //     alert(this.geet);
    // }
   


 constructor(private service:DisableService){}
  ngOnInit(){
    this.service.getData().subscribe(data =>{
      console.log(data);
      this.objects=data;

    })
  }

  // public disable="disablecolor";
  currentRow:any;
  showBackround=false;
  onClick(id:any){

      this.currentRow=id;
        
      if(!this.showBackround){

        this.showBackround=true;

      }else{
        this.showBackround=false;
      }
  }

  // click(){
  //   alert("hi");
  //   this.colorStyle="red";
  // }
}
