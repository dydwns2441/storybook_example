import React from "react";
import styled from "styled-components";

export type logoProps = {
  size: string;
  onClick: () => void;
};

const Logo = (props: logoProps) => {
  return (
    <svg
      width={props.size === "small" ? 150 : props.size === "medium" ? 220 : 280}
      height={props.size === "small" ? 55 : props.size === "medium" ? 80 : 102}
      viewBox="0 0 280 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M118.942 48.811H106.544V31.3616C106.544 25.0272 101.408 19.888 95.0773 19.888C88.7467 19.888 83.6107 25.0272 83.6107 31.3616V48.811H71.2124V31.3616C71.2124 18.1908 81.9146 7.45824 95.1012 7.45824C108.288 7.45824 118.99 18.1669 118.99 31.3616V48.811H118.942Z"
          fill="#5467F5"
        />
        <path
          d="M118.942 48.811H106.544V31.3616C106.544 25.0272 101.408 19.888 95.0773 19.888C88.7467 19.888 83.6107 25.0272 83.6107 31.3616V48.811H71.2124V31.3616C71.2124 18.1908 81.9146 7.45824 95.1012 7.45824C108.288 7.45824 118.99 18.1669 118.99 31.3616V48.811H118.942Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M127.327 0.215179H69.3491V12.621H127.327V0.215179Z"
          fill="#5467F5"
        />
        <path
          d="M50.3814 48.8102H24.271C10.8933 48.8102 0 37.9102 0 24.5244C0 11.1385 10.8933 0.214661 24.271 0.214661H40.7064V12.6205H24.271C17.7254 12.6205 12.3983 17.9509 12.3983 24.5005C12.3983 31.05 17.7254 36.3804 24.271 36.3804H50.3814V48.8102Z"
          fill="#5467F5"
        />
        <path
          d="M52.6508 36.4044H24.271V48.8102H52.6508V36.4044Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M65.0729 12.6449H58.5035C57.8824 12.6449 57.4046 13.1469 57.4046 13.7445H45.0063C45.0063 6.28663 51.0741 0.215179 58.5274 0.215179H65.0968V12.6449H65.0729Z"
          fill="#5467F5"
        />
        <path
          d="M57.4046 13.2661V48.8104H45.0063V13.2661H57.4046Z"
          fill="#5467F5"
        />
        <path
          d="M99.5203 66.5675V88.1044C99.5203 88.7259 100.022 89.204 100.619 89.204V101.61C93.1659 101.61 87.0981 95.5383 87.0981 88.0805V66.5436C87.0981 59.4682 92.5926 53.6836 99.4964 53.1099V66.5675H99.5203Z"
          fill="#5467F5"
        />
        <path
          d="M99.5203 66.5675V88.1044C99.5203 88.7259 100.022 89.204 100.619 89.204V101.275C93.1659 101.275 87.0981 95.5383 87.0981 88.0805V66.5436C87.0981 59.4682 92.5926 53.6836 99.4964 53.1099V66.5675H99.5203Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M100.571 89.2317H122.095C122.716 89.2317 123.194 88.7298 123.194 88.1322H135.592C135.592 95.59 129.525 101.661 122.071 101.661H100.571C93.5004 101.661 87.7432 96.1637 87.146 89.2556H100.571V89.2317Z"
          fill="#5467F5"
        />
        <path
          d="M100.571 89.2317H122.095C122.716 89.2317 123.194 88.7298 123.194 88.1322H134.923C134.923 95.59 129.549 101.661 122.095 101.661H100.571C93.5004 101.661 87.7432 96.1637 87.146 89.2556H100.571V89.2317Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M123.218 88.1557V66.6188C123.218 65.9973 122.716 65.5193 122.119 65.5193V53.1134C129.572 53.1134 135.64 59.1849 135.64 66.6427V88.1796C135.64 95.255 130.146 101.016 123.242 101.613V88.1557H123.218Z"
          fill="#5467F5"
        />
        <path
          d="M123.218 88.1561V66.6192C123.218 65.9977 122.716 65.5197 122.119 65.5197V53.7831C129.572 53.7831 135.64 59.1614 135.64 66.6192V88.1561C135.64 95.2315 130.146 100.992 123.242 101.59V88.1561H123.218Z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M122.141 65.4957H100.617C99.9961 65.4957 99.5184 65.9976 99.5184 66.5952H87.1201C87.1201 59.1374 93.1879 53.0659 100.641 53.0659H122.165C129.236 53.0659 134.993 58.5637 135.59 65.4718H122.141V65.4957Z"
          fill="#5467F5"
        />
        <path
          d="M122.143 65.4957H100.619C99.9982 65.4957 99.5204 65.9976 99.5204 66.5952H87.791C87.791 59.1374 93.166 53.0659 100.619 53.0659H122.143C129.214 53.0659 134.971 58.5637 135.569 65.4718H122.143V65.4957Z"
          fill="url(#paint5_linear)"
        />
        <path
          d="M87.0981 68.4521V66.5638C87.0981 59.4884 92.5926 53.7038 99.4964 53.1301V66.5638"
          fill="#5467F5"
        />
        <path
          d="M127.446 0.310837H69.4683V12.7167H127.446V0.310837Z"
          fill="url(#paint6_linear)"
        />
        <path
          d="M135.617 0.215179H123.218V48.8107H135.617V0.215179Z"
          fill="#5467F5"
        />
        <path
          d="M150.449 39.2249C149.924 39.2249 149.494 38.7946 149.494 38.2449V0.238564C149.494 0.214661 149.47 0.214661 149.47 0.214661H140.464C140.44 0.214661 140.44 0.238564 140.44 0.238564V39.201C140.44 40.8025 140.822 42.3323 141.515 43.647C141.61 43.8382 141.73 44.0295 141.849 44.2207C142.208 44.7944 142.614 45.3442 143.092 45.8222C144.74 47.5194 147.009 48.5711 149.518 48.5711"
          fill="#5467F5"
        />
        <path
          d="M140.418 39.2258H163.972V48.5959H148.23C143.93 48.5959 140.418 44.3889 140.418 39.2258Z"
          fill="#5467F5"
        />
        <path
          d="M153.939 9.58529C154.465 9.58529 154.894 10.0155 154.894 10.5653V48.5716C154.894 48.5955 154.918 48.5955 154.918 48.5955H163.948C163.972 48.5955 163.972 48.5716 163.972 48.5716V9.58529C163.972 7.98376 163.59 6.45395 162.897 5.13927C162.802 4.94804 162.682 4.75681 162.563 4.56559C162.204 3.99191 161.798 3.44213 161.321 2.96406C159.672 1.26693 157.403 0.215179 154.894 0.215179"
          fill="#5467F5"
        />
        <path
          d="M163.996 9.58477H140.442V0.214661H156.185C160.485 0.214661 163.996 4.39775 163.996 9.58477Z"
          fill="#5467F5"
        />
        <path
          d="M201.454 39.2254C200.928 39.2254 200.498 38.7952 200.498 38.2454V0.239083C200.498 0.215179 200.474 0.215179 200.474 0.215179H191.444C191.42 0.215179 191.42 0.239083 191.42 0.239083V39.2015C191.42 40.803 191.803 42.3329 192.495 43.6475C192.591 43.8388 192.71 44.03 192.83 44.2212C193.188 44.7949 193.594 45.3447 194.072 45.8227C195.72 47.5199 197.99 48.5716 200.498 48.5716"
          fill="#5467F5"
        />
        <path
          d="M191.42 39.2258H220.063V48.5959H199.232C194.908 48.5959 191.42 44.3889 191.42 39.2258Z"
          fill="#5467F5"
        />
        <path
          d="M262.035 48.5719H252.886V17.5215C252.886 15.9199 251.596 14.6292 249.995 14.6292C248.395 14.6292 247.105 15.9199 247.105 17.5215V48.5719H237.956V17.5215C237.956 10.8763 243.354 5.47418 249.995 5.47418C256.637 5.47418 262.035 10.8763 262.035 17.5215V48.5719Z"
          fill="#5467F5"
        />
        <path d="M264.998 0H236.355V9.15498H264.998V0Z" fill="#5467F5" />
        <path
          d="M231.554 0.215179H222.404V48.5955H231.554V0.215179Z"
          fill="#5467F5"
        />
        <path
          d="M181.148 22.2062H176.323C175.869 22.2062 175.51 22.5647 175.51 23.0189H166.433C166.433 17.5689 170.876 13.1229 176.323 13.1229H181.148V22.2062Z"
          fill="#5467F5"
        />
        <path
          d="M175.51 0.238846V48.5714H166.433V0.238846H175.51Z"
          fill="#5467F5"
        />
        <path
          d="M187.073 0.215179H177.923V48.5955H187.073V0.215179Z"
          fill="#5467F5"
        />
        <path
          d="M264.257 13.1466H270.086C275.533 13.1466 279.976 17.5926 279.976 23.0426H270.898C270.898 22.5884 270.54 22.2298 270.086 22.2298H264.257V13.1466Z"
          fill="#5467F5"
        />
        <path d="M280 0.238846V48.5714H270.922V0.238846H280Z" fill="#5467F5" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="95.0522"
          y1="48.812"
          x2="95.0522"
          y2="7.47975"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.612" stop-opacity="0" />
          <stop offset="0.9558" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="24.2827"
          y1="42.6027"
          x2="52.6558"
          y2="42.6027"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1996" stop-opacity="0" />
          <stop offset="0.92" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="93.8577"
          y1="53.1286"
          x2="93.8577"
          y2="101.294"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4454" stop-opacity="0" />
          <stop offset="0.863" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="87.1508"
          y1="94.8739"
          x2="134.939"
          y2="94.8739"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4454" stop-opacity="0" />
          <stop offset="0.863" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="128.858"
          y1="101.589"
          x2="128.858"
          y2="53.7681"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4454" stop-opacity="0" />
          <stop offset="0.863" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="135.569"
          y1="59.8525"
          x2="87.7769"
          y2="59.8525"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4454" stop-opacity="0" />
          <stop offset="0.863" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="69.4738"
          y1="6.5226"
          x2="127.455"
          y2="6.5226"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.561" stop-opacity="0" />
          <stop offset="1" stop-opacity="0.2" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="280" height="101.637" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
