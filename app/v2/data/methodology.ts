type Step = { id: string; title: string; description: string }

const methodologySteps: Step[] = [
    { id: "01", title: "Deep Analysis", description: "I seek to understand the problem, WHY it's a problem, and what results we're trying to achieve." },
    { id: "02", title: "Planning", description: "I pick the tools that fit, design a simple solution, and map out clear steps to build it." },
    { id: "03", title: "Development", description: "I implement the plan with clean, tested code that stays aligned with the goals." },
    { id: "04", title: "Launch & Iterate", description: "I ship the solution, then continuously look for improvements and related problems worth solving." },
]

export default methodologySteps