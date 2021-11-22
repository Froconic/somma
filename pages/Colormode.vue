<template>
  <div>
    <ColorModePicker></ColorModePicker>
    <div class="container">
      <form action="https://getform.io/f/8ae74422-8bd0-490a-b343-0b6e58164340" method="POST" data-form-email novalidate>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Your Name *</label>
              <input name="contact-name" placeholder="First Name" type="text" class="form-control" required>
              <div class="invalid-feedback">
                Please type your name.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Email Address *</label>
              <input name="contact-email" type="email" placeholder="you@yoursite.com" class="form-control" required>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label>Message:</label>
              <textarea class="form-control" name="contact-message" rows="10" placeholder="How can we help?"></textarea>
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
      <div class="container">
        <div class="card card-body justify-content-between" to="/">
          <div class="text-small d-flex">
            <div class="mr-2">
              <span class="text-muted">Boop</span>
              <span class="badge p-1"><img alt="">Boop</span>
            </div>
          </div>
          <div>
            <h4>BOOP</h4>
            <p class="flex-grow">Ullam debitis pariatur quis laborum deserunt autem et.</p>
            <div class="d-flex align-items-center mt-3">
              <span class="text-small text-muted">by </span> <span class="text-small ml-1"> </span>
            </div>
          </div>
        </div>
      </div>
      <ArtPrevNext></ArtPrevNext>
      <PrevNext></PrevNext>
      <b-icon icon="arrow-up" class="icon" font-scale="5"></b-icon>
      <font-awesome-icon :icon="['fas', 'user-secret']" />
      <font-awesome-icon icon="spinner" />
  </div>
</template>

<style>
  .light-mode body {
    background-color: #EBF4FF;
    color: #000A14;
  }

  .light-mode .navbar {
    background-color: #EBF4FF;
  }

    .light-mode .navbar-dark .navbar-brand {
    color: #000A14;
  }

  .light-mode .nav-item a {
    color: #000A14
  }

  .light-mode .nav-item a:hover {
    color: #4B5158
  }


  .light-mode .navbar-nav .nav-link {
    color: #000A14;
  }

  .light-mode .navbar-nav .nav-link:hover {
    color: #4B5158;
  }

  .light-mode #footer {
    background-color: #EBF4FF;
    color: #000A14;
  }


  .light-mode .b-icon {
    fill: #000A14;
    color: black;
  }

    .light-mode .badge {
    color: #EBF4FF;
    background-color:#000A14
  }


  .light-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000A14
  }

  .light-mode .card-body {
    background-color: #EBF4FF;
    color: #ebf4ff;
    border: #EBF4FF solid 2px;
    -webkit-box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
  }

  .light-mode .form-group label {
    color: #000A14;
  }

  .light-mode .form-group textarea {
    background-color: #EBF4FF;
    -webkit-box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    border: #EBF4FF;
  }

    .light-mode .form-group input {
    background-color: #EBF4FF;
    -webkit-box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
    box-shadow: -1px -1px 10px 5px rgba(0, 0, 0, 0.50);
        border: #EBF4FF;

  }


  .dark-mode body {
    color: #EBF4FF;
    background-color: #000A14;
  }

  .dark-mode .navbar {
    background-color: #000A14;
  }

    .dark-mode .navbar-dark .navbar-brand {
    color: #EBF4FF;
  }

  .dark-mode .nav-item a {
    color: #EBF4FF
  }

  .dark-mode .nav-item a:hover {
    color: #4B5158
  }


  .dark-mode .navbar-nav .nav-link {
    color: #EBF4FF;
  }

  .dark-mode .navbar-nav .nav-link:hover {
    color: #4B5158;
  }

  .dark-mode #footer {
    color: #EBF4FF;
    background-color: #000A14;
  }


  .dark-mode .b-icon {
    fill: #000A14;
    color: black;
  }

    .dark-mode .badge {
    background-color: #EBF4FF;
    color:#000A14
  }


  .dark-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #EBF4FF
  }

  .dark-mode .card-body {
    background-color: #000A14;
    color: #EBF4FF;
    border: #EBF4FF solid 2px;
    -webkit-box-shadow: -1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    -moz-box-shadow: -1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    box-shadow: -1px -1px 5px 5px rgba(139, 139, 139, 0.5);
  }

  .dark-mode .form-group label {
    color: #EBF4FF;
  }

  .dark-mode .form-group textarea {
    background-color: #000A14;
    -webkit-box-shadow: -1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    -moz-box-shadow: -1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    box-shadow: -1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    border: #EBF4FF solid 1px;
  }

    .dark-mode .form-group input {
    background-color: #000A14;
    -webkit-box-shadow:-1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    -moz-box-shadow:-1px -1px 5px 5px rgba(139, 139, 139, 0.5);
    box-shadow:-1px -1px 5px 5px rgba(139, 139, 139, 0.5);
        border: #EBF4FF solid 1px;

  }



  /* .dark-mode body {
    background-color: #000A14;
    color: #EBF4FF;
  }

  .dark-mode .navbar {
    background-color: #000A14;
  }

  .dark-mode .nav-item a {
    color: #EBF4FF;
  }

  .dark-mode .nav-item a:hover {
    color: #929292;
  }

  .dark-mode #footer {
    background-color: #000A14;
    color: #EBF4FF;
  }

  .dark-mode .btn-outline:hover {
    color: #EBF4FF;
  }

  .dark-mode .card-body {
    background-color: #4B5158;
    color: #ebf4ff;
  }

  .dark-mode .form-group label {
    color: #a6abb1;
  }

  .dark-mode .form-group input {
    background-color: #EBF4FF;
  }
 */




  .blue-mode body {
    background-color: #4b5158;
    color: #2388FF;
  }

</style>

<script>

</script>
