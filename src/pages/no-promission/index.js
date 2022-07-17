
import { Button, Result } from 'antd';
import React from 'react';
import { withRouter } from 'react-router';



const NoPromission = (props) => {

    //返回首页
    const handleHomePage =()=>{
        props.history.push("/home")
    }
  return (<Result
    status="404"
    title="404"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button onClick={handleHomePage} type="primary">返回首页</Button>}
  />)

}
export default withRouter(NoPromission );
