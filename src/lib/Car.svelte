<div class="z-50 fixed inset-0 pointer-events-none">
  <span class="moving-car absolute bottom-0 text-3xl md:text-5xl" style="animation-duration: 2.3s;">🏎️</span>
  <span class="moving-car absolute bottom-0 text-3xl md:text-5xl" style="animation-duration: 4.1s;">🛻</span>
  <span class="moving-car absolute bottom-0 text-3xl md:text-5xl" style="animation-duration: 6.2s; animation-delay: 2s;">🚌</span>
</div>

<style>
.moving-car {
  transform: translateX(110vw);
  animation: slide linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-10vw);
  }
}
</style>