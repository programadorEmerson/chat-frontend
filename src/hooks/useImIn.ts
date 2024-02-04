import { useEffect, useState } from 'react';

import { usePathname, redirect } from 'next/navigation';

import { APP_NAME } from '@/constants/ref.constants';

type WhereAmIProps = {
    reference: string;
    anchor?: string | null;
}

const whereAmI = ({ reference }: WhereAmIProps) => {
  const [inCurrentPage, setInCurrentPage] = useState(false);
  const patch = usePathname();

  const restorePreviousRoute = () => {
    const route = localStorage.getItem(`${APP_NAME}_lastRoute`) || '';

    if (route) {
      window.history.pushState({}, '', route);
      redirect(route);
    }
  };

  const goToAnchor = (anchor: string) => {
    const section = document.getElementById(anchor);
    window.history.pushState({}, '', `${patch}#${anchor}`);
    if (section) {
      section.scrollIntoView({ behavior : 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (patch === reference) {
      setInCurrentPage(true);
    } else {
      setInCurrentPage(false);
    }
  }, [patch]);

  return { inCurrentPage, goToAnchor, restorePreviousRoute };
};

export default whereAmI;
