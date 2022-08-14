import {
  Calendar, Card, Modal,
} from 'antd';
import React, { useState } from 'react';
import type { Moment } from 'moment';
import moment from 'moment';
import BaseLayout from '../../components/BaseLayout';
import CreateEventForm from '../../components/CreateEventForm';
import isSelectedDateValid from '../../utils/date';
import CustomModal from '../../components/ui/Modal/index';

export default function Events() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(moment('2017-01-25'));

  const onSelect = (value: Moment) => {
    if (isSelectedDateValid(value)) {
      setIsModalVisible(true);
      setSelectedValue(value);
    } else {
      CustomModal.openErrorModal('You can\'t create an event in the past. Choose another date.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <BaseLayout>
      <Card style={{ width: '80%', margin: '10px auto', padding: '20px' }}>
        <Calendar onSelect={onSelect} />
      </Card>
      <Modal
        title={`Set an event on ${selectedValue.format('YYYY-MM-DD')}`}
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <CreateEventForm onCloseModal={handleCancel} />
      </Modal>
    </BaseLayout>
  );
}
