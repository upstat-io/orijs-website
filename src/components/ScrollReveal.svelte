<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    delay?: number;
  }

  let { children, delay = 0 }: Props = $props();
  let el: HTMLDivElement;
  let visible = $state(false);

  onMount(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) { visible = true; return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { visible = true; }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div bind:this={el} class="reveal" class:visible>
  {@render children()}
</div>

<style>
  .reveal {
    height: 100%;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
