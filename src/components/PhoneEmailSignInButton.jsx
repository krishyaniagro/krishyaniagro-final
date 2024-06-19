// PhoneEmailSignInButton.js
import { useEffect } from 'react';
import { useGlobalState } from './GlobalState';
import { useRouter } from 'next/navigation';

const PhoneEmailSignInButton = ({name,address}) => {
  const { setIsLoggedIn } = useGlobalState();
  const { isLoggedIn } = useGlobalState();
  const router=useRouter()


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.phone.email/sign_in_button_v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const phoneEmailListener = async (userObj) => {
    const user_json_url = userObj.user_json_url;

    try {
      const response = await fetch(user_json_url);
      const data = await response.json();
      const userPhoneNumber = data.user_phone_number;
      setCookie('user_phone_number', userPhoneNumber, 7);
      setCookie('username', name, 7);
      setCookie('address', address, 7);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    window.phoneEmailListener = phoneEmailListener;
  }, []);

  return (
    <div 
      className="pe_signin_button" 
      data-client-id="14196829677289531267"
    ></div>
  );
};

export default PhoneEmailSignInButton;
