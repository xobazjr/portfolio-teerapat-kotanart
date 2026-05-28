import useTooltip from "../../hooks/useTooltip";

const Footer = () => {
  const { tooltip, pos, showTooltip, moveTooltip, hideTooltip } = useTooltip();

  return (
    <>
      <footer>
        <h1>THANK FOR VISIT</h1>

        <div className="footer_center">
          <div className="footer_box">
            <h3 className="text-body-lg">XOBAZJR</h3>
          </div>

          <p className="text-small">
            Passionate about designing modern, user-friendly web interfaces with
            a strong focus on UI/UX and visual design.
            <br />
            I enjoy creating digital experiences that are not only visually
            appealing but also intuitive, responsive, and performance-driven
            across all devices.
            <br />
            Dedicated to crafting clean layouts, smooth interactions, and
            meaningful user experiences that combine creativity with
            functionality.
          </p>
        </div>

        <div className="text-small footer_bottom">
          <div>
            <span
              className="footer_hover"
              onMouseEnter={(e) => showTooltip(e, null, "Phone No.")}
              onMouseMove={moveTooltip}
              onMouseLeave={hideTooltip}
            >
              +66 95 484 9820
            </span>

            <br />

            <span
              className="footer_hover"
              onMouseEnter={(e) => showTooltip(e, null, "Email")}
              onMouseMove={moveTooltip}
              onMouseLeave={hideTooltip}
            >
              xobazjr@gmail.com
            </span>
          </div>

          <p>Thailand</p>
        </div>
      </footer>

      <section className="copyright">
        <h3 className="text-body-lg">XOBAZJR</h3>
        <p className="text-small">Copyright &copy; XobazJr</p>
      </section>

      {tooltip && (
        <div
          className="projects__tooltip"
          style={{
            backgroundColor: tooltip.bg,
            color: tooltip.color,

            position: "fixed",
            top: pos.y + 16,
            left: pos.x + 16,

            zIndex: 999999,
            pointerEvents: "none",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
};

export default Footer;
