import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import JobsScreen from './screens/JobsScreen'
import MessagesScreen from './screens/MessagesScreen'
import ProfileScreen from './screens/ProfileScreen'
import EditProfileScreen from './screens/EditProfileScreen'
import BottomNav from './components/BottomNav'

export type Screen = 'home' | 'jobs' | 'messages' | 'profile' | 'edit-profile'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [loggedIn, setLoggedIn] = useState(false)

  const showNav = loggedIn && screen !== 'home' && screen !== 'edit-profile'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Mobile frame */}
      <div className="relative w-[390px] h-[844px] bg-[#f4f3ff] rounded-[48px] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 flex flex-col">
        {/* Status bar */}
        <div className="shrink-0 flex items-center justify-between px-8 pt-4 pb-2 z-20" style={{ background: screen === 'home' ? 'transparent' : '#f4f3ff' }}>
          <span className="text-[13px] font-semibold" style={{ color: screen === 'home' ? 'white' : '#0f0d1a' }}>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="3" width="3" height="9" rx="1" fill={screen === 'home' ? 'white' : '#0f0d1a'} opacity="0.4"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill={screen === 'home' ? 'white' : '#0f0d1a'} opacity="0.6"/><rect x="9" y="0.5" width="3" height="11.5" rx="1" fill={screen === 'home' ? 'white' : '#0f0d1a'}/><rect x="14" y="0" width="2.5" height="11.5" rx="1" fill={screen === 'home' ? 'white' : '#0f0d1a'} opacity="0.3"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 3.5C9.93 3.5 11.67 4.27 12.95 5.5L14.36 4.09C12.71 2.49 10.47 1.5 8 1.5C5.53 1.5 3.29 2.49 1.64 4.09L3.05 5.5C4.33 4.27 6.07 3.5 8 3.5Z" fill={screen === 'home' ? 'white' : '#0f0d1a'} opacity="0.6"/><path d="M8 6.5C9.1 6.5 10.1 6.94 10.83 7.67L12.24 6.26C11.13 5.19 9.64 4.5 8 4.5C6.36 4.5 4.87 5.19 3.76 6.26L5.17 7.67C5.9 6.94 6.9 6.5 8 6.5Z" fill={screen === 'home' ? 'white' : '#0f0d1a'}/><circle cx="8" cy="10.5" r="1.5" fill={screen === 'home' ? 'white' : '#0f0d1a'}/></svg>
            <div className="flex items-center gap-0.5">
              <div className="w-6 h-3 rounded-sm border" style={{ borderColor: screen === 'home' ? 'white' : '#0f0d1a', opacity: 0.8 }}>
                <div className="h-full rounded-sm bg-current ml-0.5" style={{ width: '70%', color: screen === 'home' ? 'white' : '#0f0d1a' }}/>
              </div>
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-hidden relative">
          {screen === 'home' && <HomeScreen onEnter={() => { setLoggedIn(true); setScreen('jobs') }} />}
          {screen === 'jobs' && <JobsScreen />}
          {screen === 'messages' && <MessagesScreen />}
          {screen === 'profile' && <ProfileScreen onEdit={() => setScreen('edit-profile')} />}
          {screen === 'edit-profile' && <EditProfileScreen onBack={() => setScreen('profile')} />}
        </div>

        {/* Bottom nav */}
        {showNav && <BottomNav current={screen as any} onChange={(s) => setScreen(s)} />}
      </div>
    </div>
  )
}
