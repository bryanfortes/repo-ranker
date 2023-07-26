import PropTypes from "prop-types";
import React, { Component } from "react";

const styles = {
  fontSize: "14px",
  position: "absolute",
  left: "0",
  right: "0",
  marginTop: "20px",
  textAlign: "center",
};

function Delayed({ children, wait = 300 }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true);
    }, wait);
    return () => window.clearTimeout(id);
  }, [children, wait]);

  return show === true ? children : null;
}

Delayed.propTypes = {
  children: PropTypes.node.isRequired,
  wait: PropTypes.number,
};

export default function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <Delayed>
      <p style={styles}>{content}</p>
    </Delayed>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
