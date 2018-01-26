//ngIf//////////////////////////////////////////////////////////////////////////
<div [ngIf]="false"></div>
<div [ngIf]="a>b">a</div>
<div [ngIf]="str=='yes'">Yes</div>
<div [ngIf]="myFunction()"></div>

//ngSwitch//////////////////////////////////////////////////////////////////////
<div class="container" [ngSwitch]="var">
  <div *ngSwitchWhen="'A'">A</diV>
  <div *ngSwitchWhen="'B'">B</diV>
  <div *ngSwitchWhen="'C'">C</diV>
  <div *ngSwitchDefault> var is something else </diV>
</div>

@Component({
  selector: 'switch-sample-app',
  template: `
    <h4 class="">
      Current choice is {{ choice }}
    </h4>
    <div class="">
      <ul class="" [ngSwitch]="choice">
        <li *ngSwitchWhen="1"> Choice of number 1 </li>
        <li *ngSwitchWhen="2"> Choice of number 2 </li>
        <li *ngSwitchWhen="3"> Choice of number 3 </li>
        <li *ngSwitchWhen="4"> Choice of number 4 </li>
        <li *ngSwitchWhen="2"> Choice of number 2, again! </li>
        <li *ngSwitchDfault> No Choice </li>
      </ul>
    </div>
    <div style="">
      <button class="" (click)="newChoice()"> New Choice Play Again </button>
    </div>
  `
})

//ngStyle///////////////////////////////////////////////////////////////////////
<div [style.background-color]="'yellow'">
  Normal texte with yellow backgr
</div>

<div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
  Style setting using ngStyle build in dir/comp
<div>

<div class="ui input">
  <input type="text" name="color" value="{{ color }}" #colorinput>
</div>

<div class="ui input">
  <input type="text" name="fontSize" value="{{ fontSize }}" #fontinput>
</div>

<div>
  <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize"> red text </span>
</div>

<h4 class="ui horizontal divider header">
  ngStyle with object property from variable
</h4>

<div>
  <span [ngStyle]="{color: colorinput.value}">
  text with {{ colorinput.value }} color
  </span>
</div>

<h4 class="ui horizontal divider header">
  style from variable
</h4>

<div [style.background-color]="colorinput.value" style="color: white;">
  {{ colorinput.value }} Background
</div>

apply(color, fontSize){
  this.color = color;
  this.fontSize = fontSize;
}

//ngClass///////////////////////////////////////////////////////////////////////

//dans fichier css
bordered {
  border: 1 px dashed black;
  background-color: #eee;
}

<div [ngClass]="{bordered: false}"> This text is never bordered </div>
<div [ngClass]="{bordered: true}"> This text is always bordered </div>

<div [ngClass]="{bordered: isBordered}">
  Using object literal. Border {{ isBordered ? "ON" : "OFF" }}
</div>

toggleBorder(){
  this.isBordered = !this.isBordered;
  this.classesObj={ bordered: this.isBordered };
}

<div [ngClass]="classesObj">
  Using object literal. Border {{ classesObj.isBordered ? "ON" : "OFF" }}
</div>

<div class="base" [ngClass]="{'blue','round'}">
  This will always have a blue background and round borders
</div>

this.classList = ['blue','round'];
<div class="base" [ngClass]="classList">
  This is {{ classList.indexOf('blue')>-1 ? "" : "NOT" }} blue
  and {{ classList.indexOf('round')>-1 ? "" : "NOT" }} round
</div>


//ngFor///////////////////////////////////////////////////////////////////////
this.cities = ['Sao Polo','Venize','Delhi'];
<h4 class="ui horizontal divider header">
  Simple list of strings
</h4>
<div class="ui list" *ngfor="#city of cities">
  <div class="item" {{ city }} </div>
</div>

this.people = [
  {name: 'Boris', age: 25, city: 'SaoPolo'},
  {name: 'Luis', age: 45, city: 'SaoDiJaneiro'},
];
<h4 class="ui horizontal divider header">
  List of Objects
</h4>
<table class="ui celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tr *ngFor="#pers of people">
    <td> {{ pers.name }} </td>
    <td> {{ pers.age }} </td>
    <td> {{ pers.city }} </rd>
  <tr>
</table>

this.peopleByCity = [
  {
    city: "Miami",
    people: [
      {name: 'Boris', age: 55},
      {name: 'Phil', age: 69}
    ]
  },
  {
    city: "SaoPolo",
    people: [
      {name: 'Bert', age: 45}
      {name: 'Hyuhyu', age: 213}
    ]
  }
];
<h4 class="ui horizontal divider header">
  Nested Data
</h4>
<div *ngFor="#item of peoplebyCity; #num = index">
  <h2 class="ui item"> Number {{ num+1 }} is city {{ item.city }} </h2>
  <table class="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tr *ngFor="#pers of item.people">
      <td> {{ pers.name }} </td>
      <td> {{ pers.age }}</td>
    </tr>
  </table>
</div>


//ngnonBindable///////////////////////////////////////////////////////////////////////
<div>
  <span class="bordered">{{ content }}</span>
  <span class="pre" ngNonBindable>
  &larr; This is what {{ content }} rendered
  </span>
</div>
