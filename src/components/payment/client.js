

// https://api.fundmylaptop.com/api/payment/pay
// sample req: Body

//    { "card_number":"4242424242424242",
//     "cvv":"667",
//     "amount":"7567",
//     "expiry_year":"32",
//     "expiry_month":"9",
//     "fundee":"email_here" }

// https://api.fundmylaptop.com/api/payment/validate

// sample req: Body
//    { "flw_ref":"response gotten from above request",
//     "otp":"12344",
//     "fundee":"email_here"}



const PAYMENT_BASE_URL = 'https://api.fundmylaptop.com/api/payment';

function validate(metaData,data) {
    return fetch(`${PAYMENT_BASE_URL}/validate`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus)
    .then(parseJSON)
    .catch((error) => console.log(error.message));
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error); // eslint-disable-line no-console
      throw error;
    }
}
  
function parseJSON(response) {
    return response.json();
}
  
const Client = { validate };

export default Client;