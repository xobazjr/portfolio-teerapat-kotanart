import { v4 as uuidv4 } from "uuid";

const Menu = ({ items }) => {
    return (
        <section className="Menu text-body chivo">
            <div className="Menu__track-wrapper">
                <ul className="Menu__track">
                    {items.map((element) => (
                        <li key={uuidv4()}>
                            <a href={element.link} target="_blank" rel="noopener noreferrer">
                                {element.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="Menu__track" aria-hidden="true">
                    {items.map((element) => (
                        <li key={uuidv4()}>
                            <a href={element.link} target="_blank" rel="noopener noreferrer">
                                {element.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Menu;