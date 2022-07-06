// fetch
const fetch = require('node-fetch');

// form data
const FormData = require('form-data');


const payData = {
    store_id: 'abc62c420a95b95f',
    store_passwd: 'abc62c420a95b95f@ssl',
    total_amount: 100,
    currency: 'BDT',
    tran_id: 'REF123',
    success_url: 'www.mysite.com/success',
    fail_url: 'www.mysite.com/fail',
    cancel_url: 'www.mysite.com/cancel',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'cust@yahoo.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    value_a: 'ref001_A',
    value_b: 'ref002_B',
    value_c: 'ref003_C',
    value_d: 'ref004_D'
}

let fdata = new FormData();
for (let key in payData) {
    fdata.append(key, payData[key])
}

fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
    method: 'POST',
    body: fdata
})
    .then(response => response.json())
    .then(data => console.log(data));