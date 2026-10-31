/* ------------------------------------------------------------------
   Beauchamp Bend — site configuration

   PAYMENT LINKS
   -------------
   Paste Stripe Payment Link URLs (or PayPal links) in here.
   Keys must match the `data-buy` attributes in store.html.

   To create a Stripe Payment Link:
     1. Stripe Dashboard -> Payment Links -> New
     2. Add the product + price
     3. Copy the link (https://buy.stripe.com/xxxxxxxx)
     4. Paste it below, then commit + push

   Any key left empty makes that button fall back to "email to order"
   instead of sending a customer to a dead checkout.
   ------------------------------------------------------------------ */
window.BB_CONFIG = {
  paymentLinks: {
    // --- Eggs -------------------------------------------------------
    'eggs-dozen':       '',   // $7.00  / dozen
    'eggs-half-dozen':  '',   // TODO: set price

    // --- Chicken (whole birds, 3-6 lb) ------------------------------
    'chicken-small':    '',   // TODO: 3-4 lb
    'chicken-medium':   '',   // TODO: 4-5 lb
    'chicken-large':    '',   // TODO: 5-6 lb

    // --- Walnuts (seasonal) -----------------------------------------
    'walnuts-1lb':      '',
    'walnuts-5lb':      ''
  }
};
