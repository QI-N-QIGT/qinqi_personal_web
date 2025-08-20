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
      quote: '“Where the wind carves colors and the river writes its own song.”',
    },
  },
      newsTitle: 'News',
      news: [
        { date: '2024.12.01', text: 'Started postdoctoral research at Tsinghua University.' },
        { date: '2024.07.01', text: 'Received Ph.D. from the Institute for Integrated Circuits, Tsinghua University.' },
        { date: '2024.06.15', text: 'Successfully defended my Ph.D. thesis.' },
        { date: '2024.03.20', text: 'One paper accepted by a major academic conference.' },
        { date: '2023.12.10', text: 'Received National Graduate Scholarship.' }
      ],
      bioTitle: 'Biography',
      bioP1: 'Qi Qin received the Ph.D. degree from the Institute for Integrated Circuits at Tsinghua University in 2024 and is currently a postdoctoral researcher at Tsinghua University.',
      bioP2: 'His research interests include integrated circuit design, AI accelerator architecture, in-memory computing, low-power chips, and emerging memory technologies.',
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
        { title: 'Federated learning using a memristor compute-in-memory chip with in situ physical unclonable function and true random number generator', authors: 'X Li, B Gao, Q Qin, P Yao, J Li, H Zhao, C Liu, Q Zhang, Z Hao, Y Li, ...', venue: 'Nature Electronics, 1-11', year: '2025', citations: '1' },
        { title: 'Computational design of molecular transistor with van der Waals gating', authors: 'F Lu, Q Qin, Y Li, J Chen', venue: 'Applied Physics Express 13 (8), 085002', year: '2020', citations: '1' }
      ],
      conferences: [
        { title: 'A hybrid computing-in-memory architecture by monolithic 3D integration of BEOL CNT/IGZO-based CFET logic and analog RRAM', authors: 'R An, Y Li, J Tang, B Gao, Y Du, J Yao, Y Li, W Sun, H Zhao, J Li, Q Qin, ...', venue: '2022 International Electron Devices Meeting (IEDM), 18.1.1-18.1.4', year: '2022', citations: '36' },
        { title: 'Hybrid precoding with a fully-parallel large-scale analog RRAM array for 5G/6G MIMO communication system', authors: 'Q Qin, B Gao, Q Liu, Z Liu, Y Lin, P Yao, Y Zhou, R Yu, Z Hao, J Tang, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.2.1-33.2.4', year: '2022', citations: '11' },
        { title: 'First demonstration of homomorphic encryption using multi-functional RRAM arrays with a novel noise-modulation scheme', authors: 'X Li, B Gao, B Lin, R Yu, H Zhao, Z Wang, Q Qin, J Tang, Q Zhang, X Li, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.5.1-33.5.4', year: '2022', citations: '8' },
        { title: 'A high-speed and high-efficiency diverse error margin write-verify scheme for an RRAM-based neuromorphic hardware accelerator', authors: 'Y Lin, J Tang, B Gao, Q Qin, Q Zhang, H Qian, H Wu', venue: 'IEEE Transactions on Circuits and Systems II: Express Briefs 70 (4), 1366-1370', year: '2022', citations: '7' },
        { title: '3D stackable CNTFET/RRAM 1T1R array with CNT CMOS peripheral circuits as BEOL buffer macro for monolithic 3-D integration with analog RRAM-based computing-in-memory', authors: 'Y Zhang, Y Li, J Tang, N Gao, L Gao, H Xu, R An, Q Qin, Z Liu, D Wu, ...', venue: '2023 International Electron Devices Meeting (IEDM), 1-4', year: '2023', citations: '4' },
        { title: 'An RRAM retention prediction framework using a convolutional neural network based on relaxation behavior', authors: 'Y Zhang, Q Zhang, Q Qin, W Zhang, Y Xi, Z Jiang, J Tang, B Gao, H Qian, ...', venue: 'Neuromorphic Computing and Engineering 3 (1), 014011', year: '2023', citations: '3' },
        { title: 'TID Radiation Impacts on Charge-trapping Macaroni 3D NAND Flash Memory', authors: 'Q Qin, F Wang, X Zhan, Y Li, J Chen', venue: '2020 IEEE International Symposium on the Physical and Failure Analysis of ...', year: '2020', citations: '2' },
        { title: 'A 28nm Static-Power-Free Fully-Parallel RRAM-Based TD CIM Macro With 1982TOPS/W/bit for Edge Applications', authors: 'S Wei, P Yao, X Guo, D Wu, L Jie, Q Qin, B Gao, J Tang, H Qian, S Pan, ...', venue: 'IEEE Solid-State Circuits Letters', year: '2024', citations: '0' },
        { title: 'High-Efficient Memristor-Based Bayesian Convolutional Neural Networks for Out-of-Distribution Detection by Uncertainty Estimation', authors: 'Y Lin, Q Zhang, B Gao, J Tang, H Zhao, Q Qin, Z Wang, H Qian, H Wu', venue: 'IEEE Transactions on Electron Devices', year: '2024', citations: '0' },
        { title: 'A Crossbar-wise IR-drop Compensation Schemes for 5G/6G Hybrid Precoding with Highly-parallel Analog RRAM Array', authors: 'Q Qin, Q Zhang, B Gao, J Tang, H Qian, H Wu', venue: '2023 Silicon Nanoelectronics Workshop (SNW), 45-46', year: '2023', citations: '0' }
      ],
      riTitle: 'Research Interests',
      ri: [
        'Integrated circuit design and optimization',
        'AI accelerator architecture',
        'In-memory computing systems',
        'Low-power chip design',
        'Emerging memory technologies',
        'Edge computing and IoT chips'
      ],
      awardsTitle: 'Awards',
      awards: [
        '2023 National Graduate Scholarship',
        '2023 Outstanding Graduate of Tsinghua University',
        '2022 First Prize, Integrated Circuit Design Competition',
        '2022 Innovation Award',
        '2021 Academic Scholarship, Tsinghua University'
      ],
      footer: (y) => `© ${y} Qi Qin. All rights reserved.`
    },
    zh: {
      htmlLang: 'zh-CN',
      title: '秦祺 - 个人主页',
      toggle: 'English',
      name: '秦祺',
      role: '博士后研究员',
      affiliation: '清华大学',
      emailLabel: '邮箱',
      socialAria: '社交链接',
      social: {
      github: { label: 'GitHub', title: 'GitHub' },
      scholar: { label: '谷歌学术', title: 'Google Scholar 学术主页' },
      linkedin: { label: '领英', title: 'LinkedIn 领英' },
      researchgate: { label: 'ResearchGate', title: 'ResearchGate 学术主页' },
      zhihu: { label: '知乎', title: '知乎 Zhihu' },
    },
    gallery: {
      title: '相册',
      itemTitle: '斯科加瀑布，冰岛，2018年5月',
      quote: '“风雕色彩，河自成歌。”',
    },
  },
      newsTitle: '最新动态',
      news: [
        { date: '2024.12.01', text: '在清华大学开始博士后研究工作。' },
        { date: '2024.07.01', text: '获得清华大学集成电路学院博士学位。' },
        { date: '2024.06.15', text: '博士论文答辩顺利通过。' },
        { date: '2024.03.20', text: '一篇论文被重要学术会议接收。' },
        { date: '2023.12.10', text: '获得研究生国家奖学金。' }
      ],
      bioTitle: '个人简介',
      bioP1: '秦祺于2024年获得清华大学集成电路学院博士学位，现为清华大学博士后研究员。',
      bioP2: '研究兴趣包括集成电路设计、AI加速器架构、存算一体、低功耗芯片与新型存储技术等。已发表论文15+篇，累计被引474+次（h指数：7，i10指数：6）。',
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
        { title: 'Federated learning using a memristor compute-in-memory chip with in situ physical unclonable function and true random number generator', authors: 'X Li, B Gao, Q Qin, P Yao, J Li, H Zhao, C Liu, Q Zhang, Z Hao, Y Li, ...', venue: 'Nature Electronics, 1-11', year: '2025', citations: '1' },
        { title: 'Computational design of molecular transistor with van der Waals gating', authors: 'F Lu, Q Qin, Y Li, J Chen', venue: 'Applied Physics Express 13 (8), 085002', year: '2020', citations: '1' }
      ],
      conferences: [
        { title: 'A hybrid computing-in-memory architecture by monolithic 3D integration of BEOL CNT/IGZO-based CFET logic and analog RRAM', authors: 'R An, Y Li, J Tang, B Gao, Y Du, J Yao, Y Li, W Sun, H Zhao, J Li, Q Qin, ...', venue: '2022 International Electron Devices Meeting (IEDM), 18.1.1-18.1.4', year: '2022', citations: '36' },
        { title: 'Hybrid precoding with a fully-parallel large-scale analog RRAM array for 5G/6G MIMO communication system', authors: 'Q Qin, B Gao, Q Liu, Z Liu, Y Lin, P Yao, Y Zhou, R Yu, Z Hao, J Tang, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.2.1-33.2.4', year: '2022', citations: '11' },
        { title: 'First demonstration of homomorphic encryption using multi-functional RRAM arrays with a novel noise-modulation scheme', authors: 'X Li, B Gao, B Lin, R Yu, H Zhao, Z Wang, Q Qin, J Tang, Q Zhang, X Li, ...', venue: '2022 International Electron Devices Meeting (IEDM), 33.5.1-33.5.4', year: '2022', citations: '8' },
        { title: 'A high-speed and high-efficiency diverse error margin write-verify scheme for an RRAM-based neuromorphic hardware accelerator', authors: 'Y Lin, J Tang, B Gao, Q Qin, Q Zhang, H Qian, H Wu', venue: 'IEEE Transactions on Circuits and Systems II: Express Briefs 70 (4), 1366-1370', year: '2022', citations: '7' },
        { title: '3D stackable CNTFET/RRAM 1T1R array with CNT CMOS peripheral circuits as BEOL buffer macro for monolithic 3-D integration with analog RRAM-based computing-in-memory', authors: 'Y Zhang, Y Li, J Tang, N Gao, L Gao, H Xu, R An, Q Qin, Z Liu, D Wu, ...', venue: '2023 International Electron Devices Meeting (IEDM), 1-4', year: '2023', citations: '4' },
        { title: 'An RRAM retention prediction framework using a convolutional neural network based on relaxation behavior', authors: 'Y Zhang, Q Zhang, Q Qin, W Zhang, Y Xi, Z Jiang, J Tang, B Gao, H Qian, ...', venue: 'Neuromorphic Computing and Engineering 3 (1), 014011', year: '2023', citations: '3' },
        { title: 'TID Radiation Impacts on Charge-trapping Macaroni 3D NAND Flash Memory', authors: 'Q Qin, F Wang, X Zhan, Y Li, J Chen', venue: '2020 IEEE International Symposium on the Physical and Failure Analysis of ...', year: '2020', citations: '2' },
        { title: 'A 28nm Static-Power-Free Fully-Parallel RRAM-Based TD CIM Macro With 1982TOPS/W/bit for Edge Applications', authors: 'S Wei, P Yao, X Guo, D Wu, L Jie, Q Qin, B Gao, J Tang, H Qian, S Pan, ...', venue: 'IEEE Solid-State Circuits Letters', year: '2024', citations: '0' },
        { title: 'High-Efficient Memristor-Based Bayesian Convolutional Neural Networks for Out-of-Distribution Detection by Uncertainty Estimation', authors: 'Y Lin, Q Zhang, B Gao, J Tang, H Zhao, Q Qin, Z Wang, H Qian, H Wu', venue: 'IEEE Transactions on Electron Devices', year: '2024', citations: '0' },
        { title: 'A Crossbar-wise IR-drop Compensation Schemes for 5G/6G Hybrid Precoding with Highly-parallel Analog RRAM Array', authors: 'Q Qin, Q Zhang, B Gao, J Tang, H Qian, H Wu', venue: '2023 Silicon Nanoelectronics Workshop (SNW), 45-46', year: '2023', citations: '0' }
      ],
      riTitle: '研究方向',
      ri: [
        '集成电路设计与优化',
        '人工智能芯片架构',
        '存算一体计算系统',
        '低功耗芯片设计',
        '新兴存储器技术',
        '边缘计算与物联网芯片'
      ],
      awardsTitle: '获奖情况',
      awards: [
        '2023年 研究生国家奖学金',
        '2023年 清华大学优秀研究生',
        '2022年 集成电路设计竞赛一等奖',
        '2022年 学术创新奖',
        '2021年 清华大学学业奖学金'
      ],
      footer: (y) => `© ${y} 秦祺. 保留所有权利.`
    }
  };

  // 状态：默认英文
  let lang = 'en';

  // DOM 引用
  const $ = (id) => document.getElementById(id);

  const page = location.pathname.endsWith('publications.html') ? 'pubs' : (location.pathname.endsWith('gallery.html') ? 'gallery' : 'home');
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
    pubsTitle: $('pubs-title'),
    journalsTitle: $('journals-title'),
    journalsList: $('journals-list'),
    confsTitle: $('confs-title'),
    confsList: $('confs-list'),
    riTitle: $('ri-title'),
    riList: $('ri-list'),
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

  function formatPublication(pub) {
    return `
      <div class="publication-item">
        <p><strong>${pub.title}</strong></p>
        <p class="pub-authors">${pub.authors}</p>
        <p class="pub-venue">${pub.venue}, ${pub.year} <span class="citation-count">[Citations: ${pub.citations}]</span></p>
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
      (lang === 'en' ? 'Qi Qin - Publications' : '秦祺 - 论文') :
      (page === 'gallery' ?
        (lang === 'en' ? 'Qi Qin - Gallery' : '秦祺 - 相册') :
        t.title);
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
      if (els.bioP1) els.bioP1.textContent = t.bioP1;
      if (els.bioP2) els.bioP2.textContent = t.bioP2;

      if (els.riTitle) els.riTitle.textContent = t.riTitle;
      if (els.riList) els.riList.innerHTML = t.ri.map(x => `<li>${x}</li>`).join('');

      if (els.awardsTitle) els.awardsTitle.textContent = t.awardsTitle;
      if (els.awardsList) els.awardsList.innerHTML = t.awards.map(x => `<li>${x}</li>`).join('');
    }

    if (page === 'pubs') {
      if (els.pubsTitle) els.pubsTitle.textContent = t.pubsTitle;
      if (els.journalsTitle) els.journalsTitle.textContent = t.journalsTitle;
      if (els.journalsList) els.journalsList.innerHTML = t.journals.map(formatPublication).join('');

      if (els.confsTitle) els.confsTitle.textContent = t.conferencesTitle;
      if (els.confsList) els.confsList.innerHTML = t.conferences.map(formatPublication).join('');
    }

    if (els.footer) els.footer.innerHTML = t.footer(new Date().getFullYear());
  }

  // 绑定切换
  const toggleBtn = $('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      lang = (lang === 'en') ? 'zh' : 'en';
      render();
    });
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