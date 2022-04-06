const employee ={name:'sam',streetAddress:'wilson street'};
function updateEmployeeWithKeyAndValue(employee, key, value){
 return {...employee,...{[key]:value}};
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
   };
   function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
   };
   function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value
    return employee
   };