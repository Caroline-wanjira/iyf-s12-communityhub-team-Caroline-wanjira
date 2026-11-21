import usePageTitle from '../hooks/usePageTitle';
import { Button } from '../components/shared';

function NotFound() {
  usePageTitle('Page not found');

  return (
    <div>
      <h1>Page not found</h1>
      <p>We could not find that page. Check the address or go back home.</p>
      <Button to="/">Go to home</Button>
    </div>
  );
}

export default NotFound;
