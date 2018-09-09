import { 
  Component,
   OnInit,
   Input,
   ViewEncapsulation, 
   SimpleChange,
   SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated//none native
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type:string,name:string,content:string};

  constructor() {
    console.log("contructor called")
   }
  ngOnChanges(changes:SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
  }
  ngOnInit() {
    console.log("ngoninit called")
  }

}
