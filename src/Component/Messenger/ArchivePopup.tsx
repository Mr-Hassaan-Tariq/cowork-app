import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Featured from '../../Assets/Images/icon/Featured icon.png'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}> Archive Message</button>

      <Modal show={show} onHide={handleClose} className='archiveModal'>
        <div className='text-center py-5'>
          <img src={Featured} />
          <h4 className='my-2'>Are you sure you want to archive this message?</h4>
          <p>Messages that you archive can be restored in this menu</p>
          <div>
            <button className='mx-4 cancleBtn' onClick={handleClose}>No</button>
            <button className='mx-4' onClick={handleClose}>Yes, Archive</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Example;