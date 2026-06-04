const AboutList = ({items, topic}) => {
    return (
        <div>
            <div className="about_topic">
                <h2 className="text-h3">{topic} /</h2>
            </div>
            <div className="about_card">
                {items.map((element) => (
                    <div key={element.id}>
                        <img
                            src={element.img} 
                            alt=""
                        />
                        <h3>{element.title}</h3>
                        <p>{element.detail}</p>
                        <div className="about_card_btn">
                            <a 
                                href={element.website}
                                target="_blank" 
                                rel="noopener 
                                noreferrer"
                            >
                                Website
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24">
                                <path d="M0 0h12v24H0z" fill="none" />
                                <defs>
                                    <path id="SVG1pzpbdYY" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" />
                                </defs>
                                <use fill-rule="evenodd" href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)" />
                            </svg>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default AboutList;