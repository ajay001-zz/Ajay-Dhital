/**==========================typing animation================== */
var typed = new Typed(".typing", {
    strings: [" ", "Learning", "Web Designing", "Web Developing", "Photography", "and many more"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


// for payment integration  
var stripe = stripe('your_stripe_publishable_key');
var elements = stripe.elements();

var cardNumberElement = elements.create('cardNumber');
var cardExpiryElement = elements.create('cardExpiry');
var cardCvcElement = elements.create('cardCvc');

cardNumberElement.mount('#card-number');
cardExpiryElement.mount('#expiry-date');
cardCvcElement.mount('#cvc');

var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  stripe.createPaymentMethod({
    type: 'card',
    card: cardNumberElement,
    billing_details: {
      name: 'John Doe'
    }
  }).then(function(result) {
    // Handle successful payment here
  }).catch(function(error) {
    // Handle payment error here
  });
});
