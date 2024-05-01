import React,{ useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { 
    Layout, 
    Menu, 
    Typography,
    Dropdown,
    Row,
    Col,
    Space,
    Image,
    Button,
    Input,
    Modal,
  } from 'antd';
  
import SwitchingComponent from "./SwitchingComponent";
import Sider from "antd/es/layout/Sider";
import {
    HomeOutlined,
    InteractionOutlined,
    LayoutOutlined,
    NotificationOutlined,
    PlusSquareOutlined,
    PoweroffOutlined,
    ProductOutlined,
    SettingOutlined,
    UserOutlined,
    LeftOutlined,
    RightOutlined,
    DownloadOutlined,
    SearchOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import Logo from '../../Image/logo.webp'
import  Profile from '../../Image/avatar.5e179e90.png'
import  bell from '../../Image/bell.webp'
import Extr from '../../Image/external-link.webp'
import settings from '../../Image/setting.webp'
import { constantsText } from "../../Constant/constant";
import DashBoard from "../Dash/DashBoard";

const {
    ROUTES
} = constantsText;

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const MainLayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [status, setStatus] = useState(false);
    const { pathname } = useLocation()
    const {slug} = useParams()
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function getItem(
        label,
        key,
        icon,
        children
      ) {
        return {
          key,
          icon,
          children,
          label,
        } 
      }

    const items = [
        getItem(<Link to={ROUTES.DashBoard}>Dashboard</Link>,ROUTES.DashBoard, <HomeOutlined />),
        getItem(<Link to={ROUTES.MemberShip}>Membership Manage</Link>,ROUTES.MemberShip,<UserOutlined/>),
    ];

    const handleClose = () => {
        setCollapsed(true)
    };
    const handleOpen = ()=> {
        setCollapsed(false)
    };
    useEffect(() => {
        isMobile? setCollapsed(true) : setCollapsed(false)
    }, [isMobile]);
    return (
        <Layout
          className={styles['mainWrapper']}
        >
            {!isMobile && (
            <Sider
                collapsible={false}
                collapsed={collapsed}
                className={styles['sliderContainer']}
                style={collapsed && !isMobile && {zIndex:'999999999999999999999'}}
                width={200}
                collapsedWidth={!isMobile? 35 :70}
            >
                {collapsed && !isMobile && (
                    <RightOutlined 
                        className={styles['openBtn']}
                        onClick={handleOpen}
                    />
                )}
                <Menu 
                    className={styles['menuIcon']}
                    theme="light" 
                    defaultSelectedKeys={[pathname]} 
                    mode="inline" 
                    items={!collapsed && !isMobile && items || isMobile && items }
                    selectedKeys={[pathname]}
                />
            </Sider>
            )}
            <Layout className="siteLayout">
                <Header
                    className={styles['headerContainer']}
                >
                    <Row
                        className={styles['headerMenus']}
                    >
                        <Col 
                            span={!isMobile?10 : 24}
                        >
                            <Row>
                                <Col
                                    span={10}
                                >
                                    <img 
                                        className={styles['imageLogo']}
                                        src={Logo}
                                        alt="Logo"
                                        width="100" 
                                    />

                                </Col>
                                {!isMobile && (
                                    <Col
                                        span={1}
                                    >
                                        {!collapsed && (
                                            <LeftOutlined 
                                            className={styles['closeBtn']}
                                            onClick={handleClose}
                                            />
                                        )}
                                    </Col>
                                )}
                                <Col
                                    span={!isMobile?5:4}
                                    offset={6}
                                    className={styles['avatherWrapper']}
                                >
                                    <img
                                        className={styles['avatherImg']}
                                        src={Profile}
                                        style={{ borderRadius: '50%'  }}
                                        preview={false}
                                    />
                                    {!isMobile && (
                                        <div className={styles['profileNamWrapper']}>
                                            <b>Manager Kim</b><br/>
                                            <span>Loan Management Team</span>
                                        </div>
                                    )}
                                </Col>
                                {isMobile && (
                                    <Col
                                        span={4}
                                    >
                                        <AppstoreOutlined
                                            onClick={showModal}
                                        />
                                    </Col>
                                )}
                                {/* <Col span={5}>
                                    <h6>Manager Kim</h6>
                                    <p>Loan Management Team</p>
                                </Col> */}
                            </Row>
                        </Col>
                        {!isMobile && (
                        <Col 
                            span={10} 
                            offset={4}
                        >
                            <Row>
                                <Col
                                    span={3}
                                >
                                    <Button type="default"size="middle" >
                                        <img src={bell} width={18} />
                                    </Button>
                                </Col>
                                <Col
                                    span={15}
                                >
                                    <Input
                                        placeholder="input search text"
                                        onSearch={value => console.log(value)}
                                        prefix={<SearchOutlined style={{ marginRight: 8 }} />} // Icon positioned on the left
                                    />
                                </Col>
                                <Col
                                    span={3}
                                >
                                    <Button type="default"size="middle" >
                                        <img src={Extr} width={18} />
                                    </Button>
                                </Col><Col
                                    span={3}
                                >
                                    <Button type="default"size="middle" >
                                        <img src={settings} width={18} />
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        )}
                    </Row>
                <Row
                    className={styles['headerMenus']}
                    justify="space-between"
                >
                </Row>
                </Header>
                <Content
                    style={! isMobile ? {
                            padding: '30px',
                            marginTop: '50px',
                            backgroundColor:'white'
                        }: 
                        {
                            padding: '6px',
                            marginTop: '60px',
                            backgroundColor:'white'
                        }
                    }
                >
                <SwitchingComponent 
                    slug={slug} 
                />
                </Content>
            </Layout>
            <Modal 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={false}
            >
               <Row>
                    <Col 
                        span={24} 
                        style={{marginTop:'30px'}}
                    >
                        <Row
                           justify="space-between"
                           className={styles['popupWrapper']}
                           width="100%"
                        >
                            <Col
                                span={12}
                            >
                                <Input
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    prefix={<SearchOutlined style={{ marginRight: 8 }} />} // Icon positioned on the left
                                />
                            </Col>
                            <Col
                                span={2}
                            >
                                <Button type="default"size="middle" >
                                    <img src={Extr} width={18} />
                                </Button>
                            </Col>
                            <Col
                                span={2}
                            >
                                <Button type="default"size="middle" >
                                    <img src={bell} width={18} />
                                </Button>
                            </Col>
                            <Col
                                span={2}
                            >
                                <Button type="default"size="middle" >
                                    <img src={settings} width={18} />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Menu 
                            theme="light" 
                            defaultSelectedKeys={[pathname]} 
                            mode="inline" 
                            items={items}
                            selectedKeys={[pathname]}
                        />
                    </Col>
                </Row>
            </Modal>
        </Layout>
    )
  }

  export default MainLayout