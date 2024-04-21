import Layout from "antd/es/layout/layout";
import React from "react";
import styles from './memberShip.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Scrollbars } from 'react-custom-scrollbars';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
    Col, 
    Form, 
    Radio, 
    Row, 
    Typography ,
    DatePicker,
    Select,
    Search,
    Input,
    Button,
    Checkbox,
    Table,
    Pagination,
    Tooltip,

} from "antd";
import { constantsText } from "../../../Constant/constant";
import { useState } from "react";
import { useCallback } from "react";
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
const {
    ROUTES,
    DATA:{
        MemberMainTitle,
    },
    FORM:{
        JoinDate,
        DormantState,
        BlacklistStatus,
        InvestorType,
        LoanType,
        LoanAvailability,
        InvestmentTypeSpprova,
        InvestmentLoanStatus,
        Searchs,
    }
} = constantsText;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

const MemberShipManage = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm()
    const [JoinDatevalue, setJoinDatevalue] = useState('entry');
    const membershipFormHandiler = useCallback(
        (values) => {
           console.log(values)
        }, [form]
    );
    const joinDateOnchainge = ({ target: { value } }) => {
        console.log('checked', value);
        setJoinDatevalue(value);
    };
    const joinDateOptions = [
        {
          label: 'Entry',
          value: 'entry',
        },
        {
          label: 'Today',
          value: 'today',
        },
        {
          label: 'Yesterday',
          value: 'yesterday',
        },
        {
            label: '1Week',
            value: '1week',
        },
        {
            label: '1Month',
            value: '1month',
        },
        {
            label: '3Month',
            value: '3month',
        }
    ];
    const onOk = (value) => {
        console.log('onOk: ', value);
    };
    const onChangeRadioGroup = (e) => {
        console.log('radio checked', e.target.value);
    };

    const columns = [
        {
          title: <Tooltip title="NO">NO</Tooltip>,
          dataIndex: 'no',
          align: 'center',
        },
        {
          title:  <Tooltip title="Membership number">Membership number</Tooltip>,
          dataIndex: 'Membershipnumber',
          align: 'center',
        },
        {
          title: <Tooltip title="Phone Number">Phone Number</Tooltip>,
          dataIndex: 'number',
          align: 'center',
        },
        {
            title:<Tooltip title="Email ID">Email ID</Tooltip>,
            dataIndex:'EmailID',
            align: 'center',
        },
        {
            title:<Tooltip title="Division	category">Division category</Tooltip>,
            dataIndex:'divisionCategory',
            align: 'center',
        },
        {
            title:<Tooltip title="GUID">GUID</Tooltip>,
            dataIndex:'GUID',
            align: 'center',
        },
        {
            title:<Tooltip title="Number of investments/loans">Number of investments/loans</Tooltip>,
            dataIndex:'investments',
            align: 'center',
        },
        {
            title:<Tooltip title="Number of repayments">Number of repayments</Tooltip>,
            dataIndex:'repayments',
            align: 'center',
        },
        {
            title:<Tooltip title="Number of delinquencies">Number of delinquencies</Tooltip>,
            dataIndex:'delinquencies',
            align: 'center',
        },
        {
            title:<Tooltip title="Investment type approval">Investment type approval</Tooltip>,
            dataIndex:'approval',
            align: 'center',
        },
        {
            title:<Tooltip title="dormant state">dormant state</Tooltip>,
            dataIndex:'state',
            align: 'center',
        },
        {
            title:<Tooltip title="Blacklist status">Blacklist status</Tooltip>,
            dataIndex:'status',
            align: 'center',
        },
        {
            title: <Tooltip title="Registration date and time">Registration date and time</Tooltip>,
            dataIndex:'registration',
            align: 'center',
        },
    ];
  
    const dataSource = [];
    for (let i = 1; i < 9; i++) {
        dataSource.push({
            key: i,
            no: `${i}`,
            Membershipnumber: (<a  onClick={() => 
                navigate('/member-details',{ state: { data: i} },
            )}  href="#" style={{color:'rgba(0, 0, 0, 0.88)',textDecoration: 'underline'}}>{`Abc12${i}`}</a>),
            number: `010-1234-567${i}`,
            EmailID:`aaaaaaaa${i}c@naver.com`,
            divisionCategory:`Invest individual`,
            GUID:`U1JtXgAj5Q72Wn${i}`,
            investments:`${i} cases`,
            repayments:`${i} case`,
            delinquencies:`1 case`,
            approval:(<span className='aprovl'>Approved</span>),
            state:`normal`,
            status:`normal`,
            registration:`2023-${i}-10 09:00:00`,
        });
    }
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };
      
    const CustomPagination = ({ total, onChange }) => (
        <Pagination
          total={total}
          onChange={onChange}
          prevIcon={<LeftOutlined style={{ fontSize: '16px' }} />} // Custom left arrow icon
          nextIcon={<RightOutlined style={{ fontSize: '16px' }} />} // Custom right arrow icon
        />
    );

    const onChange = (page, pageSize) => {
        console.log('Page:', page, 'PageSize:', pageSize);
        // Perform actions when pagination changes
    };
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <Layout className={styles['memberShipWrapper']}>
            <Row>
                <Typography.Title
                    level={5}
                >
                    {MemberMainTitle}
                </Typography.Title>
            </Row>
            <Row
                justify="space-between"
                className={styles['MemberShipStatus']}
            >
                <Col
                    span={isMobile? 12 : 6}
                >
                    <Typography.Title
                        level={5}
                    >
                        entire
                    </Typography.Title>
                    <b>100</b>
                    <span>number of people</span>
                </Col>
                <Col
                    span={isMobile? 12 : 6}
                >
                    <Typography.Title
                        level={5}
                    >
                        Waiting for approval
                    </Typography.Title>
                    <b>10</b>
                    <span>number of people</span>
                </Col>
                <Col
                    span={isMobile? 12 : 6}
                >
                    <Typography.Title
                        level={5}
                    >
                        Approved
                    </Typography.Title>
                    <b>80</b>
                    <span>number of people</span>
                </Col>
                <Col
                    span={isMobile? 12 : 6}
                >
                    <Typography.Title
                        level={5}
                    >
                        Approval denied
                    </Typography.Title>
                    <b>10</b>
                    <span>number of people</span>
                </Col>
            </Row>
            <Row
                className={styles['joinSection']}
                style={{width:'100%'}}
            >
                <Form
                    form={form}
                    layout={!isMobile? 'inline' : 'vertical'}
                    name="basic"
                    className={styles['form']}
                    id="saveData"
                    onFinish={(values) => membershipFormHandiler(values)}
                >
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col
                            span={!isMobile? 16 :24}
                        >
                            <Form.Item
                                label={JoinDate.Label}
                                name={JoinDate.Name}
                            >
                                <Radio.Group
                                    options={joinDateOptions}
                                    onChange={joinDateOnchainge}
                                    value={JoinDatevalue}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </Form.Item>
                        </Col>
                        <Col
                            span={!isMobile? 8:20}
                        >
                            <Form.Item
                                name={JoinDate.dateName}
                            >
                                <RangePicker
                                    showTime={{
                                        format: 'HH:mm',
                                    }}
                                    format="YYYY-MM-DD HH:mm"
                                    onChange={(value, dateString) => {
                                        console.log('Selected Time: ', value);
                                        console.log('Formatted Selected Time: ', dateString);
                                    }}
                                    onOk={onOk}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col
                             span={12}
                        >
                            <Form.Item
                                label={DormantState.Label}
                                name={DormantState.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'Norma', 
                                        'Dormancy'
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                        <Col
                            span={12}
                        >
                            <Form.Item
                                label={BlacklistStatus.Label}
                                name={BlacklistStatus.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'Norma', 
                                        'Blacklist'
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col>
                            <Form.Item
                                label={InvestorType.Label}
                                name={InvestorType.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'General individua', 
                                        'Income eligibility',
                                        'Personal expertise',
                                        'Corporation',
                                        'Credit finance'
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col >
                            <Form.Item
                                label={LoanType.Label}
                                name={LoanType.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'Individual', 
                                        'Sole proprietor',
                                        'Personal expertise',
                                        'Corporation',
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col>
                            <Form.Item
                                label={LoanAvailability.Label}
                                name={LoanAvailability.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'On loan', 
                                        "Doesn't exist",
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col>
                            <Form.Item
                                label={InvestmentTypeSpprova.Label}
                                name={InvestmentTypeSpprova.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'Waiting for approva', 
                                        "Approved",
                                        'Approval denied',
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        justify="space-between"
                        className= {styles['inputradioSection']}
                    >
                        <Col>
                            <Form.Item
                                label={InvestmentLoanStatus.Label}
                                name={InvestmentLoanStatus.Name}
                            >
                                <CheckboxGroup 
                                    options={[
                                        'Entry', 
                                        'Repaying', 
                                        "Early repayment completed",
                                        'Maturity repayment completed',
                                        //'Reconciliation','Loss of term profit',
                                        //'Expected loss of profit due','Overdue','Repayment completed'
                                    ]} 
                                    defaultValue="Entry"
                                />
                            </Form.Item>
                        </Col>
                    </Row> 
                    <Row
                        className= {styles['inputradioSection']}
                        justify="space-between"
                    >
                        <Col
                            span={!isMobile? 5 :24}
                        >
                            <Form.Item
                                label={Searchs.Label}
                                name={Searchs.Name}
                            >
                                <Select
                                    placeholder="select"
                                    style={{
                                    flex: 1,
                                    }}
                                    options={[
                                    {
                                        value: 'Member Ship',
                                        label: 'Member Ship',
                                    },
                                    {
                                        value: 'Phone Number',
                                        label: 'Phone Number',
                                    },
                                    {
                                        value: 'EmailId',
                                        label: 'EmailId',
                                    },
                                    {
                                        value: 'GUID',
                                        label: 'GUID',
                                    },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col
                            span={!isMobile? 13 :11}
                        >
                            <Form.Item
                                name={Searchs.Name}
                            >
                                <Input placeholder="Please enter your search item"/>
                            </Form.Item>
                        </Col>
                        <Col
                            span={!isMobile? 3:6}
                        >
                            <Form.Item
                                name={Searchs.Name}
                            >
                                <Button type="primary">Search</Button>
                            </Form.Item>
                        </Col>
                        <Col
                            span={!isMobile? 3:6}
                        >
                        <Form.Item
                                name={Searchs.Name}
                            >
                                <Button type="default">Reset</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Row
                className={styles['tableWrapper']}
            >
                <Row
                     className= {styles['tableSection']}
                >
                    <Col
                        span={!isMobile?10:24}
                    >
                        <Typography.Paragraph
                            level={5}
                            className={styles['tableSectionTitle']}
                        >
                            <strong>Member List</strong> (Total <b>100</b> people | 10 waiting for approval )
                        </Typography.Paragraph>
                    </Col>
                    <Col
                        offset={!isMobile?4:0}
                        span={!isMobile?10:24}
                    >
                        <Row
                            className={styles['tablesearch1']}
                            justify="space-between"
                        >
                            <Col
                                span={!isMobile?8:24}
                            >
                                <Form.Item
                                    name={Searchs.Name}
                                >
                                    <Select
                                        placeholder="select"
                                        style={{
                                        flex: 1,
                                        }}
                                        options={[
                                            {
                                                value: 'Sort by date of registration',
                                                label: 'Sort by date of registration',
                                            },
                                            {
                                                value: 'Member name/corporation name',
                                                label: 'Member name/corporation name',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col
                                span={!isMobile?8:12}
                            >
                                <Form.Item
                                    name={Searchs.Name}
                                >
                                    <Select
                                        placeholder="select"
                                        style={{
                                        flex: 1,
                                        }}
                                        options={[
                                            {
                                                value: 'View 50 each',
                                                label: 'View 50 each',
                                            },
                                            {
                                                value: 'View 100 at a time',
                                                label: 'View 100 at a time',
                                            },
                                            {
                                                value: 'View 200 each',
                                                label: 'View 200 each',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col
                                span={!isMobile?7:11}
                            >
                                <Form.Item
                                    name={Searchs.Name}
                                >
                                   <Button  disabled>Excel download</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row
                     className= {styles['tableHeaderwrapper']}
                >
                    <Col
                        offset={!isMobile?14:0}
                        span={!isMobile?10:24}
                    >
                        <Row
                            className={styles['tableBtnWrapper']}
                            justify="space-between"
                        >
                            <Col
                                span={!isMobile?8:12}
                            >
                                <Form.Item
                                    name={Searchs.Name}
                                >
                                   <Typography.Paragraph>
                                        0 members selected
                                    </Typography.Paragraph>
                                </Form.Item>
                            </Col>
                            <Col
                                span={12}
                            >
                                <Form.Item
                                    name={Searchs.Name}
                                >
                                    <Select
                                        placeholder="select"
                                        style={{
                                        flex: 1,
                                        }}
                                        options={[
                                            {
                                                value: 'approver',
                                                label: 'Approved',
                                            },
                                            {
                                                value: 'Approval denied',
                                                label: 'Approval denied',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col
                                span={!isMobile?4:24}
                            >
                                <Form.Item
                                    name={Searchs.Name}
                                >
                                   <Button form="saveData" htmlType="submit" type="primary">Save</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row
                    className={styles['table']}
                >
                    <Col
                        span={24}
                    >
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            rowSelection={rowSelection}
                            scroll={{ x: true }}
                            showSorterTooltip
                            rowClassName={(record, index) => index % 2 === 0 ? 'even-row' : 'odd-row'}
                        />
                    </Col>
                </Row>
            </Row>
        </Layout>
    )
}

export default MemberShipManage;