import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'

const useAlert = () => {

    const [messageAlert, setMessageAlert] = useState('');

    const removeMessageAlert = () => {
      setMessageAlert('');
    };
  
    const showMessageAlert = (message: string) => {
      setMessageAlert(message);
    };
  
    useEffect(() => {
      if (messageAlert.length === 0) return;
      ToastAndroid.show(messageAlert, ToastAndroid.LONG);
      setTimeout(() => {
        removeMessageAlert();
      }, 3000);
    }, [messageAlert]);
  
    return { messageAlert, showMessageAlert };

}

export default useAlert