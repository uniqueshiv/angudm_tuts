import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
   public name;
   public id;
   constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.name=this.route.snapshot.params.name;
     this.id=this.route.snapshot.params.id;

    this.route.params
      .subscribe(
        (params:Params)=>{
          this.name=params.name;
          this.id=params.id;
          //console.log(params.id)
        }
      )
    //console.log(this.route.snapshot.params.id)
  }

}
