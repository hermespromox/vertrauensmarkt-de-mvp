const listings=[
{title:'Altbauwohnung · Berlin Mitte',meta:'2 Zimmer · 62m² · sofort',price:'1.280€/Monat',tags:['Immobilie','Verifiziert','Neu'],cat:'Immobilie'},
{title:'Senior Product Designer · München',meta:'Hybrid · Festanstellung',price:'75–90k€',tags:['Job','Empfohlen'],cat:'Job'},
{title:'Kinderbetreuung · Hamburg',meta:'Nachmittags · 3 Tage/Woche',price:'22€/h',tags:['Service','Top bewertet'],cat:'Service'},
{title:'Steuerberater Empfehlung · Köln',meta:'KMU spezialisiert',price:'ab 110€/h',tags:['Service','Empfehlung'],cat:'Service'},
{title:'WG Zimmer · Stuttgart Süd',meta:'Möbliert · ab sofort',price:'760€/Monat',tags:['Immobilie','Vertrauenskreis'],cat:'Immobilie'},
{title:'Founding Engineer · Frankfurt',meta:'AI Startup · Vollzeit',price:'85–110k€',tags:['Job','Remote 3 Tage'],cat:'Job'}
];

const feed=document.getElementById('listingFeed');
const tabs=[...document.querySelectorAll('.tab')];
let active='all';

function render(){
  const shown=listings.filter(i=>active==='all'||i.cat===active);
  feed.innerHTML=shown.map(i=>`<article class="item"><div><h3>${i.title}</h3><p class="meta">${i.meta}</p><div class="badges">${i.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div></div><div><div class="price">${i.price}</div><button class="btn ghost" onclick="fakeSuccess('Anfrage gesendet')">Anfragen</button></div></article>`).join('');
}

function setFilter(f){active=f;tabs.forEach(t=>t.classList.toggle('active',t.dataset.filter===f));render()}

tabs.forEach(t=>t.addEventListener('click',()=>setFilter(t.dataset.filter)));
render();

function runSmartSearch(){
  const q=document.getElementById('smartInput').value.trim();
  fakeSuccess(q?`Suche gestartet: "${q}"`:'Bitte Suchbegriff eingeben');
}

function openModal(id){document.getElementById(id).classList.add('show')}
function closeModal(id){document.getElementById(id).classList.remove('show')}
function fakeSuccess(msg){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}

document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}));
