import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useIsPolicyPage = (): boolean => {
  const pathname = usePathname();
  const [isPolicyPage, setIsPolicyPage] = useState(false);

  useEffect(() => {
    setIsPolicyPage(pathname === '/policy');
  }, [pathname]);

  return isPolicyPage;
};
