import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',
  template: `
      <h2>Welcome {{username}}</h2>
      <hr>
      <h1>ngIf </h1>
      <div *ngIf="true">
          <h2>If conditional statement displayed when condition is true hardcoded1111</h2>
      </div>
      <div *ngIf="isDisplay">
          <h2>If conditional statement displayed when condition is true dynamic way2222</h2>
      </div>


      <div *ngIf="isDisplay; else elseBlock">
          <h2>If conditional statement displayed when condition is true dynamic way3333</h2>
      </div>

      <div *ngIf="isDisplay; then ifBlock; else elseBlock"></div>


      <ng-template #ifBlock>
          <h2>This block will be executed when if condition is true4444</h2>
      </ng-template>

      <ng-template #elseBlock>
          <h2>This block will be executed when if condition is false5555</h2>
      </ng-template>
    
    <hr>
    <h1>ngSwitch</h1>
    
    <div [ngSwitch]="colorName">
        <h1 *ngSwitchCase="'red'"> Your choice is Red</h1>
        <h1 *ngSwitchCase="'blue'"> Your choice is Blue</h1>
        <h1 *ngSwitchCase="'green'"> Your choice is Green</h1>
        <h1 *ngSwitchDefault> Invalid color choice please try again</h1>
    </div>
    
    <hr>
    <h1>For Loop in Angular</h1>
    <div *ngFor="let name of names; index as i">
        <li>{{"Index " + i + " Name " + name}}</li>
    </div>
      <div *ngFor="let name of names; index as i; last as l; first as f">
          <li>{{"Index " + i +" isFirst "+ f +" Name " + name + " isLast "+ l}}</li>
      </div>
    
      <button (click)="sendMessageToParent()">Send To Parent</button>
    <hr>
    Pipes in Angular
    <div>
        For String ::
        <h1>{{ user | lowercase}}</h1>
        <h1>{{ user | uppercase}}</h1>
        <h1>{{ user | titlecase}}</h1>
        <h1>{{ user | slice:3:7}}</h1>
        <h1>{{person | json}}</h1>
        
        
        For Number
        <h1>{{5.678 | number:'1.2-3'}}</h1>
        <h1>{{5.678 | number:'3.4-5'}}</h1>
        <h1>{{5.678 | number:'3.1-2'}}</h1>
        For Percentage
        <h1>{{ .25 | percent}}</h1>
        For Currency
        <h1>{{34 | currency}}</h1>
        <h1>{{34 | currency:'INR'}}</h1>
        <h1>{{34 | currency: 'INR': 'code'}}</h1>
        For Date 
        <h1>{{dateOfBirth | date:'short'}}</h1>
        <h1>{{dateOfBirth | date:'medium'}}</h1>
        <h1>{{dateOfBirth | date:'long'}}</h1>

        <h1>{{dateOfBirth | date:'shortDate'}}</h1>
        <h1>{{dateOfBirth | date:'shortTime'}}</h1>
    </div>
    
    
    
    
    
  `,
  styles: [`
       
  `]
})
export class TestComponent implements OnInit {
  public username = 'Amsidh Lokhande';
  public isDisplay = false;
  public colorName = 'black';
  @Input('namesData') public names;
  @Output('outEvent') public outEvent = new EventEmitter();

  public user = 'amsidh Lokhande';
  public dateOfBirth = new Date();
  public person = {
    'firstName' : 'amsidh',
    'lastName' : 'lokhande',
    'age' : 37
  };
  constructor() {
  }

  ngOnInit() {
    this.outEvent.emit('Initially during loading child is saying I am from Child saying hello to parent');
  }

  public sendMessageToParent() {
    this.outEvent.emit('I am from Child saying hello to parent');
  }
}
