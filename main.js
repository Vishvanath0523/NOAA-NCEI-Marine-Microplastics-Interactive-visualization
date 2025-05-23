/* =====================================================
   GLOBAL MARINE MICROPLASTICS EXPLORER – MAIN SCRIPT
   (adapted for minimal NOAA export: OBJECTID, Unit, DOI, KEYWORDS)
   ===================================================== */

// ----------  INITIALISE MAP  ---------- //
const map = L.map("map", {
    minZoom: 2,
    worldCopyJump: true,
  }).setView([0, 0], 2);
  
  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  ).addTo(map);
  
  // ----------  CLUSTER GROUP ---------- //
  const clusterGroup = L.markerClusterGroup({
    disableClusteringAtZoom: 6,
    spiderfyOnMaxZoom: true,
  });
  
  // single‑colour style (use any hex you like)
  const markerStyle = {
    radius: 5,
    color: "#ffffff",
    weight: 1,
    fillColor: "#2196f3",
    fillOpacity: 0.85,
  };
  
  // ----------  LOAD GEOJSON  ---------- //
  fetch("Marine_Microplastics.geojson")
    .then((res) => res.json())
    .then((geojson) => {
      geojson.features.forEach((feature) => {
        const p = feature.properties;
        const [lon, lat] = feature.geometry.coordinates;
  
        const marker = L.circleMarker([lat, lon], markerStyle).bindPopup(
          `
          <b>Sample ID:</b> ${p.OBJECTID}<br/>
          <b>Unit:</b> ${p.Unit}<br/>
          <b>DOI:</b> <a href="${p.DOI}" target="_blank">link</a><br/>
          <b>Keywords:</b> ${p.KEYWORDS}
        `
        );
  
        clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);

    // ←--- add this
    addClusterLegend();
  })
  .catch((err) => console.error("Data load error:", err));

/* --------------------  LEGEND FOR CLUSTER COUNTS  -------------------- */
function addClusterLegend() {
  const legend = L.control({ position: "bottomright" });

  legend.onAdd = () => {
    const div = L.DomUtil.create("div", "legend");
    div.innerHTML = "<b>Samples per cluster</b><br>";

    const bins = [
      { color: "#10b981", range: "2 – 9"   },
      { color: "#f4a259", range: "10 – 99" },
      { color: "#ef4444", range: "100 +"   }
    ];

    bins.forEach(b => {
      div.innerHTML += `<i style="background:${b.color}"></i> ${b.range}<br/>`;
    });
    return div;
  };

  legend.addTo(map);
}





