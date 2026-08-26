/* Allenamenti — Volley 2001 Garlasco
   Dati locali in IndexedDB. L'export su File e' la copia che sopravvive all'app. */

// campo: quello che si apre per primo scegliendo l'area. Sempre cambiabile.
const AREE = [
  {k:'RIS', n:'Riscaldamento',    campo:'bianco'},
  {k:'TEC', n:'Parte tecnica',    campo:'intero'},
  {k:'SIN', n:'Sintetica',        campo:'intero'},
  {k:'GIO', n:'Gioco principale', campo:'intero'},
  {k:'APP', n:'Appunti',          campo:'bianco'},   // riunioni, briefing, promemoria
];
// aree che non sono esercitazioni: restano fuori dall'eserciziario
const NON_ESERCIZI = ['APP'];
const RUOLI = ['P1','P2','O1','O2','S1','S2','S3','S4','C1','C2','C3','C4','L1','L2','U'];
const CAMPI = [
  {k:'intero', n:'Campo intero'},
  {k:'meta',   n:'Mezzo campo'},
  {k:'doppio', n:'Due campi'},
  {k:'bianco', n:'Foglio bianco'},
];

/* ---------------- archivio locale ---------------- */
const DB = {
  db:null,
  apri(){
    return new Promise((ris,rif)=>{
      const r = indexedDB.open('allenamenti',1);
      r.onupgradeneeded = e => {
        const d = e.target.result;
        if(!d.objectStoreNames.contains('sessioni')) d.createObjectStore('sessioni',{keyPath:'id'});
        if(!d.objectStoreNames.contains('config'))   d.createObjectStore('config',{keyPath:'k'});
      };
      r.onsuccess = e => { this.db = e.target.result; ris(); };
      r.onerror  = () => rif(r.error);
    });
  },
  put(store,val){ return new Promise((ris,rif)=>{
    const t=this.db.transaction(store,'readwrite'); t.objectStore(store).put(val);
    t.oncomplete=ris; t.onerror=()=>rif(t.error); }); },
  get(store,k){ return new Promise((ris,rif)=>{
    const r=this.db.transaction(store).objectStore(store).get(k);
    r.onsuccess=()=>ris(r.result); r.onerror=()=>rif(r.error); }); },
  tutte(store){ return new Promise((ris,rif)=>{
    const r=this.db.transaction(store).objectStore(store).getAll();
    r.onsuccess=()=>ris(r.result||[]); r.onerror=()=>rif(r.error); }); },
  elimina(store,k){ return new Promise((ris,rif)=>{
    const t=this.db.transaction(store,'readwrite'); t.objectStore(store).delete(k);
    t.oncomplete=ris; t.onerror=()=>rif(t.error); }); },
};

let rosa = {}, ospiti = [], sessione = null, salvaTimer = null;

/* ---------------- disegno del campo ---------------- */
function css(v){ return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

function disegnaCampo(ctx,W,H,tipo){
  const line=css('--line'), campo=css('--campo'), campo2=css('--campo2');
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle=css('--surface'); ctx.fillRect(0,0,W,H);
  if(tipo==='bianco'){
    ctx.strokeStyle=line; ctx.lineWidth=1;
    for(let i=1;i<7;i++){const y=H*i/7;
      ctx.beginPath(); ctx.moveTo(W*0.04,y); ctx.lineTo(W*0.96,y); ctx.stroke();}
    return;
  }
  const dis=(x,y,w,h,meta)=>{
    ctx.fillStyle=campo; ctx.fillRect(x,y,w,h);
    if(!meta){ ctx.fillStyle=campo2; ctx.fillRect(x+w*0.25,y,w*0.5,h); }
    else { ctx.fillStyle=campo2; ctx.fillRect(x+w*0.5,y,w*0.5,h); }
    ctx.strokeStyle=line; ctx.lineWidth=1.2; ctx.strokeRect(x,y,w,h);
    const div = meta?[0.5]:[0.25,0.5,0.75];
    div.forEach(f=>{ctx.beginPath();
      ctx.moveTo(x+w*f,y); ctx.lineTo(x+w*f,y+h); ctx.stroke();});
  };
  if(tipo==='intero') dis(W*0.05,H*0.10,W*0.90,H*0.52,false);
  else if(tipo==='meta') dis(W*0.28,H*0.10,W*0.44,H*0.52,true);
  else if(tipo==='doppio'){
    dis(W*0.04,H*0.10,W*0.44,H*0.44,false);
    dis(W*0.52,H*0.10,W*0.44,H*0.44,false);
  }
  ctx.strokeStyle=line; ctx.lineWidth=1;
  const y0 = tipo==='doppio'?0.62:0.70;
  for(let i=0;i<3;i++){const y=H*(y0+i*0.10);
    if(y>H-4) break;
    ctx.beginPath(); ctx.moveTo(W*0.04,y); ctx.lineTo(W*0.96,y); ctx.stroke();}
}

/* ---------------- scrittura con la Pencil ---------------- */
function attaccaPenna(cv, blocco){
  const ctx=cv.getContext('2d');
  const DPR=Math.min(devicePixelRatio||1,3);
  let W=0,H=0,cur=null,activeId=null,drawn=0;
  const minW=1.5, gain=2.8, expo=0.7;

  function layout(){
    const w=cv.clientWidth;
    if(!w){ return; }               // non ancora impaginato: si riprova all'evento di resize
    W=w; H=Math.round(W*(blocco.campo==='bianco'?0.42:0.58));
    cv.style.height=H+'px'; cv.width=Math.round(W*DPR); cv.height=Math.round(H*DPR);
    ctx.setTransform(DPR,0,0,DPR,0,0); ridisegna();
  }
  function paint(s,from){
    if(s.length<2) return;
    ctx.strokeStyle=css('--pen'); ctx.lineCap='round'; ctx.lineJoin='round';
    for(let i=Math.max(1,from);i<s.length;i++){
      const a=s[i-1], b=s[i];
      ctx.beginPath(); ctx.lineWidth=(a.w+b.w)/2; ctx.moveTo(a.x*W,a.y*H);
      if(i+1<s.length){const c=s[i+1];
        ctx.quadraticCurveTo(b.x*W,b.y*H,(b.x+c.x)/2*W,(b.y+c.y)/2*H);
      } else ctx.lineTo(b.x*W,b.y*H);
      ctx.stroke();
    }
  }
  function ridisegna(){
    disegnaCampo(ctx,W,H,blocco.campo);
    for(const s of blocco.tratti) paint(s,1);
    if(cur) paint(cur,1);
  }
  function pt(e){
    if(!W||!H) return null;         // senza dimensioni le coordinate sarebbero infinite
    const r=cv.getBoundingClientRect();
    let pr=e.pressure; if(!(pr>0)) pr=0.35;
    return {x:(e.clientX-r.left)/W, y:(e.clientY-r.top)/H, w:minW+Math.pow(pr,expo)*gain};
  }
  // distanza in pixel fra un punto e un segmento
  function distSeg(px,py,ax,ay,bx,by){
    const dx=bx-ax, dy=by-ay, l2=dx*dx+dy*dy;
    let t = l2 ? ((px-ax)*dx+(py-ay)*dy)/l2 : 0;
    t = Math.max(0,Math.min(1,t));
    return Math.hypot(px-(ax+t*dx), py-(ay+t*dy));
  }
  const RAGGIO=13;                       // tolleranza della gomma, in pixel
  function cancellaSotto(e){
    if(!W||!H) return false;
    const r=cv.getBoundingClientRect();
    const px=e.clientX-r.left, py=e.clientY-r.top;
    let tolto=false;
    for(let k=blocco.tratti.length-1;k>=0;k--){
      const s=blocco.tratti[k];
      for(let i=1;i<s.length;i++){
        if(distSeg(px,py,s[i-1].x*W,s[i-1].y*H,s[i].x*W,s[i].y*H) <= RAGGIO){
          blocco.tratti.splice(k,1); tolto=true; break;
        }
      }
    }
    if(tolto){ ridisegna(); segnaModifica(); }
    return tolto;
  }
  // il pennino rovesciato, dove esiste, cancella sempre
  function inGomma(e){ return blocco.gomma || e.pointerType==='eraser'; }
  cv.addEventListener('pointerdown',e=>{
    if(e.pointerType!=='pen' && e.pointerType!=='eraser' && !blocco.dito){
      e.preventDefault(); return; }
    // se un tratto precedente e' rimasto aperto (chiusura mai arrivata) lo si
    // conclude qui: altrimenti il canvas resterebbe bloccato per sempre
    if(activeId!==null) fine(null);
    activeId=e.pointerId; e.preventDefault();
    if(inGomma(e)){ cancellaSotto(e); return; }
    const q=pt(e); if(!q){ activeId=null; return; }
    cur=[q]; drawn=1;
  },{passive:false});
  function move(e){
    if(e.pointerId!==activeId) return;
    if(inGomma(e)){ cancellaSotto(e); e.preventDefault(); return; }
    if(cur===null) return;
    // se la lista dei punti intermedi e' vuota si usa l'evento stesso:
    // altrimenti il tratto verrebbe scartato
    let evs=e.getCoalescedEvents?e.getCoalescedEvents():null;
    if(!evs||!evs.length) evs=[e];
    for(const ev of evs){
      const q=pt(ev); if(!q) continue;
      const l=cur[cur.length-1];
      if(Math.hypot((q.x-l.x)*W,(q.y-l.y)*H)<0.4) continue;
      cur.push(q);
    }
    paint(cur,drawn); drawn=cur.length-1; e.preventDefault();
  }
  if('onpointerrawupdate' in cv) cv.addEventListener('pointerrawupdate',move,{passive:false});
  cv.addEventListener('pointermove',move,{passive:false});
  function fine(e){
    if(e && activeId!==null && e.pointerId!==activeId) return;
    if(cur && cur.length>1){ blocco.tratti.push(cur); segnaModifica(); }
    cur=null; activeId=null; drawn=0;
  }
  cv.addEventListener('pointerup',fine);
  cv.addEventListener('pointercancel',fine);
  cv.addEventListener('touchstart',e=>{if(!blocco.dito)e.preventDefault();},{passive:false});
  cv.addEventListener('touchmove', e=>{if(!blocco.dito)e.preventDefault();},{passive:false});
  addEventListener('resize',layout);
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',ridisegna);
  // impagina appena il canvas riceve una dimensione, qualunque ne sia il motivo
  if(window.ResizeObserver){
    const ro=new ResizeObserver(()=>{ if(cv.clientWidth && cv.clientWidth!==W) layout(); });
    ro.observe(cv);
  }
  setTimeout(layout,0);
  return {layout,ridisegna};
}

/* ---------------- tag automatici ---------------- */
const FOND=[['battuta',/\bbatt/i],['ricezione',/\bric/i],['attacco',/\battacc/i],
  ['difesa',/\bdifes/i],['alzata',/\balzat/i],['muro',/\bmuro\b/i],['palleggio',/\bpalleggi/i]];
const FASE=[['C/P',/\bc\/p\b/i],['B/P',/\bb\/p\b/i],['F/B',/\bf\/b\b/i],['P/A',/\bp\/a\b/i],
  ['C/A',/\bc\/a\b/i],['conferma',/\bconferma/i]];
const NOMI=[['Mini-Set',/\bmini\s*-?\s*set/i],['Bagherone',/\bbagherone/i],['W.U.',/\bw\.?\s?u\.?\b/i],
  ['Coppie',/\bcoppie\b/i],['Terzetti',/\bterzetti/i],['Quartetti',/\bquartetti/i],
  ['Stazioni',/\bstazioni/i],['Circuito',/\bcircuit/i]];
const FORM=[['N vs N',/\d\s*vs\s*\d/i],['singolo',/\bsingol/i],['gruppi',/\bgruppi\b/i]];

function tagDi(t){
  const o=[];
  for(const [l,r] of NOMI) if(r.test(t)) o.push([l,'n']);
  for(const [l,r] of FOND) if(r.test(t)) o.push([l,'f']);
  for(const [l,r] of FASE) if(r.test(t)) o.push([l,'']);
  for(const [l,r] of FORM) if(r.test(t)) o.push([l,'']);
  return o;
}
function spezza(testo,area){
  const es = testo.split(/\s*;\s*|\s*\/\/\s*/).map(s=>s.trim()).filter(Boolean);
  if(area!=='GIO') return es.flatMap(e=>e.split(/\s*\+\s*/).map(s=>s.trim()).filter(Boolean));
  return es;
}

/* ---------------- sessione ---------------- */
function nuovaSessione(n){
  const oggi = new Date();
  const iso = new Date(oggi.getTime()-oggi.getTimezoneOffset()*6e4).toISOString().slice(0,10);
  return {id:'s_'+Date.now(), num:n||1, data:iso, tema:'', presenti:[], ospiti:[],
          blocchi:[], creata:Date.now(), modificata:Date.now()};
}
function nuovoBlocco(area){
  return {id:'b_'+Date.now()+'_'+Math.round(performance.now()*1000%1e6),
          area, campo:(AREE.find(a=>a.k===area)||{}).campo||'intero',
          testo:'', nota:'', ruoli:[], tratti:[], dito:false, gomma:false};
}
function segnaModifica(){
  if(!sessione) return;
  sessione.modificata=Date.now();
  clearTimeout(salvaTimer);
  salvaTimer=setTimeout(salva,600);
}
async function salva(){
  if(!sessione) return;
  raccogli();
  await DB.put('sessioni',sessione);
  const d=new Date();
  stato('salvato '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'));
}
function stato(t){ document.getElementById('stato').textContent=t; }
function raccogli(){
  sessione.num  = +document.getElementById('fNum').value || 1;
  sessione.data = document.getElementById('fData').value;
  sessione.tema = document.getElementById('fTema').value;
}

/* ---------------- interfaccia ---------------- */
function mostra(p){
  for(const id of ['pgAllenamento','pgRosa','pgArchivio'])
    document.getElementById(id).classList.toggle('hidden', id!==p);
}
function rendiRosa(){
  const g=document.getElementById('rosaGrid'); g.innerHTML='';
  RUOLI.forEach(r=>{
    const d=document.createElement('div'); d.className='ruolo';
    const b=document.createElement('b'); b.textContent=r;
    const i=document.createElement('input'); i.type='text'; i.value=rosa[r]||'';
    i.placeholder='—'; i.setAttribute('aria-label','giocatore '+r);
    i.addEventListener('input',()=>{ rosa[r]=i.value.trim();
      DB.put('config',{k:'rosa',v:rosa}); rendiPresenti(); });
    d.append(b,i); g.appendChild(d);
  });
}
function rendiPresenti(){
  const p=document.getElementById('presenti'); p.innerHTML='';
  const con = RUOLI.filter(r=>rosa[r]);
  if(!con.length && !(sessione&&sessione.ospiti.length)){
    p.innerHTML='<span style="color:var(--muted);font-size:14px">'+
      'Compila prima la rosa (in alto a destra).</span>';
    document.getElementById('nPres').textContent=''; return;
  }
  con.forEach(r=>{
    const b=document.createElement('button'); b.className='pchip';
    b.innerHTML='<small>'+r+'</small> '+rosa[r];
    b.classList.toggle('on', !!(sessione && sessione.presenti.includes(r)));
    b.addEventListener('click',()=>{
      if(!sessione) return;
      const i=sessione.presenti.indexOf(r);
      if(i<0) sessione.presenti.push(r); else sessione.presenti.splice(i,1);
      b.classList.toggle('on'); contaPresenti(); segnaModifica();
    });
    p.appendChild(b);
  });
  // ospiti della seduta: sempre considerati presenti, si tolgono col tocco
  (sessione?sessione.ospiti:[]).forEach((o,k)=>{
    const b=document.createElement('button'); b.className='pchip osp on';
    b.innerHTML='<small>'+o.ruolo+'</small> '+o.nome+' <span aria-hidden="true">×</span>';
    b.title='ospite — tocca per toglierlo';
    b.addEventListener('click',()=>{ sessione.ospiti.splice(k,1);
      segnaModifica(); rendiPresenti(); });
    p.appendChild(b);
  });
  const add=document.createElement('button'); add.className='pchip agg';
  add.textContent='+ ospite';
  add.addEventListener('click',apriOspite);
  p.appendChild(add);
  contaPresenti();
}
function apriOspite(){
  if(!sessione) return;
  const liberi = RUOLI.filter(r=>!rosa[r]);
  const suggerito = liberi[0] || 'U';
  const ruolo = (prompt('Ruolo dell\'ospite ('+RUOLI.join(' ')+')', suggerito)||'').trim().toUpperCase();
  if(!ruolo) return;
  if(!RUOLI.includes(ruolo)){ alert('Ruolo non valido.'); return; }
  const elenco = ospiti.length ? '\n\nGia\' usati: '+ospiti.join(', ') : '';
  const nome = (prompt('Nome dell\'ospite per '+ruolo+elenco, '')||'').trim();
  if(!nome) return;
  sessione.ospiti.push({ruolo,nome});
  if(!ospiti.includes(nome)){ ospiti.push(nome); DB.put('config',{k:'ospiti',v:ospiti}); }
  segnaModifica(); rendiPresenti();
}
function contaPresenti(){
  const n = sessione ? sessione.presenti.length + sessione.ospiti.length : 0;
  const o = sessione ? sessione.ospiti.length : 0;
  document.getElementById('nPres').textContent =
    n ? '· '+n+(o?' (di cui '+o+' ospit'+(o===1?'e':'i')+')':'') : '';
}
function rendiBlocchi(){
  const w=document.getElementById('blocchi'); w.innerHTML='';
  sessione.blocchi.forEach((b,idx)=>w.appendChild(rendiBlocco(b,idx)));
}
function rendiBlocco(b,idx){
  if(b.gomma===undefined) b.gomma=false;
  const el=document.createElement('div'); el.className='blk';
  const area=AREE.find(a=>a.k===b.area)||AREE[1];

  const h=document.createElement('header');
  h.innerHTML='<span class="area">'+area.n+'</span>';
  const sel=document.createElement('select');
  sel.style.width='auto'; sel.style.fontSize='13px'; sel.style.padding='3px 7px';
  CAMPI.forEach(c=>{const o=document.createElement('option');
    o.value=c.k; o.textContent=c.n; o.selected=c.k===b.campo; sel.appendChild(o);});
  sel.addEventListener('change',()=>{ b.campo=sel.value; segnaModifica(); rendiBlocchi(); });
  h.appendChild(sel);
  const sp=document.createElement('span'); sp.className='sp'; h.appendChild(sp);
  const su=document.createElement('button'); su.textContent='↑'; su.title='sposta su';
  su.addEventListener('click',()=>{ if(idx>0){
    [sessione.blocchi[idx-1],sessione.blocchi[idx]]=[sessione.blocchi[idx],sessione.blocchi[idx-1]];
    segnaModifica(); rendiBlocchi(); }});
  const gi=document.createElement('button'); gi.textContent='↓'; gi.title='sposta giu';
  gi.addEventListener('click',()=>{ if(idx<sessione.blocchi.length-1){
    [sessione.blocchi[idx+1],sessione.blocchi[idx]]=[sessione.blocchi[idx],sessione.blocchi[idx+1]];
    segnaModifica(); rendiBlocchi(); }});
  const el2=document.createElement('button'); el2.textContent='Elimina';
  el2.addEventListener('click',()=>{ if(confirm('Elimino questa esercitazione?')){
    sessione.blocchi.splice(idx,1); segnaModifica(); rendiBlocchi(); }});
  h.append(su,gi,el2);

  const body=document.createElement('div'); body.className='body';
  const t=document.createElement('input'); t.type='text'; t.className='tit'; t.value=b.testo;
  t.placeholder = b.area==='GIO' ? 'es. C/P + conferma P/A  (il + e’ il pallone successivo)'
                                 : 'es. Batt / Rice + Mini-Set P/A';
  t.setAttribute('aria-label','esercitazioni');
  const tg=document.createElement('div');
  function tags(){
    tg.innerHTML='';
    spezza(b.testo,b.area).forEach(e=>{
      const s=document.createElement('span'); s.className='tag g'; s.textContent=e; tg.appendChild(s);
      tagDi(e).forEach(([l,c])=>{const x=document.createElement('span');
        x.className='tag'+(c==='g'?' g':''); x.textContent=l; tg.appendChild(x);});
    });
  }
  t.addEventListener('input',()=>{ b.testo=t.value; tags(); segnaModifica(); });
  body.append(t,tg);

  const stage=document.createElement('div'); stage.className='stage';
  const cv=document.createElement('canvas'); stage.appendChild(cv); body.appendChild(stage);

  const tools=document.createElement('div'); tools.className='tools';
  const und=document.createElement('button'); und.className='btn'; und.textContent='Annulla tratto';
  const gom=document.createElement('button'); gom.className='btn'+(b.gomma?' on':'');
  gom.textContent='Gomma'; gom.title='tocca i tratti da cancellare';
  const dito=document.createElement('button'); dito.className='btn'; dito.textContent='Solo Pencil';
  const nota=document.createElement('input'); nota.type='text'; nota.value=b.nota;
  nota.placeholder='vincoli, punteggio, note'; nota.style.marginTop='8px';
  nota.addEventListener('input',()=>{ b.nota=nota.value; segnaModifica(); });
  tools.append(und,gom,dito);
  body.append(tools,nota);

  if(b.area==='TEC'||b.area==='SIN'){
    const rl=document.createElement('div'); rl.className='tools';
    ['P','O','S','C','L'].forEach(r=>{
      const x=document.createElement('button'); x.className='btn'+(b.ruoli.includes(r)?' on':'');
      x.textContent=r;
      x.addEventListener('click',()=>{ const i=b.ruoli.indexOf(r);
        if(i<0) b.ruoli.push(r); else b.ruoli.splice(i,1);
        x.classList.toggle('on'); segnaModifica(); });
      rl.appendChild(x);
    });
    const et=document.createElement('span'); et.className='stato';
    et.textContent='ruoli coinvolti'; rl.appendChild(et);
    body.appendChild(rl);
  }

  el.append(h,body);
  setTimeout(()=>{
    const p=attaccaPenna(cv,b);
    und.addEventListener('click',()=>{ b.tratti.pop(); p.ridisegna(); segnaModifica(); });
    gom.addEventListener('click',()=>{ b.gomma=!b.gomma;
      gom.classList.toggle('on',b.gomma);
      stage.style.cursor = b.gomma ? 'cell' : 'crosshair'; });
    dito.addEventListener('click',()=>{ b.dito=!b.dito;
      dito.textContent=b.dito?'Pencil + dito':'Solo Pencil'; dito.classList.toggle('on',b.dito); });
  },0);
  tags();
  return el;
}

/* ---------------- archivio ---------------- */
async function rendiArchivio(){
  aggiornaAvviso();
  const l=document.getElementById('listaSess');
  const ss=(await DB.tutte('sessioni')).sort((a,b)=>(b.data||'').localeCompare(a.data||''));
  if(!ss.length){ l.innerHTML='<p class="vuoto">Nessun allenamento salvato.</p>'; return; }
  l.innerHTML='';
  ss.forEach(s=>{
    const d=document.createElement('div'); d.className='sess';
    const n=s.blocchi.length;
    d.innerHTML='<b>'+String(s.num).padStart(3,'0')+'</b>'+
      '<div><div>'+(s.tema||'<i style="color:var(--muted)">senza tema</i>')+'</div>'+
      '<div class="meta">'+s.data+' · '+n+' esercitazion'+(n===1?'e':'i')+
      ' · '+(s.presenti.length+((s.ospiti||[]).length))+' presenti</div></div>'+
      '<span class="sp"></span>';
    const b=document.createElement('button'); b.className='btn'; b.textContent='Apri';
    b.addEventListener('click',async e=>{ e.stopPropagation();
      sessione=s; caricaForm(); mostra('pgAllenamento'); });
    const x=document.createElement('button'); x.className='btn'; x.textContent='Elimina';
    x.addEventListener('click',async e=>{ e.stopPropagation();
      if(confirm('Elimino l’allenamento '+s.num+'?')){ await DB.elimina('sessioni',s.id);
        rendiArchivio(); }});
    d.append(b,x); l.appendChild(d);
  });
}
function caricaForm(){
  if(!sessione.ospiti) sessione.ospiti=[];
  document.getElementById('fNum').value=sessione.num;
  document.getElementById('fData').value=sessione.data;
  document.getElementById('fTema').value=sessione.tema;
  rendiPresenti(); rendiBlocchi(); stato('—');
}
async function scarica(nome,testo,tipo){
  const mime = tipo||'application/json';
  const b=new Blob([testo],{type:mime});
  // su iPad il foglio di condivisione permette "Salva su File": e' la via buona
  try{
    const f=new File([b],nome,{type:mime});
    if(navigator.canShare && navigator.canShare({files:[f]})){
      await navigator.share({files:[f], title:nome});
      await segnaEsportazione(); return 'condiviso';
    }
  }catch(err){ if(err && err.name==='AbortError') return 'annullato'; }
  const u=URL.createObjectURL(b);
  const a=document.createElement('a'); a.href=u; a.download=nome;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(u),4000);
  await segnaEsportazione(); return 'scaricato';
}
async function segnaEsportazione(){
  await DB.put('config',{k:'ultimoExport', v:Date.now()});
  aggiornaAvviso();
}
async function aggiornaAvviso(){
  const el=document.getElementById('avvisoExport'); if(!el) return;
  const r=await DB.get('config','ultimoExport');
  const n=(await DB.tutte('sessioni')).length;
  if(!n){ el.textContent=''; el.className='hidden'; return; }
  if(!r||!r.v){
    el.className='avviso';
    el.textContent='Non hai mai esportato una copia. I dati vivono solo su questo dispositivo.';
    return;
  }
  const gg=Math.floor((Date.now()-r.v)/864e5);
  if(gg>=14){
    el.className='avviso';
    el.textContent='Ultima copia esportata '+gg+' giorni fa. Conviene rifarla.';
  } else {
    el.className='avviso ok';
    el.textContent='Ultima copia esportata '+(gg===0?'oggi':gg+' giorn'+(gg===1?'o':'i')+' fa')+'.';
  }
}

/* ---------------- avvio ---------------- */
(async function(){
  await DB.apri();
  const c=await DB.get('config','rosa'); rosa=(c&&c.v)||{};
  const g=await DB.get('config','ospiti'); ospiti=(g&&g.v)||[];
  const ss=await DB.tutte('sessioni');
  const ultimo=ss.reduce((m,s)=>Math.max(m,s.num||0),0);
  // Riprende l'allenamento di oggi invece di aprirne uno nuovo: se la pagina
  // si ricarica in palestra non si perde la seduta in corso.
  const oggi=new Date();
  const iso=new Date(oggi.getTime()-oggi.getTimezoneOffset()*6e4).toISOString().slice(0,10);
  const inCorso=ss.filter(s=>s.data===iso).sort((a,b)=>b.modificata-a.modificata)[0];
  sessione = inCorso || nuovaSessione(ultimo+1);
  rendiRosa(); caricaForm();
  if(inCorso) stato('ripreso l\'allenamento di oggi');

  document.getElementById('addArea').innerHTML='';
  AREE.forEach(a=>{
    const b=document.createElement('button'); b.className='btn'; b.textContent=a.n;
    b.addEventListener('click',()=>{ sessione.blocchi.push(nuovoBlocco(a.k));
      segnaModifica(); rendiBlocchi();
      setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}),60); });
    document.getElementById('addArea').appendChild(b);
  });

  document.getElementById('fNum').addEventListener('input',segnaModifica);
  document.getElementById('fData').addEventListener('input',segnaModifica);
  document.getElementById('fTema').addEventListener('input',segnaModifica);
  document.getElementById('bSalva').addEventListener('click',salva);
  document.getElementById('bPdf').addEventListener('click',()=>{ salva(); setTimeout(()=>print(),300); });
  document.getElementById('bNuovo').addEventListener('click',async()=>{
    await salva();
    const tutte=await DB.tutte('sessioni');
    const max=tutte.reduce((m,s)=>Math.max(m,s.num||0),0);
    sessione=nuovaSessione(max+1); caricaForm(); mostra('pgAllenamento');
  });
  document.getElementById('vRosa').addEventListener('click',()=>{rendiRosa();mostra('pgRosa');});
  document.getElementById('vArchivio').addEventListener('click',()=>{rendiArchivio();mostra('pgArchivio');});
  document.getElementById('expTutto').addEventListener('click',async()=>{
    const tutte=await DB.tutte('sessioni');
    const nome='allenamenti-'+new Date().toISOString().slice(0,10)+'.json';
    const esito=await scarica(nome, JSON.stringify(
      {versione:1, esportato:new Date().toISOString(), rosa, ospiti, sessioni:tutte},null,1));
    if(esito==='scaricato') alert('Salvato nei Download di Safari come '+nome+'.');
  });

  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  addEventListener('beforeunload',()=>{ if(sessione) DB.put('sessioni',sessione); });
})();
