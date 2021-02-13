import React from 'react';
import styled from 'styled-components';

const JeanmileLogo = (
  <svg
    width="127px"
    height="35px"
    viewBox="0 0 127 35"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path
      d="M120.496 26c.264 0 .48-.09.648-.27a.894.894 0 00.252-.63v-4.752a.94.94 0 00-.252-.666.847.847 0 00-.648-.27h-4.752a.905.905 0 00-.666.27.905.905 0 00-.27.666V25.1c0 .264.09.48.27.648a.94.94 0 00.666.252h4.752z"
      fill="#ff4c60"
      fillRule="nonzero"
    />
    <text x={2.847} y={25.569} fontFamily="Pridi" fontWeight={600} fontSize={26} fill="#fff">
      Jeanmile
    </text>
  </svg>
);

const LogoWrapper = styled.div`
  display: inline-block;
  padding-left: 10px;
  cursor: pointer;
`;

function Logo({ bootstrapNav }) {
  if (bootstrapNav) {
    return (
      // <Link className="navbar-brand" to="/">
      <img src={LogoSrc} alt="Jeanmile" />
      // </Link>
    );
  }

  return <LogoWrapper>{JeanmileLogo}</LogoWrapper>;
}

export default Logo;
