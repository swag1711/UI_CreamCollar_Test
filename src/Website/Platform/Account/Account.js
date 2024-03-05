import React, { useEffect, useState } from 'react';
import oidcConfig from '../Journey/oidcconfic';
function Account() {
  const [moodleSSOUrl, setMoodleSSOUrl] = useState('');
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
// Use apiBaseUrl in your code


  useEffect(() => {
   
    const oidcLoginUrl = `${oidcConfig.authority}/realms/creamcollar/protocol/openid-connect/auth?client_id=${oidcConfig.clientId}&redirect_uri=${oidcConfig.redirectUri}&scope=${oidcConfig.scope}&response_type=${oidcConfig.responseType}`;

    setMoodleSSOUrl(oidcLoginUrl);
  }, []);

  function handleLoginClick() {
    const width = 600, height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      moodleSSOUrl,
      'AuthWindow',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  }

  return (
    <div>
      <h3>Welcome to Your Account</h3>
      <button onClick={handleLoginClick}>Log in with Moodle</button>
    </div>
  );
}

export default Account;