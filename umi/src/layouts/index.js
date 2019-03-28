// import styles from './index.css';
import React, { Component } from 'react';
import { Layout,Menu,Icon,Input,Button} from 'antd'
import {connect} from 'dva'
const {Header,Footer,Sider,Content} = Layout
const SubMenu = Menu.SubMenu;
const mapStateToProps = (state) => {
  const input = state['input'].inputs;
  return {
      input,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      add: (e,value) => {
          const action = {
              type: 'list/add',
              payload:value,
          };
          const action2={
            type:"input/change",
            payload:''
          }
       if(e.keyCode===13){
        dispatch(action);
        dispatch(action2)
       }
      },
      HandleChange:(e)=>{
        const action={
          type:'input/change',
          payload:e.target.value
        }
        dispatch(action)
      }
  };
};

class BasicLayout extends Component{
  constructor(props){
    super(props);
    this.state={   
        collapsed: true
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render(){
    return (

      <div >
     <Layout  style={{ minHeight: '100vh' }}>
     <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
         <Layout>
           <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
              <Input onChange={(e)=>this.props.HandleChange(e)}  value={this.props.input} onKeyUp={(e)=>this.props.add(e,this.props.input)}></Input>
              <Button type="primary">添加数据</Button>
           </Header>
           <Content  style={{ margin: '24px 16px 0' }}>
              <div  style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
              </div>
           </Content>
           <Footer style={{ textAlign: 'center' }}>
             footer
           </Footer>
         </Layout>
       </Layout>
      </div>
    );
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
