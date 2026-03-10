import { MdArrowOutward } from "react-icons/md";
import "./styles/Career.css";

const certifications = [
    {
        title: "Gen AI: Introduction & Applications",
        issuer: "IBM (Coursera)",
        year: "2025",
        link: "https://www.coursera.org/account/accomplishments/verify/59CMNOA964XT",
        description:
            "Explored foundational LLM concepts and transformer architectures. Applied Generative AI techniques for automated content generation and text summarization.",
    },
    {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI (Coursera)",
        year: "2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/D8GPPROIZQM7",
        description:
            "Mastered regression, classification, and neural network fundamentals. Built and evaluated models using supervised and unsupervised learning algorithms via Scikit-Learn.",
    },
    {
        title: "Prompt Engineering for ChatGPT",
        issuer: "Vanderbilt University (Coursera)",
        year: "2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/6NK85H04HVZY",
        description:
            "Developed advanced prompting strategies including few-shot and chain-of-thought logic. Optimized model outputs for complex analytical problem-solving tasks.",
    },
    {
        title: "Python Programming Bootcamp",
        issuer: "Udemy",
        year: "Feb 2025",
        link: "https://www.udemy.com/certificate/UC-98243bc2-0ecc-4fb2-a4ae-3bc9b9781be9/",
        description:
            "Studied core structures, OOP, and file handling. Applied Python scripting to automate data transformations and technical workflows.",
    },
];

const Certifications = () => {
    return (
        <div className="career-section section-container" id="certifications">
            <div className="career-container">
                <h2>
                    My <span>Certifications</span>
                </h2>
                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>

                    <div className="experience-list">
                        {certifications.map((cert, index) => (
                            <div className="experience-row" key={index}>
                                <div className="exp-left">
                                    <div className="role-dot"></div>
                                    {index !== certifications.length - 1 && (
                                        <div className="role-connector"></div>
                                    )}
                                    <div className="role-meta">
                                        <h4>{cert.title}</h4>
                                        <h5>{cert.issuer}</h5>
                                        <p className="role-date">{cert.year}</p>
                                    </div>
                                </div>
                                <div className="exp-right">
                                    <p>{cert.description}</p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-cursor="disable"
                                        className="cert-view-link"
                                    >
                                        View Certificate <MdArrowOutward />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
