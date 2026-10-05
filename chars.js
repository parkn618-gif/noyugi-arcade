/* 노유기 오락실 공용 캐릭터 (가챠 17종)
   그림 원본은 가챠/노유기가챠.html 의 CHARS 다. 가챠 그림을 고치면 이 파일도 같이 고친다.
   쓰는 법: <script src="캐릭터.js"></script> 뒤에
     NYG.chars            — [{ id, r, name, en, tip, svg }] 17종 (r: N · R · SR · SSR)
     NYG.byId(id)         — 한 종
     NYG.svg(c, {bg})     — 120×120 SVG 문자열 (bg: 등급 색 원 배경)
     NYG.image(c, px)     — Promise<HTMLImageElement> (캔버스 drawImage 용, 캐시)
   © 2026 노유기. 캐릭터와 그림을 허락 없이 쓰지 마세요. */
(() => {
  const O = '#2B2140';
  const B = (s, fill, w = 7) => `<g fill="${O}" stroke="${O}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round">${s}</g><g fill="${fill}">${s}</g>`;
  const EY = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y}" rx="${4.4*s}" ry="${5.4*s}" fill="${O}"/><circle cx="${x+1.5*s}" cy="${y-2*s}" r="${1.7*s}" fill="#fff"/>`;
  const EYES = (a, b, y, s) => EY(a, y, s) + EY(b, y, s);
  const SHUT = (x, y, w = 8) => `<path d="M${x-w/2} ${y} q${w/2} ${-w*0.6} ${w} 0" fill="none" stroke="${O}" stroke-width="2.8" stroke-linecap="round"/>`;
  const BL = (a, b, y) => `<ellipse cx="${a}" cy="${y}" rx="5.5" ry="3.2" fill="#FF7FA8" opacity=".55"/><ellipse cx="${b}" cy="${y}" rx="5.5" ry="3.2" fill="#FF7FA8" opacity=".55"/>`;
  const SM = (x, y, w = 7) => `<path d="M${x-w/2} ${y} q${w/2} ${w*0.7} ${w} 0" fill="none" stroke="${O}" stroke-width="2.8" stroke-linecap="round"/>`;
  const OPEN = (x, y, w = 10) => `<path d="M${x-w/2} ${y} q${w/2} ${w*1.15} ${w} 0 Z" fill="${O}" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/><path d="M${x-w*0.28} ${y+w*0.5} q${w*0.28} ${-w*0.3} ${w*0.56} 0 q${-w*0.28} ${w*0.28} ${-w*0.56} 0 Z" fill="#FF7A96"/>`;
  const CATM = (x, y) => `<path d="M${x-6} ${y} q3 3.6 6 0 q3 3.6 6 0" fill="none" stroke="${O}" stroke-width="2.6" stroke-linecap="round"/>`;
  const SHINE = (x, y, r = -30) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="3.6" fill="#fff" opacity=".65" transform="rotate(${r} ${x} ${y})"/>`;
  const T = (x, y, txt, fill = O, size = 11) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Fredoka, Jua, sans-serif" font-weight="600" font-size="${size}" fill="${fill}">${txt}</text>`;
  const LIMB = (d, col) => `<path d="${d}" fill="none" stroke="${O}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
  const STAR = (x, y, r, fill = '#FFD23F') => `<path d="M${x} ${y-r} Q${x} ${y} ${x+r} ${y} Q${x} ${y} ${x} ${y+r} Q${x} ${y} ${x-r} ${y} Q${x} ${y} ${x} ${y-r} Z" fill="${fill}" stroke="${O}" stroke-width="1.8" stroke-linejoin="round"/>`;

  const CHARS = [
    { id:'comma', r:'N', name:'콤마콩', en:'Comma',
      tip:'문장 중간에서 숨을 고르게 해 줘요. 단어를 늘어놓을 때도 콩, 콩, 콩!',
      svg: B('<circle cx="60" cy="52" r="30"/><path d="M76 74 C82 92 72 106 50 112 C62 99 63 90 60 82 Z"/>', '#8ED1FC') + SHINE(46,36) + EYES(50,70,52) + BL(43,77,62) + SM(60,60) },
    { id:'period', r:'N', name:'피리오', en:'Period',
      tip:'평서문 끝을 지키는 수문장. 내가 찍히면 그 문장은 끝이에요.',
      svg: B('<circle cx="60" cy="64" r="31"/><ellipse cx="46" cy="96" rx="9" ry="5"/><ellipse cx="74" cy="96" rx="9" ry="5"/>', '#AEB6FF') + B('<path d="M42 41 Q60 13 78 41 Q60 35 42 41 Z"/>', '#3E4C9C', 6) + `<circle cx="60" cy="19" r="4.5" fill="#FFD23F" stroke="${O}" stroke-width="2.5"/>` + SHINE(45,52) + EYES(50,70,62) + BL(43,77,72) + SM(60,70) },
    { id:'twins', r:'N', name:'아·더 쌍둥이', en:'A & The',
      tip:'처음 꺼내는 이야기엔 a, 서로 아는 것엔 the. 늘 붙어 다니는 관사 쌍둥이예요.',
      svg: B('<circle cx="39" cy="70" r="22"/>', '#FFD86B') + B('<circle cx="82" cy="66" r="25"/>', '#FFAE6B') + `<path d="M61 47 c-3 -5 -10 -2 -7 3 l7 6 l7 -6 c3 -5 -4 -8 -7 -3 Z" fill="#FF5A8C" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>` + EYES(32,46,66,.8) + SM(39,73,6) + BL(28,50,74) + EYES(74,90,61,.85) + SM(82,69,6) + BL(71,93,69) + T(39,88,'a',O,11) + T(82,86,'the',O,10) },
    { id:'question', r:'N', name:'꾸미', en:'Question Mark',
      tip:'궁금하면 머리 위 고리가 빙글! 의문문 끝에는 꼭 내가 와요.',
      svg: `<path d="M60 50 C58 38 60 30 66 24 C73 17 71 8 62 8 C56 8 52 12 52 17" fill="none" stroke="${O}" stroke-width="5" stroke-linecap="round"/>` + B('<path d="M60 40 C86 40 94 66 92 82 C90 100 30 100 28 82 C26 66 34 40 60 40 Z"/>', '#7EE3C6') + SHINE(44,52) + EYES(50,70,66) + `<circle cx="60" cy="79" r="3.8" fill="${O}"/>` + BL(42,78,76) + T(95,36,'?','#2E3DB0',16) },
    { id:'exclaim', r:'N', name:'빵이', en:'Exclamation',
      tip:'놀라면 통통 튀어요. What a beautiful day! 감탄문의 단짝이에요.',
      svg: `<g stroke="${O}" stroke-width="3" stroke-linecap="round"><path d="M30 26 l-8 -6"/><path d="M27 42 h-10"/><path d="M90 26 l8 -6"/><path d="M93 42 h10"/></g>` + B('<rect x="38" y="16" width="44" height="66" rx="22"/>', '#FF9494') + B('<circle cx="60" cy="102" r="10"/>', '#FF9494') + SHINE(49,28) + EYES(51,69,44) + OPEN(60,55,10) + BL(44,76,56) },
    { id:'apos', r:'N', name:'아포', en:'Apostrophe',
      tip:"줄임말 전문가. do not이 don't가 될 때 쏙 들어가요. Tom's 같은 소유격도 내 담당!",
      svg: B('<path d="M60 16 C76 38 88 56 88 74 C88 92 76 104 60 104 C44 104 32 92 32 74 C32 56 44 38 60 16 Z"/>', '#C4EE7E') + SHINE(47,54) + EY(50,70) + SHUT(70,71,9) + SM(60,82) + BL(42,78,82) + STAR(96,30,6) },
    { id:'verb', r:'R', name:'뛰뛰', en:'Verb',
      tip:'가만히 있질 못해요. 문장마다 동사는 꼭 하나 있어야 하거든요!',
      svg: `<g stroke="${O}" stroke-width="3.2" stroke-linecap="round"><path d="M8 60 h13"/><path d="M4 72 h15"/><path d="M10 84 h10"/></g>` + B('<ellipse cx="44" cy="97" rx="12" ry="7"/><ellipse cx="80" cy="94" rx="12" ry="7" transform="rotate(-14 80 94)"/>', '#FFFFFF', 6) + B('<path d="M28 86 C26 58 40 34 60 34 C80 34 94 58 92 86 C92 96 28 96 28 86 Z"/>', '#FFA35E') + B('<path d="M31 57 C48 49 72 49 89 57 L90 65 C72 57 48 57 30 65 Z"/><path d="M33 60 L19 52 L21 66 Z"/>', '#FF5A8C', 5) + SHINE(48,44) + EYES(50,70,73) + OPEN(60,82,10) + BL(41,79,83) },
    { id:'adj', r:'R', name:'꽃냥', en:'Adjective',
      tip:'명사를 꾸며 주는 멋쟁이. a cute cat에서 cute가 바로 나예요.',
      svg: B('<path d="M34 50 L36 20 L58 38 Z"/><path d="M86 50 L84 20 L62 38 Z"/><circle cx="60" cy="64" r="31"/>', '#FFC9DE') + '<path d="M39 42 L40 28 L51 37 Z" fill="#FF8FB8"/><path d="M81 42 L80 28 L69 37 Z" fill="#FF8FB8"/>' + [0,72,144,216,288].map(a => { const x = 86 + 6*Math.cos(a*Math.PI/180), y = 22 + 6*Math.sin(a*Math.PI/180); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="#FFE066" stroke="${O}" stroke-width="2"/>`; }).join('') + `<circle cx="86" cy="22" r="4" fill="#FF8C42" stroke="${O}" stroke-width="2"/>` + EYES(49,71,62) + `<path d="M57 70 h6 l-3 3.4 Z" fill="${O}" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/>` + CATM(60,75) + BL(41,79,73) + `<g stroke="${O}" stroke-width="2" stroke-linecap="round"><path d="M30 70 h-11"/><path d="M31 76 l-11 3"/><path d="M90 70 h11"/><path d="M89 76 l11 3"/></g>` },
    { id:'adv', r:'R', name:'슝슝', en:'Adverb',
      tip:"동사 곁을 날아다니며 '어떻게'를 알려 줘요. run fast, speak softly!",
      svg: `<g stroke="${O}" stroke-width="3.2" stroke-linecap="round"><path d="M8 54 h14"/><path d="M4 66 h16"/><path d="M10 78 h12"/></g>` + B('<circle cx="62" cy="64" r="30"/><path d="M56 37 C52 24 60 20 62 30 C64 20 72 22 68 37 Z"/>', '#7FCBFF') + '<ellipse cx="66" cy="77" rx="18" ry="12" fill="#E8F7FF"/>' + B('<path d="M90 60 L105 65 L90 70 Z"/>', '#FFB547', 5) + B('<path d="M46 64 C31 58 29 76 41 82 C48 85 52 73 46 64 Z"/>', '#4FA8E8', 5) + EYES(66,82,56,.9) + BL(60,88,66) },
    { id:'noun', r:'R', name:'상자곰', en:'Noun',
      tip:'사람, 물건, 생각까지! 이름이 있는 건 모두 상자에 담아요.',
      svg: B('<circle cx="38" cy="36" r="10"/><circle cx="82" cy="36" r="10"/><rect x="28" y="38" width="64" height="58" rx="12"/>', '#DDAE72') + '<circle cx="38" cy="34" r="4.5" fill="#F5D6AA"/><circle cx="82" cy="34" r="4.5" fill="#F5D6AA"/>' + `<path d="M28 54 h64" stroke="${O}" stroke-width="2.5" opacity=".25"/>` + '<ellipse cx="60" cy="67" rx="11" ry="8" fill="#F5D6AA"/>' + `<ellipse cx="60" cy="64" rx="3.8" ry="2.7" fill="${O}"/>` + SM(60,69,6) + EYES(46,74,57,.9) + BL(38,82,67) + `<rect x="43" y="80" width="34" height="12" rx="3" fill="#fff" stroke="${O}" stroke-width="2"/>` + T(60,89.6,'NOUN',O,8) },
    { id:'prep', r:'R', name:'프렙문어', en:'Preposition',
      tip:'다리마다 in, on, at. 명사 앞에 붙어 장소와 시간을 알려 줘요.',
      svg: B('<path d="M30 64 C30 38 44 24 60 24 C76 24 90 38 90 64 Q91 92 83 92 Q76 92 76 82 Q76 98 68 98 Q61 98 60 84 Q59 98 52 98 Q44 98 44 82 Q44 92 37 92 Q29 92 30 64 Z"/>', '#CBA3FF') + '<circle cx="73" cy="37" r="4" fill="#B385F5"/><circle cx="81" cy="47" r="2.6" fill="#B385F5"/>' + SHINE(44,38) + EYES(50,70,58) + SM(60,66) + BL(42,78,67) + T(36,109,'in','#6B3FD1',10) + T(60,113,'on','#6B3FD1',10) + T(84,109,'at','#6B3FD1',10) },
    { id:'rabbit', r:'SR', name:'시계토끼', en:'Present Perfect',
      tip:'have + p.p. 시계를 품고 과거부터 지금까지 쉬지 않고 이어 달려요.',
      svg: B('<ellipse cx="46" cy="27" rx="8" ry="20" transform="rotate(-10 46 27)"/><ellipse cx="74" cy="27" rx="8" ry="20" transform="rotate(10 74 27)"/><circle cx="60" cy="66" r="29"/>', '#FFFFFF') + '<ellipse cx="46" cy="28" rx="3.6" ry="13" fill="#FFB3CC" transform="rotate(-10 46 28)"/><ellipse cx="74" cy="28" rx="3.6" ry="13" fill="#FFB3CC" transform="rotate(10 74 28)"/>' + EYES(50,70,64) + '<path d="M57 72 h6 l-3 3.2 Z" fill="#FF8FB8"/>' + CATM(60,77) + BL(41,79,74) + '<path d="M78 84 q6 6 10 3" stroke="#C99A2E" stroke-width="2.4" fill="none"/>' + B('<circle cx="90" cy="92" r="12"/>', '#FFD23F', 5) + `<circle cx="90" cy="92" r="8" fill="#fff"/><path d="M90 92 v-5.5 M90 92 h4.5" stroke="${O}" stroke-width="2.2" stroke-linecap="round"/>` },
    { id:'cloud', r:'SR', name:'이프구름', en:'Subjunctive',
      tip:'If I were a bird... 사실과 다른 꿈을 꾸는 구름. 가정법 과거엔 주어가 I여도 were!',
      svg: STAR(20,34,7) + STAR(102,28,5) + STAR(100,100,4) + `<circle cx="99" cy="48" r="3" fill="#E3EAFF" stroke="${O}" stroke-width="2"/><circle cx="106" cy="41" r="2" fill="#E3EAFF" stroke="${O}" stroke-width="1.6"/>` + B('<circle cx="40" cy="70" r="18"/><circle cx="58" cy="54" r="22"/><circle cx="80" cy="62" r="19"/><circle cx="88" cy="78" r="12"/><rect x="26" y="66" width="72" height="26" rx="13"/>', '#E6ECFF') + SHUT(50,73,9) + SHUT(70,73,9) + SM(60,80,6) + BL(42,78,81) + T(60,110,'If I were…','#4656D6',10) },
    { id:'fox', r:'SR', name:'댓여우', en:"Relative 'that'",
      tip:'명사 뒤에 붙어 꾸며 주는 꾀돌이. the book that I read처럼요.',
      svg: B('<path d="M60 98 C40 98 28 84 28 66 C28 55 31 47 36 41 L33 17 L53 33 C57 32 63 32 67 33 L87 17 L84 41 C89 47 92 55 92 66 C92 84 80 98 60 98 Z"/>', '#FFA05A') + '<path d="M38 36 L37 24 L48 33 Z" fill="#FFE1C7"/><path d="M82 36 L83 24 L72 33 Z" fill="#FFE1C7"/>' + '<path d="M34 74 C44 70 52 76 60 83 C68 76 76 70 86 74 C84 90 74 98 60 98 C46 98 36 90 34 74 Z" fill="#FFF5EA"/>' + `<ellipse cx="60" cy="80" rx="4.2" ry="3" fill="${O}"/>` + SM(60,85,6) + EYES(48,72,63,.95) + BL(40,80,72) + B('<path d="M36 94 C50 102 70 102 84 94 L86 104 C70 112 50 112 34 104 Z"/>', '#2FB8A6', 5) + T(60,108,'that','#fff',9) },
    { id:'dragon', r:'SSR', name:'그래머 드래곤', en:'Grammar Dragon',
      tip:'어법 문제 앞에서 절대 흔들리지 않는 전설의 용. 만난 날은 운이 좋은 날이에요!',
      svg: B('<path d="M34 60 C18 44 8 52 10 66 C18 62 22 70 30 72 Z"/><path d="M86 60 C102 44 112 52 110 66 C102 62 98 70 90 72 Z"/>', '#3FB57A', 5) + B('<path d="M42 41 L35 24 L51 34 Z"/><path d="M78 41 L85 24 L69 34 Z"/>', '#FFE6A6', 5) + B('<circle cx="60" cy="66" r="30"/>', '#72D89C') + '<ellipse cx="60" cy="83" rx="16" ry="10" fill="#DAF7C9"/>' + `<path d="M50 80 h20 M48 86 h24" stroke="${O}" stroke-width="1.6" opacity=".25"/>` + B('<path d="M44 35 L48 18 L56 28 L60 13 L64 28 L72 18 L76 35 Z"/>', '#FFC93C', 5) + '<circle cx="60" cy="27" r="2.8" fill="#FF5A8C"/><circle cx="49" cy="29" r="1.8" fill="#4FA8E8"/><circle cx="71" cy="29" r="1.8" fill="#4FA8E8"/>' + SHINE(46,50) + EYES(50,70,62) + SM(60,70,8) + `<path d="M62.6 71.6 l1.7 3.8 l1.7 -3.5 Z" fill="#fff" stroke="${O}" stroke-width="1.2" stroke-linejoin="round"/>` + BL(42,78,70) + STAR(18,30,6) + STAR(104,96,5) },
    { id:'unicorn', r:'SSR', name:'만점 유니콘', en:'Perfect Score Unicorn',
      tip:'1등급의 기운을 뿌리는 전설의 유니콘. 뿔이 반짝이면 빈칸 문제도 술술!',
      svg: B('<circle cx="37" cy="50" r="12"/>', '#FF9EC7', 5) + B('<circle cx="31" cy="68" r="11"/>', '#8FD3FF', 5) + B('<circle cx="35" cy="86" r="10"/>', '#FFE066', 5) + B('<path d="M74 41 L81 24 L87 43 Z"/><circle cx="62" cy="66" r="29"/>', '#FFFFFF') + '<path d="M77 39 L81 30 L84 40 Z" fill="#FFB3CC"/>' + B('<path d="M44 44 C48 32 62 30 70 40 C62 38 56 42 52 48 C50 45 47 44 44 44 Z"/>', '#FF9EC7', 4) + B('<path d="M55 40 L61 8 L67 40 Z"/>', '#FFD23F', 5) + '<path d="M57.5 31 l7 -3 M58.6 23 l5 -2.2" stroke="#C99A2E" stroke-width="2"/>' + EYES(54,74,66) + `<path d="M48.5 60.5 l-3.4 -2.2 M79.5 60.5 l3.4 -2.2" stroke="${O}" stroke-width="2" stroke-linecap="round"/>` + SM(64,74) + BL(46,82,74) + B('<circle cx="94" cy="96" r="12"/>', '#FF5A8C', 4) + T(94,100,'100','#fff',9) + STAR(100,22,6) },
    { id:'noyugimon', r:'SSR', name:'노유기몬', en:'Noyugimon',
      tip:'ㄴ·ㅇ·ㄱ 모양으로 두 팔을 흔들며 달려오는 노유기 카페의 수호 몬스터. 빨간 펜 한 번이면 틀린 어법이 쏙 고쳐져요!',
      svg: STAR(108,18,5) + STAR(10,104,4)
        + `<g stroke="${O}" stroke-width="3.2" stroke-linecap="round"><path d="M4 50 h9"/><path d="M2 60 h8"/></g>`
        + LIMB('M50 82 L43 96 L33 95', '#5B8CFF') + LIMB('M70 82 L80 93 L92 88', '#5B8CFF')
        + B('<ellipse cx="30" cy="96" rx="8" ry="5"/><ellipse cx="95" cy="88" rx="8" ry="5" transform="rotate(-20 95 88)"/>', '#FF5A8C', 5)
        + LIMB('M15 26 L15 64 L34 64', '#5B8CFF') + B('<circle cx="15" cy="24" r="6.5"/>', '#5B8CFF', 5)
        + B('<rect x="98" y="60" width="9" height="30" rx="3" transform="rotate(18 102 75)"/>', '#FF4D5E', 4)
        + `<path d="M102 89 l-1.5 9 l6 -6 Z" fill="#FFE1C7" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>`
        + LIMB('M86 50 L104 50 L104 74', '#5B8CFF') + B('<circle cx="104" cy="76" r="6.5"/>', '#5B8CFF', 5)
        + B('<circle cx="60" cy="58" r="28"/>', '#5B8CFF')
        + '<ellipse cx="60" cy="72" rx="14" ry="8" fill="#E8EEFF"/>'
        + `<text x="60" y="75.5" text-anchor="middle" font-family="Jua, sans-serif" font-size="9" letter-spacing="1" fill="#1D2155">ㄴoㄱ</text>`
        + B('<rect x="48" y="27" width="24" height="10" rx="3"/>', '#1D2155', 5)
        + B('<path d="M32 27 L60 15 L88 27 L60 39 Z"/>', '#2A2F6B', 5)
        + `<path d="M60 27 L83 31 L83 42" fill="none" stroke="#FFD23F" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M79.5 41 h7 l-1.4 7.5 h-4.2 Z" fill="#FFD23F" stroke="${O}" stroke-width="2" stroke-linejoin="round"/><circle cx="60" cy="27" r="2.8" fill="#FFD23F" stroke="${O}" stroke-width="1.8"/>`
        + SHINE(44,48) + EYES(50,70,53,.9) + OPEN(60,60,8) + BL(42,78,62) },
  ];
  const RARE = {
    N:  { label:'노말', rate:55, tint:'#E8ECFC', cap:'#8ED1FC' },
    R:  { label:'레어', rate:30, tint:'#DCF7EE', cap:'#5EDCB8' },
    SR: { label:'슈퍼레어', rate:12, tint:'#F1E4FF', cap:'#B98CFF' },
    SSR:{ label:'전설', rate:3, tint:'#FFF1C4', cap:'#FFC93C' },
  };
  const byId = id => CHARS.find(c => c.id === id);
  const svg = (c, o = {}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${o.px || 120}" height="${o.px || 120}">${o.bg ? `<circle cx="60" cy="62" r="56" fill="${RARE[c.r].tint}"/>` : ''}${c.svg}</svg>`;
  const cache = new Map();
  function image(c, px = 120, o = {}){
    const key = c.id + '|' + px + '|' + (o.bg ? 1 : 0);
    if (!cache.has(key)) cache.set(key, new Promise((ok, no) => {
      const img = new Image(); img.onload = () => ok(img); img.onerror = no;
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg(c, { px, bg: o.bg }));
    }));
    return cache.get(key);
  }
  window.NYG = { chars: CHARS, rare: RARE, byId, svg, image };
})();
