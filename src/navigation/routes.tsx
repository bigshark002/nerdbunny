import { createBrowserRouter } from 'react-router-dom';

import { OnboardingPage } from '@/pages/Onboarding';
import { WelcomePage } from '@/pages/Welcome';
import { HomePage } from '@/pages/Home';
import { EarnPage } from '@/pages/Earn';
import { FriendsPage } from '@/pages/Friends';
import { BuildPage } from '@/pages/Build';
import { LeadPage } from '@/pages/Lead';
import { JoinSquadPage } from '@/pages/JoinSquad';
import { SquadDetailPage } from '@/pages/SquadDetail';
import { ProfilePage } from '@/pages/Profile';
import { DailyTaskPage } from '@/pages/DailyTask';
import { SecretCodePage } from '@/pages/SecretCode';

export const routes = createBrowserRouter(
  [
    { path: "/", element: <OnboardingPage />, },
    { path: "/welcome", element: <WelcomePage />, },
    { path: "/home", element: <HomePage />, },
    { path: '/earn', element: <EarnPage />, },
    { path: '/friend', element: <FriendsPage />, },
    { path: '/build', element: <BuildPage />, },    
    { path: '/lead', element: <LeadPage />, },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/joinsquad', element: <JoinSquadPage />, },
    { path: '/squad/:id', element: <SquadDetailPage /> },
    { path: '/dailytask', element: <DailyTaskPage /> },
    { path: '/secret', element: <SecretCodePage /> },
    { path: "*", element: <OnboardingPage />, }, 
  ],
  { basename: import.meta.env.BASE_URL }
);