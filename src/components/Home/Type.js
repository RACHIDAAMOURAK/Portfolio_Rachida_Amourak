import React from "react";
import AnimatedText from "react-animated-text-content";

function Type() {
  return (
    <AnimatedText
      type="words"
      animation={{
        x: '200px',
        y: '-20px',
        scale: 1.1,
        ease: 'ease-in-out',
      }}
      interval={0.06}
      duration={0.8}
      tag="span"
      className="Typewriter__wrapper"
      includeWhiteSpaces
      threshold={0.1}
      rootMargin="20%"
      style={{
        color: '#48cae4',
        fontSize: '2.2em',
        fontWeight: 600,
        fontFamily: 'inherit',
        display: 'inline-block',
      }}
    >
      Software engineering student
    </AnimatedText>
  );
}

export default Type;
