import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './WaterForm.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const WaterForm = (props) => {
  const onFinish = (values) => {
    props.onChangeWaterForm({onFinish:values})
    console.log('Success:--组件', values)
  };

  const onFinishFailed = (errorInfo) => {
    props.onChangeWaterForm({errorInfo:errorInfo})
    console.log('Failed:--组件', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="form-wrapper"
    >
      <h2>公共登陆 表单</h2>
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入姓名',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WaterForm;