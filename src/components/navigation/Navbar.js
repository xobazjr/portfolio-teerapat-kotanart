import { Link } from "react-router-dom";
import useTooltip from "../../hooks/useTooltip";
import { useRef } from "react";

const Navbar = () => {
    const imgRef = useRef(null);
  const { tooltip, pos, showTooltip, moveTooltip, hideTooltip } = useTooltip();
  return (
    <nav>
      <div className="nav-left">
        <Link to={`/`}>
            <p 
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
