let deferredPrompt: any;

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });
}

export const installPWA = async () => {
  if (!deferredPrompt) {
    return;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  
  if (outcome === 'accepted') {
    console.log('PWA installed successfully');
  } else {
    console.log('PWA installation declined');
  }

  deferredPrompt = null;
};

export const isPWAInstallable = () => {
  return !!deferredPrompt;
};