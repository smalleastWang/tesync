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
const openDownloadButtons = document.querySelectorAll(
  "#open-download-modal, #open-download-modal-footer, [data-open-download-modal]",
);
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

function qrImageUrl(text) {
  const params = new URLSearchParams({
    size: "168x168",
    margin: "0",
    data: text,
  });

  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
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
