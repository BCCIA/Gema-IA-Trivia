// ----------------- SEGURIDAD Y NAVEGACIÓN -----------------

// Deshabilitar clic derecho en la página principal
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Función para deshabilitar combinaciones de teclas (F12, Ctrl+Shift+I, etc.)
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// ----------------- CHAT D-ID -----------------

class DIDChat {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.chatUrl =
      "https://studio.d-id.com/agents/share?id=agt_Y49ElagU&utm_source=copy&key=WjI5dloyeGxMVzloZFhSb01ud3hNRGt4TlRRMk16Z3hOamMwTVRRNE16Y3dOems2TVVGQlFUVlVjRm8yUWsxVE5tNXJaM1JpUlU0MA==";
    this.iframe = null;
    this.init();
  }

  init() {
    this.createIframe();
  }

  createIframe() {
    const wrapper = document.createElement("div");
    wrapper.className = "iframe-wrapper";
    this.iframe = document.createElement("iframe");
    this.iframe.className = "did-chat-iframe fade-in";
    this.iframe.src = this.chatUrl;
    this.iframe.allow = "camera;microphone;clipboard-write";
    this.iframe.title = "D-ID Chat Interface";

    wrapper.appendChild(this.iframe);
    this.container.appendChild(wrapper);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const chat = new DIDChat("chat-container");
});

// ----------------- GSAP ANIMACIONES -----------------

gsap.to(".first", 1.5, {
  delay: 0.5,
  top: "-100%",
  ease: Expo.easeInOut,
});

gsap.to(".second", 1.5, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut,
});

gsap.to(".third", 1.5, {
  delay: 0.9,
  top: "-100%",
  ease: Expo.easeInOut,
});

gsap.from(".home-img", { opacity: 0, duration: 2, delay: 2, x: 60 });

gsap.from(".home-information", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
});

gsap.from(".anime-text", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.3,
});

gsap.from(".nav-logo", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out",
});

gsap.from(".nav-item", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".home-social", {
  opacity: 0,
  duration: 3,
  delay: 4,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

// ----------------- REFRESCO AUTOMÁTICO CADA 30 SEG -----------------

function iniciarRefresco() {
  let refreshTimeout;
  let cancelRefresh = false;

  // Crear mensaje flotante si no existe
  let message = document.getElementById('refresh-message');
  if (!message) {
    message = document.createElement('div');
    message.id = 'refresh-message';
    message.innerText = 'Refrescando a GEMA...';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'rgba(0,0,0,0.8)';
    message.style.color = '#fff';
    message.style.padding = '20px 40px';
    message.style.borderRadius = '10px';
    message.style.fontSize = '24px';
    message.style.zIndex = '9999';
    message.style.display = 'none';
    document.body.appendChild(message);
  }

  function startRefreshSequence() {
    cancelRefresh = false;
    message.style.display = 'block';

    function cancelAction() {
      cancelRefresh = true;
      message.style.display = 'none';
      clearTimeout(refreshTimeout);
      document.removeEventListener('click', cancelAction);
      document.removeEventListener('touchstart', cancelAction);
      setTimeout(startRefreshSequence, 30 * 1000);
    }

    document.addEventListener('click', cancelAction);
    document.addEventListener('touchstart', cancelAction);

    refreshTimeout = setTimeout(() => {
      if (!cancelRefresh) {
        location.reload();
      }
    }, 5000);
  }

  setTimeout(startRefreshSequence, 30 * 1000); // <-- Cambia a 10 * 60 * 1000 luego
}

window.addEventListener('DOMContentLoaded', iniciarRefresco);
