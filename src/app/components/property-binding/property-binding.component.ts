import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <div>
      <p>
        property-binding works!
      </p>  
      <img [src]="imgUrl">  

      <table>
        <tr>
          <!-- <td colspan="{{1 + 1}}">Three-Four</td> --> 
          <td [colSpan]="1 + 1">Three-Four</td> 
          <td>
            <button [disabled]="isUnchanged">Disabled Button</button>
          </td>
        </tr>
      </table>


      <p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

      <!-- This is giving warning -->
      <p>"
        <span [innerHTML]="evilTitle"></span>
        " is the 
        <i>property bound</i> 
        evil title.
      </p>

    </div>
    
  `,
  styles: [`
      .cls1marg {
        margin: 10px;  
        color: white;
      }

      .cls1back {
        background-color: indianred; 
      }
  `]
})
export class PropertyBindingComponent implements OnInit {

  imgUrl = 'https://i.pinimg.com/564x/98/b0/20/98b0208e5a0dd6e7b8b7b3d0959d07a5.jpg';
  
  isUnchanged = false;
  // isUnchanged = true;

  classes = 'cls1back cls1marg';

  evilTitle = `Template <script>alert("evil never sleeps")</script> Syntax`;
  constructor() { }

  ngOnInit(): void {
  }

}
