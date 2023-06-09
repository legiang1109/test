import React from 'react';

const InfoMessage = ({ countdownInfoMessage }) => {

  return <p className="message info-message"><span className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></span> {countdownInfoMessage}</p>;
}

export default InfoMessage;