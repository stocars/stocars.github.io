<script lang="ts">
  import type { PageServerData } from "./$types"

  export let data: PageServerData
</script>

<h1 class="text-text text-3xl font-bold">Zápisnice</h1>

<svelte:head>
  <title>Zápisnice</title>
</svelte:head>

<div class="flex flex-col space-y-3">
  {#each data.posts as post}
    <a 
      href={`/posts/${post.slug}`} 
      class="space-y-3 flex flex-col rounded-lg py-5 px-5 border-2 border-transparent bg-primary/5 hover:border-accent hover:bg-primary/10">
      <h1 class="text-xl text-accent">{post.meta.title}</h1>
      {#if post.meta.description}
        <h1 class="font-medium text-sm text-primary/90 whitespace-pre">{post.meta.description}</h1>
      {/if}
    </a>
  {/each}
</div>