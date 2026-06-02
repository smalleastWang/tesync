const visibleClass = "is-visible";

const DOWNLOAD_LINKS = {
  appStore: "https://apps.apple.com/app/id0000000000",
  googlePlay: "https://play.google.com/store/apps/details?id=com.smileast.dash.tesla_dash",
  apkFile: "http://dsm.smileast.com:5000/sharing/y9LsTCiYg",
};

const FEEDBACK_EMAIL = "your-email@example.com";

const I18N = {
  zh: {
    brand: "Tesync",
    nav_download: "下载",
    nav_ios: "App Store",
    nav_android: "Google Play",
    nav_apk: "APK 直装",
    hero_title_1: "你的手机",
    hero_title_2: "就是",
    hero_title_highlight: "最好的仪表盘",
    hero_desc_1: "无需繁琐硬件改装，无需第三方模块。",
    hero_desc_2: "通过 Tesla 官方 BLE / vehicle-command 协议直连，安全、低延迟、数据本地处理。",
    btn_download: "扫码下载 App",
    feature_1_title: "隐私优先 & 本地存储",
    feature_1_desc:
      "无需把 Tesla 账号交给第三方服务器。行程、偏好与密钥材料分别保存在本地 Hive、SharedPreferences 与安全存储中。",
    feature_2_title: "官方 BLE 协议",
    feature_2_desc:
      "基于 VCSEC GATT 与 vehicle-command 桥接，与手机钥匙同类机制。统一由 BleConnectionManager 管理扫描、连接与重连。",
    feature_3_title: "实时驾驶数据",
    feature_3_desc:
      "VehicleLiveDataStore 汇聚车速、SOC、功率、续航与连接状态，横屏仪表、行程记录与加速测试共用同一数据源。",
    video_btn: "观看实机演示",
    video_tip_1: "演示视频",
    video_tip_2: "横屏仪表与实时数据",
    tutorial_btn: "查看连接流程",
    tutorial_tip: "BLE 配对与手机钥匙授权",
    section_ui: "精美 UI，专为驾驶设计",
    section_promo: "功能一览",
    section_promo_desc: "横屏仪表、行程记录、加速测试与 BLE 连接，覆盖驾驶中与驾驶后场景",
    promo_1_tag: "仪表",
    promo_1_title: "横屏沉浸仪表",
    promo_1_desc: "经典横屏与双电机主题，大字号速度、功率与车辆状态，支持常亮与沉浸式显示。",
    promo_2_tag: "行程",
    promo_2_title: "自动行程 & 手动里程",
    promo_2_desc: "Hive 持久化行程与里程记录，通勤、自驾与测试数据可回看。",
    promo_3_tag: "测试",
    promo_3_title: "加速测试",
    promo_3_desc: "基于实时车速统计 0-60、0-100 与最高速，支持语音播报与历史记录。",
    promo_4_tag: "连接",
    promo_4_title: "BLE & 手机钥匙",
    promo_4_desc: "扫描绑定、自动重连、授权状态清晰可感知，Android 可经 Go 桥发起 AddKey 请求。",
    section_guide: "连接流程",
    section_guide_desc: "简单几步，开启 Tesync 仪表盘体验",
    guide_1_title: "打开 App 并进入连接",
    guide_1_desc: "在设置页进入蓝牙入口，授予必要权限后开始扫描附近车辆。",
    guide_2_title: "绑定车辆并完成授权",
    guide_2_desc: "选择目标车辆绑定；Android 可通过 vehicle-command 桥完成手机钥匙授权与车内确认。",
    guide_3_title: "进入横屏仪表",
    guide_3_desc: "连接成功后打开经典横屏或双电机仪表，实时查看速度、电量、功率与连接状态。",
    guide_4_title: "记录行程与加速测试",
    guide_4_desc: "驾驶中看实时数据，停车后回看行程；需要时可进入加速测试页记录 0-100 成绩。",
    download_title: "下载 Tesync",
    download_desc: "支持 App Store、Google Play 与 Android APK。扫码或点击按钮即可安装。",
    feedback_eyebrow: "Feedback",
    feedback_title: "遇到问题？告诉我",
    feedback_desc:
      "无论是连接问题、界面建议还是下载异常，都可以通过这里反馈。提交后会自动整理成邮件发送给 Tesync 支持邮箱。",
    feedback_name: "称呼",
    feedback_name_placeholder: "你的称呼",
    feedback_email: "联系邮箱",
    feedback_email_placeholder: "方便回复你的邮箱",
    feedback_type: "反馈类型",
    feedback_type_bug: "问题反馈",
    feedback_type_feature: "功能建议",
    feedback_type_download: "下载/安装",
    feedback_type_other: "其他",
    feedback_message: "问题描述",
    feedback_message_placeholder: "请尽量写清楚设备、车型、系统版本、发生步骤或截图线索",
    feedback_submit: "发送反馈",
    feedback_status_required: "请先填写问题描述。",
    feedback_status_email_missing: "请先在 script.js 顶部配置 FEEDBACK_EMAIL。",
    feedback_status_opened: "已打开邮件客户端，请确认发送。",
    feedback_status_failed: "无法打开邮件客户端，请复制内容后手动发送邮件。",
    footer_feedback: "问题反馈",
    footer_privacy: "隐私政策",
    footer_disclaimer: "与 Tesla, Inc. 无关联。",
    modal_title: "扫码下载 Tesync",
    modal_desc: "使用手机相机或扫码 App 扫描下方二维码",
    link_app_store: "在 App Store 打开",
    link_google_play: "在 Google Play 打开",
    link_apk: "下载 Android 安装包",
  },
  en: {
    brand: "Tesync",
    nav_download: "Download",
    nav_ios: "App Store",
    nav_android: "Google Play",
    nav_apk: "APK",
    hero_title_1: "Your Phone",
    hero_title_2: "Is The",
    hero_title_highlight: "Best Dashboard",
    hero_desc_1: "No hardware mods. No third-party modules.",
    hero_desc_2:
      "Direct via Tesla official BLE / vehicle-command. Safe, low-latency, data stays on device.",
    btn_download: "Scan to Download",
    feature_1_title: "Privacy-first & Local",
    feature_1_desc:
      "No Tesla account on third-party servers. Trips, prefs and keys use Hive, SharedPreferences and secure storage.",
    feature_2_title: "Official BLE Protocol",
    feature_2_desc:
      "VCSEC GATT plus vehicle-command bridge, same family as phone key. BleConnectionManager handles scan and reconnect.",
    feature_3_title: "Real-time Driving Data",
    feature_3_desc:
      "VehicleLiveDataStore feeds speed, SOC, power, range and status to dashboard, trips and acceleration tests.",
    video_btn: "Watch Demo",
    video_tip_1: "Demo",
    video_tip_2: "Landscape dashboard & live data",
    tutorial_btn: "Connection Guide",
    tutorial_tip: "BLE pairing & phone key authorization",
    section_ui: "UI Built for Driving",
    section_promo: "Features",
    section_promo_desc: "Dashboard, trips, acceleration tests and BLE — on the road and after parking",
    promo_1_tag: "Dash",
    promo_1_title: "Landscape Dashboard",
    promo_1_desc: "Classic and dual-motor themes with large speed, power and status. Keep screen on in drive mode.",
    promo_2_tag: "Trips",
    promo_2_title: "Auto Trips & Manual Mileage",
    promo_2_desc: "Hive-backed trip and mileage history for commute, road trips and testing.",
    promo_3_tag: "Test",
    promo_3_title: "Acceleration Test",
    promo_3_desc: "0-60, 0-100 and top speed from live speed with voice cues and history.",
    promo_4_tag: "BLE",
    promo_4_title: "BLE & Phone Key",
    promo_4_desc: "Scan, bind, auto-reconnect with clear auth state. Android AddKey via Go bridge.",
    section_guide: "Getting Connected",
    section_guide_desc: "A few steps to start your Tesync experience",
    guide_1_title: "Open the app & connect",
    guide_1_desc: "Go to Bluetooth in Settings, grant permissions, then scan for your vehicle.",
    guide_2_title: "Bind & authorize",
    guide_2_desc: "Pick your car; on Android complete phone key authorization via vehicle-command bridge.",
    guide_3_title: "Open landscape dashboard",
    guide_3_desc: "After connect, launch classic or dual-motor landscape mode for live driving data.",
    guide_4_title: "Trips & acceleration",
    guide_4_desc: "Review trips after parking; run acceleration tests when you need 0-100 records.",
    download_title: "Get Tesync",
    download_desc: "App Store, Google Play or direct APK. Scan the QR code to install.",
    feedback_eyebrow: "Feedback",
    feedback_title: "Found an issue?",
    feedback_desc:
      "Connection bugs, UI ideas or download problems are welcome here. The form turns your feedback into an email to Tesync support.",
    feedback_name: "Name",
    feedback_name_placeholder: "Your name",
    feedback_email: "Reply email",
    feedback_email_placeholder: "Email for follow-up",
    feedback_type: "Feedback type",
    feedback_type_bug: "Bug report",
    feedback_type_feature: "Feature idea",
    feedback_type_download: "Download/install",
    feedback_type_other: "Other",
    feedback_message: "Details",
    feedback_message_placeholder: "Device, vehicle, OS version, steps or screenshot clues are helpful",
    feedback_submit: "Send Feedback",
    feedback_status_required: "Please describe the issue first.",
    feedback_status_email_missing: "Please configure FEEDBACK_EMAIL at the top of script.js first.",
    feedback_status_opened: "Your email app is open. Please confirm and send.",
    feedback_status_failed: "Unable to open your email app. Please copy the content and send it manually.",
    footer_feedback: "Feedback",
    footer_privacy: "Privacy Policy",
    footer_disclaimer: "Not affiliated with Tesla, Inc.",
    modal_title: "Scan to Download Tesync",
    modal_desc: "Use your camera or a QR app to scan below",
    link_app_store: "Open in App Store",
    link_google_play: "Open in Google Play",
    link_apk: "Download APK",
  },
};

let currentLang = "zh";
let qrRendered = false;
let lastFocusedElement = null;

const siteHeader = document.getElementById("site-header");
const langToggle = document.getElementById("lang-toggle");
const navDownloadToggle = document.getElementById("nav-download-toggle");
const navDownloadMenu = document.getElementById("nav-download-menu");
const downloadModal = document.getElementById("download-modal");
const backToTop = document.getElementById("back-to-top");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const playDemoButton = document.getElementById("play-demo-video");
const demoVideo = document.getElementById("demo-video");
const feedbackForm = document.getElementById("feedback-form");
const feedbackStatus = document.getElementById("feedback-status");

const openDownloadButtons = document.querySelectorAll(
  "#open-download-modal, #open-download-modal-footer, [data-open-download-modal]",
);
const closeModalNodes = downloadModal ? downloadModal.querySelectorAll("[data-close-modal]") : [];

function resolveUrl(path) {
  return new URL(path, window.location.href).href;
}

function getDownloadTargets() {
  return {
    appStore: DOWNLOAD_LINKS.appStore,
    googlePlay: DOWNLOAD_LINKS.googlePlay,
    apk: resolveUrl(DOWNLOAD_LINKS.apkFile),
  };
}

function qrImageUrl(text) {
  const params = new URLSearchParams({
    size: "168x168",
    margin: "0",
    data: text,
  });

  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  const strings = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (strings[key]) {
      node.textContent = strings[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (strings[key]) {
      node.placeholder = strings[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "EN" : "中";
  }

  document.title = lang === "zh" ? "Tesync | 手机即仪表" : "Tesync | Your Phone is Your Dashboard";
}

function renderQrCodes() {
  if (qrRendered) {
    return;
  }

  const targets = getDownloadTargets();
  const pairs = [
    ["qr-app-store", targets.appStore, "link-app-store"],
    ["qr-google-play", targets.googlePlay, "link-google-play"],
    ["qr-apk", targets.apk, "link-apk"],
  ];

  pairs.forEach(([imageId, url, linkId]) => {
    const image = document.getElementById(imageId);
    const link = document.getElementById(linkId);

    if (image) {
      image.src = qrImageUrl(url);
    }

    if (link) {
      link.href = url;
    }
  });

  qrRendered = true;
}

function openDownloadModal() {
  if (!downloadModal) {
    return;
  }

  closeNavDownloadMenu();
  lastFocusedElement = document.activeElement;
  downloadModal.hidden = false;
  document.body.classList.add("modal-open");
  renderQrCodes();

  const closeButton = downloadModal.querySelector(".download-modal-close");
  if (closeButton) {
    closeButton.focus();
  }
}

function closeDownloadModal() {
  if (!downloadModal || downloadModal.hidden) {
    return;
  }

  downloadModal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function toggleNavDownloadMenu() {
  if (!navDownloadMenu || !navDownloadToggle) {
    return;
  }

  const isOpen = !navDownloadMenu.hidden;
  navDownloadMenu.hidden = isOpen;
  navDownloadToggle.setAttribute("aria-expanded", String(!isOpen));
}

function closeNavDownloadMenu() {
  if (!navDownloadMenu || !navDownloadToggle) {
    return;
  }

  navDownloadMenu.hidden = true;
  navDownloadToggle.setAttribute("aria-expanded", "false");
}

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  if (downloadModal?.hidden !== false) {
    document.body.classList.remove("modal-open");
  }
}

function openVideoOverlay() {
  if (!demoVideo) {
    return;
  }

  let overlay = document.getElementById("video-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "video-overlay";
    overlay.className = "video-overlay";
    overlay.innerHTML =
      '<button class="video-overlay-close" type="button" aria-label="关闭">×</button>';
    overlay.appendChild(demoVideo);
    document.body.appendChild(overlay);

    overlay.querySelector(".video-overlay-close").addEventListener("click", closeVideoOverlay);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeVideoOverlay();
      }
    });
  }

  overlay.hidden = false;
  demoVideo.classList.remove("demo-video-hidden");
  document.body.classList.add("modal-open");
  demoVideo.play().catch(() => {});
}

function closeVideoOverlay() {
  const overlay = document.getElementById("video-overlay");
  if (!overlay) {
    return;
  }

  demoVideo.pause();
  overlay.hidden = true;
  if (downloadModal?.hidden !== false && lightbox?.hidden !== false) {
    document.body.classList.remove("modal-open");
  }
}

function setFeedbackStatus(messageKey, type = "info") {
  if (!feedbackStatus) {
    return;
  }

  feedbackStatus.textContent = I18N[currentLang][messageKey] || "";
  feedbackStatus.dataset.type = type;
}

function handleFeedbackSubmit(event) {
  event.preventDefault();

  if (!feedbackForm) {
    return;
  }

  const formData = new FormData(feedbackForm);
  const name = String(formData.get("name") || "").trim();
  const replyEmail = String(formData.get("email") || "").trim();
  const type = String(formData.get("type") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!message) {
    setFeedbackStatus("feedback_status_required", "error");
    document.getElementById("feedback-message")?.focus();
    return;
  }

  if (!FEEDBACK_EMAIL || FEEDBACK_EMAIL === "your-email@example.com") {
    setFeedbackStatus("feedback_status_email_missing", "error");
    return;
  }

  const subject = `[Tesync Feedback] ${type || "Feedback"}`;
  const body = [
    `Type: ${type || "-"}`,
    `Name: ${name || "-"}`,
    `Reply Email: ${replyEmail || "-"}`,
    "",
    "Message:",
    message,
    "",
    `Page: ${window.location.href}`,
    `Time: ${new Date().toLocaleString()}`,
  ].join("\n");

  const mailtoUrl = `mailto:${encodeURIComponent(FEEDBACK_EMAIL)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  setFeedbackStatus("feedback_status_opened", "success");
  window.location.href = mailtoUrl;
}

function handleScroll() {
  const scrollTop = window.scrollY;

  if (siteHeader) {
    siteHeader.classList.toggle("is-scrolled", scrollTop > 20);
  }

  if (backToTop) {
    backToTop.hidden = scrollTop <= 500;
  }

  document.querySelectorAll(".reveal-section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add(visibleClass);
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal-section").forEach((node) => {
  revealObserver.observe(node);
});

openDownloadButtons.forEach((button) => {
  button.addEventListener("click", openDownloadModal);
});

closeModalNodes.forEach((node) => {
  node.addEventListener("click", closeDownloadModal);
});

if (navDownloadToggle) {
  navDownloadToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleNavDownloadMenu();
  });
}

document.addEventListener("click", (event) => {
  if (navDownloadMenu && !event.target.closest(".nav-download")) {
    closeNavDownloadMenu();
  }
});

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "zh" ? "en" : "zh");
  });
}

if (playDemoButton) {
  playDemoButton.addEventListener("click", openVideoOverlay);
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", handleFeedbackSubmit);
}

document.querySelectorAll("[data-preview-src]").forEach((node) => {
  const openPreview = () => {
    const src = node.getAttribute("data-preview-src");
    const img = node.querySelector("img");
    if (src) {
      openLightbox(src, img?.alt || "");
    }
  };

  node.addEventListener("click", openPreview);
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPreview();
    }
  });
});

document.querySelectorAll("[data-close-lightbox]").forEach((node) => {
  node.addEventListener("click", closeLightbox);
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDownloadModal();
    closeLightbox();
    closeVideoOverlay();
    closeNavDownloadMenu();
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", handleScroll, { passive: true });
applyLanguage("zh");
handleScroll();
