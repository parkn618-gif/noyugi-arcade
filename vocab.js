/* 노유기 오락실 공용 어휘 카드 — 목숨을 잃을 때 · 게임이 끝날 때 보여 주고 읽어 준다
   (1번 기계 단어슈팅.html 의 VOCAB 과 같은 목록. 고치면 둘 다 고친다 — 1번 기계도 곧 이 파일을 쓰도록 바꾼다)
   쓰는 법: <script src="어휘카드.js"></script> 뒤에
     const v = NYGVocab.next();             — ['bounce back', '다시 회복하다']
     const card = { en: v[0], ko: v[1], spoken: false };
     NYGVocab.speak(card, muted);           — 영어(en-US) 다음 한국어(ko-KR)로 읽는다. 다 읽으면 card.spoken = true
     NYGVocab.stop();                       — 읽기 멈춤
   규칙: 카드는 적어도 4초, 읽기가 끝날 때까지(최대 9초) 떠 있고, 그동안 게임은 멈춘다. 1.5초 뒤부터 화면을 누르면 넘긴다. */
(() => {
// 목숨을 잃거나 게임이 끝날 때 보여 주는 어휘 · 숙어
const VOCAB = [
  ['bounce back', '다시 회복하다'], ['back to square one', '원점으로 돌아가다'], ['a blessing in disguise', '전화위복'],
  ["get back on one's feet", '다시 일어서다'], ['against all odds', '온갖 역경을 딛고'], ['trial and error', '시행착오'],
  ['rise to the occasion', '어려운 상황에 잘 대처하다'], ['bite the bullet', '이를 악물고 견디다'], ["keep one's chin up", '기운을 잃지 않다'],
  ['make up for', '~을 만회하다'], ['fall short of', '~에 미치지 못하다'], ['a narrow escape', '구사일생'],
  ['in vain', '헛되이'], ['come to terms with', '(힘든 일을) 받아들이다'], ['give it a shot', '한번 해 보다'],
  ['learn the ropes', '요령을 익히다'], ['the tip of the iceberg', '빙산의 일각'], ['once in a blue moon', '아주 드물게'],
  ['hit the nail on the head', '정곡을 찌르다'], ['break the ice', '어색한 분위기를 깨다'], ['call it a day', '오늘은 여기까지 하다'],
  ['in the long run', '장기적으로 보면'], ['by and large', '대체로'], ['take ~ for granted', '~을 당연하게 여기다'],
  ['setback', '차질, 좌절'], ['adversity', '역경'], ['perseverance', '끈기, 인내'],
  ['resilient', '회복력 있는'], ['relentless', '끊임없는, 가차 없는'], ['formidable', '만만찮은'],
  ['daunting', '벅찬, 주눅 들게 하는'], ['undaunted', '굴하지 않는'], ['tenacious', '끈질긴'],
  ['inevitable', '피할 수 없는'], ['indispensable', '없어서는 안 될'], ['unprecedented', '전례 없는'],
  ['vulnerable', '취약한'], ['meticulous', '꼼꼼한'], ['ephemeral', '덧없는, 순식간의'],
  ['serendipity', '뜻밖의 행운'], ['compelling', '설득력 있는'], ['plausible', '그럴듯한'],
  ['detrimental', '해로운'], ['mitigate', '완화하다'], ['endure', '견디다'],
  ['abrupt', '갑작스러운'], ['collapse', '붕괴하다'], ['inadvertently', '무심코, 의도치 않게'],
  ['ubiquitous', '어디에나 있는'], ['obsolete', '쓸모없게 된']
];
let vocabDeck = [];
const hasTTS = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
function pickVoice(lang){
  try { const vs = speechSynthesis.getVoices(); return vs.find(v => v.lang.replace('_', '-').toLowerCase() === (lang === 'en' ? 'en-us' : 'ko-kr')) || vs.find(v => v.lang.toLowerCase().startsWith(lang)) || null; } catch(e){ return null; }
}
function speakCard(card, muted){
  if (muted || !hasTTS) { card.spoken = true; return; }
  try {
    speechSynthesis.cancel();
    const en = new SpeechSynthesisUtterance(card.en.replace(/~/g, 'something')); en.lang = 'en-US'; en.rate = .85;
    const ko = new SpeechSynthesisUtterance(card.ko.replace(/~(을|를)/g, '무엇을').replace(/~에/g, '무엇에').replace(/[()~]/g, ' ')); ko.lang = 'ko-KR'; ko.rate = 1;
    const ve = pickVoice('en'), vk = pickVoice('ko'); if (ve) en.voice = ve; if (vk) ko.voice = vk;
    ko.onend = ko.onerror = () => { card.spoken = true; };
    speechSynthesis.speak(en); speechSynthesis.speak(ko);
  } catch(e){ card.spoken = true; }
}
function stopSpeech(){ try { if (hasTTS) speechSynthesis.cancel(); } catch(e){} }
if (hasTTS) { try { speechSynthesis.getVoices(); speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', () => speechSynthesis.getVoices()); } catch(e){} }
function nextVocab(){ if (!vocabDeck.length) vocabDeck = VOCAB.slice().sort(() => Math.random() - .5); return vocabDeck.pop(); }
  window.NYGVocab = { list: VOCAB, next: nextVocab, speak: speakCard, stop: stopSpeech };
})();
