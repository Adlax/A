//code for TSUN

var name: string;
name = 'Collins';
console.log(name);

function greetText(name: string): string {
  return "Hello" + name;
}
console.log(greetText(Bob));

function hello(name: string): string {
  return 12;
}
console.log(hello(Bob));

function hello(name: string): number {
  return 12;
}
console.log(hello(Bob));

var name: string = 'Filou';

var age: number = 56;
console.log(age);

var married: boolean = true;
console.log(age);

var jobs: string[] = ['chomeur','rechomeur','tocard'];
console.log(jobs);

var ages: number[] = [15,12,45978];
console.log(ages);

enum Role {Mage, Voodoo, Necro};
console.log('Les Roles ; ', Role[0], ',', Role[1], 'et ', Role[2]);
var role: Role = Role.Mage;
console.log(role);
enum Role {Mage=1, Voodoo=2, Necro=3};
console.log(Role[1]);

var somethin: any = 'crotte';
console.log(somethin);
somethin = 3;
console.log(somethin);
somethin = [1,2,3,4];
console.log(somethin);

class Person(){
  first_name: string;
  family_name: string;
  age: number;
  function greet(): void {
    console.log('Hello ', this.first_name);
  }
  function ageInYears(yers: number): number {
    return this.age + years;
  }
}

var M: Person = new Person();
M.first_name = 'Micha';
M.age = 6;
console.log('The person is : ', M.first_age, 'aged: ', M.age);
M.greet();
console.log(M.ageInYears(10));

class Person(){
  first_name: string;
  family_name: string;
  age: number;
  function greet(): void {
    console.log('Hello ', this.first_name);
  }
  function ageInYears(yers: number): number {
    return this.age + years;
  }
  function constructor(first_name: string, family_name: string, age: number){
    this.first_name = first_name;
    this.family_name = family_name;
    this.age = age;
  }
}

var P: Person = new Person(Pete, Bite, 20);
P.greet();

class Report() {
  data: string[];
  constructor(data: string[]){
    this.data = data;
  }
  run(){
    this.data.foreach(function(line) {console.log(line);} );
  }
}

var notulen: Report = new Report(['First Line','Second Line']);
notulen.run();

class TabbedReport extends Report {
  headers: string[];
  constructor(headers: string[],values: string[]){
    this.headers = headers;
    super(values);
  }
  run(){
    console.log(headers);
    super.run();
  }
}

var headers: string[] = ['WAHLOU LES MOULOUDS:'];
var data: string[] = ['Rachid','Moktar','Aziz'];
var names: TabbedReport = new TabbedReport(headers,data);
names.run();

var data: string[] = ['Paul','Joseph','Watson'];
data.forEach(function(line){console.log(line)});

var data: string[] = ['Paul','Joseph','Watson'];
data.forEach( (line) => console.log(line) );

var evens = [2,4,6,8];
var odds = evens.map( n => n+1 );

data.forEach( line => {console.log(line.toUpperCase())} );

var nate = {
  name: "Nate",
  guitars: ["Gibson","MusicMan",'Fender'],
  printGuitars: function() {
    var self = this;
    this.guitars.foreach(function(guitar){
      console.log(self.name + "plays a " + guitar);
    });
  }
};

var nate = {
  name: "Nate",
  guitars: ["Gibson","MusicMan",'Fender'],
  printGuitars: function(){
    this.guitars.forEach( (guitar) => {console.log(self.name + "plays a " + guitar);} );
  }
};

var firstname = 'Alex';
var name ='Jones';
var greeting = `Salut ${firstname} ${name}`;
console.log(greeting);

var template = `
  <div>
    <h1> Salut ma poule </h1>
  </div>
`
