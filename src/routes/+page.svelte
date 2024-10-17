<script lang="ts">
  const members = [
    ['Ramon Urge', 'https://avatars.githubusercontent.com/u/71756887?v=4'],
    ['Martin Hric', 'https://avatars.githubusercontent.com/u/71594400?v=4'],
    ['Dominik Mifkovič', 'https://avatars.githubusercontent.com/u/71759745?v=4'],
    ['Dmytro Dzuha', '/members/dmytro.webp'],
    ['Ján Slížik', 'https://avatars.githubusercontent.com/u/71568783?v=4'],
    ['Adam Hladík', 'https://avatars.githubusercontent.com/u/57076047?v=4'],
  ]
</script>

<svelte:head>
  <!--  Essential META Tags -->
  <title>Home</title>
  <!-- <meta content="TODO" name="description "> -->
  <meta content="Home" property="og:title ">
  <meta content="website" property="og:type ">
  <!-- <meta content="TODO" property="og:image "> -->
  <meta content="https://stocars.github.io" property="og:url ">
  <!-- <meta content="TODO" property="og:description "> -->
  <meta content="stocars" property="og:site_name ">

  <!-- Twitter meta tags -->
  <meta content="summary_large_image" name="twitter:card">
  <!-- <meta content="https://stocars.github.io" name="twitter:site"> -->
  <meta content="stocars" name="twitter:title">
  <meta content="Team project stocars" name="twitter:description">
  <!-- <meta content="TODO" name="twitter:image">
  <meta content="TODO" name="twitter:image:alt"> -->
</svelte:head>

<section class="space-y-4">
  <div class="flex space-x-4 items-start">
    <div class="flex flex-col space-y-4">
      <h1 class="text-text text-4xl font-bold">Stocars 💯🏎️</h1>
      <p class="text-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, assumenda.
      </p>
    </div>
  </div>

  <h1 class="text-text text-2xl font-bold">Team members 👥</h1>

  <p class="text-text">
    Sme zohratý tím študentov z FIIT STU, ktorí majú bohaté skúsenosti so spoločnou prácou na rôznych projektoch. 
    Naša rozmanitá skupina pokrýva široké spektrum oblastí v rámci informatiky, od programovania a vývoja fullstack 
    webových aplikácií, cez prácu s databázami a infraštruktúrou, až po kybernetickú bezpečnosť. Spojenie technických 
    zručností a praktických skúseností nám umožňuje pracovať efektívne a bezpečne na projektoch rôzneho charakteru. 
    Veríme, že naša rôznorodosť nás robí silným tímom schopným riešiť široké spektrum výziev.
  </p>

  <div class="grid grid-cols-3 gap-1 sm:gap-2 rounded-2xl overflow-hidden shadow-xl">
    {#each members as [name, picture]}
      <div class="relative aspect-square bg-text/5 overflow-hidden">
        <img 
          src={picture}
          class="w-full h-full object-cover"
          alt="member profile">

        <div class="absolute z-20 bottom-0 inset-x-0 p-2 md:p-4 pt-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <span class="text-text font-medium text-sm sm:text-xl">{name}</span>
        </div>
      </div>
    {/each}
  </div>
</section>
