import { Modal } from 'antd';
import React from 'react';

class CustomModal {
  static openSuccessModal(message: string) {
    let secondsToGo = 2;

    const modal = Modal.success({
      title: '',
      content: message,
      keyboard: true,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  static openErrorModal(message: string) {
    Modal.error({
      title: '',
      content: message,
      keyboard: true,
    });
  }
}

export default CustomModal;
