const mockData = [
  {
    id: 0,
    title: '新增筆記',
    isFirstData: true
  },
  {
    id: 1,
    title: '推薦歌單',
    text:
      '<h4><strong>陳雪凝 - 綠色</strong></h4><figure class="media"><oembed url="https://www.youtube.com/watch?v=WY6nQK7zbsk"></oembed></figure><h4>BOL4(볼빨간사춘기) _ Workaholic(워커홀릭)</h4><figure class="media"><oembed url="https://www.youtube.com/watch?v=mrAIqeULUL0"></oembed></figure><p>&nbsp;</p>',
    isStar: false,
    cover: 'Watercolor'
  },
  {
    id: 2,
    title: '郭台銘退黨聲明',
    text:
      '<p style="text-align:justify;"><strong>郭台銘退黨聲明</strong></p><p style="text-align:justify;">此時此刻發布退黨聲明，我並非沒有掙扎。在情感上，無法繼續與國民黨並肩作戰，感到有些惆悵，但在理智上，我知道我正在做一件對的事，一件將翻轉中華民國命運的大事。</p><p style="text-align:justify;">台銘自幼生長在忠黨愛國的警察家庭，一生最佩服的人是 國父孫中山先生，三民主義就是我的政治信仰。</p><p style="text-align:justify;">蔣經國先生的「計利當計天下利 求名當求萬世名」的信念更是台銘處身立世的座右銘！台灣能寧靜走到今天的民主，創立令人讚嘆的經濟奇蹟，更要感謝這位無私有遠見的領袖，拚經濟、解除戒嚴、開放兩岸和平交流。但 經國先生若地下有知，應該會對今天遠離民心失去理想的國民黨非常痛心。</p><p style="text-align:justify;">七次的總統大選，三次的政黨輪替，事實證明藍綠的黨都不能帶給台灣人民希望。我對國民黨的初心並沒有變，歷任的黨主席都可以作證，這些年來，台銘是如何一無所求，無怨無悔的死忠支持國民黨。</p><p style="text-align:justify;">國民黨存在的價值在於實踐治理國家的理想及目標，而不僅在於抵禦民進黨，更不該成為個人利益及權力分贓的平台。台銘今年四月十七日在國民黨中常會發表重回國民黨宣言的初衷，充滿對一個百年政黨革新向上，以人民利益為第一優先的期待，我衷心盼望喚回國民黨的黨魂，重塑國民黨的榮耀，使得更多年輕世代以加入國民黨為榮，有句西諺：一個雞蛋從外面被打破只是一個生命的結束，若它被內部孕育的力量打破則是一個生命的誕生。</p><p style="text-align:justify;">經過數月來的初選過程與國民黨的互動我深刻體會百年政黨改造的艱辛與黨魂流失的嚴重。但我失望了，儘管我相信目前仍有許多黨員同志，選擇留在國民黨內，為孕育國民黨重生而奮戰。但我發現我個人再多的努力也撼動不了現有國民黨的分贓與腐朽文化。</p><p style="text-align:justify;">結束了。</p><p style="text-align:justify;">離開了。</p><p style="text-align:justify;">揮揮衣袖不帶走一片雲彩</p><p style="text-align:justify;">但願我郭台銘的離開 能夠加速國民黨的改造與重生。</p><p style="text-align:justify;">祝福國民黨</p><p style="text-align:justify;">謝謝大家 郭台銘敬上 9.12.2019</p>',
    isStar: false,
    cover: 'Triangle'
  },

  {
    id: 3,
    title: '中秋連假天氣圖',
    text:
      '<h4><strong>明天到底能不能烤肉賞月？ 一圖秒懂中秋連假全台天氣</strong></h4><p>&nbsp;</p><img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;" src="https://s.yimg.com/ny/api/res/1.2/gNTxx6eLXaEhKb07V44Opg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/https://media.zenfs.com/zh-tw/nownews.com/5b15502d2af3732d41ef5cc5bde0b0f3" width="937" height="937"><p>▲天氣風險公司一張圖解說中秋連假天氣。（圖／翻攝天氣風險公司臉書</p>',
    isStar: true,
    cover: 'Gradient'
  },
  {
    id: 4,
    title: 'LOL 聯盟戰棋',
    text:
      '<figure class="image"><img src="https://i.imgur.com/1MVvkGw.jpg"><figcaption>攻略圖</figcaption></figure>',
    isStar: true,
    cover: 'Gradient'
  }
];

export const initMockData = () => {
  const needSetMockData = (() => {
    if (!localStorage.getItem('data')) return true;

    const storageData = JSON.parse(localStorage.getItem('data'));
    if (Array.isArray(storageData) && !storageData.some(item => item.id === 0))
      return true;

    return false;
  })();

  if (needSetMockData) localStorage.setItem('data', JSON.stringify(mockData));
};
