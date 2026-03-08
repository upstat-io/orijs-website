<script lang="ts">
  interface Props {
    filename?: string;
    code: string;
  }

  let { filename = 'App.ori', code }: Props = $props();
</script>

<div class="code-window">
  <div class="titlebar">
    <div class="dots" aria-hidden="true">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <span class="filename">{filename}</span>
    <div class="spacer"></div>
  </div>
  <div class="code-body">
    <pre><code>{@html code}</code></pre>
  </div>
  <div class="shine" aria-hidden="true"></div>
</div>

<style>
  .code-window {
    position: relative;
    background: rgba(13, 11, 8, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    overflow: hidden;
  }

  .shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.04) 0%,
      transparent 40%
    );
    pointer-events: none;
    border-radius: inherit;
  }

  .titlebar {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1.25rem;
    background: rgba(13, 11, 8, 0.5);
    border-bottom: 1px solid var(--glass-border);
  }

  .dots {
    display: flex;
    gap: 6px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot.red { background: rgba(255, 95, 87, 0.35); }
  .dot.yellow { background: rgba(255, 189, 46, 0.3); }
  .dot.green { background: rgba(39, 201, 63, 0.35); }

  .filename {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-dim);
  }

  .spacer { flex: 1; }

  .code-body {
    padding: 1.5rem;
    overflow-x: auto;
  }

  pre {
    margin: 0;
    line-height: 1.7;
    font-size: 0.875rem;
    tab-size: 2;
  }

  code {
    color: var(--text-secondary);
  }

  /* Syntax highlighting classes */
  code :global(.kw) { color: var(--green-400); }
  code :global(.fn) { color: var(--brown-300); }
  code :global(.str) { color: var(--green-300); }
  code :global(.num) { color: var(--brown-400); }
  code :global(.cm) { color: var(--text-dim); font-style: italic; }
  code :global(.op) { color: var(--text-dim); }
  code :global(.tag) { color: var(--green-400); }
  code :global(.attr) { color: var(--brown-300); }
  code :global(.val) { color: var(--green-300); }
  code :global(.type) { color: var(--brown-200); }
  code :global(.punct) { color: var(--text-dim); }
</style>
