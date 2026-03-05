import { useState } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import { Icon } from '../../SailIcons';
import SetupGuide from '../components/ui/SetupGuide';

function ResourceBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-[#f5f6f8] rounded-lg border border-[#ebeef1]">
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-4 h-4 border border-[#99a5b8] rounded-sm flex items-center justify-center">
          <span className="text-[9px] text-[#99a5b8] font-bold leading-none">R</span>
        </div>
        <span className="text-[13px] font-semibold text-[#353a44]">Resource</span>
      </div>
      <p className="text-[13px] text-[#596171] flex-1">
        Explore the shifts that defined the internet economy in 2025 and how we're building for the future in our annual letter.
      </p>
      <button className="text-[13px] font-medium text-[#635bff] hover:text-[#4f46e5] transition-colors shrink-0">
        Read the letter
      </button>
      <div className="w-px h-4 bg-[#d8dee4] shrink-0" />
      <button onClick={onDismiss} className="text-[#99a5b8] hover:text-[#353a44] transition-colors shrink-0">
        <X size={14} />
      </button>
    </div>
  );
}

function BalanceSummary() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-heading-small">Balance summary</h2>
      {/* Bar */}
      <div className="w-full h-[10px] bg-[#d8dee4] rounded-full" />
      {/* Table */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-2 border-b border-[#ebeef1]">
          <span className="text-[13px] text-[#596171]">Payments type</span>
          <span className="text-[13px] text-[#596171]">Amount</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-[#ebeef1]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#d8dee4] shrink-0" />
            <span className="text-[14px] text-[#353a44]">Incoming</span>
          </div>
          <span className="text-[14px] text-[#353a44]">$0.00</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#635bff] shrink-0" />
            <span className="text-[14px] text-[#353a44]">Available</span>
          </div>
          <span className="text-[14px] text-[#353a44]">$0.00</span>
        </div>
      </div>
    </div>
  );
}

type ActivityTab = 'payouts' | 'topups' | 'all';

function RecentActivity() {
  const [activeTab, setActiveTab] = useState<ActivityTab>('payouts');

  const tabs: { id: ActivityTab; label: string }[] = [
    { id: 'payouts', label: 'Payouts' },
    { id: 'topups', label: 'Top-ups' },
    { id: 'all', label: 'All activity' },
  ];

  const emptyMessages: Record<ActivityTab, string> = {
    payouts: 'No payouts were found',
    topups: 'No top-ups were found',
    all: 'No activity was found',
  };

  return (
    <div className="flex flex-col gap-0">
      <h2 className="text-heading-small mb-3">Recent activity</h2>
      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#ebeef1]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-[14px] transition-colors relative ${
              activeTab === tab.id
                ? 'text-[#635bff] font-medium'
                : 'text-[#596171] hover:text-[#353a44]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#635bff] rounded-full" />
            )}
          </button>
        ))}
      </div>
      {/* Empty state */}
      <div className="mt-3 border border-dashed border-[#d8dee4] rounded-lg flex items-center justify-center py-10">
        <span className="text-[14px] text-[#596171]">{emptyMessages[activeTab]}</span>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="flex flex-col gap-4 w-[220px] shrink-0">
      <h2 className="text-heading-small">Reports</h2>
      <div className="flex flex-col gap-4">
        <button className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity group">
          <div className="w-8 h-8 rounded-md bg-[#f5f6f8] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="1.5" rx="0.75" fill="#596171" />
              <rect x="2" y="6.5" width="8" height="1.5" rx="0.75" fill="#596171" />
              <rect x="2" y="10" width="10" height="1.5" rx="0.75" fill="#596171" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#353a44] group-hover:text-[#635bff] transition-colors">Balance summary</p>
            <p className="text-[12px] text-[#99a5b8]">Feb 2026</p>
          </div>
        </button>
        <button className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity group">
          <div className="w-8 h-8 rounded-md bg-[#f5f6f8] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M5 9l3 3 3-3M5 7l3-3 3 3" stroke="#596171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#353a44] group-hover:text-[#635bff] transition-colors">Payout reconciliation</p>
            <p className="text-[12px] text-[#99a5b8]">Feb 2026</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function BalancesPage() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-[1280px] mx-auto px-10 py-8 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-heading-xlarge">Balances</h1>
            <span className="text-heading-xlarge-regular">$0.00</span>
            <button className="text-[#99a5b8] hover:text-[#596171] transition-colors">
              <Icon name="info" size="small" />
            </button>
          </div>
          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] text-[#353a44] border border-[#d8dee4] rounded-md hover:bg-[#f5f6f8] transition-colors">
              Manage payouts <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] text-[#353a44] border border-[#d8dee4] rounded-md hover:bg-[#f5f6f8] transition-colors">
              <Plus size={14} /> Add settlement currency
            </button>
          </div>
        </div>

        {/* Resource banner */}
        {bannerVisible && <ResourceBanner onDismiss={() => setBannerVisible(false)} />}

        {/* Setup guide floatie */}
        <SetupGuide />

        {/* Main content */}
        <div className="flex gap-12 items-start">
          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <BalanceSummary />
            <RecentActivity />
          </div>
          <Reports />
        </div>
      </div>
    </div>
  );
}
