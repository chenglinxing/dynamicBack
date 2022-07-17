import React, { memo, useEffect, useState } from 'react'
import {  Table, Button,Modal,DatePicker,Form,Input} from 'antd';
import { getDynamicList,deleteDynamicById,selectMoment } from '@/api/dynamic';
import { DeleteFilled,ExclamationCircleOutlined,EyeOutlined} from "@ant-design/icons"
import { formatDate} from "@/utils"


const { confirm } = Modal
const { RangePicker } = DatePicker

const SearchForm = ()=>{

  const submitForm = async (values) =>{
    console.log(values);
    
    let formData = {
      name:values.name,
      beginDate: (values.updateTime && formatDate(values.updateTime[0]?._d,"YYYY-MM-DD")) || "",
      endDate : (values.updateTime &&  formatDate(values?.updateTime[1]?._d,"YYYY-MM-DD")) || ""
    }
    console.log(formData);
    const data = await selectMoment(formData)
    console.log(data,'ddd');
  }
return(
  <div>
     <Form
      name="basic"
      layout='inline'
      wrapperCol={{ span:26 }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onFinish={submitForm}
    >
      <Form.Item
        label="用户名"
        name="name"
        shouldUpdate
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="最后更新日期"
        name="updateTime"
      >
         <RangePicker placeholder={["开始日期","结束日期"]} />
      </Form.Item>

      <Form.Item  wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          </Form.Item>
    </Form>
  </div>
)
}

const DynamicManage = memo(() => {
  const [tableData, setTableData] = useState([])
  const [total,setTotal] = useState(0)
  const [page,setPage] = useState({
    pageSize:5,
  })
  //获取动态列表
  async function getList() {
    const data = await getDynamicList(0,10)
    if(data){
      setTableData([...tableData,...data])
      setTotal(tableData.length)
    }
    
  }
  useEffect(() => {
    getList()
  }, [])


  //删除动态 确定取消
  const handleDelete = (text)=>{
    console.log(text);
    confirm({
      title: '请问是否删除？',
      icon: <ExclamationCircleOutlined />,
      cancelText:"取消",
      okText:"确定",
      // content: 'Some descriptions',
      onOk() {
        console.log(text.id);
        deleteCurrentDynamic(text.id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  //删除当前动态
  const deleteCurrentDynamic = async(item)=>{
    const data = await deleteDynamicById(item)
  }

  //预览当前动态
  const handlePreviewCurrentMoment = (item)=>{
    // const data = await getOneMoment(item.id)
    console.log(item,"当前动态");
  }

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      align:"center",
      render: (text,_,index) => <a>{index+1}</a>,
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '用户名',
      dataIndex: 'user',
      key: 'user',
      align:"center",
      render:(text,record,index)=>{
        return (
          <span>{record.user.name}</span>
        )
      }
    },
    {
      title: '最后更新日期',
      dataIndex: 'updateTime',
      key: 'updateTime',
      align:"center",
      render:(text,record,index)=>{
        return (
          <span>{formatDate(text)}</span>
        )
      }
    },
    {
      title:"操作",
      key:"opreate",
      align:"center",
      render:(item)=>{
        return(
          <>
          <Button style={{marginRight:"10px"}} danger type="primary" shape="circle" icon={<DeleteFilled />}  onClick={()=>handleDelete(item)}/>
          <Button type="primary" shape="circle"  icon={<EyeOutlined onClick={()=>handlePreviewCurrentMoment(item)}/>}/>
          </>
        )
      }
    }
  ]

  const onChange = (i)=>{
    console.log(i);
  }

  return (
    <div>
      <SearchForm />
      <Table style={{marginTop:"30px"}}  columns={columns} dataSource={tableData}  rowKey={columns => columns.id} 
        pagination={{
          pageSize:[page.pageSize],
          showSizeChanger:true,
          showQuickJumper:true,
          total:tableData.length,
          showTotal:(total, range) => `共${tableData.length}条数据`,
          onChange:onChange,
          pageSizeOptions:[1,2,3,4]
        }
      }/>
    </div>
  )
})

export default DynamicManage
