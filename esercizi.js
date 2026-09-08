// Esercizi della stagione 2024-25: nome, quante volte usato, anteprima.
const ESERCIZI = [
{
"n": "W.U.",
"q": 57,
"img": "7c1c2d73fd.jpg"
},
{
"n": "Batt / Rice",
"q": 32,
"img": "842d3b7ec2.jpg"
},
{
"n": "Coppie",
"q": 31,
"img": "9e1d451639.jpg"
},
{
"n": "Bagherone",
"q": 27,
"img": "ddf2c417fd.jpg"
},
{
"n": "Mini-Set P/A",
"q": 8,
"img": "74c5d1ad63.jpg"
},
{
"n": "Muro dai plinti",
"q": 7,
"img": "9692f18234.jpg"
},
{
"n": "Rice",
"q": 6,
"img": "6939278d66.jpg"
},
{
"n": "Mini-Set F/B",
"q": 5,
"img": "40541cde2a.jpg"
},
{
"n": "Rice / Attacco",
"q": 5,
"img": "6e7b286cb7.jpg"
},
{
"n": "Difesa e alzata",
"q": 5,
"img": "50bef4b989.jpg"
},
{
"n": "Rice campo A difesa campo B",
"q": 5,
"img": "1bdca23f00.jpg"
},
{
"n": "Alzate",
"q": 4,
"img": "3860ef9c69.jpg"
},
{
"n": "Mini-Set palla",
"q": 4,
"img": "b99e55867f.jpg"
},
{
"n": "Doppia difesa e alzata",
"q": 4,
"img": "0d94ba4e03.jpg"
},
{
"n": "Mini-Set palla spostata",
"q": 4,
"img": "917e7bfd58.jpg"
},
{
"n": "Difesa",
"q": 3,
"img": "804a5829cf.jpg"
},
{
"n": "Terzetti",
"q": 3,
"img": "9fdc08c46d.jpg"
},
{
"n": "Quartetti",
"q": 3,
"img": "7a2354370c.jpg"
},
{
"n": "Rice quadranti",
"q": 3,
"img": "ab3e8fa9e2.jpg"
},
{
"n": "Doppio attacco",
"q": 3,
"img": "bc39af6565.jpg"
},
{
"n": "Mini-Set palla !",
"q": 3,
"img": "b21387eab6.jpg"
},
{
"n": "Mini-Set da palla spostata",
"q": 3,
"img": "1d619fb7c9.jpg"
},
{
"n": "Alzata",
"q": 2,
"img": "a5fde0040d.jpg"
},
{
"n": "Battuta",
"q": 2,
"img": "34aa4f474a.jpg"
},
{
"n": "Muro a 3",
"q": 2,
"img": "06ee51a2a4.jpg"
},
{
"n": "Circuito",
"q": 2,
"img": "fcb30da44a.jpg"
},
{
"n": "Gioco alzate",
"q": 2,
"img": "8c172f000f.jpg"
},
{
"n": "C/P + conferma P/A",
"q": 2,
"img": "cbf97ce9d0.jpg"
},
{
"n": "Mini-Set F/B base 7",
"q": 2,
"img": "09ae692524.jpg"
},
{
"n": "Batt / Rice e attacco",
"q": 2,
"img": "5ea9fd37d5.jpg"
},
{
"n": "Attacco di palla alta",
"q": 2,
"img": "154c14478c.jpg"
},
{
"n": "Gioco femminile da F/B",
"q": 2,
"img": "2d080bd632.jpg"
},
{
"n": "Palleggiatori vs centrali",
"q": 2,
"img": "61b28c0865.jpg"
},
{
"n": "Rice / Attacco Centro / Avanti",
"q": 2,
"img": "dd49b78f67.jpg"
},
{
"n": "Hunger Games - C/P con conferma",
"q": 2,
"img": "1e8740d4b0.jpg"
},
{
"n": "Batt / Rice con attacco opposto",
"q": 2,
"img": "d497cdb7cb.jpg"
},
{
"n": "Mini-Set da attacco piedi a terra",
"q": 2,
"img": "524a862743.jpg"
},
{
"n": "C/P + palla ! + F/B da terzo tocco",
"q": 2,
"img": "377709813d.jpg"
},
{
"n": "Doppia difesa con alzata e copertura",
"q": 2,
"img": "5b1c9ccdfe.jpg"
},
{
"n": "Muro",
"q": 1,
"img": "10f8e6ddbb.jpg"
},
{
"n": "7/pipe",
"q": 1,
"img": "aa44732b54.jpg"
},
{
"n": "Pipe/8",
"q": 1,
"img": "44f8ab99ec.jpg"
},
{
"n": "Pipe/5",
"q": 1,
"img": "f4a438a20f.jpg"
},
{
"n": "Attacco",
"q": 1,
"img": "4ad1db72e1.jpg"
},
{
"n": "Pre gara",
"q": 1,
"img": "6cef0e1d15.jpg"
},
{
"n": "Stazioni",
"q": 1,
"img": "8bcf82be4b.jpg"
},
{
"n": "Ricezione",
"q": 1,
"img": "92874ccf9e.jpg"
},
{
"n": "Batt rice",
"q": 1,
"img": "4d3cabe2c0.jpg"
},
{
"n": "W.U. libero",
"q": 1,
"img": "91638ffc8c.jpg"
},
{
"n": "Gioco alzata",
"q": 1,
"img": "5e5461be2e.jpg"
},
{
"n": "Rice da cubo",
"q": 1,
"img": "bec33aa710.jpg"
},
{
"n": "Muro - aiuti",
"q": 1,
"img": "45084dbbfd.jpg"
},
{
"n": "Muro posti 4",
"q": 1,
"img": "e791409ecc.jpg"
},
{
"n": "Attacco 1T/8",
"q": 1,
"img": "52db148d36.jpg"
},
{
"n": "Difesa pag.2",
"q": 1,
"img": "4ab01f312c.jpg"
},
{
"n": "Royal Rumble",
"q": 1,
"img": "74621d875b.jpg"
},
{
"n": "Hunger Games",
"q": 1,
"img": "3c862c46d8.jpg"
},
{
"n": "7/palla sopra",
"q": 1,
"img": "6a5bba5161.jpg"
},
{
"n": "Alzate liberi",
"q": 1,
"img": "a47dbda1d4.jpg"
},
{
"n": "Lavoro gruppi",
"q": 1,
"img": "25da246509.jpg"
},
{
"n": "Difesa plinti",
"q": 1,
"img": "db5f164f71.jpg"
},
{
"n": "Liberi alzate",
"q": 1,
"img": "05925359b3.jpg"
},
{
"n": "Centro / Pipe",
"q": 1,
"img": "6bb971e313.jpg"
},
{
"n": "W.U. pre-gara",
"q": 1,
"img": "e5cabafb9e.jpg"
},
{
"n": "Palla spostata",
"q": 1,
"img": "85b0efe235.jpg"
},
{
"n": "Coppie guidata",
"q": 1,
"img": "60875030f2.jpg"
},
{
"n": "Battute libere",
"q": 1,
"img": "1c50753370.jpg"
},
{
"n": "Battuta / Rice",
"q": 1,
"img": "8872037c9f.jpg"
},
{
"n": "Attacco vs muro",
"q": 1,
"img": "bace5031c5.jpg"
},
{
"n": "Mini-Set 1 vs 1",
"q": 1,
"img": "3f982b5960.jpg"
},
{
"n": "Mini-Set da F/B",
"q": 1,
"img": "58ff7953d3.jpg"
},
{
"n": "Attacco 7/sopra",
"q": 1,
"img": "8b3ed15a9e.jpg"
},
{
"n": "Assetti di rice",
"q": 1,
"img": "e32262f272.jpg"
},
{
"n": "Mini-Set base 7",
"q": 1,
"img": "83104092a4.jpg"
},
{
"n": "Serie di palloni",
"q": 1,
"img": "5a41f1c694.jpg"
},
{
"n": "Torneo bagherone",
"q": 1,
"img": "c86b99c81d.jpg"
},
{
"n": "Muro per centrali",
"q": 1,
"img": "12ce8d01a5.jpg"
},
{
"n": "Muro - aiuti pipe",
"q": 1,
"img": "570a3b80b5.jpg"
},
{
"n": "Difesa dai plinti",
"q": 1,
"img": "a7afbbfdf8.jpg"
},
{
"n": "F/B + conferma P/A",
"q": 1,
"img": "7d1b4e15e3.jpg"
},
{
"n": "Attacco 2/3 dietro",
"q": 1,
"img": "e2610a6067.jpg"
},
{
"n": "Attacco 2/3 avanti",
"q": 1,
"img": "f6d7cd7422.jpg"
},
{
"n": "3vs3 seconda linea",
"q": 1,
"img": "de04d2efc7.jpg"
},
{
"n": "Cesto palleggiatori",
"q": 1,
"img": "89c1f1cca2.jpg"
},
{
"n": "Muro - propedeutico",
"q": 1,
"img": "8134c37196.jpg"
},
{
"n": "F/B con vincolo 2/3",
"q": 1,
"img": "8c959a18d6.jpg"
},
{
"n": "Attacco primo tempo",
"q": 1,
"img": "4333779e9c.jpg"
},
{
"n": "C/P + P/A + P/A x B",
"q": 1,
"img": "724461f192.jpg"
},
{
"n": "1vs1 singoli da F/B",
"q": 1,
"img": "7e3406d4c4.jpg"
},
{
"n": "Terzetti con navetta",
"q": 1,
"img": "5035de5558.jpg"
},
{
"n": "Palla coppie guidata",
"q": 1,
"img": "f46bda5aeb.jpg"
},
{
"n": "Attacco su due terzi",
"q": 1,
"img": "3e8197a793.jpg"
},
{
"n": "Sintetico meta campo",
"q": 1,
"img": "ce3b53570d.jpg"
},
{
"n": "Sintetico 2/3 avanti",
"q": 1,
"img": "e3d05fdef7.jpg"
},
{
"n": "P# vs P! contro muro",
"q": 1,
"img": "2000ac7a15.jpg"
},
{
"n": "Palleggiatori con me",
"q": 1,
"img": "96d1046f0f.jpg"
},
{
"n": "Lavoro fisico tecnico",
"q": 1,
"img": "6fe8cbcec6.jpg"
},
{
"n": "Sintetico attacco 2/3",
"q": 1,
"img": "6744b1909a.jpg"
},
{
"n": "Batt / Rice quadranti",
"q": 1,
"img": "c6532c514a.jpg"
},
{
"n": "C/P + F/B + P/A per B",
"q": 1,
"img": "6027c12948.jpg"
},
{
"n": "Palleggiatori palla !",
"q": 1,
"img": "497b792d79.jpg"
},
{
"n": "Batt / Rice solo flot",
"q": 1,
"img": "5e5a666312.jpg"
},
{
"n": "Difesa fuori dal campo",
"q": 1,
"img": "a193d2c72c.jpg"
},
{
"n": "Aiuti a muro su pipe 1",
"q": 1,
"img": "72fa97b6b7.jpg"
},
{
"n": "Doppio difesa e alzata",
"q": 1,
"img": "24cc469483.jpg"
},
{
"n": "C/P + conferma palla !",
"q": 1,
"img": "04c6e10779.jpg"
},
{
"n": "Doppio attacco vs muro",
"q": 1,
"img": "ca193bb52b.jpg"
},
{
"n": "Rice con spara palloni",
"q": 1,
"img": "c2d90ce735.jpg"
},
{
"n": "Rice coppie lungolinea",
"q": 1,
"img": "4c610ac60a.jpg"
},
{
"n": "Rice / Attacco vs muro",
"q": 1,
"img": "14ee636b58.jpg"
},
{
"n": "Sovraccarico al centro",
"q": 1,
"img": "b833270b52.jpg"
},
{
"n": "Palla a coppie guidata",
"q": 1,
"img": "5ea55c2a38.jpg"
},
{
"n": "Circuiti Rice / Difesa",
"q": 1,
"img": "fa349c2fb1.jpg"
},
{
"n": "Attacco esterni vs muro",
"q": 1,
"img": "4f825a484b.jpg"
},
{
"n": "Mano dai plinti singolo",
"q": 1,
"img": "9e20caeaa0.jpg"
},
{
"n": "Batt / Rice no palleggi",
"q": 1,
"img": "d121d67d19.jpg"
},
{
"n": "Mini-Set F/B in lettura",
"q": 1,
"img": "d2a680b95b.jpg"
},
{
"n": "Rice singola come pag.2",
"q": 1,
"img": "beea352e7b.jpg"
},
{
"n": "Batt/rice/attacco pag.2",
"q": 1,
"img": "ac96432ffc.jpg"
},
{
"n": "Terzetti difesa e alzata",
"q": 1,
"img": "81d005698b.jpg"
},
{
"n": "Ricezione + F/B a base 7",
"q": 1,
"img": "07dbb1c76c.jpg"
},
{
"n": "Mini-Set P/A rice brutta",
"q": 1,
"img": "48e33f9016.jpg"
},
{
"n": "Mini-Set F/B per 7/sopra",
"q": 1,
"img": "b4524e4ede.jpg"
},
{
"n": "Mini-Set F/B vincolo 2/3",
"q": 1,
"img": "9850de5b8a.jpg"
},
{
"n": "Mini-Set gioco femminile",
"q": 1,
"img": "243284af16.jpg"
},
{
"n": "Mini-Set con vincoli 2/3",
"q": 1,
"img": "0b379a3db2.jpg"
},
{
"n": "Batt / Rice su due campi",
"q": 1,
"img": "f93074d08b.jpg"
},
{
"n": "Rice / Attacco al centro",
"q": 1,
"img": "bd825230d6.jpg"
},
{
"n": "Sintetico attacco base 7",
"q": 1,
"img": "1f259b74ca.jpg"
},
{
"n": "Rice e attacco alternati",
"q": 1,
"img": "2731173250.jpg"
},
{
"n": "Difesa / Alzata terzetti",
"q": 1,
"img": "f9dcd6b5b3.jpg"
},
{
"n": "Doppia difesa con attacco",
"q": 1,
"img": "5f13f64d02.jpg"
},
{
"n": "Battuta / Rice con alzata",
"q": 1,
"img": "63073fbda7.jpg"
},
{
"n": "Muro centrali con esterni",
"q": 1,
"img": "5c9134fed8.jpg"
},
{
"n": "Battuta rice come a pag.2",
"q": 1,
"img": "cf45d63100.jpg"
},
{
"n": "F/B con punto dopo difesa",
"q": 1,
"img": "5467929c69.jpg"
},
{
"n": "Doppia difesa e copertura",
"q": 1,
"img": "5ce4f73bba.jpg"
},
{
"n": "Mini-Set P/A no palleggio",
"q": 1,
"img": "9b45a52ce2.jpg"
},
{
"n": "Mini-Set P/A per muro a 3",
"q": 1,
"img": "2e32e03c5c.jpg"
},
{
"n": "Mini-Set da difesa libera",
"q": 1,
"img": "376e0b95aa.jpg"
},
{
"n": "3 palloni 2 volte x campo",
"q": 1,
"img": "b93d769009.jpg"
},
{
"n": "Mini-Set palla !- vs muro",
"q": 1,
"img": "cf9bc616a7.jpg"
},
{
"n": "C/P + conferma da attacco",
"q": 1,
"img": "028a2c24c2.jpg"
},
{
"n": "Rice / Attacco vs fitball",
"q": 1,
"img": "9972897830.jpg"
},
{
"n": "Battuta rice Linea / Diago",
"q": 1,
"img": "cfa2506431.jpg"
},
{
"n": "Doppio attacco primo tempo",
"q": 1,
"img": "31c62b9fe6.jpg"
},
{
"n": "Rice con attacco al centro",
"q": 1,
"img": "1026179031.jpg"
},
{
"n": "Sintetico attacco 1-7-pipe",
"q": 1,
"img": "d2933d2c30.jpg"
},
{
"n": "Doppio attacco contro muro",
"q": 1,
"img": "fab9a450ea.jpg"
},
{
"n": "Batt / Rice con due plinti",
"q": 1,
"img": "b35bc93ba9.jpg"
},
{
"n": "Combinazioni 1/palla rapida",
"q": 1,
"img": "26bb0e1748.jpg"
},
{
"n": "Difesa da plinto lungolinea",
"q": 1,
"img": "f7aeb6965a.jpg"
},
{
"n": "Gruppo ridotto - alzata P/A",
"q": 1,
"img": "12125ee3a5.jpg"
},
{
"n": "Batt / Rice con primo tempo",
"q": 1,
"img": "e26c8143de.jpg"
},
{
"n": "Coppie palleggiatori con me",
"q": 1,
"img": "5a3a6a8ce3.jpg"
},
{
"n": "Mini-Set da palla difficile",
"q": 1,
"img": "faf4e2fbb5.jpg"
},
{
"n": "Mini-Set da F/B terzo tocco",
"q": 1,
"img": "cd9aa6eafa.jpg"
},
{
"n": "Batt/rice/attacco al centro",
"q": 1,
"img": "f7d84eba53.jpg"
},
{
"n": "Mini-Set partenza da difesa",
"q": 1,
"img": "21a337bad6.jpg"
},
{
"n": "C/P + F/B per B + P/A per A",
"q": 1,
"img": "b4b9d4d088.jpg"
},
{
"n": "Difesa / Alzata a quartetto",
"q": 1,
"img": "f9e0e313ae.jpg"
},
{
"n": "Mini-Set 10 palloni di fila",
"q": 1,
"img": "eebffacc39.jpg"
},
{
"n": "Sintetico 7/sopra o 1/dietro",
"q": 1,
"img": "7688487915.jpg"
},
{
"n": "C/P + P/A + battuta no bonus",
"q": 1,
"img": "7f10daaa37.jpg"
},
{
"n": "Primo tempo in ricostruzione",
"q": 1,
"img": "2126dd2eab.jpg"
},
{
"n": "Rice e attacco di primo tempo",
"q": 1,
"img": "eec8344f06.jpg"
},
{
"n": "Palleggiatori contro centrali",
"q": 1,
"img": "d683761f56.jpg"
},
{
"n": "Muro - posizionamento e tempo",
"q": 1,
"img": "e5060c2604.jpg"
},
{
"n": "C/P + F/B Centro / Pipe + P/A",
"q": 1,
"img": "cf9f817b54.jpg"
},
{
"n": "C/P + conferma palla spostata",
"q": 1,
"img": "a43845c0bb.jpg"
},
{
"n": "Mini-Set con partenza da muro",
"q": 1,
"img": "3032c45a2f.jpg"
},
{
"n": "Coperture vs muro artificiale",
"q": 1,
"img": "c1316722e9.jpg"
},
{
"n": "Batt / Rice per Centro / Pipe",
"q": 1,
"img": "a5f5e349c9.jpg"
},
{
"n": "Battuta e rice con primo tempo",
"q": 1,
"img": "a22b4b0e11.jpg"
},
{
"n": "Attacco 2/3 avanti vs sestetto",
"q": 1,
"img": "06521f4603.jpg"
},
{
"n": "Mini-Set P/A con muro chiamato",
"q": 1,
"img": "3e50559aea.jpg"
},
{
"n": "Muro vs palleggio agli esterni",
"q": 1,
"img": "27bbaf58fd.jpg"
},
{
"n": "C/P vincolante + P/A a + P/A b",
"q": 1,
"img": "22a81d20f7.jpg"
},
{
"n": "Battuta campo A difesa campo B",
"q": 1,
"img": "0c8d63e756.jpg"
},
{
"n": "Mini-Set partenza muro no muro",
"q": 1,
"img": "c240b2b561.jpg"
},
{
"n": "Mini-Set base 7 con vincoli 2/3",
"q": 1,
"img": "f5fdd388ee.jpg"
},
{
"n": "Battuta + F/B per B + P/A per B",
"q": 1,
"img": "790dc5f99a.jpg"
},
{
"n": "Riscaldamento di battuta e rice",
"q": 1,
"img": "a19e33581d.jpg"
},
{
"n": "F/B punto con punto dopo difesa",
"q": 1,
"img": "3b7762d395.jpg"
},
{
"n": "C/P + P/A + spostata - 2x campo",
"q": 1,
"img": "077c0ef09c.jpg"
},
{
"n": "Mini-Set con vincoli di opzione",
"q": 1,
"img": "ad71cc6cd2.jpg"
},
{
"n": "C/P + conferma di palla spostata",
"q": 1,
"img": "d70363d61a.jpg"
},
{
"n": "Mini-Set da palla brutta 3 tocco",
"q": 1,
"img": "5d45699c16.jpg"
},
{
"n": "Mini-Set da F/B con sovraccarico",
"q": 1,
"img": "194fde48ed.jpg"
},
{
"n": "C/P + F/B Centro / Pipe + palla !",
"q": 1,
"img": "5dd64a8cea.jpg"
},
{
"n": "C/P + P/A per A + F/B per B + C/P",
"q": 1,
"img": "73987e638d.jpg"
},
{
"n": "Attacco vs muro differenziare #/-",
"q": 1,
"img": "119ab0dd03.jpg"
},
{
"n": "C/P + F/B con vincoli + P/A per A",
"q": 1,
"img": "90e6879e4f.jpg"
},
{
"n": "2xcampo C/P vincolante + F/B + P/A",
"q": 1,
"img": "8da7a5d5c7.jpg"
},
{
"n": "Muro dai plinti singolo poi doppio",
"q": 1,
"img": "25951f39e0.jpg"
},
{
"n": "Difesa con appoggio e arretramento",
"q": 1,
"img": "e34a9c14dc.jpg"
},
{
"n": "Batt / Rice campo A difesa campo B",
"q": 1,
"img": "6284b704b9.jpg"
},
{
"n": "C/P vincolante + F/B per B + pa x B",
"q": 1,
"img": "924012fb0e.jpg"
},
{
"n": "Mini-Set con F/B e attacco da fuori",
"q": 1,
"img": "9e122edd6f.jpg"
},
{
"n": "Bagherone 4vs4 con attacco di testa",
"q": 1,
"img": "daef05044b.jpg"
},
{
"n": "Hunger Games - C/P con conferma P/A",
"q": 1,
"img": "9e9ed7e6e7.jpg"
},
{
"n": "F/B per muro 1vs1 + F/B per lettura",
"q": 1,
"img": "9118628fce.jpg"
},
{
"n": "C/P + P/A x A + F/B x B + battuta a",
"q": 1,
"img": "48b76ac6b5.jpg"
},
{
"n": "Bagherone a due tocchi piedi a terra",
"q": 1,
"img": "53b6f0a183.jpg"
},
{
"n": "Mini-Set scelta palla Muro / No muro",
"q": 1,
"img": "9b3cb905ed.jpg"
},
{
"n": "Battuta - profondita vs farla cadere",
"q": 1,
"img": "7bfea3c905.jpg"
},
{
"n": "Mini-Set palla !- da giocare vs muro",
"q": 1,
"img": "6387eaf46c.jpg"
},
{
"n": "C/P + palla !- per B + palla #+ per B",
"q": 1,
"img": "5518258907.jpg"
},
{
"n": "Attacco di palla alta vs muro fitball",
"q": 1,
"img": "9ad78e9726.jpg"
},
{
"n": "Cp errore -1 + conferma P/A errore -1",
"q": 1,
"img": "8af51d5e60.jpg"
},
{
"n": "C/P + F/B x B + palla ! x B + P/A x B",
"q": 1,
"img": "53db136e3a.jpg"
},
{
"n": "C/P vincolante + F/B per B + P/A per A",
"q": 1,
"img": "4697dd978c.jpg"
},
{
"n": "C/P + palle consecutive F/B ! P/A p/a.",
"q": 1,
"img": "d30c6e775e.jpg"
},
{
"n": "C/P errore -2 + conferma P/A errore -1",
"q": 1,
"img": "a9c446739e.jpg"
},
{
"n": "C/P vincolante + F/B per B + P/A per B",
"q": 1,
"img": "2e38e756db.jpg"
},
{
"n": "Batt / Rice con seconda palla spostata",
"q": 1,
"img": "7fba893d9a.jpg"
},
{
"n": "Mini-Set da F/B con opzione vs lettura",
"q": 1,
"img": "eaaf1e7c1b.jpg"
},
{
"n": "C/P + conferma F/B per Centro / Pipe a",
"q": 1,
"img": "2321153858.jpg"
},
{
"n": "Liberi difesa con focus su arretramento",
"q": 1,
"img": "0c04d30a7e.jpg"
},
{
"n": "2xcampo C/P + P/A per B + palla ! per A",
"q": 1,
"img": "d6a85ca487.jpg"
},
{
"n": "C/P + F/B per B + P/A per A + battuta a",
"q": 1,
"img": "ee51578b62.jpg"
},
{
"n": "C/P + conferma palla diversa dalla rice",
"q": 1,
"img": "75e36767e4.jpg"
},
{
"n": "Alzate prima in bagher poi in palleggio",
"q": 1,
"img": "8cfb3f94a6.jpg"
},
{
"n": "Muro - posizionamento su palla e timing",
"q": 1,
"img": "7df0025fad.jpg"
},
{
"n": "C/P per A + difesa e alzata di P/A per B",
"q": 1,
"img": "bbe18001a5.jpg"
},
{
"n": "Muro dai plinti prima singolo poi doppio",
"q": 1,
"img": "8bcdd021b8.jpg"
},
{
"n": "Attacco di palla alta con partenza da muro",
"q": 1,
"img": "1a28cef3b9.jpg"
},
{
"n": "Mini-Set con serie di P/A per chi fa punto",
"q": 1,
"img": "58c723cc81.jpg"
},
{
"n": "C/P + F/B Centro / Pipe + P/A per muro a 3",
"q": 1,
"img": "a37b4ffb6a.jpg"
},
{
"n": "C/P + conferma con palla diversa dalla rice",
"q": 1,
"img": "3bd5914675.jpg"
},
{
"n": "F/B 2/3 + conferma P/A con muro 3 obbligato",
"q": 1,
"img": "ae739c4c6d.jpg"
},
{
"n": "Muro assistenze e doppio passo per centrali",
"q": 1,
"img": "2d8cc9a484.jpg"
},
{
"n": "C/P + palla ! + palla da difesa del centrale",
"q": 1,
"img": "ef7e5b7c62.jpg"
},
{
"n": "C/P + F/B c/p/p + P/A + P/A per B + battuta a",
"q": 1,
"img": "4a73670c8e.jpg"
},
{
"n": "C/P + seconda palla vincolata stesso attaccante",
"q": 1,
"img": "3b6ab81792.jpg"
},
{
"n": "C/P vincolante + P/A per B + P/A per A + battuta",
"q": 1,
"img": "b2248625b2.jpg"
},
{
"n": "C/P vincolante + F/B per B + P/A per B + battuta",
"q": 1,
"img": "25f6f4495c.jpg"
},
{
"n": "Difesa con appoggio - tocco palla e arretramento",
"q": 1,
"img": "d49c26a449.jpg"
},
{
"n": "C/P + F/B per B 2/3 avanti + palla spostata per A",
"q": 1,
"img": "5ca4718e5a.jpg"
},
{
"n": "Rice s e l da due plinti difesa c p o. campo unico",
"q": 1,
"img": "5e55e2fe77.jpg"
},
{
"n": "C/P vincolato + batt. a + palla diversa dalla rice",
"q": 1,
"img": "706e1b4deb.jpg"
},
{
"n": "Difesa spara palloni in un campo doppia sull altro",
"q": 1,
"img": "5750913977.jpg"
},
{
"n": "C/P vincolante + palla da attacco + F/B terzo tocco",
"q": 1,
"img": "b1784c7a41.jpg"
},
{
"n": "C/P vincolante + F/B 1/avanti o 7/sopra + P/A per A",
"q": 1,
"img": "a5583f4869.jpg"
},
{
"n": "C/P + P/A per A + P/A per B + F/B per B + C/P base 7",
"q": 1,
"img": "d5c8d2bd10.jpg"
},
{
"n": "Primo tempo e 8 - centrali appoggiano in arretramento",
"q": 1,
"img": "88b4c05922.jpg"
},
{
"n": "Primi tempi prima normali poo da appoggio-passo-stacco",
"q": 1,
"img": "38fed65b32.jpg"
},
{
"n": "C/P + conferma b F/B no primo tempo a attacco da fuori",
"q": 1,
"img": "4619bb3655.jpg"
},
{
"n": "3 palloni C/P vincolante + F/B Centro / Pipe + F/B x B",
"q": 1,
"img": "22b33432fb.jpg"
},
{
"n": "C/P vincolante + conferma stesso attaccante + battuta a",
"q": 1,
"img": "c6071bb530.jpg"
},
{
"n": "Lavoro palleggiatori di lettura spostamento e pre-salto",
"q": 1,
"img": "cf03c67553.jpg"
},
{
"n": "Battuta con sviluppo Esterni / Pipe difesa con palla alta",
"q": 1,
"img": "5ec6aaeebd.jpg"
},
{
"n": "C/P + P/A per A + F/B Centro / Pipe per A + palla ! per B",
"q": 1,
"img": "f51b7199ea.jpg"
},
{
"n": "C/P con doppio pallone rilanciato appena finisce il punto",
"q": 1,
"img": "01f21131bc.jpg"
},
{
"n": "Muri dai plinti diago/mano/linea con chiusura del centrale",
"q": 1,
"img": "0a771ce9cb.jpg"
},
{
"n": "C/P + conferma palla +! per a/c/p + conferma P/A per muro a 3",
"q": 1,
"img": "551e80f69b.jpg"
},
{
"n": "C/P conferma + a P/A !- b F/B vincolata 2/3 avanti su att a 3",
"q": 1,
"img": "1a47ca098e.jpg"
},
{
"n": "C/P + conferma di palla obbligata a chi ha attaccato la prima",
"q": 1,
"img": "39bacfa1bb.jpg"
},
{
"n": "Bagherone con attacco di testa poi attacco di palla alta brutta",
"q": 1,
"img": "e0b5642990.jpg"
},
{
"n": "C/P vincolante + P/A per muro a 3 + F/B da terzo tocco a base 7",
"q": 1,
"img": "e0ca80d09e.jpg"
},
{
"n": "C/P + serie di palloni avversari per fare punto dalla seconda palla",
"q": 1,
"img": "224baa34f4.jpg"
},
{
"n": "2xcampo battuta + conferma F/B per A vs battuta + conferma di P/A x B",
"q": 1,
"img": "e08cf2dca3.jpg"
},
{
"n": "Doppio pallone C/P + se prima palla a terra F/B per gli altri attaccanti altrimenti stesso attaccante",
"q": 1,
"img": "da92660d8a.jpg"
}
];
