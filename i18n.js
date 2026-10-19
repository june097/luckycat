(() => {
  const terms = {
    "小幸運": ["小幸运", "Little Luck"],
    "把每一點幸福都收好": ["把每一点幸福都收好", "Keep every little joy"],
    "今天": ["今天", "Today"], "本週": ["本周", "This week"], "我的": ["我的", "Me"],
    "給今天的你": ["给今天的你", "A note for you"], "生活裡的小小美好，值得慢慢收藏。": ["生活里的小小美好，值得慢慢收藏。", "Little joys are worth keeping."],
    "今日的你": ["今天的你", "You"], "已經做得很好了。": ["已经做得很好了。", "have done so well today."],
    "用1分鐘，記下今天的開心與感謝。": ["用1分钟，记下今天的开心与感谢。", "Take one minute to note today's joy and gratitude."],
    "寫下今天的幸運": ["写下今天的幸运", "Write down today's little joy"], "查看明天的小幸運": ["查看明天的小幸运", "See tomorrow's little luck"],
    "繼續抽取小幸運": ["继续抽取小幸运", "Continue the lucky draw"], "今天的記錄已完成，小幸運已經替你收好。": ["今天的记录已完成，小幸运已经替你收好。", "Today's entry is complete. Your little luck is ready."],
    "日記已完成，明天的小幸運等你來抽。": ["日记已完成，明天的小幸运等你来抽。", "Your journal is complete. Tomorrow's little luck is waiting."],
    "給心情一點小提醒": ["给心情一点小提醒", "A little reminder"], "今日的一句話": ["今日的一句话", "Today's thought"],
    "1分鐘感恩日記": ["1分钟感恩日记", "One-minute gratitude journal"], "確認今天的記錄": ["确认今天的记录", "Review today's entry"],
    "看看你今天寫下的小小幸福，確認後才會加入日記。": ["看看你今天写下的小小幸福，确认后才会加入日记。", "Review today's little joys. They will be saved after you confirm."],
    "今天記下的事情": ["今天记下的事情", "Today's little joys"], "今天最想感謝的是誰？": ["今天最想感谢的是谁？", "Who are you most grateful for today?"],
    "編輯": ["编辑", "Edit"], "返回修改": ["返回修改", "Back to edit"], "確認並儲存": ["确认并保存", "Confirm and save"],
    "今日的記錄已完成！": ["今天的记录已完成！", "Today's entry is complete!"], "感謝你記下這些美好的瞬間。": ["感谢你记下这些美好的瞬间。", "Thank you for keeping these lovely moments."],
    "抽取明天的小幸運": ["抽取明天的小幸运", "Draw tomorrow's little luck"], "恭喜你！": ["恭喜你！", "Congratulations!"],
    "今天的小幸運已經為你抽出。": ["今天的小幸运已经为你抽出。", "Your little luck for tomorrow is ready."],
    "明天的小幸運": ["明天的小幸运", "Tomorrow's little luck"], "本週留下的幸運": ["本周留下的幸运", "This week's little joys"],
    "看看這星期，哪些日子留下了小小的幸運。": ["看看这星期，哪些日子留下了小小的幸运。", "See which days held a little joy this week."],
    "我的小幸運": ["我的小幸运", "My little luck"], "依照自己的步調，調整日常提醒。": ["按照自己的节奏，调整日常提醒。", "Adjust reminders to suit your routine."],
    "每日提醒": ["每日提醒", "Daily reminder"], "在喜歡的時間，提醒自己留一點空間給今天。": ["在喜欢的时间，提醒自己留一点空间给今天。", "Choose a time to make a little room for today."],
    "開啟每日提醒": ["开启每日提醒", "Turn on daily reminder"], "提醒時間": ["提醒时间", "Reminder time"],
    "小幸運 Widget": ["小幸运 Widget", "Little Luck widget"], "資料管理": ["数据管理", "Data management"],
    "把一點好心情放在 iPhone 主畫面。長按主畫面空白處，點選「編輯」→「加入 Widget」→ 搜尋「小幸運」。": ["把一点好心情放在 iPhone 主屏幕。长按主屏幕空白处，点击“编辑”→“加入 Widget”→ 搜索“小幸运”。", "Keep a little joy on your iPhone Home Screen. Touch and hold an empty area, tap Edit, then Add Widget and search for Little Luck."],
    "☘ 小幸運 · 給今天的提醒": ["☘ 小幸运 · 给今天的提醒", "☘ Little Luck · Today's reminder"], "留意生活中，令人微笑的小細節。": ["留意生活中，令人微笑的小细节。", "Notice the little things that make you smile."], "你的日常也有小幸運 ✨": ["你的日常也有小幸运 ✨", "A little luck is part of your day ✨"],
    "日記儲存在這部裝置。可匯出備份，或從有效備份恢復。": ["日记保存在这台设备。可导出备份，或从有效备份恢复。", "Your journal is stored on this device. Export a backup or restore one."],
    "匯出本機備份": ["导出本地备份", "Export local backup"], "匯入備份": ["导入备份", "Import backup"], "刪除所有本機資料": ["删除所有本地数据", "Delete all local data"],
    "關於小幸運": ["关于小幸运", "About Little Luck"], "取消": ["取消", "Cancel"], "刪除": ["删除", "Delete"],
    "一個離線、簡單、為日常留白的感恩日記。沒有登入，沒有壓力，只有你和每天的小小美好。": ["一个离线、简单、为日常留白的感恩日记。没有登录，没有压力，只有你和每天的小小美好。", "A simple offline gratitude journal with room to breathe. No login, no pressure—just you and the little joys in each day."],
    "版本 1.1 · 生活的小美好，值得好好收藏。": ["版本 1.1 · 生活的小美好，值得好好收藏。", "Version 1.1 · Little joys are worth keeping."],
    "順利完成了一件事": ["顺利完成了一件事", "I finished something successfully"], "遇到開心的事情": ["遇到开心的事情", "Something made me happy"],
    "收到小禮物": ["收到小礼物", "I received a little gift"], "被人關心": ["被人关心", "Someone cared about me"],
    "看到漂亮的景色": ["看到漂亮的景色", "I saw a beautiful view"], "一個輕鬆愉快的瞬間": ["一个轻松愉快的瞬间", "A relaxing, joyful moment"],
    "感到幸運的瞬間": ["感到幸运的瞬间", "A moment when I felt lucky"], "其他": ["其他", "Other"],
    "自己": ["自己", "Myself"], "家人": ["家人", "Family"], "伴侶": ["伴侣", "Partner"], "朋友": ["朋友", "Friends"], "同事": ["同事", "Colleagues"],
    "今天有甚麼讓你覺得不錯？": ["今天有什么让你觉得不错？", "What went well today?"],
    "選一個最想記下的類型。": ["选一个最想记下的类型。", "Choose one moment to remember."],
    "選擇類型後，會接着補充具體內容": ["选择类型后，会接着补充具体内容", "Choose a type, then add what happened."],
    "寫下事情的具體內容。": ["写下事情的具体内容。", "Describe what happened."],
    "選擇今天最想感謝的人。": ["选择今天最想感谢的人。", "Choose someone you feel grateful for today."],
    "今天最想感謝的是甚麼？": ["今天最想感谢的是什么？", "Who are you most grateful for today?"],
    "今天最想感謝的是誰？": ["今天最想感谢的是谁？", "Who are you most grateful for today?"],
    "至少記下一件具體事情": ["至少记下一件具体事情", "Write down at least one specific moment"],
    "至少記下一項才可繼續": ["至少记下一项才可继续", "Add at least one item to continue"], "已記下 ": ["已记下 ", "Added "], " 項": [" 项", " item(s)"],
    "再寫一件小幸運": ["再写一件小幸运", "Add another little joy"], "下一題": ["下一题", "Next question"],
    "完成": ["完成", "Done"], "確認今天的記錄 ✨": ["确认今天的记录 ✨", "Review today's entry ✨"],
    "已選擇：": ["已选择：", "Selected: "], "今天記下的小小幸福": ["今天记下的小小幸福", "Today's little joys"],
    "本週，你留下了不少小幸運 🍀": ["本周，你留下了不少小幸运 🍀", "You collected lots of little joys this week 🍀"],
    "這星期的小小幸運 🍀": ["这星期的小小幸运 🍀", "Little joys from this week 🍀"], "本週幸運事件總結": ["本周幸运事件总结", "This week's little joys"],
    "整理自你親手寫下的日記": ["整理自你亲手写下的日记", "From the moments you wrote down"], "這星期還未留下日記。": ["这星期还未留下日记。", "No entries this week yet."],
    "由今天的一件小事開始吧。": ["从今天的一件小事开始吧。", "Start with one small thing today."],
    "選擇介面語言": ["选择界面语言", "Choose app language"], "介面語言": ["界面语言", "Language"], "語言": ["语言", "Language"], "繁體中文": ["繁体中文", "Traditional Chinese"], "簡體中文": ["简体中文", "Simplified Chinese"],
    "今天有甚麼讓你覺得不錯？": ["今天有什么让你觉得不错？", "What went well today?"],
    "具體是甚麼事情？": ["具体是什么事情？", "What specifically happened?"],
    "生活不會一直順利，但你可以選擇用怎樣的心面對。": ["生活不会一直顺利，但你可以选择用怎样的心面对。", "Life isn't always smooth, but you can choose how to meet it."],
    "慢慢來，沿途的風景也值得欣賞。": ["慢慢来，沿途的风景也值得欣赏。", "Take your time; the view along the way matters too."],
    "幸福不是一切都完美，而是懂得珍惜剛剛好的瞬間。": ["幸福不是一切都完美，而是懂得珍惜刚刚好的瞬间。", "Happiness isn't perfection; it's cherishing the moments you have."],
    "不必急着發光，你本來就有自己的光。": ["不必急着发光，你本来就有自己的光。", "You don't have to shine on cue. Your light is already yours."],
    "每一個今天，都是值得收藏的一頁。": ["每一个今天，都是值得收藏的一页。", "Every day is a page worth keeping."],
    "有時候，最好的時光不在未來，而是你正在經歷的此刻。": ["有时候，最好的时光不在未来，而是你正在经历的此刻。", "Sometimes the best moment isn't ahead; it's the one you're living now."],
    "幸運顏色": ["幸运颜色", "Lucky color"], "幸運物品": ["幸运物品", "Lucky item"], "收下這份小幸運": ["收下这份小幸运", "Keep this little luck"],
    "寫下想感謝的人或事…": ["写下想感谢的人或事…", "Who or what are you grateful for?"], "寫下事情的具體內容…": ["写下事情的具体内容…", "Describe what happened…"],
    "加入": ["加入", "Add"], "繼續填寫": ["继续填写", "Continue"], "新增記錄": ["新增记录", "Add entry"],
    "先完成今天的兩題日記，就可以抽取小幸運。": ["先完成今天的两题日记，就可以抽取小幸运。", "Complete today's journal to reveal your little luck."],
    "完成今天的記錄後，就可以抽取明天的小幸運。": ["完成今天的记录后，就可以抽取明天的小幸运。", "Complete today's entry to draw tomorrow's little luck."],
    "回到首頁": ["返回首页", "Back to home"], "查看本週": ["查看本周", "View this week"], "開啟導覽": ["打开导航", "Open navigation"],
    "至少記下一項才可繼續": ["至少记下一项才可继续", "Add at least one item to continue"], "至少記下一項": ["至少记下一项", "Add at least one item"],
    "繼續抽取小幸運　→": ["继续抽取小幸运　→", "Continue lucky draw →"], "查看明天的小幸運　→": ["查看明天的小幸运　→", "See tomorrow's little luck →"],
    "寫下今天的幸運": ["写下今天的幸运", "Write down today's little joy"], "再寫一件小幸運": ["再写一件小幸运", "Add another little joy"],
    "下一題　→": ["下一题　→", "Next question →"], "確認今天的記錄 ✨": ["确认今天的记录 ✨", "Review today's entry ✨"],
    "例如：今天收到朋友的暖心訊息…": ["例如：今天收到朋友的暖心消息…", "For example: a kind message from a friend…"],
    "輸入具體事情，按 Enter 加入": ["输入具体事情，按 Enter 加入", "Enter a specific moment and press Enter"],
    "確定要刪除這項記錄嗎？": ["确定要删除这项记录吗？", "Delete this entry?"], "刪除後將無法在 App 內復原。": ["删除后将无法在 App 内恢复。", "This entry cannot be restored in the app."],
    "至少記下一件具體事情": ["至少记下一件具体事情", "Write down at least one specific moment"], "新增記錄": ["新增记录", "Add entry"],
    "正在儲存…": ["正在保存…", "Saving…"], "已儲存提醒設定": ["已保存提醒设置", "Reminder settings saved"], "已關閉每日提醒": ["已关闭每日提醒", "Daily reminder turned off"],
    "提醒時間": ["提醒时间", "Reminder time"], "備份已匯出": ["备份已导出", "Backup exported"], "備份已恢復": ["备份已恢复", "Backup restored"],
    "匯入這份備份？": ["导入这份备份？", "Import this backup?"], "檔案格式無效，現有資料沒有改動": ["文件格式无效，现有数据没有更改", "Invalid file format. Your data was not changed."],
    "刪除所有本機資料？": ["删除所有本地数据？", "Delete all local data?"], "所有日記、小幸運及設定都會清除，而且無法在 App 內復原。": ["所有日记、小幸运及设置都会清除，而且无法在 App 内恢复。", "All journal entries, lucky draws, and settings will be erased and cannot be restored in the app."],
    "本機資料已清除": ["本地数据已清除", "Local data cleared"], "已儲存提醒時間": ["已保存提醒时间", "Reminder time saved"], "確定並儲存": ["确认并保存", "Confirm and save"],
    "今天的記錄已完成！": ["今天的记录已完成！", "Today's entry is complete!"], "完成": ["完成", "Done"], "編輯這項記錄：": ["编辑这项记录：", "Edit this entry:"],
    "加入記錄": ["加入记录", "Add entry"], "已選擇：": ["已选择：", "Selected: "],
    "小貓正在替你抽出明天的小幸運……": ["小猫正在替你抽出明天的小幸运……", "Your lucky draw is on its way…"],
    "小幸運為隨機抽取，純粹作為生活中的趣味及正向提醒，沒有科學根據。": ["小幸运为随机抽取，纯粹作为生活中的趣味及正向提醒，没有科学根据。", "The draw is random and meant for fun and encouragement."],
    "用1分鐘，記下今天的開心與感謝。": ["用1分钟，记下今天的开心与感谢。", "Take one minute to note today's joy and gratitude."],
    "今天": ["今天", "Today"], "週一": ["周一", "Mon"], "週二": ["周二", "Tue"], "週三": ["周三", "Wed"], "週四": ["周四", "Thu"], "週五": ["周五", "Fri"], "週六": ["周六", "Sat"], "週日": ["周日", "Sun"]
  };

  const localeKey = "little-luck-language";
  let locale = localStorage.getItem(localeKey) || "zh-Hant";
  const originals = new WeakMap();
  const originalAttrs = new WeakMap();
  const langNames = { "zh-Hant": "繁體中文", "zh-Hans": "簡體中文", en: "English" };
  const appTitles = { "zh-Hant": "小幸運｜把每一點幸福都收好", "zh-Hans": "小幸运｜把每一点幸福都收好", en: "Little Luck | Keep every little joy" };

  function updateAppTitle() {
    document.title = appTitles[locale];
    const mobileTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (mobileTitle) mobileTitle.content = locale === "en" ? "Little Luck" : locale === "zh-Hans" ? "小幸运" : "小幸運";
  }

  function translated(value) {
    if (locale === "zh-Hant") return value;
    if (locale === "en") {
      const detailQuestion = value.match(/^「(.+)」具體是甚麼事情？$/);
      if (detailQuestion) {
        const category = terms[detailQuestion[1]]?.[1] || detailQuestion[1];
        return `Tell us a little more about this moment: ${category}.`;
      }
    }
    let result = value;
    for (const [source, pair] of Object.entries(terms).sort((a, b) => b[0].length - a[0].length)) {
      if (result.includes(source)) result = result.split(source).join(pair[locale === "zh-Hans" ? 0 : 1]);
    }
    return result;
  }

  function excluded(node) {
    const parent = node.parentElement;
    return !parent || parent.closest("script,style,textarea,input,select,.record span,#reviewHappy,#reviewThanks,.event p");
  }

  function translateTree(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    for (const node of textNodes) {
      if (excluded(node)) continue;
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      let value = translated(originals.get(node));
      if (node.parentElement.classList.contains("week-dayname")) {
        const weekdays = locale === "en" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["一", "二", "三", "四", "五", "六", "日"];
        const idx = ["一", "二", "三", "四", "五", "六", "日"].indexOf(originals.get(node).trim());
        if (idx >= 0) value = weekdays[idx];
      }
      if (node.nodeValue !== value) node.nodeValue = value;
    }
    for (const el of root.querySelectorAll ? root.querySelectorAll("[placeholder],[aria-label],[title]") : []) {
      let saved = originalAttrs.get(el);
      if (!saved) { saved = {}; originalAttrs.set(el, saved); }
      for (const attr of ["placeholder", "aria-label", "title"]) {
        if (!el.hasAttribute(attr)) continue;
        if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
        el.setAttribute(attr, translated(saved[attr]));
      }
    }
  }

  function updateDateLabel() {
    const dateLocale = locale === "en" ? "en" : locale === "zh-Hans" ? "zh-CN" : "zh-HK";
    const dateLabel = document.querySelector("#todayLabel");
    if (dateLabel) dateLabel.textContent = new Intl.DateTimeFormat(dateLocale, { weekday: "long", month: "long", day: "numeric" }).format(new Date());
  }

  function updateLanguageButtons() {
    const switcher = document.querySelector("#languageSwitch");
    if (!switcher) return;
    switcher.querySelectorAll("[data-locale]").forEach(button => {
      const active = button.dataset.locale === locale;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function updateSwitcherVisibility() {
    const switcher = document.querySelector("#languageSwitch");
    const home = document.querySelector("#home");
    if (switcher) switcher.hidden = !home?.classList.contains("active");
  }

  function installPicker() {
    const switcher = document.querySelector("#languageSwitch");
    if (!switcher) return;
    switcher.addEventListener("click", event => {
      const button = event.target.closest("[data-locale]");
      if (!button) return;
      locale = button.dataset.locale;
      localStorage.setItem(localeKey, locale);
      document.documentElement.lang = locale;
      updateAppTitle();
      updateDateLabel();
      translateTree();
      updateLanguageButtons();
    });
  }

  installPicker();
  document.documentElement.lang = locale;
  updateAppTitle();
  updateDateLabel();
  updateLanguageButtons();
  updateSwitcherVisibility();
  translateTree();
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === "childList") translateTree(record.target.nodeType === Node.ELEMENT_NODE ? record.target : record.target.parentElement);
    }
    updateSwitcherVisibility();
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
})();
