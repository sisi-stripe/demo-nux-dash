import { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import DashHome from './pages/DashHome';
import SettingsPage from './pages/SettingsPage';
import BalancesPage from './pages/BalancesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'settings' | 'balances'>('home');

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'settings' || page === 'balances') {
      setCurrentPage(page);
    }
  };

  return (
    /* 1. Changed min-h-screen to h-screen and removed flex centering + padding */
    <div className="h-screen bg-gray-100 overflow-hidden">
      <div className="w-full h-full">
        <DashboardLayout onNavigate={handleNavigate} currentPage={currentPage}>
          {currentPage === 'home' && <DashHome />}
          {currentPage === 'settings' && <SettingsPage />}
          {currentPage === 'balances' && <BalancesPage />}
        </DashboardLayout>
      </div>
    </div>
  );
}
