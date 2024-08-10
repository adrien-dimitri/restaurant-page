export default function loadAbout() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add("about-container");
    
    const sections = [
        { title: "welcome", heading: "Welcome to Pasta Heaven", paragraph: "At Pasta Heaven, we're passionate about bringing the authentic taste of Italy to your table. Established in 2024, our mission is simple: to create delicious, handcrafted pasta dishes that make every meal feel special." },
        { title: "story", heading: "Our Story", paragraph: "Born from a love for Italian cuisine, Pasta Heaven was founded by Adrien to share the rich flavors and traditions of Italy with our community. We use only the freshest ingredients and traditional methods to craft our pasta daily." },
        { title: "ourMenu", heading: "Our Menu", paragraph: "From classic favorites like Spaghetti Carbonara to unique seasonal dishes, our menu offers something for every pasta lover. Each dish is carefully prepared to bring out the best in every ingredient." },
        { title: "join", heading: "Join Us", paragraph: "We invite you to relax, enjoy, and savor the flavors of Italy with us. Come discover why Pasta Heaven is more than just a restaurant — it's a place where good food and good times come together." },
        { title: "salutation", heading: "Mangia Bene, Vivi Felice", paragraph: "(Eat Well, Live Happy)" }
    ];

    sections.forEach(section => {
        const sectionElement = createSection(section.title, section.heading, section.paragraph);
        aboutContainer.appendChild(sectionElement);
    });

    document.querySelector("#content").appendChild(aboutContainer);
}

const createSection = (title, heading, paragraph) => {
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add(`${title}-container`);

    const sectionHeading = document.createElement('div');
    const sectionParagraph = document.createElement('div');

    sectionHeading.classList.add("heading");
    sectionParagraph.classList.add("paragraph");

    sectionHeading.innerHTML = heading;
    sectionParagraph.innerHTML = paragraph;

    sectionContainer.appendChild(sectionHeading);
    sectionContainer.appendChild(sectionParagraph);

    return sectionContainer;
};
