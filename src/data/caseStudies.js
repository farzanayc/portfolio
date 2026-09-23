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
            "The gap is clear, caregivers need one centralized, trustworthy place to find, understand, and compare Adult Day Services in their community without having to navigate a fragmented system on their own.   \n" +
            "\n" +
            "***How might we simplify fragmented Adult Day Services information so caregivers can confidently find and evaluate care options while balancing their own needs and responsibilities?***",
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
            {
                intro: "Usability testing drove several key pivots away from our original design:",
                bullets: [
                    {
                        text: "Cut the onboarding quiz. It redirected users to an external site and added steps that didn't match how people actually wanted to search. Replaced it with a direct, step-by-step call-to-action on the homepage instead.",
                        media: {
                            type: "image",
                            src: process.env.PUBLIC_URL + "/images/onboarding_quiz.png",
                            caption: "Before and after images of the onboarding quiz removed from the homepage.",
                        },
                    },
                    {
                        text: "Merged the About and Education pages. Testing showed users consistently looked for dementia and service information under \"About,\" not a separate Education page, so we consolidated to match that expectation.",
                        media: {
                            type: "image",
                            src: process.env.PUBLIC_URL + "/images/aboutpage.png",
                            caption: "Before and after images of the navigation headers after education and about sections were merged inro one about page.",
                        },
                    },
                    {
                        text: "Replaced the acronym \"ADS\" with \"Adult Day Services\" everywhere on the site, after both users and stakeholders flagged confusion over what the acronym meant.",
                        media: {
                            type: "image",
                            src: process.env.PUBLIC_URL + "/images/ads_full_name.png",
                            caption: "Before and after images of ADS being changed to Adult Day Services for less confusion.",
                        },
                    },
                    {
                        text: "Reworked the results page with dropdown filters and expandable sections instead of dense text blocks, to reduce cognitive load for caregivers searching under stress.",
                        media: {
                            type: "image",
                            src: process.env.PUBLIC_URL + "/images/dropdown_filter.png",
                            caption: "Before and after images of the filters being changed from static checkboxes to an expandable dropdown menu.",
                        },
                    },
                    ],
            },
        outcome:
            "The project secured a $30K grant to move CareConnect from prototype to a live, public website. We delivered a complete high-fidelity prototype and visual style guide, grounded in six caregiver interviews, 35 survey responses, and five rounds of usability testing — giving the client a validated, development-ready design rather than a set of untested assumptions.",
        nextSteps:
            "Next is client handoff: securing a domain, building the site in WordPress, and bringing on a developer to implement the design system, service database, and location-based search. We're preparing full documentation — including a guided walkthrough of the Figma file and component specs — so the client's team can maintain and extend the site independently once it launches.",
        media: {
            overview: {
                type: "image",
                src: process.env.PUBLIC_URL + "/images/caregiving.jpg",
                caption: "A snapshot of a caregiver attending to their loved one.",
            },
            outcome: {
                type: "video",
                src: process.env.PUBLIC_URL + "/images/CareConnect_copy.mp4",
                caption: "Full walkthrough of the search and filter flow",
            },

        },
    },
    {
        slug: "general-motors",
        title: "General Motors",
        subtitle: "Designing future automotive UX experiences through research-driven innovation",
        year: "2026",
        role: "Product Designer",
        tools: "Figma, FigJam, Zoom, ScreensStudio",
        duration: "14 weeks",
        outcomeShort: "100% company leadership approval.",
        team: "2 product designers, 1 researcher",
        image: process.env.PUBLIC_URL + "/images/gmc-mockup.jpg",
        featured: false,
        overview:
            "GM’s brief challenged us to think about truck ownership as something more dynamic and integrated across various interfaces. Our team responded by designing the Sierra Command Center–a context aware adaptive drive mode dashboard. ",
        problem:
            "As General Motors continues to push innovation forward, the rapid evolution of technologies such as AI is transforming what customers can expect from the future of driving. With new capabilities emerging quickly, vehicle experiences need to evolve alongside them while remaining intuitive, accessible, and grounded in driver safety. For connected trucks, this means designing innovative experiences that can deliver real-time alerts, contextual information, and intelligent assistance without overwhelming the driver.\n" +
            "\n" +
            "The challenge lies in integrating these emerging technologies in a way that enhances the driving experience while keeping safety at the forefront. Information needs to be presented clearly and at the right moment, allowing drivers to understand their vehicle and surroundings without unnecessary distraction. As GM looks toward the future of its trucks, innovation must go hand in hand with thoughtful, safety-conscious design.\n" +
            "\n" +
            "***HMW: How might we design an intelligent, voice-enabled, and context-aware truck experience that helps drivers stay confident, informed, and in control?***",
        researchInsights: {
            intro: "Research began with an in-depth competitive analysis of three internal combustion engines: the 2025 GMC Sierra 1500 Denali Ultimate, the 2021 Rivian R1T, and the 2023 Volkswagen Amarok. The 2025 GMC Sierra 1500 Denali Ultimate was selected as the primary GM vehicle for this semester’s project focus. The 2021 Rivian R1T was chosen as a competitor because it represents a more tech-forward, fully electric approach to the truck segment with minimal physical controls, a proprietary software ecosystem, and no Apple CarPlay or Android Auto, making it a strong contrast to GM’s more traditional interface strategy. The 2023 Volkswagen Amarok was selected because it runs Ford’s SYNC 4 system on a non-American platform, offering an international perspective on truck infotainment that blends physical controls with a touch-first interface. Together, these three vehicles illustrate the full spectrum of how automakers balance physical controls, touchscreen reliance, and third-party software integration in modern trucks.\n" +
                "\n" +
                "Beyond this analysis, we also surveyed 2025 GMC Sierra 1500 Denali Ultimate owners for contextual inquiry purposes. We gathered pain points, motivations, and user behavior while gathering background information alongside to understand the various features that exist within this car in comparison to other models. We focused on a multitude of issues and although we brainstormed and created low-mid fidelity designs of most issues, we honed into the trailering feature after some feedback from the GM design team. Trailering hosts many issues on its own and in order to find a solution that would be feasible given our limited knowledge on truck ownership, we decided to focus on the idea of sway. \n",
            bullets: [],
            findingsIntro: "",
            findingsBullets: [],
        },
        designProcess:
            "How you moved from insights to concepts — sketches, iterations, testing.",
        designSolution:
            "What you actually built or designed as the final output.",
        keyDecisions: {
            intro: "The important tradeoffs or choices you made along the way, and why.",
            bullets: [],
        },
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
        subtitle: "Designing version 1.0 of groups feature for Braid website",
        year: "2024",
        role: "UX Researcher and Designer",
        tools: "Figma, Zoom, Otter.ai, Slack",
        duration: "14 weeks",
        outcomeShort: "Implementation for use by multiple university courses.",
        team: "3 designers, 1 PM, 4 developers, 2 researchers ",
        image: process.env.PUBLIC_URL + "/images/braid-mockup.png",
        featured: false,
        overview:
            "A feature that places meaningful conversations at your fingertips.",
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
        keyDecisions: {
            intro: "The important tradeoffs or choices you made along the way, and why.",
            bullets: [],
        },
        outcome:
            "What changed as a result — metrics, adoption, feedback.",
        nextSteps:
            "What's planned next, or what you'd explore if the project continued.",
    },
    {
        slug: "MFit",
        title: "MFit",
        subtitle: "A fitness app that keeps students active through gamification and alerts",
        year: "2023",
        role: "Interaction Designer",
        tools: "Figma, Medium, Zoom, Google Meets, White board + markers, paper + pencil",
        duration: "14 weeks",
        outcomeShort: "Approval of high fidelity app design",
        team: "4 researchers and designers",
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
        keyDecisions: {
            intro: "The important tradeoffs or choices you made along the way, and why.",
            bullets: [],
        },
        outcome:
            "What changed as a result — metrics, adoption, feedback.",
        nextSteps:
            "What's planned next, or what you'd explore if the project continued.",
    },
];

export default caseStudies;