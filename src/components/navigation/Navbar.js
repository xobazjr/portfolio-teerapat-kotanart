import { Link } from "react-router-dom";
import useTooltip from "../../hooks/useTooltip";
import { useRef } from "react";

const Navbar = ({color, text_body, text_cv, bg_cv}) => {
  const imgRef = useRef(null);
  const { tooltip, pos, showTooltip, moveTooltip, hideTooltip } = useTooltip();
  return (
    <nav 
      style={{
        backgroundColor:color, 
      }}
    >
      <div className="nav-left">
        <Link to={`/`}>
            <p 
                style={{
                  color:text_body
                }}
                className="text-body"
                onMouseEnter={(e) => showTooltip(e, imgRef, "Back")}
                onMouseMove={moveTooltip}
                onMouseLeave={hideTooltip}
            >
                XOBAZJR
            </p>
        </Link>
      </div>

      <div className="nav-right">
        <a
          style={{
            color: text_body,
            border: `1px solid ${bg_cv}`
          }}
          href="https://www.youtube.com/@XobazJr"
          className="text-small"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => showTooltip(e, imgRef, "XobazJr")}
          onMouseMove={moveTooltip}
          onMouseLeave={hideTooltip}
        >
          YouTube
        </a>

        <a
          style={{
            backgroundColor: bg_cv,
            color: text_cv
          }}
          href="assets/documents/teerapat_kotanart_cv.pdf"
          className="text-small"
          download
          rel="noopener noreferrer"
          onMouseEnter={(e) => showTooltip(e, imgRef, "Download CV")}
          onMouseMove={moveTooltip}
          onMouseLeave={hideTooltip}
        >
          Request CV
        </a>
      </div>
            {tooltip && (
              <div
                className="projects__tooltip"
                style={{
                  backgroundColor: tooltip.bg,
                  color: tooltip.color,
                  top: pos.y + 16,
                  left: pos.x + 16,
                }}
              >
                {tooltip.text}
              </div>
            )}
    </nav>
  );
};

export default Navbar;
