var str = require('string_function_module_lol');
var date = require('date_object_lib_lololol');
var data = require('./data.json');
var firstname = str.upperFirst(data[0].first_name);
var lastname = str.upperFirst(data[0].last_name);
console.log("Customer Name:" + " " + firstname + " " + lastname);
var lastPayment = date(data[0].lastpayment).when();
var phone = data[0].phone;
function phoneNumber(phone) {
    var replace = ('' + phone).replace(/[^\d]/g);
    var match = replace.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
}
console.log("Phone Number:" + " " + phoneNumber(phone));
