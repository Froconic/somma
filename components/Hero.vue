<template>
  <div class="hero">
    <section class="bg-black text-white">
      <div class="container mt-lg-6">
        <div class="row">
          <div class="col">
            <h1 class="display-3">Welcome to<br><span>RIVRE</span><span>OF</span><span>SOMA</span></h1>
            <div class="my-4">
              <p class="lead">Elevation of the <br>Mind | Body | Soul<br>With<br>Magic | Mystery | Mysticism</p>
            </div>
            <div class="accordion" id="accordion">
              <div class="card bg-transparent border-0">
                <div class="card-header p-0 bg-transparent border-0" id="headingOne">
                  <h2 class="mb-0"><button class="btn btn-primary btn-lg mx-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Learn More </button></h2>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">Welcome to RIVRE of SOMA! If you were wondering what is RIVRE of SOMA? RIVRE = Real Insights eVolve REality and SOMA is an epithet I use often standing for many things but the most encompassing being Science Of Metaphysical Art. Putting it all together The science of metaphysical arts brings real insights in order to evolve your reality. With that being said my aim with this site is to create a living repository that I can add my wisdom, expressions, art, thoughts, and more. Think of this site as a stream, everflowing that you may never step foot into twice and be the same. Each visit the information gathered here will hit different. As you change and evolve so to will how the layers of information will be received. Think of this as a nonlocal resource that will help you to interface more fluidly with the unseen and seen sides of reality. Step inside and allow the flow of information to take you for a ride!
 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black text-white">
      <div class="container">
        <div class="row">
          <div class="col d-flex flex-column">
            <h2 class="text-center mb-5">Blog</h2>
            <strong class="text-center mb-2">My Thoughts, Musings and Experiments with Magic, Mysticism and Life</strong>
            <NuxtLink class="btn btn-primary btn-lg mx-auto" to="/blog/page/1">Check it out</NuxtLink>
          </div>
          <div class="col d-flex flex-column">
            <h2 class="text-center mb-5">Art</h2>
            <strong class="text-center mb-2">Expressions: Symbols, Visual Metaphor, Giving Shape to the Unseen </strong>
            <NuxtLink class="btn btn-primary-2 btn-lg mx-auto" to="/art/page/1">See for yourself</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {

  }

</script>

<style>

</style>
