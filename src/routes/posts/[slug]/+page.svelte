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

<style>
  :global(pre) {
    overflow-x: auto;
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>