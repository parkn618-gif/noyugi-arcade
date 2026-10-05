/* 노유기 오락실 공용 인증 문구 — 카페 인증 글에 붙는 «확인 코드»
   주간 순위를 모을 때 점수를 고쳐 쓴 글을 걸러 낸다(완벽한 잠금은 아니고, 손으로 고치면 코드가 맞지 않게 하는 정도).
   쓰는 법: <script src="인증.js"></script> 뒤에
     NYGProof.text('알파 스톰', score, ['STAGE 5', '완성한 단어 3개: STAR MOON SUN'])  → 복사할 문구 전체
   코드 = FNV-1a 32비트( 게임이름|점수|YYYYMMDD|비밀 ) 를 6자리 대문자로. 대조는 같은 식으로 다시 계산한다. */
(() => {
  const SALT = 'nyg-arcade-2026-rank';
  const ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function ymd(d){ return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0'); }
  function code(game, score, d){
    const s = game + '|' + score + '|' + ymd(d || new Date()) + '|' + SALT;
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    let out = '';
    for (let i = 0; i < 6; i++) { out += ABC[h & 31]; h = (h >>> 5) | ((h & 31) << 27); h >>>= 0; }
    return out;
  }
  function text(game, score, lines){
    const d = new Date();
    return ['노유기 오락실 · ' + game, '점수 ' + score.toLocaleString('ko-KR') + '점'].concat(lines || [])
      .concat(['확인 코드 ' + code(game, score, d) + ' (' + (d.getMonth() + 1) + '/' + d.getDate() + ')']).join('\n');
  }
  window.NYGProof = { code, text };
})();
