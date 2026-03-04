import svgPaths from '../../../imports/svg-f7xs5v3bve';

interface AIContextualPromptProps {
  label: string;
  onClick?: () => void;
}

export default function AIContextualPrompt({ label, onClick }: AIContextualPromptProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-lg h-[36px] flex items-center justify-between px-4 hover:shadow-sm hover:bg-[#fafbff] transition-all group"
    >
      <span className="text-label-small group-hover:text-[#635bff] transition-colors text-left">{label}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
        <path d={svgPaths.p3ea5dc80} fill="#6c7688" />
      </svg>
    </button>
  );
}
