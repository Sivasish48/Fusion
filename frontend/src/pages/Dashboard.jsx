import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashProfile from '@/components/component/DashProfile.jsx';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParameters = new URLSearchParams(location.search);
    const tabFromTheUrl = urlParameters.get('tab');

    if (tabFromTheUrl) {
      setTab(tabFromTheUrl);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <div className="flex-1 flex justify-center items-center p-4">
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  );
}
