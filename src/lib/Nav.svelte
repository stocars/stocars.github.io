<script lang="ts">
  import { page } from '$app/stores'
</script>

<nav class="px-3 border-b border-b-primary/10 bg-background sticky top-0 z-50 flex justify-between">
  <div class="flex space-x-6">
    <a 
      href="/" 
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
      class:underline={$page.url.pathname === '/'}>Domov</a>

    <a 
      href="/posts" 
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
      class:underline={$page.url.pathname.includes('/posts')}>Zápisnice</a>
  </div>
</nav>