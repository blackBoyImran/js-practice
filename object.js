

var serial = {Name : "Imran", Profession: "Student", address : "Gaibandha", Age : "17", Family_membter : "5"}




//////////  =======>>>>>>   Specfic object value acess  <<<<=======//////////////

/// metod ---->> 1
var method1 = serial.Name;
console.log("Method 1 : "+method1)

/// metod ---->> 2
var method2 = serial["Name"]
console.log("Method 2 : "+method2)

/// metod ---->> 3
var method3 = "Name";
var method3Print = serial[method3]
console.log("Method 3 : "+method3Print)






//////////  =======>>>>>>   Specfic object value Change  <<<<=======//////////////


/// metod ---->> 1
serial.Name = "Tania";
console.log(serial);

/// metod ---->> 2
serial["Profession"] = "Coder";
console.log(serial);

/// metod ---->> 3
var change3 = "Address";
serial[change3] = "Rangpur";
console.log(serial);








///////// =========>>>>>>>>>>      Adding specefig value adding in object       <<<<<<<<<<==============/////////

/// metod ---->> 1
serial.school = "Khamar dosoliya";
console.log(serial);

/// metod ---->> 2
serial["country"] = "bangladesh";
console.log(serial);

/// metod ---->> 3
var addValueMethod3 = "hoby";
serial[addValueMethod3] = "Programmer";
console.log(serial);


