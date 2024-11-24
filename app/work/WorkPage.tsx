import WorkCard from "../components/WorkCard";

const workProjects = [
  {
    title: "PushEverySecond",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800",
    description:
      "Advanced crypto analytics platform with real-time market data visualization",
    heading: "Task Management App",
    info: "Timer Based Todo with data Analytics",
  },
  {
    title: "OrangeChain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    description:
      "Layer-2 Bitcoin network scaling solution with proof-of-work consensus",
    heading: "Blockchain Scaling",
    info: "Innovative solutions for Bitcoin's scalability challenges.",
  },
  {
    title: "Breeew Design",
    image:
      "https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern web design system with advanced component library",
    heading: "Design Systems",
    info: "Powerful components and seamless design workflows.",
  },
  {
    title: "Breeew Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern web design system with advanced component library",
    heading: "Design Systems",
    info: "Streamlined tools for designers and developers.",
  },
  {
    title: "GreenSphere",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Decentralized environmental data analytics for sustainable projects.",
    heading: "Sustainability Analytics",
    info: "Empowering green initiatives with decentralized data.",
  },
  {
    title: "QuantumFlow",
    image:
      "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Next-gen AI-powered API framework for quantum computing applications.",
    heading: "Quantum Computing",
    info: "AI-driven solutions for quantum computing challenges.",
  },
  {
    title: "SolarSync",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Smart IoT platform for managing solar energy and grid synchronization.",
    heading: "Renewable Energy",
    info: "Synchronizing solar power with smart grids.",
  },
  {
    title: "NeuralWave",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=800",
    description:
      "AI-driven music creation tool for generating immersive soundscapes.",
    heading: "AI Music Generator",
    info: "Create immersive music with AI-powered tools.",
  },
  {
    title: "AquaLens",
    image:
      "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Blockchain-based water quality monitoring for coastal and marine conservation.",
    heading: "Water Quality Monitoring",
    info: "Blockchain technology for sustainable marine solutions.",
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1>These are projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {workProjects.map((work, index) => (
          <div key={index}>
            <WorkCard
              title={work.title}
              image={work.image}
              overlayHeading={work.heading}
              overlayInfo={work.info}
              description={work.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
