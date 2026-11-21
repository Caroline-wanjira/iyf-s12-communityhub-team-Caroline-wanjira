import { useEffect } from 'react';

// Sets the browser tab title. Screen reader users hear it when a page changes.
function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | CommunityHub` : 'CommunityHub';
  }, [title]);
}

export default usePageTitle;
