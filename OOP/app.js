/*const student = {
    fullname: "Mitul Kabir Badhon",
    marks : 94,

    printMarks: function(){
        console.log("Marks =",this.marks);// this.marks means  student.marks
    },
};
*/

const employee = {

    calTax1(){
        console.log("Tax Ammount is 15%");
    },
    calTax2: function(){
        console.log("Tax ammount is 20%");  // Caltax1 and caltax2 both are correct -> 2 different way to write methods 
    }
}

//NEW EMPLOYEE -- Badhon

const Badhon = {
    salary : 10000
}

Badhon.__proto__= employee; // now we can use employees method on Badhons Object
