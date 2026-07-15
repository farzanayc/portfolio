// Add, remove, or edit case studies here — Home and CaseStudy pages both read this array,
// so you never have to touch routing to add a new project.
//
// `image` is optional — leave it as null to show a placeholder box on the card,
// or set it to an image path/URL once you have one (e.g. "/images/wayfinder.jpg").
const caseStudies = [
    {
        slug: "wayfinder",
        title: "Wayfinder",
        subtitle: "Redesigning in-airport navigation for a major carrier",
        year: "2025",
        role: "Lead Product Designer",
        tools: "Figma, Maze, ProtoPie",
        duration: "14 weeks",
        outcomeShort: "31% fewer missed connections",
        team: "2 designers, 1 researcher",
        image: null,
        featured: true,
        summary:
            "A wayfinding app that cut average terminal transfer time by turning a wall of gate boards into a single guided path.",
        problem:
            "Passengers missed connections because gate information was scattered across screens, apps, and overhead signage that never agreed with each other.",
        approach:
            "Ran contextual interviews inside three terminals, mapped the existing wayfinding ecosystem, then prototyped a single-path guidance model tested with 40 travelers across two rounds.",
        outcome:
            "Missed-connection support tickets dropped 31% in the pilot terminal, and the guided-path pattern was adopted as the airline's new wayfinding standard.",
    },
    {
        slug: "ledger",
        title: "Ledger",
        subtitle: "Simplifying expense approvals for finance teams",
        year: "2024",
        role: "Product Designer",
        tools: "Figma, Notion, UserTesting",
        duration: "9 weeks",
        outcomeShort: "Review time cut from 4 min to 1.2 min",
        team: "1 designer, 2 PMs",
        image: null,
        featured: false,
        summary:
            "A redesigned approval queue that let finance managers clear a week's backlog of expense reports in one sitting.",
        problem:
            "Managers were rejecting valid expenses simply because the review queue made it too slow to check receipts against policy.",
        approach:
            "Shadowed five finance managers during a real review cycle, identified the three checks they repeated every time, and rebuilt the queue around a receipt-first layout.",
        outcome:
            "Average review time per report fell from 4 minutes to 1.2 minutes, and manager satisfaction scores rose from 2.9 to 4.4 out of 5.",
    },
    {
        slug: "greenhouse",
        title: "Greenhouse",
        subtitle: "Onboarding redesign for a plant-care subscription box",
        year: "2024",
        role: "UX Designer",
        tools: "Figma, Hotjar, Optimal Workshop",
        duration: "6 weeks",
        outcomeShort: "60-day survival rate up 54% → 78%",
        team: "1 designer, 1 PM",
        image: null,
        featured: false,
        summary:
            "A quiz-driven onboarding flow that matched new subscribers to the right plants for their actual home conditions.",
        problem:
            "New subscribers were cancelling within 60 days because their first plants died — the signup flow never asked about light or experience level.",
        approach:
            "Card-sorted the plant catalog against real failure data, then designed a five-question quiz that fed into a matching algorithm the team already had but wasn't using.",
        outcome:
            "60-day plant survival rate improved from 54% to 78%, and second-box renewal rate increased by 22%.",
    },
    {
        slug: "signal",
        title: "Signal",
        subtitle: "A notification system that respects attention",
        year: "2023",
        role: "Interaction Designer",
        tools: "Figma, Framer",
        duration: "8 weeks",
        outcomeShort: "Opt-out rate dropped to 11%",
        team: "1 designer, 1 engineer",
        image: null,
        featured: false,
        summary:
            "A tiered notification system that replaced constant pings with a daily digest people actually opened.",
        problem:
            "Notification opt-out rates were climbing past 40% because every event — urgent or not — arrived as an identical push alert.",
        approach:
            "Categorized two years of notification logs by real urgency, then designed three delivery tiers and a digest view for anything that wasn't time-sensitive.",
        outcome:
            "Opt-out rate dropped to 11%, and daily digest open rate reached 68% within the first month.",
    },
];

export default caseStudies;