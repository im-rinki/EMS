import React, { useState, useEffect } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    width: "60%",
    marginLeft: "15%",
    // textAlign:"center",
    overflow: "auto",
    zIndex: 1000,
    height: "60%",
  },
  overlay: {
    backgroundColor: "black",
    opacity: "1",
    zIndex: 9,
  },
};

export const MapModal = (props) => {
  function onModalClose(event) {
    props.onCloseModal(event);
  }

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened}
        style={customStyles}
        ariaHideApp={false}
      >
        <button
          onClick={(e) => onModalClose(e)}
          className="form-control"
          style={{
            backgroundColor: "#056C45",
            fontSize: "15px",
            color: "white",
            float: "right",
            width: "10%",
          }}
        >
          close
        </button>
        <h6>1. Your acceptance of these Terms</h6>
        <p>
          1.1 By using, visiting, accessing and/or registering with The
          Register’s application (“application”) (including all content available
          through this application), you have read, understood and agree to be bound
          by these Terms and the terms and conditions of our privacy policy
          which can be found here and which are incorporated in these Terms by
          reference. If you do not agree to be bound by these Terms (as amended
          from time to time), then please do not use this application. 1.2 We
          reserve the right to change, modify, add or delete parts of these
          Terms at any time and without further notice. Such amendments shall be
          effective upon posting the revised Terms on the application. 1.3 These
          Terms are binding on Members and on non-Members who access and use the
          application (“Users”){" "}
        </p>
        <h6>2. Access and Use of this application</h6>
        <p>
          We hereby grant you permission to use the application in accordance with
          these Terms, provided that (a) you use the application solely for your
          personal, non-commercial use (b) you will not copy or distribute any
          part of the application without our prior written authorisation (c) you
          will not alter, modify, edit or otherwise change any part of the
          application other than as may be reasonably necessary to use the application
          for its intended purpose and (d) that you will comply with these
          Terms.
        </p>
        <h6>3. Registration and account security</h6>
        <p>
          3.1 To post comments on articles published on the application and to
          receive email subscriptions, you will need to create an account,
          registering as a Member. You are not allowed to use another Member’s
          account unless you have his or her permission to do so. 3.2 You are
          solely responsible and liable for any activity occurring on your
          account, and you must keep your account password secret. You must
          inform us immediately of any breach of security or unauthorised use of
          your account by emailing us at webmaster@theregister.co.uk. We will
          investigate any security breaches and we have the right to suspend or
          terminate the account immediately. We will not be liable for any
          losses caused by the unauthorised use of your account, but you may be
          liable for our or other users’ losses caused by such unauthorised use.
        </p>
        <h6>4. Newsletter Subscription Emails</h6>
        <p>
          4.1 When you register an account with us, you will be asked whether
          you would like to receive different newsletter email subscriptions. If
          you do not want to receive such email subscriptions, please do not
          check any of the boxes.
        </p>
        <h6>5.Your obligations</h6>
        <p>
          5.1 You agree not to use the application for any illegal purposes and
          agree to use it in accordance with all the relevant laws. 5.2 You
          agree not to upload, post on or transmit through the application any
          computer viruses, macro viruses, Trojan horses, worms or anything else
          designed to interfere with, interrupt or disrupt the normal operating
          procedures of a computer.
        </p>
        {/* {props.data.map((item)=>{
          return(
            <p>{item}</p>
            )
        })} */}
      </Modal>
    </div>
  );
};
