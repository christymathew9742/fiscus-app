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
            
            <Row
                style={{borderBottom:'1px solid rgb(236 226 226)',marginBottom:'20px'}}
            >
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
                    className={styles['profileButtons']}
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
                    {!isMobile &&  (
                    <Row
                        className={styles['r2']}
                    >
                        <Col
                            className={styles['c1']}
                            span={12}
                        >
                            <p >Investment member</p>
                        </Col>
                        <Col
                            className={styles['c2']}
                            span={12}
                        >
                            <Row
                               className={styles['r3']}
                            >
                                <p >Category</p>
                            </Row>
                            <Row
                                className={styles['r4']}
                            >
                                <p >GUID</p>
                            </Row>
                        </Col>
                    </Row>
                    )}
                    {isMobile && (
                    <>
                    <Row
                        className={styles['r1']}
                    >
                        <p>Category</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p>GUID</p>
                    </Row>
                    </>
                    )}
                    {!isMobile &&  (
                    <Row
                        className={styles['r2']}
                    >
                        <Col
                            className={styles['c1']}
                            span={12}
                        >
                            <p >Loan member</p>
                        </Col>
                        <Col
                            className={styles['c2']}
                            span={12}
                        >
                            <Row
                               className={styles['r3']}
                            >
                                <p >Category</p>
                            </Row>
                            <Row
                                className={styles['r4']}
                            >
                                <p >GUID</p>
                            </Row>
                        </Col>
                    </Row>
                    )}
                    {isMobile && (
                    <>
                    <Row
                        className={styles['r1']}
                    >
                        <p>Category</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p>GUID</p>
                    </Row>
                    </>
                    )}
                    <Row
                        className={styles['r1']}
                    >
                        <p >Category</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Dormant state</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Blacklist status</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Member name</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Birth date</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Gender</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Email id</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Phone number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Phone number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Address</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Job</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Withdrawal account</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >deposit account</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Repayment-only account</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Consent to receive marketing</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Agree to terms and conditions</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Registration date and time</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Memo</p>
                    </Row>
                    
                </Col>
                <Col
                    span={18}
                >
                    <Row
                        className={styles['r11']}
                    >
                        <p >{`Abc12${currentData}`}</p>
                    </Row>
                    <Row
                        className={!isMobile?styles['r12']:styles['r11']}
                    >
                        <p >General individual</p>
                    </Row>
                    <Row
                        className={!isMobile?styles['r13']:styles['r11']}
                    >
                        <p >Qwerasdf1324</p>
                    </Row>
                    <Row
                        className={!isMobile?styles['r14']:styles['r11']}
                    >
                         <p >Individual</p>
                    </Row>
                    <Row
                        className={!isMobile?styles['r14']:styles['r11']}
                    >
                         <p >Zxcasdqwe1234</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Approval denied</p> <Button type="primary">Check the reson</Button>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <p >Dormant (2023-01-01 09:00:00) </p><Button type="primary">Wake Up</Button>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Blacklist</p>  <Button type="primary">Check the reson</Button> {!isMobile && (<Button type="primary">Remove blacklist</Button>)}
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <p >Kim Gil-dong</p>  <Button type="primary">Check change history</Button>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >1988-01-02</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Man</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Gildongkim@naver.com</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >010-1234-5678</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p ><Input value="02-1234-5678"/></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <Button type="primary">Adderss Search</Button>{!isMobile && (<Button disabled>(01234) 서울특별시 강동구 천호대로 12길</Button> )}<Input style={{width:'29%',marginLeft:'23px'}} value="상세주소" />
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Office workers</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Shinhan Bank 123-45-678-90</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Jeonbuk Bank 012-33-22221</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <Button type="primary">Learn more</Button>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <p >   
                            <CheckboxGroup 
                                options={[
                                    'email', 
                                    'Message', 
                                ]} 
                                defaultValue="email"
                            />
                            {!isMobile &&(<Button type="primary">Check consent history</Button>)}
                        </p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <p >Agree to all terms and conditions</p>  <Button type="primary">Check consent history</Button>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <p > 2022-01-01 09:00:00</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                        <TextArea  rows={2} Col={10} value="
                            악성민원으로 전화상담 시 주의 필요
                            1금융 대출 1건/연체없음
                            이내 소유 아파트로 대출 문의
                            1순위 하나은행 10억 대출 중
                            대출금리 15%로 협의중"
                        />
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
                        <p >Corporation name</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Company Registration Number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Business phone number</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Business address</p>
                    </Row>
                </Col>
                <Col
                    span={18}
                >
                    <Row
                        className={styles['r15']}
                    >
                         <p >Ganada Corporation</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >ABC1111-222-333323</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p ><Input value="111-222-3333" /></p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                       <Button type="primary">Learn more</Button>{!isMobile && (<Button disabled>(01234) 서울특별시 강동구 천호대로 12길</Button>)}<Input style={{width:'29%',marginLeft:'23px'}} value="상세주소" />
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
                        <p >Last saved date</p>
                    </Row>
                    <Row
                        className={styles['r1']}
                    >
                        <p >Manager</p>
                    </Row>
                </Col>
                <Col
                    span={18}
                >
                    <Row
                        className={styles['r15']}
                    >
                         <p >2022-01-01 09:00:00</p>
                    </Row>
                    <Row
                        className={styles['r15']}
                    >
                         <p >Manager Kim</p>
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