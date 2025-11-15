Astro UI framework integration build output sizes 

> [!NOTE] 
> Solid remains the clear winner with the smallest total bundle size (17.54 kB) and fastest build times, while React has the largest footprint at 195.50 kB uncompressed.

### Build Performance Comparison

| Framework | Build Time | Client Build Time | Total Time | Files Generated |
|-----------|------------|-------------------|------------|-----------------|
| **Solid** | 1.35s | 406ms | 2.19s | Counter-solid.D7aVUAXv.js (0.39 kB / 0.28 kB gzip)<br>client.elDWt4IS.js (5.61 kB / 2.43 kB gzip)<br>web.CBkkP8fM.js (11.54 kB / 4.67 kB gzip) |
| **Svelte** | 1.83s | 705ms | 3.02s | Counter.MtOT1a2c.js (0.49 kB / 0.35 kB gzip)<br>client.svelte.41vbRNED.js (1.13 kB / 0.62 kB gzip)<br>render.CAe4EGKn.js (23.05 kB / 9.09 kB gzip) |
| **Vue** | 1.33s | 865ms | 2.59s | counter.BBQchu1w.js (0.64 kB / 0.41 kB gzip)<br>client.CdlkDC9G.js (7.08 kB / 3.29 kB gzip)<br>runtime-core.esm-bundler.Dhc_1Txk.js (62.69 kB / 24.90 kB gzip) |
| **React** | 1.42s | 1.57s | 3.49s | Counter.DFnrZ2Y6.js (1.03 kB / 0.60 kB gzip)<br>index.Cd_vQiNd.js (7.85 kB / 3.05 kB gzip)<br>client.BLUn-lwI.js (186.62 kB / 58.54 kB gzip) |

### Total Bundle Sizes

| Framework | Total Uncompressed | Total Gzipped | Modules Transformed |
|-----------|-------------------|---------------|---------------------|
| **Solid** | 17.54 kB | 7.38 kB | 6 |
| **Svelte** | 24.67 kB | 10.06 kB | 100 |
| **Vue** | 70.41 kB | 28.60 kB | 11 |
| **React** | 195.50 kB | 62.19 kB | 28 |

> [!NOTE] 
> Solid remains the clear winner with the smallest total bundle size (17.54 kB) and fastest build times, while React has the largest footprint at 195.50 kB uncompressed.
