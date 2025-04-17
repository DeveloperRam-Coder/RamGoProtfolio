'use client';

import { useEffect, useState } from 'react';
import { installPWA, isPWAInstallable } from '@/app/pwa';

export default function PWAInstallButton() {
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const checkInstallable = () => {
      setIsInstallable(isPWAInstallable());
    };

    checkInstallable();
    window.addEventListener('beforeinstallprompt', checkInstallable);

    return () => {
      window.removeEventListener('beforeinstallprompt', checkInstallable);
    };
  }, []);

  if (!isInstallable) {
    return null;
  }

  return (
    <button
      onClick={installPWA}
      className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
    >
      Install App
    </button>
  );
}