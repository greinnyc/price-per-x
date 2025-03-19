'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export default function Home() {
  const [form] = Form.useForm();

  return (
    <Form
      layout={'inline'}
      form={form}
      style={{ maxWidth: 'none' }}
    >
      <Form.Item label="Cantidad">
        <Input placeholder="Ingresar cantidad" />
      </Form.Item>
      <Form.Item label="Precio">
        <Input placeholder="Ingresar precio" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Calcular</Button>
      </Form.Item>
    </Form>
  );
}
