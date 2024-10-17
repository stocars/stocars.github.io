<script lang="ts">
  import type { PageServerData } from "./$types"

  export let data: PageServerData
</script>

<svelte:head>
  <!--  Essential META Tags -->
  <title>{data.post.meta.title}</title>
  <meta content={data.post.meta.description} name="description " />
  <meta content={data.post.meta.title} property="og:title " />
  <meta content={data.post.meta.type} property="og:type " />
  {#if data.post.meta.image}
    <meta content={data.post.meta.image} property="og:image " />
  {/if}
  <meta content={data.post.meta.url} property="og:url " />
  <meta content={data.post.meta.description} property="og:description " />
  <meta content="stocars" property="og:site_name " />

  <!-- Twitter meta tags -->
  <meta content="summary_large_image" name="twitter:card" />
  <meta content={data.post.meta.url} name="twitter:site" />
  <meta content={data.post.meta.title} name="twitter:title" />
  <meta content={data.post.meta.description} name="twitter:description" />
  {#if data.post.meta.image}
    <meta content={data.post.meta.image} name="twitter:image" />
    <meta content={data.post.meta.image} name="twitter:image:alt" />
  {/if}
</svelte:head>

<div class="text-text break space-y-5">{@html data.post.content}</div>

<div class="hidden relative font-medium text-4xl text-3xl text-2xl text-xl text-lg font-normal opacity-90 italic px-3 py-2 border-l-2 border-l-primary-text text-text/70 bg-text/[0.025] rounded-r-lg bg-secondary/5 text-sm rounded-md p-1.5 text-accent font-semibold rounded-md mb-5 border border-black/20 border-text/10"></div>

<style>
  :global(pre) {
    overflow-x: auto;
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>