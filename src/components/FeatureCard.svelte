<script lang="ts">
  interface Props {
    title: string;
    description: string;
    icon?: string;
    span?: 'normal' | 'wide' | 'tall';
  }

  let { title, description, icon = '', span = 'normal' }: Props = $props();
</script>

<article class="card {span}" role="listitem">
  {#if icon}
    <div class="icon">{@html icon}</div>
  {/if}
  <h3>{title}</h3>
  <p>{description}</p>
  <div class="shine" aria-hidden="true"></div>
  <div class="border-glow" aria-hidden="true"></div>
</article>

<style>
  .card {
    position: relative;
    height: 100%;
    padding: 2rem;
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-lg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: var(--glass-border-hover);
    box-shadow: var(--glass-shadow-lg);
  }

  .card:hover .border-glow {
    opacity: 1;
  }

  .shine {
    position: absolute;
    inset: 0;
    background: var(--glass-shine);
    border-radius: inherit;
    pointer-events: none;
  }

  .border-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--green-500), var(--brown-400), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .wide {
    grid-column: span 2;
  }

  .tall {
    grid-row: span 2;
  }

  .icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    background: rgba(74, 124, 89, 0.1);
    border: 1px solid rgba(74, 124, 89, 0.15);
    border-radius: var(--radius-sm);
    color: var(--green-400);
  }

  .icon :global(svg) {
    width: 22px;
    height: 22px;
  }

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.15rem;
    color: var(--text-primary);
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .wide, .tall {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
</style>
