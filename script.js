const visibleClass = "visible";

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((node) => {
  revealObserver.observe(node);
});

/**
 * 下载链接配置 — 部署前请改成你的真实地址。
 * APK：将安装包放到 assets/ 目录，文件名与 apkFile 一致。
 */
const DOWNLOAD_LINKS = {
  appStore: "https://apps.apple.com/app/id0000000000",
  googlePlay: "https://play.google.com/store/apps/details?id=com.example.tdash",
  apkFile: "./assets/tdash.apk",
};

const downloadModal = document.getElementById("download-modal");
const openDownloadButtons = [
  document.getElementById("open-download-modal"),
  document.getElementById("open-download-modal-footer"),
].filter(Boolean);
const closeModalNodes = downloadModal
  ? downloadModal.querySelectorAll("[data-close-modal]")
  : [];
let lastFocusedElement = null;
let qrRendered = false;

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

async function renderQrCodes() {
  if (qrRendered || typeof QRCode === "undefined") {
    return;
  }

  const targets = getDownloadTargets();
  const pairs = [
    ["qr-app-store", targets.appStore],
    ["qr-google-play", targets.googlePlay],
    ["qr-apk", targets.apk],
  ];

  await Promise.all(
    pairs.map(async ([canvasId, url]) => {
      const canvas = document.getElementById(canvasId);
      if (!canvas) {
        return;
      }

      await QRCode.toCanvas(canvas, url, {
        width: 168,
        margin: 1,
        color: {
          dark: "#061018",
          light: "#ffffff",
        },
      });
    }),
  );

  document.getElementById("link-app-store").href = targets.appStore;
  document.getElementById("link-google-play").href = targets.googlePlay;
  document.getElementById("link-apk").href = targets.apk;

  qrRendered = true;
}

function openDownloadModal() {
  if (!downloadModal) {
    return;
  }

  lastFocusedElement = document.activeElement;
  downloadModal.hidden = false;
  document.body.classList.add("modal-open");
  void renderQrCodes();

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

openDownloadButtons.forEach((button) => {
  button.addEventListener("click", openDownloadModal);
});

closeModalNodes.forEach((node) => {
  node.addEventListener("click", closeDownloadModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDownloadModal();
  }
});
