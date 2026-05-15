const listings=[
{title:'3-Zimmer Altbauwohnung · Berlin Mitte',meta:'78m² · Balkon · ab 01.07.',price:'1.650€/Monat',tags:['Miete','Verifiziert','Top Lage'],cat:'Miete'},
{title:'Einfamilienhaus · Köln Lindenthal',meta:'145m² · Garten · 5 Zimmer',price:'749.000€',tags:['Kauf','Energieklasse B'],cat:'Kauf'},
{title:'Bürofläche · München Schwabing',meta:'220m² · sofort verfügbar',price:'5.900€/Monat',tags:['Gewerbe','Provisionsfrei'],cat:'Gewerbe'},
{title:'Neubauwohnung · Hamburg Eimsbüttel',meta:'2 Zimmer · 64m² · Erstbezug',price:'1.420€/Monat',tags:['Miete','Neubau'],cat:'Miete'},
{title:'Mehrfamilienhaus · Frankfurt Nordend',meta:'480m² · 8 Einheiten',price:'2.180.000€',tags:['Kauf','Investment'],cat:'Kauf'},
{title:'Praxisfläche · Stuttgart West',meta:'130m² · Aufzug · barrierefrei',price:'2.750€/Monat',tags:['Gewerbe','Sofort'],cat:'Gewerbe'}
];

const feed=document.getElementById('listingFeed');
const tabs=[...document.querySelectorAll('.tab')];
let active='all';

function render(){
  const shown=listings.filter(i=>active==='all'||i.cat===active);
  feed.innerHTML=shown.map(i=>`<article class="item"><div><h3>${i.title}</h3><p class="meta">${i.meta}</p><div class="badges">${i.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div></div><div><div class="price">${i.price}</div><button class="btn ghost" onclick="fakeSuccess('Besichtigung angefragt')">Besichtigen</button></div></article>`).join('');
}

function setFilter(f){active=f;tabs.forEach(t=>t.classList.toggle('active',t.dataset.filter===f));render()}

tabs.forEach(t=>t.addEventListener('click',()=>setFilter(t.dataset.filter)));
render();

function runSmartSearch(){
  const q=document.getElementById('smartInput').value.trim();
  fakeSuccess(q?`Immobilien-Suche gestartet: "${q}"`:'Bitte Suchbegriff eingeben');
}

function openModal(id){document.getElementById(id).classList.add('show')}
function closeModal(id){document.getElementById(id).classList.remove('show')}
function fakeSuccess(msg){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}

document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}));
