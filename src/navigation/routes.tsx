import { createBrowserRouter } from 'react-router-dom';

import { OnboardingPage } from '@/pages/Onboarding';
import { WelcomePage } from '@/pages/Welcome';
import { HomePage } from '@/pages/Home';
// import { EarnPage } from '@/pages/Earn';
// import { BuildPage } from '@/pages/Build';
import { FriendsPage } from '@/pages/Friends';
// import { LeadPage } from '@/pages/Lead';
// import { JoinSquadPage } from '@/pages/JoinSquad';
// import { SquadDetailPage } from '@/pages/SquadDetail';
// import { ProfilePage } from '@/pages/Profile';
// import { DailyTaskPage } from '@/pages/DailyTask';

export const routes = createBrowserRouter(
  [
    { path: "/", element: <OnboardingPage />, },
    { path: "/welcome", element: <WelcomePage />, },
    { path: "/home", element: <HomePage />, },
    { path: '/friend', element: <FriendsPage /> },
    { path: "*", element: <OnboardingPage />, },
  ],
  { basename: import.meta.env.BASE_URL }
);


// { path: '/', Component: OnboardingPage },
// { path: '/welcome', Component: WelcomePage },
// { path: '/home', Component: HomePage },
// { path: '/earn', Component: EarnPage },
// { path: '/build', Component: BuildPage },
// { path: '/lead', Component: LeadPage },
// { path: '/joinsquad', Component: JoinSquadPage },
// { path: '/squad/:id', Component: SquadDetailPage },
// { path: '/profile', Component: ProfilePage },
// { path: '/dailytask', Component: DailyTaskPage },
