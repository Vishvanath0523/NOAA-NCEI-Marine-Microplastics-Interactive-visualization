﻿# NOAA-NCEI-Marine-Microplastics-Interactive-visualization
<!-- TITLE & BADGES -->
<h1 align="center">🌊 NOAA-NCEI Marine Microplastics – Interactive Visualization</h1>
<p align="center">
  <em>Explore 17 000+ global microplastic samples (2010-2025) in a single web map</em><br>
  <a href="https://vishvanath0523.github.io/NOAA-NCEI-Marine-Microplastics-Interactive-visualization/"><img src="https://img.shields.io/badge/Demo-Live-informational?style=flat&logo=google-chrome" alt="Live demo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/your-username/NOAA-NCEI-Marine-Microplastics-Interactive-visualization" alt="License"></a>
  <img src="https://img.shields.io/github/languages/top/your-username/NOAA-NCEI-Marine-Microplastics-Interactive-visualization?color=blue" alt="Top language">
</p>

---

## 📸 Preview
<p align="center">
  <!-- Replace with your GIF or PNG -->
  <img src="screenshots/overview.gif" width="85%" alt="animated demo">
</p>

---

## 🚀 Features
- **Pan & zoom web map** built with **Leaflet.js**
- **Dynamic clustering** (green / yellow / red) to declutter 17 000 points
- **Tooltip pop-ups** with Sample ID, DOI link, and keywords
- **Dark / Light mode toggle** (saves preference in `localStorage`)
- **Cluster-size legend** auto-generated in the bottom-right corner

---

## 🗂 Dataset
| Source | Records used | Filter |
|--------|--------------|--------|
| NOAA NCEI “Marine Microplastics” archive | 23 000 → **17 214** | Date ≥ 2010-01-01 (all other fields `-All-`) |

Exported as **GeoJSON** and stored in<br>`/data/Marine_Microplastics.geojson`  
*(file is ~55 MB; consider Git LFS or a zipped download link if you fork).*

---

🔍 Key Insights
North Atlantic gyre hosts the largest sampling cluster (8 000 + records) → validates its role as a plastic accumulation zone.

Mediterranean Sea shows dense coastal clusters, mirroring high population & tourism pressure.

Southern Ocean remains an under-sampled blind spot south of 40° S.

90 % of samples are surface-only → deeper transects needed to understand vertical distribution.

See /docs/interpretation.txt for the full narrative.

📝 Roadmap
 Add numeric concentration heat-map layer

 Time-slider (Leaflet.TimeDimension) for 2010-2025 trends

 Overlay marine-protected areas & shipping lanes

 GitHub Pages deployment pipeline (GH-Actions)

🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss major changes.

🙏 Acknowledgements
NOAA National Centers for Environmental Information (NCEI) for making the global microplastics archive publicly available.

Icons by Lucide.

Gradient inspiration from uiGradients.

