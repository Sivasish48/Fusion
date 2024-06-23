import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '@/components/component/DashSidebar.jsx';
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
    <div className="flex flex-col lg:flex-row min-h-screen">
      <DashSidebar tab={tab} />
      <div className="flex-1">
        {tab === 'profile' && (
          <div className="flex justify-center items-center h-full">
            <DashProfile />
          </div>
        )}
      </div>
    </div>
  );
}
