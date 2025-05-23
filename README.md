# NOAA-NCEI-Marine-Microplastics-Interactive-visualization
<!-- TITLE & BADGES -->
<h1 align="center">🌊 NOAA-NCEI Marine Microplastics – Interactive Visualization</h1>
<p align="center">
  <em>Explore 17 000+ global microplastic samples (2010-2025) in a single web map</em><br>
  <a href="https://your-username.github.io/NOAA-NCEI-Marine-Microplastics-Interactive-visualization"><img src="https://img.shields.io/badge/Demo-Live-informational?style=flat&logo=google-chrome" alt="Live demo"></a>
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

## ⚙️ Quick Start

```bash
# 1. clone the repo
git clone https://github.com/your-username/NOAA-NCEI-Marine-Microplastics-Interactive-visualization.git
cd NOAA-NCEI-Marine-Microplastics-Interactive-visualization

# 2. start a tiny local server (Python ≥3.8)
python -m http.server 8000

# 3. open your browser
http://localhost:8000
| Layer                  | Library / Tool                                                            |
| ---------------------- | ------------------------------------------------------------------------- |
| Map rendering          | [Leaflet 1.9](https://leafletjs.com/)                                     |
| Clustering             | [Leaflet.MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster) |
| Colour scales & legend | [D3 v7](https://d3js.org/)                                                |
| Theme toggle           | Vanilla JS + CSS variables                                                |
| PPT & docs             | [`python-pptx`](https://python-pptx.readthedocs.io/)                      |
