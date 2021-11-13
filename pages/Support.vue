<template>
<!-- TO DO: Add vue paypal component switch branch -->
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
              <h2 class="h1 text-white">Donate to show your support</h2>
              <p class="lead text-white">
                Hit this button to <br><br> <a href="https://www.paypal.com/donate/?hosted_button_id=5UV3MEVJ6CE7U" class="btn btn-primary"> Donate </a>
              </p>
              <!-- <p>
                <no-ssr>
                  <paypal-checkout env="production" :button-style="myStyle" amount="10.00" currency="USD" locale='en_US' :client="credentials" >
                  <PayPal amount="10.00" curency="USD" locale="en_US" :client="credentials" :button-style="myStyle"></PayPal>
                  </paypal-checkout>
                </no-ssr>
              </p> -->
            </div>
            <form action="/forms/smtp.php" data-form-email novalidate>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Your Name *</label>
                    <input name="contact-name" type="text" class="form-control" placeholder="First Name" required>
                    <div class="invalid-feedback">
                      Please type your name.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email Address *</label>
                    <input name="contact-email" type="email" placeholder="Email" class="form-control" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Message:</label>
                    <textarea class="form-control" name="contact-message" rows="10" placeholder="Message"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE"></div>
                </div>
                <div class="col">
                  <div class="d-none alert alert-success" role="alert" data-success-message>
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div class="d-none alert alert-danger" role="alert" data-error-message>
                    Please fill all fields correctly.
                  </div>
                  <button type="submit" class="btn btn-primary btn-loading" data-loading-text="Sending">
                    <img class="icon" src="../assets/img/icons/theme/code/loading.svg" alt="loading icon">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>

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

