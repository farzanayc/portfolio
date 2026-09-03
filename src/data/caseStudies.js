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
            "Finding Adult Day Services can be overwhelming for caregivers who are already juggling work, family, and their own well-being. Information regarding available resources are scattered across websites, difficult to compare, and often filled with unfamiliar terminology.  \n" +
            "\n" +
            "For Black caregivers, these challenges can be compounded by structural and cultural barriers, including historical mistrust in healthcare systems and a lack of culturally responsive, trustworthy resources. As a result, many turn to word-of-mouth and informal networks to find care which potentially limits their awareness of available resources.  \n" +
            "\n" +
            "The gap is clear, caregivers need one centralized, trustworthy place to find, understand, and compare Adult Day Services in their community without having to navigate a fragmented system on their own.   \n",
        researchInsights: {
            intro: "We used a mixed methods research approach to understand caregiver needs and identify gaps in existing digital experiences:",
            bullets: [
                "6 caregiver interviews to explore experiences, decision-making, and expectations",
                "35 survey participants to identify broader caregiving challenges and behaviors",
                "Competitive analysis of caregiving and resource-based websites",
                "Literature review of academic research on caregiving, dementia, and healthcare access",
                "Digital ethnography of online caregiver communities",
                "5 usability tests and refine the prototype",
            ],
            findingsIntro:
            "Across these methods, a few patterns stood out clearly:",
            findingsBullets: [
                "Caregiving is often unplanned. Many step into the role without prior knowledge of available resources, and delay seeking support until they're already overwhelmed.",
                "Caregivers struggle to understand and compare services, especially without a healthcare background, they are unclear on what's offered, how services differ, or whether they qualify.",
                "Trust is the deciding factor. Recommendations from trusted sources, transparent cost/staff/safety info, and visible reviews all directly affect whether caregivers engage with a provider.",
                "Logistics (transportation, cost, scheduling) are a major barrier that prevents caregivers from using services they'd otherwise choose.",
                "Existing caregiving websites add to the problem. They are dense, jargon-heavy, and hard to navigate, increasing cognitive load for users already under stress.",
                "Cultural representation matters. Black caregivers in particular found resources more trustworthy when they reflected their lived experience, not just surface-level inclusion.",
            ],
        },
        designProcess:
            "Research pointed to three consistent barriers: caregivers didn't understand what Adult Day Services actually offered, couldn't easily compare options, and hesitated to trust unfamiliar providers. We translated these findings into a medium-fidelity prototype covering the core flows caregivers needed most — searching for services, understanding what Adult Day Services are, and getting help.\n" +
            "\n" +
            "We stress-tested that prototype with five usability sessions built around real tasks: searching for services, applying filters, and finding resources. The sessions surfaced friction points in navigation, terminology, and content hierarchy — all of which fed directly into the next round of design. From there, we moved into high-fidelity design, building out a full visual style guide and validating the refined interface with additional in-class usability testing before finalizing.",
        designSolution:
            "CareConnect gives caregivers a single place to search, compare, and evaluate Adult Day Services near them. Location-based search and filters (transportation access, accessibility needs, and more) let caregivers narrow results to what actually fits their situation, while trust indicators like reviews and verified listings help them feel confident in unfamiliar providers.\n" +
            "\n" +
            "Every service listing surfaces the details caregivers said mattered most during research — cost, hours, and accessibility — without requiring extra clicks or external sites. Clear pathways to learn more or contact a provider are built directly into the flow, so caregivers never have to leave the platform to take the next step.",
        keyDecisions:
            "The important tradeoffs or choices you made along the way, and why.",
        outcome:
            "The project secured a $30K grant to move CareConnect from prototype to a live, public website. We delivered a complete high-fidelity prototype and visual style guide, grounded in six caregiver interviews, 35 survey responses, and five rounds of usability testing — giving the client a validated, development-ready design rather than a set of untested assumptions.",
        nextSteps:
            "Next is client handoff: securing a domain, building the site in WordPress, and bringing on a developer to implement the design system, service database, and location-based search. We're preparing full documentation — including a guided walkthrough of the Figma file and component specs — so the client's team can maintain and extend the site independently once it launches.",
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
        researchInsights: {
            intro: "Your regular paragraph text here.",
            bullets: [],
            findingsIntro: "",
            findingsBullets: [],
        },
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
        researchInsights: {
            intro: "Your regular paragraph text here.",
            bullets: [],
            findingsIntro: "",
            findingsBullets: [],
        },
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
        researchInsights: {
            intro: "Your regular paragraph text here.",
            bullets: [],
            findingsIntro: "",
            findingsBullets: [],
        },
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