<template>
  <div class="support">
    <section class="bg-primary-3 has-divider">
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-8 col-lg-9 col-md-10">
            <h2 class="display-3 mb-5">Show Support</h2>
          </div>
        </div>
      </div>
      <!-- <div class="divider">
        <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider">
      </div> -->
    </section>
    <section class="bg-black">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8 col-xl-6">
            <div class="text-center mb-4">
              <h2 class="h1 text-white">Hit one of the buttons below to donate</h2>
              <p class="lead text-white">
                <a href="https://www.paypal.com/donate/?hosted_button_id=5UV3MEVJ6CE7U" class="btn btn-primary"> Paypal Donate </a>
                <a href="https://commerce.coinbase.com/checkout/97d1d9ec-66a3-4e79-baee-538eba0ad552" class="btn btn-primary"> Crypto Donation </a>
              </p>
              <!-- <p>
                <no-ssr>
                  <paypal-checkout env="production" :button-style="myStyle" amount="10.00" currency="USD" locale='en_US' :client="credentials" >
                  <PayPal amount="10.00" curency="USD" locale="en_US" :client="credentials" :button-style="myStyle"></PayPal>
                  </paypal-checkout>
                </no-ssr>
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default{
  data() {
    return {
      credentials: {
        sandbox: '<sandbox client id>',
        production: '<production client id>'
      },
      experienceOptions: {
        input_fields: {
          no_shipping: 1
        }
      },
      myStyle: {
        label: 'checkout',
        size: 'responsive',
        shape: 'rect',
        color: 'blue'
      }
    }
  },
  components: {
  }
}

</script>

<style>

</style>

