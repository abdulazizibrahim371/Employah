import {Badge, Space, Typography} from "antd"
import {MailOutlined, BellOutlined, UserOutlined} from '@ant-design/icons';
function AppHeader() {
    return(
        <div className="AppHeader">Employah!
        <Typography.Title >Stacy's Dashboard</Typography.Title>
        <Space>
            <Badge>
                <UserOutlined style={{fontSize:24,}}></UserOutlined>
            </Badge>
            <Badge >
            </Badge>

            <Badge >
            </Badge>
        </Space>
        </div>

    )

}
export default AppHeader