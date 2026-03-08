<script lang="ts">
  import { onMount } from 'svelte';

  let scrolled = $state(false);

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav class:scrolled aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/" class="logo" aria-label="OriJs Home">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" stroke="var(--green-500)" stroke-width="2" fill="none" />
        <path d="M14 6 C10 10, 8 16, 14 22 C20 16, 18 10, 14 6Z" fill="var(--green-500)" opacity="0.7" />
        <path d="M14 8 C12 12, 10 16, 14 20" stroke="var(--green-300)" stroke-width="1.5" fill="none" />
      </svg>
      <span>ori<span class="dot">js</span></span>
    </a>

    <div class="links">
      <a href="/guide">Guide</a>
      <a href="/docs">Docs</a>
      <a href="https://github.com/upstat-io/orijs" target="_blank" rel="noopener">GitHub</a>
      <a href="https://github.com/sponsors/upstat-io" target="_blank" rel="noopener" class="sponsor">Sponsor</a>
      <a href="#get-started" class="btn-nav">Get Started</a>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1rem 0;
    transition: all 0.4s ease;
  }

  nav.scrolled {
    padding: 0.6rem 0;
    background: rgba(26, 22, 18, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  }

  .nav-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.03em;
  }

  .logo .dot {
    color: var(--green-400);
  }

  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .links a {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .links a:hover {
    color: var(--green-300);
  }

  .sponsor {
    color: var(--green-400) !important;
  }

  .btn-nav {
    padding: 0.5rem 1.25rem !important;
    background: rgba(26, 22, 18, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: var(--radius-pill);
    color: var(--green-400) !important;
    border: 1px solid var(--glass-border);
    transition: all 0.25s ease !important;
  }

  .btn-nav:hover {
    border-color: var(--glass-border-hover);
    background: rgba(45, 90, 61, 0.25);
    color: var(--green-300) !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    .links { gap: 1rem; }
    .links a:not(.btn-nav) { display: none; }
  }
</style>
