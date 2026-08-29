// Add, remove, or edit case studies here — Home and CaseStudy pages both read this array,
// so you never have to touch routing to add a new project.
//
// `image` is optional — leave it as null to show a placeholder box on the card,
// or set it to an image path/URL once you have one (e.g. "/images/wayfinder.jpg").
const caseStudies = [
    {
        slug: "a-guide-to-adult-day-services-in-michigan",
        title: "A Guide to Adult Day Services in Michigan",
        subtitle: "Cultivating an online hub of Michigan Adult Day Services for caregivers. ",
        year: "2025",
        role: "UX Researcher and Designer, Product Manager",
        tools: "Figma, Miro, Google Doc, Google Sheets, Zoom",
        duration: "14 weeks",
        outcomeShort: "$30K grant secured, website in development",
        team: "2 UX designers, 2 UX researchers",
        image: process.env.PUBLIC_URL + "/images/ads-mockup.png",
        featured: true,
        overview:
            "CareConnect is a centralized online platform designed to help caregivers of older adults, particularly those caring for someone with dementia, find and evaluate Adult Day Services with less stress and uncertainty in the Southeastern Michigan area.",
        problem:
            "Finding Adult Day Services can be overwhelming. Caregivers often enter the role unexpectedly while balancing work, family, and their own well-being. Information about available resources is fragmented across websites, difficult to compare, and often filled with unfamiliar terminology. \n" +
            "\n" +
            "This problem is often magnified for Black caregivers in particular. Due to challenges shaped by structural and cultural barriers, there is a historical mistrust in healthcare systems, a lack of culturally responsive resources, and limited access to centralized and trustworthy information to help support caregivers. Due to these reasons, many Black caregivers rely on recommendations through word-of-mouth or informal networks, which can limit the awareness of available services.  \n" +
            "\n" +
            "There is a clear gap here: caregivers need an easily accessible central platform that they can use to locate, understand, and evaluate Adult Day Services in their area and this resource needs to be clear, easy to use, and trustworthy. \n",
        researchInsights:
            "What you did to understand the problem, and what you learned from it.",
        designProcess:
            "How you moved from insights to concepts — sketches, iterations, testing.",
        designSolution:
            "What you actually built or designed as the final output.",
        keyDecisions:
            "The important tradeoffs or choices you made along the way, and why.",
        outcome:
            "What changed as a result — metrics, adoption, feedback.",
        nextSteps:
            "What's planned next, or what you'd explore if the project continued.",
    },
    {
        slug: "general-motors",
        title: "General Motors",
        subtitle: "Designing future automotive UX experiences through research-driven innovation",
        year: "2026",
        role: "Product Designer",
        tools: "Figma, Notion, UserTesting",
        duration: "9 weeks",
        outcomeShort: "Review time cut from 4 min to 1.2 min",
        team: "1 designer, 2 PMs",
        image: process.env.PUBLIC_URL + "/images/gmc-mockup.jpg",
        featured: false,
        overview:
            "One or two sentences summarizing the project at a glance.",
        problem:
            "What was broken, painful, or unaddressed before this project.",
        researchInsights:
            "What you did to understand the problem, and what you learned from it.",
        designProcess:
            "How you moved from insights to concepts — sketches, iterations, testing.",
        designSolution:
            "What you actually built or designed as the final output.",
        keyDecisions:
            "The important tradeoffs or choices you made along the way, and why.",
        outcome:
            "What changed as a result — metrics, adoption, feedback.",
        nextSteps:
            "What's planned next, or what you'd explore if the project continued.",
        protected: true,
        password: "SI594",
    },
    {
        slug: "Braid",
        title: "Braid",
        subtitle: "Onboarding redesign for a plant-care subscription box",
        year: "2024",
        role: "UX Researcher and Designer",
        tools: "Figma, Hotjar, Optimal Workshop",
        duration: "6 weeks",
        outcomeShort: "60-day survival rate up 54% → 78%",
        team: "1 designer, 1 PM",
        image: process.env.PUBLIC_URL + "/images/braid-mockup.png",
        featured: false,
        overview:
            "One or two sentences summarizing the project at a glance.",
        problem:
            "What was broken, painful, or unaddressed before this project.",
        researchInsights:
            "What you did to understand the problem, and what you learned from it.",
        designProcess:
            "How you moved from insights to concepts — sketches, iterations, testing.",
        designSolution:
            "What you actually built or designed as the final output.",
        keyDecisions:
            "The important tradeoffs or choices you made along the way, and why.",
        outcome:
            "What changed as a result — metrics, adoption, feedback.",
        nextSteps:
            "What's planned next, or what you'd explore if the project continued.",
    },
    {
        slug: "MFit",
        title: "MFit",
        subtitle: "A notification system that respects attention",
        year: "2023",
        role: "Interaction Designer",
        tools: "Figma, Framer",
        duration: "8 weeks",
        outcomeShort: "Opt-out rate dropped to 11%",
        team: "1 designer, 1 engineer",
        image: process.env.PUBLIC_URL + "/images/mfit-mockup.png",
        featured: false,
        overview:
            "One or two sentences summarizing the project at a glance.",
        problem:
            "What was broken, painful, or unaddressed before this project.",
        researchInsights:
            "What you did to understand the problem, and what you learned from it.",
        designProcess:
            "How you moved from insights to concepts — sketches, iterations, testing.",
        designSolution:
            "What you actually built or designed as the final output.",
        keyDecisions:
            "The important tradeoffs or choices you made along the way, and why.",
        outcome:
            "What changed as a result — metrics, adoption, feedback.",
        nextSteps:
            "What's planned next, or what you'd explore if the project continued.",
    },
];

export default caseStudies;