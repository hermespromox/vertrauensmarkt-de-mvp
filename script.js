const listings = [
  {title:'Altbauwohnung · Berlin Mitte',meta:'2 Zimmer · 62m² · 1.280€/Monat',tags:['Immobilie','Verifiziert','Neu']},
  {title:'Senior Product Designer · München',meta:'Hybrid · 75–90k€ · Festanstellung',tags:['Job','Empfohlen']},
  {title:'Kinderbetreuung · Hamburg Eimsbüttel',meta:'Nachmittags · 3 Tage/Woche',tags:['Service','Top bewertet']},
  {title:'Steuerberater Empfehlung · Köln',meta:'KMU spezialisiert · 4.9 Bewertung',tags:['Empfehlung']},
  {title:'Handwerker Team · Frankfurt',meta:'Renovierung · kurzfristig verfügbar',tags:['Service','Schnelle Antwort']},
  {title:'WG Zimmer · Stuttgart Süd',meta:'Möbliert · ab sofort',tags:['Immobilie','Vertrauenskreis']}
];

const wrap = document.getElementById('listingCards');
wrap.innerHTML = listings.map(l=>`<article class="card"><div class="badges">${l.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div><h3>${l.title}</h3><p class="meta">${l.meta}</p><button class="btn ghost" onclick="fakeSuccess('Anfrage gesendet')">Anfrage senden</button></article>`).join('');

function openModal(id){document.getElementById(id).classList.add('show')}
function closeModal(id){document.getElementById(id).classList.remove('show')}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function fakeSuccess(msg){
  document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}));
