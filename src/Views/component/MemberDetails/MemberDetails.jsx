import Layout from "antd/es/layout/layout";
import React, { useEffect,useState } from "react";
import styles from './MemberDetails.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Scrollbars } from 'react-custom-scrollbars';
import { useLocation } from 'react-router-dom';
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
import { useCallback } from "react";
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
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
const MemberDetails = ()=> {
    const memberDetails = useLocation();
    const searchParams = new URLSearchParams(memberDetails.search);
    const currentData = searchParams.get('id');
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const { state } = useLocation();
    const [details,steDetails] = useState(state)
    useEffect(() => {
       steDetails(state)
    }, [state]);
    return(
        <Layout
            className={styles['memberDetailsWrapper']}
        >
            
            <Row>
                <Typography.Title
                    level={5}
                >
                    Member details 
                </Typography.Title>
            </Row>
            <Row
                justify="space-between"
                style={{width:'100%'}}
            >
                <Col
                   span={!isMobile?2:24}
                >
                    <Row>
                        <Typography.Title
                            level={5}
                            style={{marginTop:'20px'}}
                        >
                        Profile
                        </Typography.Title>
                    </Row>
                </Col>
                <Col
                    span={!isMobile?13:24}
                    offset={!isMobile?9:0}
                >
                    <Button type="primary">Withdrawal</Button>
                    <Button type="primary">Blacklist registration</Button>
                    <Button type="primary">Issuance of temporary password</Button>
                </Col>
            </Row>
            <Row
                className={styles['tableWrapper']}
            >
                <Col
                    span={6}
                    className={styles['wraperC']}
                >
                    <Row
                        className={styles['r1']}
                    >
                        <p>Membership number</p>
                    </Row>
                    <Row
                        className={styles['r2']}
                    >
                        <Col
                            className={styles['c1']}
                            span={12}
                        >
                            <p level={5}>investment member</p>
                        </Col>
                        <Col
                            className={styles['c2']}
                            span={12}
                        >
                            <Row
                               className={styles['r3']}
                            >
                                <p level={5}>Category</p>
                            </Row>
                            <Row
                                className={styles['r4']}
                            >
                                <p level={5}>GUID</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row
                        className={styles['r2']}
                    >
                        <Col
                            className={styles['c1']}
                            span={12}
                        >
                            <p level={5}>loan member</p>
                        </Col>
                        <Col
                            className={styles['c2']}
                            span={12}
                        >
                            <Row
                               className={styles['r3']}
                            >
                                <p level={5}>Category</p>
                            </Row>
                            <Row
                                className={styles['r4']}
                            >
                                <p level={5}>GUID</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Category</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>dormant state</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Blacklist status</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Member name</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>birth date</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>gender</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>email id</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>phone number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>address</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>job</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Withdrawal account</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>deposit account</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Repayment-only account</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Consent to receive marketing</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Agree to terms and conditions</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Registration date and time</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Memo</p>
                    </Row>
                    
                </Col>
                <Col
                    span={18}
                >
                    <Row
                        className={styles['r11']}
                    >
                        <p level={5}>{`Abc${currentData}`}</p>
                    </Row>
                    <Row
                        className={styles['r12']}
                    >
                        <p level={5}>general individual</p>
                    </Row>
                    <Row
                        className={styles['r13']}
                    >
                        <p level={5}>qwerasdf1324</p>
                    </Row>
                    <Row
                        className={styles['r14']}
                    >
                         <p level={5}>individual</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Approval denied <Button type="primary">Check the reson</Button></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Dormant (2023-01-01 09:00:00)  <Button type="primary">Wake Up</Button></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>blacklist <Button type="primary">Check the reson</Button> <Button type="primary">Remove blacklist</Button></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Kim Gil-dong <Button type="primary">Check change history</Button></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>1988-01-02</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>man</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>gildongkim@naver.com</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>010-1234-5678</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}><Input value="02-1234-5678"/></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}><Button disabled>(01234) 서울특별시 강동구 천호대로 12길</Button><Button type="primary">Adderss Search</Button><Input style={{width:'29%'}} value="상세주소" /></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Office workers</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Shinhan Bank 123-45-678-90</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Jeonbuk Bank 012-33-22221</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}><Button type="primary">Learn more</Button></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <p level={5}>   
                            <CheckboxGroup 
                                options={[
                                    'email', 
                                    'Message', 
                                ]} 
                                defaultValue="email"
                            />
                            <Button type="primary">Check consent history</Button>
                        </p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}><TextArea  rows={2} Col={10} value="
                                악성민원으로 전화상담 시 주의 필요
                                1금융 대출 1건/연체없음
                                이내 소유 아파트로 대출 문의
                                1순위 하나은행 10억 대출 중
                                대출금리 15%로 협의중"/>
                        </p>
                    </Row>
                </Col>
            </Row>
            
            <Row>
                <Typography.Title
                    level={5}
                    style={{marginTop:'40px'}}
                >
                   Memo
                </Typography.Title>
            </Row>
            <Row
                className={styles['tableWrapper2']}
            >
                <Col
                    span={6}
                    className={styles['wraperC']}    
                >
                      <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Corporation name</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Company Registration Number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Business phone number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Business address</p>
                    </Row>
                </Col>
                <Col
                    span={18}
                >
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Ganada Corporation</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>ABC1111-222-333323</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}><Input value="111-222-3333" /></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}><Button type="primary">Learn more</Button><Button disabled>(01234) 서울특별시 강동구 천호대로 12길</Button><Input style={{width:'29%'}} value="상세주소" /></p>
                    </Row>
                </Col>
            </Row>



            <Row>
                <Typography.Title
                    level={5}
                    style={{marginTop:'40px'}}
                >
                   Save history
                </Typography.Title>
            </Row>
            <Row
                className={styles['tableWrapper3']}
            >
                <Col
                    span={6}
                    className={styles['wraperC']}    
                >
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Last saved date</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p level={5}>Manager</p>
                    </Row>
                </Col>
                <Col
                    span={18}
                >
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>2022-01-01 09:00:00</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p level={5}>Manager Kim</p>
                    </Row>
                </Col>
            </Row>
            <Row
                justify="space-between"
                style={{width:'100%',marginTop:'20px'}}
            >
                
                <Col
                    span={13}
                    offset={11}
                >
                    <Button type="default" >Cansel</Button>
                    <Button type="primary">Save</Button>
                </Col>
            </Row>
        </Layout>
    )
}

export default MemberDetails