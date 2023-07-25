import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, 
    SettingOutlined, SolutionOutlined,MessageOutlined,EditOutlined,FileDoneOutlined, ReadOutlined } from '@ant-design/icons'
import {Menu} from 'antd'
import { useNavigate } from 'react-router-dom'
function SideMenu() {

    const navigate = useNavigate()

    return(

        <div className="SideMenu">
            <Menu 

                onClick={(item) =>{
                    //item.key
                    navigate(item.key)
                }}

            items={[
                {
                    label: "Dashboard",
                    icon:<AppstoreOutlined/>,
                    key:'/'
                },

                {
                    label: "Jobs",
                    icon:<FileDoneOutlined s/>,
                    key:'/jobs'
                },
                {
                    label: "Tests",
                    icon:<EditOutlined />,
                    key:'/tests'
                },

                {
                    label: "Skills Dev't",
                    icon:<SolutionOutlined />,
                    key:'/skillsDev'
                },
                 {
                    label: "About",
                    icon:<ReadOutlined />,
                    key:'/messages'
                },

           
                 {
                    label: "Settings",
                    icon:<SettingOutlined />,
                    key:'/settings'
                },
            ]}>

            </Menu>
        </div>

    )

}
export default SideMenu