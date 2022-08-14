/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Form, Input, Checkbox, Button, Select, Alert,
} from 'antd';
import { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import EventsService from '../../api/EventsService';
import UserService from '../../api/UsersService';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { IUser, IEvent } from '../../types/types';
import rules from '../../utils/rules';
import CustomModal from '../ui/Modal';

interface Props {
  onCloseModal: () => void,
}

const CreateEventForm = ({ onCloseModal }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const [guests, setGuests] = useState([] as IUser[]);

  useEffect(() => {
    const fetchGuests = () => {
      const users = UserService.getUsers();
      const guestsArr = users.filter((u) => u.email !== (user as IUser).email);
      setGuests(guestsArr);
    };
    fetchGuests();
  }, []);

  const onFinish = (values: IEvent) => {
    console.log(values);
    EventsService.setEvent(values);
    form.resetFields();
    onCloseModal();
    CustomModal.openSuccessModal('The event was successfully created.');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <Form
      form={form}
      name="create-event"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Event Name"
        name="title"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Guests"
        name="guests"
        rules={[rules.required()]}
      >
        <Select
          showSearch
          mode="multiple"
          placeholder="Select a guest"
          optionFilterProp="children"
          onSearch={onSearch}
          filterOption={(input, option) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())}
        >
          {guests.map((g) => <Select.Option value={g.username} key={g.email}>{g.username}</Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateEventForm;
