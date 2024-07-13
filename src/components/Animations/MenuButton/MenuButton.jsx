import "./MenuButtons.css";

function MenuButton() {
  return (
    <button className="menu-toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 -14 48 48"
        fill="none"
        className="menu-icon"
      >
        <g>
          <rect
            className="rect1"
            x={17}
            width={31}
            height={3}
            fill="#FFFFFF"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
              width: 31,
            }}
            data-svg-origin="17 0"
            transform="matrix(1,0,0,1,0,0)"
          />
          <rect
            className="rect2"
            x={17}
            y={18}
            width={31}
            height={3}
            fill="#FFFFFF"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
              width: 31,
            }}
            data-svg-origin="17 18"
            transform="matrix(1,0,0,1,0,0)"
          />
          <rect
            className="rect3"
            y={9}
            width={48}
            height={3}
            fill="#FFFFFF"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
              width: 48,
            }}
            data-svg-origin="0 9"
            transform="matrix(1,0,0,1,0,0)"
          />
        </g>
      </svg>
    </button>
  );
}

export default MenuButton;
