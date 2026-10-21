type Tab = 'jobs' | 'messages' | 'profile'

interface Props {
  current: Tab
  onChange: (s: Tab) => void
}

const tabs: { id: Tab; label: string; icon: (active: boolean) => JSX.Element }[] = [
  {
    id: 'jobs',
    label: 'Vagas',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#7c3aed' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    )
  },
  {
    id: 'messages',
    label: 'Mensagens',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#7c3aed' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    id: 'profile',
    label: 'Perfil',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#7c3aed' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    )
  }
]

export default function BottomNav({ current, onChange }: Props) {
  return (
    <div className="shrink-0 bg-white border-t border-[#ddd6fe] px-4 pt-3 pb-6 flex items-center justify-around">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className="flex flex-col items-center gap-1 min-w-[64px]"
        >
          {tab.icon(current === tab.id)}
          <span className="text-[11px] font-medium" style={{ color: current === tab.id ? '#7c3aed' : '#9ca3af' }}>
            {tab.label}
          </span>
          {current === tab.id && <div className="w-1 h-1 rounded-full bg-[#7c3aed]" />}
        </button>
      ))}
    </div>
  )
}
