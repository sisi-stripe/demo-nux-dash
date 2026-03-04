import { useState } from 'react';
import svgPaths from '../../imports/svg-f7xs5v3bve';
import svgTools from '../../imports/svg-4gponsnc5c';
import svgRec from '../../imports/svg-rz83n50vym';
import imgS70000011 from '../../assets/a4fade0a69dad03a84b289692920a2cf032599d6.png';
import imgShutterstock2491890482 from '../../assets/c23eff5adfc68a2e61c292707f76db2ba5b57956.png';
import imgVector from '../../assets/37da3e6b8a95da5443375158d736629184d88df7.png';
import imgFrame21472473271 from '../../assets/de9f6cfb7bf4df8cc664d9e43fa72f349ed1d421.png';
import { imgShutterstock2491890481 } from '../../imports/svg-lw5o2';
import { ArrowRight, X } from 'lucide-react';
import AIContextualPrompt from '../components/ui/AIContextualPrompt';

/* ─── DashedCircle indicator ────────────────────────────────── */
function DashedCircle({ completed = false, active = false }: { completed?: boolean; active?: boolean }) {
  if (completed) {
    return (
      <div className="w-5 h-5 rounded-full bg-[#635bff] flex items-center justify-center shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="9" stroke={active ? "#635bff" : "#d8dee4"} strokeDasharray={active ? "none" : "3 4"} strokeLinecap="round" strokeWidth="2" fill={active ? "rgba(99,91,255,0.08)" : "none"} />
      {active && <circle cx="10" cy="10" r="3" fill="#635bff" />}
    </svg>
  );
}

/* ─── Task row ──────────────────────────────────────────────── */
function TaskRow({ label, active = false, completed = false }: { label: string; active?: boolean; completed?: boolean }) {
  return (
    <div className={`flex items-center gap-4 px-3 py-2 rounded-lg transition-colors cursor-pointer ${active ? "bg-[#f7f5fd] hover:bg-[#f0effe]" : "hover:bg-[#f5f6f8]"}`}>
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <DashedCircle active={active} completed={completed} />
        <span className={`text-[15px] leading-6 ${active ? "text-[#353a44]" : completed ? "text-[#99a5b8] line-through" : "text-[#353a44]"}`}>{label}</span>
      </div>
      {active && (
        <div className="w-8 h-8 rounded-md bg-[#f0effe] flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d={svgPaths.pd386ef0} fill="#675dff" />
          </svg>
        </div>
      )}
    </div>
  );
}

/* ─── Accordion section ─────────────────────────────────────── */
function AccordionSection({ title, open, onToggle, children, completedCount = 0, totalCount = 0 }: { title: string; open: boolean; onToggle: () => void; children?: React.ReactNode; completedCount?: number; totalCount?: number }) {
  return (
    <div className="flex flex-col gap-2">
      <button onClick={onToggle} className="flex items-center gap-2 h-8 w-full text-left group">
        <span className={`transition-transform duration-200 ${open ? "" : "-rotate-90"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path clipRule="evenodd" d={svgPaths.p19069e00} fill="#6c7688" fillRule="evenodd" />
          </svg>
        </span>
        <span className="text-[15px] font-semibold text-[#353a44] tracking-tight group-hover:text-[#635bff] transition-colors">{title}</span>
        {totalCount > 0 && <span className="ml-auto text-[12px] text-[#99a5b8]">{completedCount}/{totalCount}</span>}
      </button>
      {open && children && <div className="flex flex-col gap-1 pl-1">{children}</div>}
    </div>
  );
}

/* ─── Ask assistant panel ───────────────────────────────────── */
const assistantQuestions = [
  "How do I enable local payment methods?",
  "What is my payout schedule?",
  "What is Stripe Managed Payments?",
];

function AskAssistantPanel() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="bg-[rgba(235,236,255,0.6)] rounded-xl p-6 w-[340px] shrink-0 flex flex-col justify-between gap-6 self-stretch">
      <div className="flex flex-col gap-5">
        <p className="text-[14px] font-semibold text-[#353a44] tracking-tight">Ask assistant</p>
        <div className="flex flex-col gap-2">
          {assistantQuestions.map((q) => (
            <AIContextualPrompt key={q} label={q} />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-md border border-[rgba(103,93,255,0.12)] shadow-sm flex items-center px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-[#635bff]/20 transition-all">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
          <g>
            <path d={svgPaths.p2ee0e080} fill="url(#spark1)" />
            <path clipRule="evenodd" d={svgPaths.p3b6ab2f0} fill="url(#spark2)" fillRule="evenodd" />
          </g>
          <defs>
            <linearGradient id="spark1" x1="0.37" x2="7.9" y1="0.37" y2="13.85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC4EFC" /><stop offset="1" stopColor="#366DCD" />
            </linearGradient>
            <linearGradient id="spark2" x1="0.37" x2="7.9" y1="0.37" y2="13.85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC4EFC" /><stop offset="1" stopColor="#366DCD" />
            </linearGradient>
          </defs>
        </svg>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Ask a question" className="flex-1 bg-transparent outline-none text-[13px] text-[#353a44] placeholder-[#99a5b8]" />
        {inputValue && (
          <button className="w-5 h-5 rounded-full bg-[#635bff] flex items-center justify-center">
            <ArrowRight size={10} color="white" />
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Get-started card ──────────────────────────────────────── */
function GetStartedCard() {
  const [open, setOpen] = useState({ payments: true, invoices: false, business: false });
  const toggle = (key: keyof typeof open) => setOpen({ payments: false, invoices: false, business: false, [key]: true });
  return (
    <div className="bg-white rounded-xl flex-1 flex flex-col gap-4 p-4 shadow-sm">
      <p className="text-[13px] font-semibold text-[#596171] tracking-tight">Get started</p>
      <div className="flex flex-col gap-3">
        <AccordionSection title="Set up payments" open={open.payments} onToggle={() => toggle("payments")} completedCount={0} totalCount={2}>
          <TaskRow label="Choose how to accept payments" active />
          <TaskRow label="Create a one-off product" />
        </AccordionSection>
        <div className="border-t border-[#ebeef1]" />
        <AccordionSection title="Set up invoices" open={open.invoices} onToggle={() => toggle("invoices")} completedCount={0} totalCount={3}>
          <TaskRow label="Create your first invoice" />
          <TaskRow label="Set up invoice templates" />
          <TaskRow label="Configure payment terms" />
        </AccordionSection>
        <div className="border-t border-[#ebeef1]" />
        <AccordionSection title="Verify your business" open={open.business} onToggle={() => toggle("business")} completedCount={0} totalCount={2}>
          <TaskRow label="Add business details" />
          <TaskRow label="Upload verification documents" />
        </AccordionSection>
      </div>
    </div>
  );
}

/* ─── Bento cards ────────────────────────────────────────────── */
function BentoCard({ id, title, subtitle, children, onDismiss }: { id: string; title: string; subtitle: string; children?: React.ReactNode; onDismiss: (id: string) => void }) {
  return (
    <div className="bg-white rounded-lg flex-1 min-w-0 relative overflow-hidden border border-[#d8dee4] flex flex-col">
      <button onClick={() => onDismiss(id)} className="absolute top-3 right-3 z-10 text-[#6c7688] hover:text-[#353a44] transition-colors">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path clipRule="evenodd" d={svgPaths.p1cc39280} fill="currentColor" fillRule="evenodd" />
        </svg>
      </button>
      <div className="p-4 flex flex-col gap-1 shrink-0">
        <p className="text-[15px] font-semibold text-[#1a2c44] tracking-tight pr-6">{title}</p>
        <p className="text-[13px] text-[#596171] leading-5">{subtitle}</p>
      </div>
      <div className="flex-1 overflow-hidden relative">{children}</div>
    </div>
  );
}

function InPersonIllustration() {
  return (
    <div className="relative w-full h-full min-h-[140px]">
      <div className="absolute left-0 top-0 w-full h-[180px] overflow-hidden">
        <img alt="" src={imgS70000011} className="absolute object-cover pointer-events-none" style={{ left: 0, top: 0, width: "100%", height: "auto" }} />
      </div>
      <div className="absolute h-[135px] overflow-hidden pointer-events-none" style={{ left: "20px", top: "20px", width: "180px" }}>
        <div className="absolute pointer-events-none" style={{ maskImage: `url('${imgShutterstock2491890481}')`, maskSize: "100% 100%", maskRepeat: "no-repeat", width: "100%", height: "100%" }}>
          <img alt="" src={imgShutterstock2491890482} className="w-full h-full object-cover" />
        </div>
        <img alt="" src={imgVector} className="absolute" style={{ left: "20px", top: "50px", width: "27px" }} />
      </div>
    </div>
  );
}

function TaxIllustration() {
  return (
    <div className="relative w-full h-full min-h-[140px] overflow-hidden">
      <img alt="" src={imgFrame21472473271} className="absolute pointer-events-none object-cover" style={{ left: "18px", top: "10px", width: "180px", height: "auto" }} />
    </div>
  );
}

function InvoiceIllustration() {
  return (
    <div className="p-3 flex flex-col gap-2">
      <div className="bg-[#f5f6f8] rounded-md p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#635bff]" />
            <span className="text-[11px] text-[#6c7688]">Queried</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 text-[11px] text-[#6c7688]">
          <span>Zip code</span><span className="text-[#353a44] font-medium">98104</span>
          <span>Seattle tax rate</span><span className="text-[#353a44] font-medium">10.5%</span>
        </div>
        <div className="border-t border-[#d8dee4] pt-2">
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-[#6c7688]">Pay Queried</span>
            <span className="text-[18px] font-semibold text-[#353a44]">$275.27</span>
          </div>
          <div className="flex justify-between text-[11px]"><span className="text-[#6c7688]">Subscription</span><span className="text-[#353a44]">$249.00</span></div>
          <div className="flex justify-between text-[11px]"><span className="text-[#6c7688]">Seattle tax</span><span className="text-[#635bff]">$26.15</span></div>
        </div>
      </div>
    </div>
  );
}

function DiscoverMore() {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const dismiss = (id: string) => setDismissed((prev) => new Set([...prev, id]));
  const cards = [
    { id: "in-person", title: "In-person payments", subtitle: "Build your ideal point of sale with Terminal.", illustration: <InPersonIllustration /> },
    { id: "tax", title: "Add a tax registration", subtitle: "Register with local tax authorities and use Stripe.", illustration: <TaxIllustration /> },
    { id: "invoice", title: "Create a test invoice", subtitle: "Bundled pricing to accelerate your growth.", illustration: <InvoiceIllustration /> },
  ];
  const visible = cards.filter((c) => !dismissed.has(c.id));
  if (visible.length === 0) return null;
  return (
    <div className="bg-[#f5f5ff] rounded-2xl p-3 flex flex-col gap-2 shrink-0">
      <p className="text-[13px] font-semibold text-[#596171] tracking-tight px-1 py-1">Discover more</p>
      <div className="flex gap-3 items-stretch" style={{ minHeight: 252 }}>
        {visible.map((c) => (
          <BentoCard key={c.id} id={c.id} title={c.title} subtitle={c.subtitle} onDismiss={dismiss}>{c.illustration}</BentoCard>
        ))}
        {visible.length < 3 && Array.from({ length: 3 - visible.length }).map((_, i) => (
          <div key={`ghost-${i}`} className="flex-1 min-w-0 rounded-lg bg-[#f5f5ff] border border-dashed border-[#d8dee4]" />
        ))}
      </div>
    </div>
  );
}

/* ─── Recommended for you ────────────────────────────────────── */
function RecommendedBubbles({ flip = false }: { flip?: boolean }) {
  const paths = [svgRec.p3299980, svgRec.p1bd6d840, svgRec.p30d32500, svgRec.p2364d100, svgRec.p22d24580, svgRec.p6079a00, svgRec.p35819b00, svgRec.p12e3a00, svgRec.p34281500, svgRec.p2ccf62c0, svgRec.p5f4c600, svgRec.p1e616c00, svgRec.p33a39580, svgRec.p28bc2800, svgRec.p2b666300, svgRec.pda9d700, svgRec.p12f333d0, svgRec.p2104a780, svgRec.paa6fd00, svgRec.p2443b480];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 344" preserveAspectRatio="xMidYMid slice" fill="none" style={{ transform: flip ? "scaleX(-1)" : undefined }}>
      {paths.map((d, i) => <path key={i} d={d} fill="#9A9AFE" fillOpacity="0.4" />)}
    </svg>
  );
}

const recommendedCards = [
  { id: "subscriptions", title: "Create subscriptions", description: "Test different recurring pricing models—including flat rate, per-seat, usage-based, tiered, or hybrid." },
  { id: "invoices", title: "Send invoices", description: "Send an invoice with a link to allow customers to pay online with their preferred payment methods." },
];

function RecommendedForYou() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[15px] font-bold text-[#353a44] tracking-tight">Recommended for you</p>
      <div className="flex gap-4 items-stretch">
        {recommendedCards.map((card, i) => (
          <div key={card.id} className="flex-1 min-w-0 rounded-xl overflow-hidden relative flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #eeeeff 0%, #e0e0ff 60%, #d5d5ff 100%)", minHeight: 200 }}>
            <div className="absolute inset-0 overflow-hidden"><RecommendedBubbles flip={i % 2 === 1} /></div>
            <div className="relative z-10 p-5 flex-1"><p className="text-[13px] text-[#353a44] leading-[1.5] max-w-[320px]">{card.description}</p></div>
            <div className="relative z-10 flex items-center justify-between px-5 pb-5">
              <span className="text-[13px] font-semibold text-[#353a44] tracking-tight">{card.title}</span>
              <div className="bg-[#f7f5fd] rounded-md w-8 h-8 flex items-center justify-center shrink-0 hover:bg-[#ebe8ff] transition-colors cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgTools.pd386ef0} fill="#675DFF" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Tools section ─────────────────────────────────────────── */
function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(value).catch(() => {}); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <button onClick={copy} title="Copy" className={`shrink-0 transition-colors ${copied ? "text-[#635bff]" : "text-[#6c7688] hover:text-[#353a44]"}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path clipRule="evenodd" d={svgTools.p17747f80} fill="currentColor" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgTools.p22b35100} fill="currentColor" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgTools.p17ce7e80} fill="currentColor" fillRule="evenodd" />
      </svg>
    </button>
  );
}

function KeyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[13px] font-semibold text-[#353a44] tracking-tight">{label}</p>
      <div className="bg-white rounded-md border border-[#ebeef1] flex items-center justify-between px-2 py-2 gap-2">
        <p className="text-[13px] text-[#596171] truncate flex-1 min-w-0">{value}</p>
        <CopyButton value={value} />
      </div>
    </div>
  );
}

function ApiKeysCard() {
  return (
    <div className="bg-[#f4f7fa] flex-1 min-w-0 rounded-xl p-4 flex flex-col gap-4 self-stretch">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-md w-7 h-7 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path clipRule="evenodd" d={svgTools.p379c0e00} fill="#667691" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgTools.p476d5c0} fill="#667691" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgTools.p1bb5a680} fill="#667691" fillRule="evenodd" />
          </svg>
        </div>
        <span className="text-[17px] font-bold text-[#353a44] tracking-tight">API keys</span>
      </div>
      <div className="flex flex-col gap-4">
        <KeyRow label="Publishable key" value={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? ''} />
        <KeyRow label="Secret key" value={import.meta.env.VITE_STRIPE_SECRET_KEY ?? ''} />
      </div>
    </div>
  );
}

const testCards = [
  { number: "4242 4242 4242 4242", brand: "visa", icon: <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d={svgTools.p2cdb7580} fill="#F6F9FC" /><path d={svgTools.p64e0360} fill="#E6EBF1" /><path clipRule="evenodd" d={svgTools.p17dac800} fill="#1A1F71" fillRule="evenodd" /><path clipRule="evenodd" d={svgTools.p1bf5d400} fill="#F7B600" fillRule="evenodd" /></svg> },
  { number: "5555 5555 5555 4444", brand: "mastercard", icon: <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d={svgTools.p2cdb7580} fill="#F6F9FC" /><path d={svgTools.p64e0360} fill="#E6EBF1" /><path clipRule="evenodd" d={svgTools.p3b904400} fill="#EB001B" fillRule="evenodd" /><path clipRule="evenodd" d={svgTools.p25bcb280} fill="#F79E1B" fillRule="evenodd" /><path clipRule="evenodd" d={svgTools.pc4d7000} fill="#FF5F00" fillRule="evenodd" /></svg> },
  { number: "3782 822463 10005", brand: "amex", icon: <svg width="16" height="11.29" viewBox="0 0 16 11.29" fill="none"><path d={svgTools.p221d1580} fill="#474E5A" /></svg> },
];

function TestCardsCard() {
  return (
    <div className="bg-[#f4f7fa] flex-1 min-w-0 rounded-xl p-4 flex flex-col gap-4 self-stretch">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-md w-7 h-7 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path clipRule="evenodd" d={svgTools.p3059bd80} fill="#667691" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgTools.p35e5300} fill="#667691" fillRule="evenodd" />
          </svg>
        </div>
        <span className="text-label-large-emphasized">Test cards</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[13px] font-semibold text-[#353a44] tracking-tight">Test card number</p>
        {testCards.map((card) => (
          <div key={card.number} className="bg-white rounded-md border border-[#ebeef1] flex items-center gap-2 px-2 py-2">
            <span className="shrink-0">{card.icon}</span>
            <p className="text-[13px] text-[#596171] flex-1 min-w-0 truncate">{card.number}</p>
            <CopyButton value={card.number.replace(/\s/g, "")} />
          </div>
        ))}
      </div>
    </div>
  );
}

const workbenchActions = [
  { title: "Send events", subtitle: "Trigger and test webhook events" },
  { title: "Inspect requests", subtitle: "View API request and response logs" },
  { title: "Build integrations", subtitle: "Test API calls" },
];

function WorkbenchCard() {
  return (
    <div className="bg-[#f4f7fa] flex-1 min-w-0 rounded-xl p-4 flex flex-col gap-4 self-stretch">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-md w-7 h-7 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={svgTools.p367a8300} fill="#667691" />
            <path d={svgTools.p226acb00} fill="#667691" />
            <path d={svgTools.p224af100} fill="#667691" />
          </svg>
        </div>
        <span className="text-[17px] font-bold text-[#353a44] tracking-tight">Workbench</span>
      </div>
      <div className="flex flex-col gap-2">
        {workbenchActions.map((action) => (
          <button key={action.title} className="bg-white rounded-md flex items-center justify-between px-2 py-2 hover:bg-[#f0effe] transition-colors group w-full text-left">
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-semibold text-[#353a44] leading-4">{action.title}</span>
              <span className="text-[12px] text-[#596171] leading-4">{action.subtitle}</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgTools.pd386ef0} fill="#675DFF" /></svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ToolsSection() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[15px] font-bold text-[#353a44] tracking-tight">Tools</p>
      <div className="flex gap-6 items-stretch" style={{ minHeight: 228 }}>
        <ApiKeysCard />
        <TestCardsCard />
        <WorkbenchCard />
      </div>
    </div>
  );
}

/* ─── HomePage ───────────────────────────────────────────────── */
export default function HomeContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-[1280px] mx-auto px-10 py-8 flex flex-col gap-6">
        {/* Welcome header */}
        <div className="flex flex-col gap-2">
          <p className="text-label-large-emphasized">Welcome to Stripe</p>
          <h1 className="text-h1-secondary max-w-[600px]">Complete your account setup to activate your first payment method.</h1>
        </div>

        {/* Get started + Ask assistant */}
        <div className="bg-[#f5f5ff] rounded-2xl p-2 flex gap-2 items-stretch" style={{ minHeight: 340 }}>
          <GetStartedCard />
          <AskAssistantPanel />
        </div>

        {/* Tools */}
        <ToolsSection />

        {/* Discover more */}
        <DiscoverMore />

        {/* Recommended for you */}
        <RecommendedForYou />

        <div className="h-4" />
      </div>
    </div>
  );
}
