const str = require('string_function_module_lol');
const date = require('date_object_lib_lololol');
const data = require('./data.json'); 


const firstname = str.upperFirst(data[0].first_name)
const lastname = str.upperFirst(data[0].last_name)

console.log("Customer Name:" + " " + firstname + " " + lastname);


const lastPayment = date(data[0].lastpayment).when()

const phone = data[0].phone
function phoneNumber(phone: number) {
    const replace = ('' + phone).replace(/[^\d]/g);
    const match = replace.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
}

console.log("Phone Number:" + " " + phoneNumber(phone))
