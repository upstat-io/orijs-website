<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="brand">
        <span class="logo-text">ori<span class="accent">js</span></span>
        <p>Backend framework for Bun.</p>
      </div>

      <div class="footer-links">
        <div class="col">
          <h4>Learn</h4>
          <a href="/guide">Guide</a>
          <a href="/docs">API Reference</a>
        </div>
        <div class="col">
          <h4>Community</h4>
          <a href="https://github.com/upstat-io/orijs" target="_blank" rel="noopener">GitHub</a>
          <a href="https://github.com/sponsors/upstat-io" target="_blank" rel="noopener" class="sponsor">Sponsor</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="divider" aria-hidden="true">
        <span class="seg" style="width:40%;background:var(--brown-800)"></span>
        <span class="seg" style="width:20%;background:var(--green-900)"></span>
        <span class="seg" style="width:40%;background:var(--brown-800)"></span>
      </div>
      <div class="footer-meta">
        <p class="copy">&copy; {year} OriJs. Open source under MIT.</p>
        <p class="upstat">A project by <a href="https://upstat.io" target="_blank" rel="noopener noreferrer">upstat.io</a></p>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 4rem 0 2rem;
    background: var(--bg-deep);
  }

  .footer-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .brand {
    max-width: 280px;
  }

  .logo-text {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.03em;
  }

  .accent { color: var(--green-400); }

  .brand p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-dim);
  }

  .footer-links {
    display: flex;
    gap: 4rem;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .col h4 {
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-dim);
    margin-bottom: 0.25rem;
  }

  .col a {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .col a:hover { color: var(--green-300); }

  .divider {
    display: flex;
    gap: 4px;
    height: 2px;
    margin-bottom: 1.5rem;
    border-radius: 1px;
    overflow: hidden;
  }

  .seg {
    border-radius: 1px;
  }

  .footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copy {
    font-size: 0.8rem;
    color: var(--text-dim);
  }

  .upstat {
    font-size: 0.8rem;
    color: var(--text-dim);
  }

  .upstat a {
    color: var(--text-secondary);
    transition: color 0.2s ease;
  }

  .upstat a:hover {
    color: var(--green-300);
  }

  .sponsor {
    color: var(--green-400) !important;
  }

  @media (max-width: 640px) {
    .footer-top {
      flex-direction: column;
    }
    .footer-links { gap: 2rem; }
  }
</style>
