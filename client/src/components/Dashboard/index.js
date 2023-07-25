import { ShoppingCartOutlined,FileDoneOutlined, UserSwitchOutlined, 
    FormOutlined, MessageOutlined, UsergroupAddOutlined, EditOutlined } from "@ant-design/icons"
import { Space, Typography,Card, Button } from "antd"
import Statistic from "antd/es/statistic/Statistic"

function Dashboard() {
    return(
        <div>
             <Typography.Title level={3}>Dashboard</Typography.Title>
             <Space >
                <DashboardCard icon= {<EditOutlined style={{fontSize: 30, color:"green", backgroundColor:"blue", borderRadius:0,}}></EditOutlined>} title={"Tests"}value={2}><Button></Button></DashboardCard>
                <DashboardCard icon= {<FormOutlined style={{fontSize: 30, color:"blue"}}></FormOutlined>}title={"Active Jobs"}value={572}></DashboardCard>
                <DashboardCard icon= {<UsergroupAddOutlined style={{fontSize: 30, color:"orange"}}></UsergroupAddOutlined>} title={"Team Members"}value={12}></DashboardCard>
             </Space>

             
        </div>

        
    )
}

function DashboardCard({title,value,icon}) {
    return(
        <Card>
        <Space direction="horizontal">
            {icon}
            <Statistic title={title} value={value}></Statistic>
        </Space>     
    </Card>

    )
    
}
export default Dashboard