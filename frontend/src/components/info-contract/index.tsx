import { Button, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

export const InfoContract: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={12} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">
                  abc
                </Option>
              </Select>
            )}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 50 }}>
        <Option value="USD">$</Option>
        <Option value="VND">đ</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={10} push={14} key='TemplateContract'>
            <Form.Item
              name='TemplateContract'
              label='Template:'
              rules={[
                {
                  required: true,
                  message: 'Input Template something!',
                },
              ]}
            >
             <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={14} pull={10} key='TypeOfContract'>
            <Form.Item
              name='TypeOfContract'
              label='Loại hợp đồng:'
              rules={[
                {
                  required: false,
                  message: 'Input type of contract something!',
                },
              ]}
            >
             <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={10} key='CustomerName'>
              <Form.Item
                name='CustomerName'
                label='Tên khách hàng:'
                rules={[
                  {
                    required: false,
                    message: 'Input customer name something!',
                  },
                ]}
              >
               <Input placeholder="Customer Name" />  
                
              </Form.Item>
          </Col>
          <Col span={4} key='Button add customer'>
              <Button className='rounded-full' type="primary" htmlType="submit">
                Thêm kh
              </Button>
          </Col>
          <Col span={10} key='expert'>
              <Form.Item
                name='expert'
                label='Chuyên viên:'
                rules={[
                  {
                    required: false,
                    message: 'Input expert something!',
                  },
                ]}
              >
               <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
              </Form.Item>
          </Col>     
        </Row>
        <Row gutter={24}>
          <Col span={14} key='phone'>
            <Form.Item
              name="phone"
              label="Số điện thoại:"
              rules={[{ required: false, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={10} key='money'>
            <Form.Item
              name="money"
              label="Phí"
              rules={[{ required: true, message: 'Please input money amount!' }]}
            >
              <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>          
        <Row gutter={24}>
            <Col span={14} key='email'>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: false,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
            </Col>
            <Col span={10} key='signer'>
              <Form.Item
                  name='signer'
                  label='Người ký:'
                  rules={[
                    {
                      required: true,
                      message: 'Please Input your signer!',
                    },
                  ]}
              >
                <Select defaultValue="2">
                  <Option value="1">Nguyễn văn A</Option>
                  <Option value="2">Nguyễn văn B</Option>
                </Select>
              </Form.Item>              
            </Col>
        </Row>
        <Row gutter={24}>
          <Col span={14}>
          </Col>
          <Col span={10}>
          </Col> 
        </Row>





        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </>
    
  )
}

