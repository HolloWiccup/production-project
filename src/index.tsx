import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundaries';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
