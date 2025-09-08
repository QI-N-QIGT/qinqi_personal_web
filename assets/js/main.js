// 多语言与交互脚本
(function () {
  // 数据：中英文本
  const i18n = {
    en: {
      htmlLang: 'en',
      title: 'Qi Qin - Homepage',
      toggle: '中文',
      name: 'Qi Qin',
      role: 'Postdoctoral Researcher',
      affiliation: 'Tsinghua University',
      emailLabel: 'Email',
      socialAria: 'Social links',
      social: {
        github: { label: 'GitHub', title: 'GitHub' },
        scholar: { label: 'Google Scholar', title: 'Google Scholar' },
        linkedin: { label: 'LinkedIn', title: 'LinkedIn' },
        researchgate: { label: 'ResearchGate', title: 'ResearchGate' },
        zhihu: { label: 'Zhihu', title: 'Zhihu' },
      },
      gallery: {
        title: 'Gallery',
        itemTitle: 'Skógafoss, Iceland, May 2018',
        quote: '"Where the wind carves colors and the river writes its own song."',
      },
+     advice: {
+       title: 'Advice',
+       a1Title: 'Pursue Long-term Goals, Iterate Fast',
+       a1Content: "Pursue long-term goals without over-polishing; favor fast iteration, small steps, and continuous improvement.",
+       a2Title: 'Aim high, dream big',
+       a2Content: 'Aim for the top and you may reach the middle; aim for the middle and you may end up at the bottom.'
+     },
      newsTitle: 'News',
      news: [
        { date: '2025.7.03', text: 'Started postdoctoral research at Tsinghua University. ' },
        { date: '2025.06.19', text: 'Received Ph.D. from the Institute for Integrated Circuits, Tsinghua University.' },
        { date: '2025.05.17', text: 'Successfully defended my Ph.D. thesis.' }
      ],
      bioTitle: 'Biography',
      bioP1: 'Qi Qin received the Ph.D. degree from the Institute for Integrated Circuits at Tsinghua University in 2025 and is currently a postdoctoral researcher at Tsinghua University. He is supervised by <a href="https://scholar.google.com/citations?user=czP0vJoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. B. Gao</a>.',
      bioP2: 'His research interests include in-memory computing, efficient machine learning, AI accelerator architecture, edge learning and emerging memory technologies.',
      eduTitle: 'Education',
      edu: [
        '2020–2025 Ph.D. in Integrated Circuits Science and Engineering, Tsinghua University',
        '2016–2020 B.Eng. in Electronics Science and Technology, Shandong University'
      ],
      pubsTitle: 'Selected Publications',
      journalsTitle: 'Journal Papers',
      conferencesTitle: 'Conference Papers',
      journals: [
        { title: 'Edge learning using a fully integrated neuro-inspired memristor chip', authors: 'W Zhang, P Yao, B Gao, Q Liu, D Wu, Q Zhang, Y Li, Q Qin, J Li, Z Zhu, ...', venue: 'Science 381 (6663), 1205-1211', year: '2023', citations: '288' },
        { title: 'Energy-efficient high-fidelity image reconstruction with memristor arrays for medical diagnosis', authors: 'H Zhao, Z Liu, J Tang, B Gao, Q Qin, J Li, Y Zhou, P Yao, Y Xi, Y Lin, ...', venue: 'Nature Communications 14 (1), 2276', year: '2023', citations: '64' },
        { title: 'Monolithic 3D integration of analog RRAM‐based computing‐in‐memory and sensor for energy‐efficient near‐sensor computing', authors: 'Y Du, J Tang, Y Li, Y Xi, Y Li, J Li, H Huang, Q Qin, Q Zhang, B Gao, ...', venue: 'Advanced Materials 36 (22), 2302658', year: '2024', citations: '28' },
        { title: 'A memristor-based adaptive neuromorphic decoder for brain–computer interfaces', authors: 'Z Liu, J Mei, J Tang, M Xu, B Gao, K Wang, S Ding, Q Liu, Q Qin, W Chen, ...', venue: 'Nature Electronics, 1-11', year: '2025', citations: '14' },
        { title: 'Fully integrated 3‐D stackable CNTFET/RRAM 1T1R array as BEOL buffer macro for monolithic 3‐D integration with analog RRAM‐based computing‐in‐memory', authors: 'Y Zhang, Y Li, J Tang, L Gao, N Gao, H Xu, R An, Q Qin, Z Liu, D Wu, ...', venue: 'IEEE Transactions on Electron Devices 71 (5), 3343-3350', year: '2024', citations: '5' },
        { title: 'A full-stack memristor-based computation-in-memory system with software-hardware co-development', authors: 'R Yu, Z Wang, Q Liu, B Gao, Z Hao, T Guo, S Ding, J Zhang, Q Qin, D Wu, ...', venue: 'Nature Communications 16 (1), 2123', year: '2025', citations: '2' },
        { title: 'Federated learning using a memristor compute-in-memory chip with in situ physical unclonable function and true random number generator', authors: 'X Li, B Gao, Q Qin, P Yao, J Li, H Zhao, C Liu, Q Zhang, Z Hao, Y Li, ...', venue: 'Nature Electronics, 1-11', year: '2025', citations: '12' },
        { title: 'Computational design of molecular transistor with van der Waals gating', authors: 'F Lu, Q Qin, Y Li, J Chen', venue: 'Applied Physics Express 13 (8), 085002', year: '2020', citations: '1' }
      ],
      conferences: [
        { title: 'A hybrid computing-in-memory architecture by monolithic 3D integration of BEOL CNT/IGZO-based CFET logic and analog RRAM', authors: 'R An, Y Li, J Tang, B Gao, Y Du, J Yao, Y Li, W Sun, H Zhao, J Li, Q Qin, ...', venue: '2022 International Electron Devices Meeting (IEDM), 18.1.1-18.1.4', year: '2022', citations: '36' },
        { title: 'Hybrid precoding with a fully-parallel large-scale analog RRAM array for 5G/6G MIMO communication system', authors: 'Q Qin, B Gao, Q Liu, Z Liu, Y Lin, P Yao, Y Zhou, R Yu, Z Hao, J Tang, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.2.1-33.2.4', year: '2022', citations: '11' },
        { title: 'First demonstration of homomorphic encryption using multi-functional RRAM arrays with a novel noise-modulation scheme', authors: 'X Li, B Gao, B Lin, R Yu, H Zhao, Z Wang, Q Qin, J Tang, Q Zhang, X Li, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.5.1-33.5.4', year: '2022', citations: '8' },
        { title: '3D stackable CNTFET/RRAM 1T1R array with CNT CMOS peripheral circuits as BEOL buffer macro for monolithic 3-D integration with analog RRAM-based computing-in-memory', authors: 'Y Zhang, Y Li, J Tang, N Gao, L Gao, H Xu, R An, Q Qin, Z Liu, D Wu, ...', venue: '2023 International Electron Devices Meeting (IEDM), 1-4', year: '2023', citations: '4' },
        { title: 'TID Radiation Impacts on Charge-trapping Macaroni 3D NAND Flash Memory', authors: 'Q Qin, F Wang, X Zhan, Y Li, J Chen', venue: '2020 IEEE International Symposium on the Physical and Failure Analysis of ...', year: '2020', citations: '2' },
        { title: 'A Crossbar-wise IR-drop Compensation Schemes for 5G/6G Hybrid Precoding with Highly-parallel Analog RRAM Array', authors: 'Q Qin, Q Zhang, B Gao, J Tang, H Qian, H Wu', venue: '2023 Silicon Nanoelectronics Workshop (SNW), 45-46', year: '2023', citations: '0' }
      ],
      riTitle: 'Research Interests',
       ri: [
         'Brain-inspired Learning System based on Memristors',
         'Chip Architecture Design and Algorithm Improvement for LLM'
       ],
       talksTitle: 'Conferences & Presentations',
       talks: [
         'IEDM (Online), Dec. 2022 — Hybrid precoding with a fully-parallel large-scale analog RRAM array for 5G/6G MIMO communication system',
         'SNW (Kyoto, Japan), Jun. 2023 — A Crossbar-wise IR-drop Compensation Schemes for 5G/6G Hybrid Precoding with Highly-parallel Analog RRAM Array'
       ],
       awardsTitle: 'Honor & Awards',
      awards: [
        'Outstanding Teaching Assistant Award of Tsinghua University, 2024',
        'Tsinghua University Comprehensive Scholarship, 2024 & 2022',
        'Shandong University Outstanding Graduate, 2020',
        'Shandong University Outstanding Student, 2019 & 2017',
      ],
      footer: (y) => `© ${y} Qi Qin. All rights reserved.`
    },
    zh: {
      htmlLang: 'zh-CN',
      title: '秦琦 - 个人主页',
      toggle: 'English',
      name: '秦琦',
      role: '博士后研究员',
      affiliation: '清华大学',
      emailLabel: '邮箱',
      socialAria: '社交链接',
      social: {
        github: { label: 'GitHub', title: 'GitHub' },
        scholar: { label: 'Google Scholar', title: 'Google Scholar' },
        linkedin: { label: 'LinkedIn', title: 'LinkedIn' },
        researchgate: { label: 'ResearchGate', title: 'ResearchGate' },
        zhihu: { label: '知乎', title: '知乎 Zhihu' },
      },
      gallery: {
        title: '相册',
        itemTitle: '斯科加瀑布，冰岛，2018年5月',
        quote: '“风雕色彩，河自成歌。”',
      },
+     advice: {
+       title: '建议',
+       a1Title: '追求长期目标，快速迭代',
+       a1Content: '追求长期目标，但不要慢工出细活；以快速迭代、小步快跑、持续改进为主。',
+       a2Title: 'Aim high, dream big',
+       a2Content: '求其上，得其中；求其中，得其下。志存高远，胸怀大梦。'
+     },
      newsTitle: '最新动态',
      news: [
        { date: '2025.7.03', text: '在清华大学开始博士后研究工作。' },
        { date: '2025.06.19', text: '获得清华大学集成电路学院博士学位。' },
        { date: '2025.05.17', text: '博士论文答辩顺利通过。' }
      ],
      bioTitle: '个人简介',
      bioP1: '秦琦于2025年获得清华大学集成电路学院博士学位，现为清华大学博士后研究员。导师为<a href="https://scholar.google.com/citations?user=czP0vJoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">高滨教授</a>。',
      bioP2: '研究兴趣包括存算一体、高效机器学习、AI 加速器架构、边缘学习以及新型存储器技术。',
      eduTitle: '教育经历',
      edu: [
        '2020–2025 清华大学 集成电路科学与工程 博士',
        '2016–2020 山东大学 电子科学与技术 学士'
      ],
      pubsTitle: '主要论文',
      journalsTitle: '期刊论文',
      conferencesTitle: '会议论文',
      journals: [
        { title: 'Edge learning using a fully integrated neuro-inspired memristor chip', authors: 'W Zhang, P Yao, B Gao, Q Liu, D Wu, Q Zhang, Y Li, Q Qin, J Li, Z Zhu, ...', venue: 'Science 381 (6663), 1205-1211', year: '2023', citations: '288' },
        { title: 'Energy-efficient high-fidelity image reconstruction with memristor arrays for medical diagnosis', authors: 'H Zhao, Z Liu, J Tang, B Gao, Q Qin, J Li, Y Zhou, P Yao, Y Xi, Y Lin, ...', venue: 'Nature Communications 14 (1), 2276', year: '2023', citations: '64' },
        { title: 'Monolithic 3D integration of analog RRAM‐based computing‐in‐memory and sensor for energy‐efficient near‐sensor computing', authors: 'Y Du, J Tang, Y Li, Y Xi, Y Li, J Li, H Huang, Q Qin, Q Zhang, B Gao, ...', venue: 'Advanced Materials 36 (22), 2302658', year: '2024', citations: '28' },
        { title: 'A memristor-based adaptive neuromorphic decoder for brain–computer interfaces', authors: 'Z Liu, J Mei, J Tang, M Xu, B Gao, K Wang, S Ding, Q Liu, Q Qin, W Chen, ...', venue: 'Nature Electronics, 1-11', year: '2025', citations: '14' },
        { title: 'Fully integrated 3‐D stackable CNTFET/RRAM 1T1R array as BEOL buffer macro for monolithic 3‐D integration with analog RRAM‐based computing‐in‐memory', authors: 'Y Zhang, Y Li, J Tang, L Gao, N Gao, H Xu, R An, Q Qin, Z Liu, D Wu, ...', venue: 'IEEE Transactions on Electron Devices 71 (5), 3343-3350', year: '2024', citations: '5' },
        { title: 'A full-stack memristor-based computation-in-memory system with software-hardware co-development', authors: 'R Yu, Z Wang, Q Liu, B Gao, Z Hao, T Guo, S Ding, J Zhang, Q Qin, D Wu, ...', venue: 'Nature Communications 16 (1), 2123', year: '2025', citations: '2' },
        { title: 'Federated learning using a memristor compute-in-memory chip with in situ physical unclonable function and true random number generator', authors: 'X Li, B Gao, Q Qin, P Yao, J Li, H Zhao, C Liu, Q Zhang, Z Hao, Y Li, ...', venue: 'Nature Electronics, 1-11', year: '2025', citations: '12' },
        { title: 'Computational design of molecular transistor with van der Waals gating', authors: 'F Lu, Q Qin, Y Li, J Chen', venue: 'Applied Physics Express 13 (8), 085002', year: '2020', citations: '1' }
      ],
      conferences: [
        { title: 'A hybrid computing-in-memory architecture by monolithic 3D integration of BEOL CNT/IGZO-based CFET logic and analog RRAM', authors: 'R An, Y Li, J Tang, B Gao, Y Du, J Yao, Y Li, W Sun, H Zhao, J Li, Q Qin, ...', venue: '2022 International Electron Devices Meeting (IEDM), 18.1.1-18.1.4', year: '2022', citations: '36' },
        { title: 'Hybrid precoding with a fully-parallel large-scale analog RRAM array for 5G/6G MIMO communication system', authors: 'Q Qin, B Gao, Q Liu, Z Liu, Y Lin, P Yao, Y Zhou, R Yu, Z Hao, J Tang, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.2.1-33.2.4', year: '2022', citations: '11' },
        { title: 'First demonstration of homomorphic encryption using multi-functional RRAM arrays with a novel noise-modulation scheme', authors: 'X Li, B Gao, B Lin, R Yu, H Zhao, Z Wang, Q Qin, J Tang, Q Zhang, X Li, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.5.1-33.5.4', year: '2022', citations: '8' },
        { title: '3D stackable CNTFET/RRAM 1T1R array with CNT CMOS peripheral circuits as BEOL buffer macro for monolithic 3-D integration with analog RRAM-based computing-in-memory', authors: 'Y Zhang, Y Li, J Tang, N Gao, L Gao, H Xu, R An, Q Qin, Z Liu, D Wu, ...', venue: '2023 International Electron Devices Meeting (IEDM), 1-4', year: '2023', citations: '4' },
        { title: 'TID Radiation Impacts on Charge-trapping Macaroni 3D NAND Flash Memory', authors: 'Q Qin, F Wang, X Zhan, Y Li, J Chen', venue: '2020 IEEE International Symposium on the Physical and Failure Analysis of ...', year: '2020', citations: '2' },
        { title: 'A Crossbar-wise IR-drop Compensation Schemes for 5G/6G Hybrid Precoding with Highly-parallel Analog RRAM Array', authors: 'Q Qin, Q Zhang, B Gao, J Tang, H Qian, H Wu', venue: '2023 Silicon Nanoelectronics Workshop (SNW), 45-46', year: '2023', citations: '0' }
      ],
      riTitle: '研究方向',
      ri: [
        '基于忆阻器的类脑学习系统',
        '大语言模型的架构设计与算法改进'
      ],
      talksTitle: '学术会议与报告',
      talks: [
        'IEDM（线上），2022年12月 — Hybrid precoding with a fully-parallel large-scale analog RRAM array for 5G/6G MIMO communication system',
        'SNW（日本京都），2023年6月 — A Crossbar-wise IR-drop Compensation Schemes for 5G/6G Hybrid Precoding with Highly-parallel Analog RRAM Array'
      ],
      awardsTitle: '获奖情况',
      awards: [
        '清华大学优秀助教奖，2024年',
        '清华大学综合奖学金，2024年与2022年',
        '山东大学优秀毕业生，2020年',
        '山东大学优秀学生，2019年与2017年',
      ],
      footer: (y) => `© ${y} 秦琦. 保留所有权利.`
    }
  };

  // 状态：读取持久化语言（默认英文）
  let lang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'en';

  // DOM 引用
  const $ = (id) => document.getElementById(id);

  const page = location.pathname.endsWith('publications.html') ? 'pubs' : (location.pathname.endsWith('gallery.html') ? 'gallery' : (location.pathname.endsWith('advice.html') ? 'advice' : 'home'));
  const els = {
    html: document.documentElement,
    title: document.querySelector('title'),
    toggle: $('lang-toggle'),
    name: $('name'),
    role: $('role'),
    affiliation: $('affiliation'),
    emailLabel: $('email-label'),
    newsTitle: $('news-title'),
    newsList: $('news-list'),
    bioTitle: $('bio-title'),
    bioP1: $('bio-p1'),
    bioP2: $('bio-p2'),
    eduTitle: $('edu-title'),
    eduList: $('edu-list'),
    pubsTitle: $('pubs-title'),
    journalsTitle: $('journals-title'),
    journalsList: $('journals-list'),
    confsTitle: $('confs-title'),
    confsList: $('confs-list'),
    riTitle: $('ri-title'),
    riList: $('ri-list'),
    talksTitle: $('talks-title'),
    talksList: $('talks-list'),
    awardsTitle: $('awards-title'),
    awardsList: $('awards-list'),
    footer: $('footer-text'),
    socialNav: document.getElementById('social-links'),
    github: document.getElementById('github-link'),
    scholar: document.getElementById('scholar-link'),
    linkedin: document.getElementById('linkedin-link'),
    researchgate: document.getElementById('researchgate-link'),
    zhihu: document.getElementById('zhihu-link'),
    navHome: document.getElementById('nav-home'),
    navPubs: document.getElementById('nav-publications'),
    navAdvice: document.getElementById('nav-advice'),
    navGallery: document.getElementById('nav-gallery')
  };

  function applySocialLocalization(t) {
    if (!els.socialNav) return;
    els.socialNav.setAttribute('aria-label', t.socialAria);
    if (els.github) {
      els.github.setAttribute('aria-label', t.social.github.label);
      els.github.setAttribute('title', t.social.github.title);
    }
    if (els.scholar) {
      els.scholar.setAttribute('aria-label', t.social.scholar.label);
      els.scholar.setAttribute('title', t.social.scholar.title);
    }
    if (els.linkedin) {
      els.linkedin.setAttribute('aria-label', t.social.linkedin.label);
      els.linkedin.setAttribute('title', t.social.linkedin.title);
    }
    if (els.researchgate) {
      els.researchgate.setAttribute('aria-label', t.social.researchgate.label);
      els.researchgate.setAttribute('title', t.social.researchgate.title);
    }
    if (els.zhihu) {
      els.zhihu.setAttribute('aria-label', t.social.zhihu.label);
      els.zhihu.setAttribute('title', t.social.zhihu.title);
    }
  }

  // 提取期刊/会议基础名称（去掉逗号后的卷期页信息、去掉数字开始后的信息）
  function cleanVenueName(venue) {
    if (!venue) return '';
    let name = venue;
    const commaIdx = name.indexOf(',');
    if (commaIdx !== -1) name = name.slice(0, commaIdx);
    const digitIdx = name.search(/[0-9]/);
    if (digitIdx > -1) name = name.slice(0, digitIdx);
    name = name.replace(/\s+/g, ' ').trim();
    return name;
  }

  // 从括号中提取缩写 (如 IEDM/SNW)
  function detectAcronymFromParentheses(venue) {
    if (!venue) return null;
    const m = venue.match(/\(([A-Z]{2,10})\)/);
    return m ? m[1] : null;
  }

  // 根据常见期刊/会议名称返回更友好的缩写
  function getVenueAbbrev(baseName, original) {
    const presets = [
      { re: /nature electronics/i, abbr: 'NE' },
      { re: /nature communications/i, abbr: 'NC' },
      { re: /advanced materials/i, abbr: 'AM' },
      { re: /science/i, abbr: 'Science' },
      { re: /ieee transactions on electron devices/i, abbr: 'TED' },
      { re: /ieee transactions on circuits and systems ii/i, abbr: 'TCAS-II' },
      { re: /neuromorphic computing and engineering/i, abbr: 'NCE' },
      { re: /ieee solid-?state circuits letters/i, abbr: 'SSCL' },
      { re: /applied physics express/i, abbr: 'APEX' },
      { re: /international electron devices meeting/i, abbr: 'IEDM' },
      { re: /silicon nanoelectronics workshop/i, abbr: 'SNW' },
      { re: /physical and failure analysis/i, abbr: 'IPFA' },
    ];
    for (const p of presets) {
      if (p.re.test(baseName) || p.re.test(original)) return p.abbr;
    }
    const ac = detectAcronymFromParentheses(original);
    if (ac) return ac;
    // 规则生成：取单词首字母，忽略停用词，若仅 1 个字母则回退到全名
    const stop = new Set(['on','of','and','for','the','in','at','with','a','an']);
    const words = (baseName || '').split(/[\s\-:]+/).filter(Boolean);
    const letters = [];
    for (const w of words) {
      const lw = w.toLowerCase();
      if (stop.has(lw)) continue;
      if (/^[ivx]+$/i.test(w)) { // 罗马数字
        letters.push(w.toUpperCase());
      } else if (/^[A-Za-z]/.test(w)) {
        letters.push(w[0].toUpperCase());
      }
    }
    const ac2 = letters.join('');
    return ac2.length <= 1 ? baseName : ac2;
  }

  function formatPublication(pub) {
    const baseName = cleanVenueName(pub.venue);
    const abbr = getVenueAbbrev(baseName, pub.venue);
    const yy = String(pub.year).slice(-2).padStart(2, '0');
    const prefix = (lang === 'en')
      ? `[${abbr} '${yy}]`
      : `【${abbr}‘${yy}】`;
    // 将作者中的“Q Qin”加粗
    const authorsHtml = (pub.authors || '').replace(/\bQ Qin\b/g, '<strong>Q Qin</strong>');
    return `
      <div class="publication-item">
        <p><strong>${prefix} ${pub.title}</strong></p>
        <p class="pub-authors">${authorsHtml}</p>
        <p class="pub-venue">${baseName}, ${pub.year} <span class="citation-count">[Citations: ${pub.citations}]</span></p>
      </div>
    `;
  }

  function applyNavLocalization(t) {
    if (els.navHome) els.navHome.textContent = (lang === 'en') ? 'Home' : '首页';
    if (els.navPubs) els.navPubs.textContent = (lang === 'en') ? 'Publications' : '论文';
    if (els.navAdvice) els.navAdvice.textContent = (lang === 'en') ? 'Advice' : '建议';
    if (els.navGallery) els.navGallery.textContent = (lang === 'en') ? 'Gallery' : '相册';
  }

  function render() {
    const t = i18n[lang];
    els.html.lang = t.htmlLang;
    
    // 动态标题设置
    const titleText = page === 'pubs' ? 
      (lang === 'en' ? 'Qi Qin - Publications' : '秦琦 - 论文') :
      (page === 'gallery' ?
        (lang === 'en' ? 'Qi Qin - Gallery' : '秦琦 - 相册') :
        (page === 'advice' ? (lang === 'en' ? 'Qi Qin - Advice' : '秦琦 - 建议') : t.title));
    els.title.textContent = titleText;
    
    els.toggle.textContent = t.toggle;

    els.name.textContent = t.name;
    els.role.textContent = t.role;
    els.affiliation.textContent = t.affiliation;
    els.emailLabel.textContent = t.emailLabel;

    // 社交本地化
    applySocialLocalization(t);
    applyNavLocalization(t);

    if (page === 'home') {
      if (els.newsTitle) els.newsTitle.textContent = t.newsTitle;
      if (els.newsList) els.newsList.innerHTML = t.news.map(n => `<li><strong>${n.date}</strong>, ${n.text}</li>`).join('');

      if (els.bioTitle) els.bioTitle.textContent = t.bioTitle;
      if (els.bioP1) els.bioP1.innerHTML = t.bioP1;
      if (els.bioP2) els.bioP2.textContent = t.bioP2;

      // 教育经历
      if (els.eduTitle && t.eduTitle) els.eduTitle.textContent = t.eduTitle;
      if (els.eduList && Array.isArray(t.edu)) els.eduList.innerHTML = t.edu.map(x => `<li>${x}</li>`).join('');
 
       if (els.riTitle) els.riTitle.textContent = t.riTitle;
       if (els.riList) els.riList.innerHTML = t.ri.map(x => `<li>${x}</li>`).join('');
 
      // 学术会议与报告
      if (els.talksTitle && t.talksTitle) els.talksTitle.textContent = t.talksTitle;
      if (els.talksList && Array.isArray(t.talks)) els.talksList.innerHTML = t.talks.map(x => `<li>${x}</li>`).join('');
 
       if (els.awardsTitle) els.awardsTitle.textContent = t.awardsTitle;
      if (els.awardsList) els.awardsList.innerHTML = t.awards.map(x => `<li>${x}</li>`).join('');
    }

    if (page === 'pubs') {
      if (els.pubsTitle) els.pubsTitle.textContent = t.pubsTitle;
      if (els.journalsTitle) els.journalsTitle.textContent = t.journalsTitle;
      const journalsSorted = [...t.journals].sort((a,b) => Number(b.year) - Number(a.year));
      if (els.journalsList) els.journalsList.innerHTML = journalsSorted.map(formatPublication).join('');
    
      if (els.confsTitle) els.confsTitle.textContent = t.conferencesTitle;
      const confsSorted = [...t.conferences].sort((a,b) => Number(b.year) - Number(a.year));
      if (els.confsList) els.confsList.innerHTML = confsSorted.map(formatPublication).join('');
    }

    if (page === 'gallery') {
      const g = t.gallery || {};
      const gTitle = document.getElementById('gallery-title');
      const gItemTitle = document.getElementById('gallery-item-title');
      const gQuote = document.getElementById('gallery-quote');
      if (gTitle && g.title) gTitle.textContent = g.title;
      if (gItemTitle && g.itemTitle) gItemTitle.textContent = g.itemTitle;
      if (gQuote && g.quote) gQuote.textContent = g.quote;
    }
+
+    if (page === 'advice') {
+      const a = t.advice || {};
+      const aTitle = document.getElementById('advice-title');
+      const a1t = document.getElementById('advice-1-title');
+      const a1c = document.getElementById('advice-1-content');
+      const a2t = document.getElementById('advice-2-title');
+      const a2c = document.getElementById('advice-2-content');
+      if (aTitle && a.title) aTitle.textContent = a.title;
+      if (a1t && a.a1Title) a1t.textContent = a.a1Title;
+      if (a1c && a.a1Content) a1c.textContent = a.a1Content;
+      if (a2t && a.a2Title) a2t.textContent = a.a2Title;
+      if (a2c && a.a2Content) a2c.textContent = a.a2Content;
+    }
    if (els.footer) els.footer.innerHTML = t.footer(new Date().getFullYear());
  }

  // 绑定切换：确保按钮可点击且在任意页面生效
  const toggleBtn = $('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      lang = (lang === 'en') ? 'zh' : 'en';
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
      }
      render();
    }, { passive: true });
  }

  // 初始化渲染
  render();

  // 平滑滚动（若未来添加导航锚点）
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
})();