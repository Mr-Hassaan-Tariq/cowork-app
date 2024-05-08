import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Col, Container, Dropdown, Modal, Row } from 'react-bootstrap';
// import "./AddMember.css";
import { v4 as uuidv4 } from 'uuid';
import memberIcon from "../../Assets/Images/icon/Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import profileLogo from "../../Assets/Images/icon/Avatar1.png"
import pexels from "../../Assets/Images/icon/pexels.png"
import deleteIcon from "../../Assets/Images/icon/deleteIcon.png"

interface MemberInfo {
    handleClose: () => void;
    show: boolean;
    setShow: (type: boolean) => void;
}


const MemberInfo = ({ show, setShow, handleClose }: MemberInfo) => {
    const [showDel, setShowDel] = useState(false);

    const closeDel = () => setShowDel(false);
    const ShowDel = () => setShowDel(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered >
                <ToastContainer />

                <div className="memberForm">
                    <button className='closeModal' onClick={handleClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className='memberHeading'>
                                    <img src={memberIcon} alt="member" style={{ width: "20px" }} />
                                    <p>Member Info</p>
                                </div>
                                <img src={profileLogo} style={{ width: '70px' }} />
                            </Col>
                            <Col md={12} className='memberInfo my-3'>
                                <div className='d-flex justify-content-between'>
                                    <h6>Wade Warren</h6>
                                    <p>robertfox@gmail.com</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p style={{ fontWeight: 'bold' }}>Member</p>
                                    <p>(208) 555-0112</p>
                                </div>
                            </Col>
                            <Col md={12} style={{ borderBottom: '1px solid #E5E7EB' }}>
                                <div className='d-flex justify-content-between'>
                                    <h6>File</h6>
                                    <p>5</p>
                                </div>
                                <div className='fileImg'>
                                    <img src={pexels} />
                                    <img src={pexels} />
                                    <img src={pexels} />
                                    <img src={pexels} />
                                    <img src={pexels} />
                                </div>
                            </Col>
                            <div className='d-flex justify-content-end mt-3'>
                                <button className='delBtn' onClick={ShowDel}>Delete Message</button>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Modal>

            <Modal show={showDel} onHide={closeDel} className='archiveModal'>
                <div className='text-center py-5'>
                    <img src={deleteIcon} />
                    <h4 className='my-2'>Are you want to delete this message?</h4>
                    <p className='my-4'>Deleted message cannot be recovered</p>
                    <div>
                        <button className='mx-4 cancleBtn' onClick={closeDel}>No</button>
                        <button className='mx-4 deleteMessage' onClick={closeDel}>Yes, Delete</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MemberInfo;