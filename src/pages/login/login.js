import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Button, Checkbox, Form, Input, notification } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./login.scss";
import { userLogin } from "@/api/login";
import { withRouter } from "react-router";

const options = {
  background: {
    color: {
      value: "#232741",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  // 帧数，越低越卡,默认60
  fpsLimit: 120,
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "slow",
      },
    },
    modes: {
      push: {
        //点击是添加1个粒子
        quantity: 3,
      },
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0.8,
        size: 20,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
      //击退
      repulse: {
        divs: {
          //鼠标移动时排斥粒子的距离
          distance: 200,
          //翻译是持续时间
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      //缓慢移动
      slow: {
        //移动速度
        factor: 2,
        //影响范围
        radius: 200,
      },
      //吸引
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 3,
        maxSpeed: 50,
        speed: 1,
      },
    },
  },
  //  粒子的参数
  particles: {
    //粒子的颜色
    color: {
      value: "#ffffff",
    },
    //是否启动粒子碰撞
    collisions: {
      enable: true,
    },
    //粒子之间的线的参数
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      enable: true,
      warp: true,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 6,
      warp: true,
    },
    number: {
      density: {
        enable: true,
      },
      //初始粒子数
      value: 40,
    },
    //透明度
    opacity: {
      value: 0.5,
      animation: {
        speed: 3,
        minimumValue: 0.1,
      },
    },
    //大小
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        speed: 20,
        minimumValue: 0.1,
      },
    },
  },
};

const openNotification = () => {
  notification.open({
    duration: 10,
    message: "用户名密码",
    description: "用户名：alice，密码：123456",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const Login = (props) => {
  useEffect(() => {
    openNotification();
  });
  //组件的最外层
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  //粒子被正确加载到画布中时，这个函数被调用
  const particlesLoaded = (container) => {
    // console.log("123", container);
  };

  const submitForm = async (values) => {
    console.log(values);
    const data = await userLogin(values);
    if (data.id) {
      //存token
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      //跳转页面
      props.history.push("/home");
    }
  };
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* <Particles class="tsparticles"
                            height={document.documentElement.clientHeight}
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={options}
                        /> */}
      <div className="formContainer">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          wrapperCol={{ span: 18, offset: 3 }}
          onFinish={submitForm}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "请输入用户名！",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="alice"
            />
          </Form.Item>{" "}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="123456"
            />
          </Form.Item>
          <Form.Item className="opreate">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              注册账号
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Login);
