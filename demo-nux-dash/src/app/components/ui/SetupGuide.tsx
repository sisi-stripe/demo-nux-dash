import { useState } from 'react';
import { Minus, ChevronUp, ChevronDown, Lock, ArrowRight } from 'lucide-react';

interface Task {
  label: string;
  active?: boolean;
  completed?: boolean;
}

interface Section {
  id: string;
  title: string;
  tasks?: Task[];
  locked?: boolean;
}

const sections: Section[] = [
  {
    id: 'subscriptions',
    title: 'Set up your subscriptions',
    tasks: [
      { label: 'Choose how to accept payments', active: true },
      { label: 'Create your first payment link' },
      { label: 'Task' },
    ],
  },
  {
    id: 'business',
    title: 'Verify your business',
    tasks: [],
  },
  {
    id: 'golive',
    title: 'Go live',
    locked: true,
  },
];

function TaskRow({ task }: { task: Task }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <div
        className="w-4 h-4 rounded-full shrink-0 border-2"
        style={{
          borderColor: task.completed ? '#635bff' : '#d8dee4',
          borderStyle: task.active ? 'solid' : 'dashed',
          background: task.completed ? '#635bff' : 'transparent',
        }}
      />
      <span className="text-[13px] text-[#353a44] flex-1">{task.label}</span>
      {task.active && (
        <div className="w-7 h-7 rounded-md bg-[#635bff] flex items-center justify-center shrink-0">
          <ArrowRight size={12} color="white" />
        </div>
      )}
    </div>
  );
}

interface SetupGuideProps {
  onClose?: () => void;
}

export default function SetupGuide({ onClose }: SetupGuideProps) {
  const [minimized, setMinimized] = useState(false);
  const [openSection, setOpenSection] = useState<string>('subscriptions');

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col"
      style={{
        width: '342px',
        height: minimized ? 'auto' : '300px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 39, 77, 0.08)',
        background: 'var(--background-offset, #F5F6F8)',
        boxShadow: '0 15px 35px 0 rgba(48, 49, 61, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <span className="text-label-emphasized">Setup guide</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMinimized(!minimized)}
            className="text-[#99a5b8] hover:text-[#353a44] transition-colors"
          >
            <Minus size={14} />
          </button>
          <button
            onClick={() => setMinimized(!minimized)}
            className="text-[#99a5b8] hover:text-[#353a44] transition-colors"
          >
            {minimized ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Sections */}
          <div className="flex-1 overflow-y-auto px-4 flex flex-col gap-1 min-h-0">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => !section.locked && setOpenSection(openSection === section.id ? '' : section.id)}
                  className="flex items-center justify-between w-full py-2 text-left"
                  disabled={section.locked}
                >
                  <span className="text-label-emphasized">{section.title}</span>
                  {section.locked ? (
                    <Lock size={13} className="text-[#99a5b8]" />
                  ) : openSection === section.id ? (
                    <ChevronUp size={13} className="text-[#596171]" />
                  ) : (
                    <ChevronDown size={13} className="text-[#596171]" />
                  )}
                </button>
                {openSection === section.id && section.tasks && section.tasks.length > 0 && (
                  <div className="flex flex-col pb-1">
                    {section.tasks.map((task) => (
                      <TaskRow key={task.label} task={task} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#ebeef1] shrink-0">
            <div className="w-[80px] h-[4px] bg-[#353a44] rounded-full" />
            <button className="text-[13px] text-[#635bff] hover:text-[#4f46e5] transition-colors font-medium">
              Manage tasks
            </button>
          </div>
        </>
      )}
    </div>
  );
}
