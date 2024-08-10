import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { SDKProvider } from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { routes } from '@/navigation/routes';

function App() {
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider acceptCustomStyles>
        <div className="App">
          <RouterProvider router={routes} />
        </div>
      </SDKProvider>
    </TonConnectUIProvider>
  );
}

export default App;
