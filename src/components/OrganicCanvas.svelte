<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    phase: number;
    freq: number;
    amplitude: number;
    radius: number;
    brightness: number;
    pulseSpeed: number;
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const CONNECTION_DIST = 150;
    const NODE_COUNT = 80;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx!.scale(dpr, dpr);
    }

    function createNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: 0,
          vy: 0,
          phase: Math.random() * Math.PI * 2,
          freq: 0.0003 + Math.random() * 0.0008,
          amplitude: 0.3 + Math.random() * 0.5,
          radius: 1 + Math.random() * 2,
          brightness: 0.3 + Math.random() * 0.7,
          pulseSpeed: 0.001 + Math.random() * 0.003,
        });
      }
    }

    resize();
    createNodes();
    window.addEventListener('resize', () => { resize(); createNodes(); });

    if (reducedMotion) {
      // Static render
      ctx.clearRect(0, 0, w, h);
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 124, 89, ${node.brightness * 0.3})`;
        ctx.fill();
      }
      return;
    }

    let frame: number;
    let time = 0;

    function animate() {
      time += 16;
      ctx!.clearRect(0, 0, w, h);

      // Update node positions with organic motion
      for (const node of nodes) {
        node.vx = Math.sin(time * node.freq + node.phase) * node.amplitude;
        node.vy = Math.cos(time * node.freq * 0.7 + node.phase * 1.3) * node.amplitude;
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;
      }

      // Draw connections (mycelium network)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            const pulse = Math.sin(time * 0.001 + i * 0.5) * 0.5 + 0.5;
            const green = Math.round(90 + pulse * 30);
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);

            // Slightly curved connections for organic feel
            const mx = (nodes[i].x + nodes[j].x) / 2 + Math.sin(time * 0.0005 + i) * 8;
            const my = (nodes[i].y + nodes[j].y) / 2 + Math.cos(time * 0.0005 + j) * 8;
            ctx!.quadraticCurveTo(mx, my, nodes[j].x, nodes[j].y);

            ctx!.strokeStyle = `rgba(${green}, ${100 + Math.round(pulse * 40)}, ${60 + Math.round(pulse * 20)}, ${alpha})`;
            ctx!.lineWidth = 0.5 + alpha * 3;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes with glow
      for (const node of nodes) {
        const pulse = Math.sin(time * node.pulseSpeed + node.phase) * 0.5 + 0.5;
        const glowAlpha = node.brightness * (0.2 + pulse * 0.3);

        // Glow
        const grad = ctx!.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 6
        );
        grad.addColorStop(0, `rgba(90, 180, 100, ${glowAlpha * 0.5})`);
        grad.addColorStop(1, 'rgba(90, 180, 100, 0)');
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
        ctx!.fill();

        // Core
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(123, 184, 138, ${0.4 + pulse * 0.4})`;
        ctx!.fill();
      }

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  });
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
