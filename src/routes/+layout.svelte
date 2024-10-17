<script>
  import '../app.css'
  import Nav from "$lib/Nav.svelte"
  import Car from '$lib/Car.svelte'
</script>

<div class="min-h-screen pb-24 bg-background">
  <main class="max-w-2xl mx-auto pb-7">
    <Nav />
  
    <div class="px-3 py-4 space-y-6">
      <slot />
    </div>
  </main>
</div>

<Car />