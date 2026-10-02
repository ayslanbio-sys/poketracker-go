let userCollection = JSON.parse(localStorage.getItem('pokeCollectionData')) || {};
let currentTab = 'dashboard';
let currentRegion = 'kanto';

let regionChartInstance = null;
let variantChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearchAndFilter();
  initBackupSystem();
  updateDashboardStats();
  renderRegionPokemon('kanto');
});

function initNavigation() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');

      const targetTab = e.target.getAttribute('data-tab');
      currentTab = targetTab;

      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      if (targetTab === 'dashboard') {
        document.getElementById('dashboard').classList.add('active');
        updateDashboardStats();
      } else {
        currentRegion = targetTab;
        document.getElementById('region-view').classList.add('active');
        renderRegionPokemon(currentRegion);
      }
    });
  });
}

function renderRegionPokemon(regionKey) {
  const grid = document.getElementById('pokemon-grid');
  grid.innerHTML = '';

  const regionData = POKEMON_DATA.find(r => r.region === regionKey);
  if (!regionData) return;

  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filterType = document.getElementById('filter-select').value;

  regionData.list.forEach(poke => {
    if (searchTerm && !poke.name.toLowerCase().includes(searchTerm) && !poke.id.toString().includes(searchTerm)) {
      return;
    }

    const pokeData = userCollection[poke.id] || { total: 0, shiny: 0, hundo: 0, nondo: 0, lucky: 0, shadow: 0, purified: 0 };

    if (filterType === 'owned' && pokeData.total <= 0) return;
    if (filterType === 'shiny' && pokeData.shiny <= 0) return;
    if (filterType === 'hundo' && pokeData.hundo <= 0) return;
    if (filterType === 'nondo' && pokeData.nondo <= 0) return;
    if (filterType === 'lucky' && pokeData.lucky <= 0) return;
    if (filterType === 'regional' && !poke.isRegional) return;

    const card = document.createElement('div');
    card.className = 'poke-card';
    card.innerHTML = `
      <div class="poke-header">
        <span class="poke-id">#${String(poke.id).padStart(3, '0')}</span>
        <span class="poke-name">${poke.name} ${poke.isRegional ? '🌍' : ''}</span>
      </div>
      <div class="poke-body">
        <img class="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${poke.name}" loading="lazy">
        <div class="counters-grid">
          <div class="counter-item"><label>Total</label><input type="number" min="0" value="${pokeData.total || 0}" data-id="${poke.id}" data-field="total"></div>
          <div class="counter-item"><label>Shiny ✨</label><input type="number" min="0" value="${pokeData.shiny || 0}" data-id="${poke.id}" data-field="shiny"></div>
          <div class="counter-item"><label>100% 💯</label><input type="number" min="0" value="${pokeData.hundo || 0}" data-id="${poke.id}" data-field="hundo"></div>
          <div class="counter-item"><label>0% 🔴</label><input type="number" min="0" value="${pokeData.nondo || 0}" data-id="${poke.id}" data-field="nondo"></div>
          <div class="counter-item"><label>Sortudo 🍀</label><input type="number" min="0" value="${pokeData.lucky || 0}" data-id="${poke.id}" data-field="lucky"></div>
          <div class="counter-item"><label>Sombrio 😈</label><input type="number" min="0" value="${pokeData.shadow || 0}" data-id="${poke.id}" data-field="shadow"></div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const field = e.target.getAttribute('data-field');
      const val = parseInt(e.target.value) || 0;

      if (!userCollection[id]) {
        userCollection[id] = { total: 0, shiny: 0, hundo: 0, nondo: 0, lucky: 0, shadow: 0, purified: 0 };
      }

      userCollection[id][field] = val;
      saveCollection();
    });
  });
}

function initSearchAndFilter() {
  document.getElementById('search-input').addEventListener('input', () => renderRegionPokemon(currentRegion));
  document.getElementById('filter-select').addEventListener('change', () => renderRegionPokemon(currentRegion));
}

function saveCollection() {
  localStorage.setItem('pokeCollectionData', JSON.stringify(userCollection));
}

function initBackupSystem() {
  document.getElementById('btn-export').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userCollection, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `poke_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  document.getElementById('file-import').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (typeof importedData === 'object') {
          userCollection = importedData;
          saveCollection();
          alert('Backup importado com sucesso!');
          if (currentTab === 'dashboard') updateDashboardStats();
          else renderRegionPokemon(currentRegion);
        }
      } catch (err) {
        alert('Erro ao importar arquivo.');
      }
    };
    reader.readAsText(file);
  });
}

function updateDashboardStats() {
  let totals = { total: 0, shiny: 0, hundo: 0, nondo: 0, lucky: 0, shadow: 0, purified: 0, regional: 0 };
  let regionCounts = {};

  POKEMON_DATA.forEach(region => {
    regionCounts[region.name] = 0;
    region.list.forEach(poke => {
      const data = userCollection[poke.id];
      if (data) {
        totals.total += data.total || 0;
        totals.shiny += data.shiny || 0;
        totals.hundo += data.hundo || 0;
        totals.nondo += data.nondo || 0;
        totals.lucky += data.lucky || 0;
        totals.shadow += data.shadow || 0;
        totals.purified += data.purified || 0;
        if (poke.isRegional && data.total > 0) totals.regional += data.total;
        if (data.total > 0) regionCounts[region.name] += 1;
      }
    });
  });

  document.getElementById('stat-total').innerText = totals.total;
  document.getElementById('stat-shiny').innerText = totals.shiny;
  document.getElementById('stat-hundo').innerText = totals.hundo;
  document.getElementById('stat-nondo').innerText = totals.nondo;
  document.getElementById('stat-lucky').innerText = totals.lucky;
  document.getElementById('stat-shadow').innerText = totals.shadow;
  document.getElementById('stat-purified').innerText = totals.purified;
  document.getElementById('stat-regional').innerText = totals.regional;

  renderCharts(regionCounts, totals);
}

function renderCharts(regionCounts, totals) {
  const ctxRegion = document.getElementById('regionChart').getContext('2d');
  const ctxVariant = document.getElementById('variantChart').getContext('2d');

  if (regionChartInstance) regionChartInstance.destroy();
  if (variantChartInstance) variantChartInstance.destroy();

  regionChartInstance = new Chart(ctxRegion, {
    type: 'bar',
    data: {
      labels: Object.keys(regionCounts),
      datasets: [{ label: 'Pokémons Registrados', data: Object.values(regionCounts), backgroundColor: '#ef4444', borderRadius: 6 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }, x: { grid: { display: false }, ticks: { color: '#94a3b8' } } } }
  });

  variantChartInstance = new Chart(ctxVariant, {
    type: 'doughnut',
    data: {
      labels: ['Brilhantes', '100% IV', '0% IV', 'Sortudos', 'Sombrios'],
      datasets: [{ data: [totals.shiny, totals.hundo, totals.nondo, totals.lucky, totals.shadow], backgroundColor: ['#eab308', '#3b82f6', '#ef4444', '#10b981', '#a855f7'] }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } } }
  });
}
