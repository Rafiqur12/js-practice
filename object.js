function student(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
}
var student1= new student("Rafiqur",24,3.50,"Hindi");
var student2= new student("Raf",24,3.20,"Bangla");
var student3= new student("Rafi",24,3.00,"Arabic");
console.log(student1);