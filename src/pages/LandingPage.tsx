import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import myImg from "@/assets/My_img_1.jpg"; // Import your own profile image
import {
  ArrowRight,
  Award,
  School,
  Bot,
  ChartNoAxesCombined,
  Globe,
  BrainCircuit,
  CodeXml,
  Speech,
} from "lucide-react";

// Lucide React Icons //
const botIcon = () => {
  return (
    <Bot
      size={26}
      className="text-portfolio-blue dark:text-indigo-400 "
      strokeWidth={3.05}
      absoluteStrokeWidth
    />
  );
};

const graphIcon = () => {
  return (
    <ChartNoAxesCombined
      size={26}
      className="text-portfolio-blue dark:text-indigo-400 "
      strokeWidth={3.05}
      absoluteStrokeWidth
    />
  );
};

const aiIcon = () => {
  return (
    <BrainCircuit
      size={26}
      className="text-portfolio-blue dark:text-indigo-400 "
      strokeWidth={3.05}
      absoluteStrokeWidth
    />
  );
};

const speachIcon = () => {
  return (
    <Speech
      size={26}
      className="text-portfolio-blue dark:text-indigo-400 "
      strokeWidth={3.05}
      absoluteStrokeWidth
    />
  );
};

const codeIcon = () => {
  return (
    <CodeXml
      size={26}
      className="text-portfolio-blue dark:text-indigo-400 "
      strokeWidth={3.05}
      absoluteStrokeWidth
    />
  );
};

const globeIcon = () => {
  return (
    <Globe
      size={26}
      className="text-portfolio-blue dark:text-indigo-400 "
      strokeWidth={3.05}
      absoluteStrokeWidth
    />
  );
};

const LandingPage = () => {
  // These texts can be used to dynamically change the text in the hero section or other parts of the page.
  const differentTexts: string[] = [
    "Hello, I am Arkapravo Das",
    "Welcome to my Portfolio Website",
    "Machine Learning Engineer",
    "Generative AI Enthusiast",
    "Full Stack Developer",
    "Data Science & Analytics Practitioner",
    "...And so much more...",
  ];

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0); // Which string in differentTexts
  const [charIndex, setCharIndex] = useState(0); // Which character in current string
  const [typing, setTyping] = useState(true); // true: typing, false: deleting

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentString = differentTexts[textIndex];

    if (typing) {
      if (charIndex < currentString.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentString[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setTextIndex((prev) => (prev + 1) % differentTexts.length);
        }, 700);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, textIndex, differentTexts]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-portfolio-light via-blue-50 to-portfolio-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="order-2 lg:order-1 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-portfolio-navy dark:text-gray-100 min-h-[4rem]">
                <span className="text-portfolio-blue dark:text-indigo-400">
                  {text}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
              <hgroup>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                  A passionate professional with expertise in{" "}
                  <span className="font-bold italic text-lg text-portfolio-blue dark:text-indigo-400">
                    Machine Learning
                  </span>
                  ,{" "}
                  <span className="font-bold italic text-lg text-portfolio-blue dark:text-indigo-400">
                    Deep learning
                  </span>
                  ,{" "}
                  <span className="font-bold italic text-lg text-portfolio-blue dark:text-indigo-400">
                    Artificial Intelligence
                  </span>
                  ,{" "}
                  <span className="font-bold italic text-lg text-portfolio-blue dark:text-indigo-400">
                    Data Science
                  </span>
                  , and{" "}
                  <span className="font-bold italic text-lg text-portfolio-blue dark:text-indigo-400">
                    Full-Stack Development
                  </span>
                  . Welcome to my portfolio showcasing my Journey, Achievements,
                  Projects & Research Papers.
                </p>
              </hgroup>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-portfolio-blue
                  dark:bg-indigo-600 dark:hover:bg-indigo-700 hover:shadow-slate-500 
                  dark:hover:shadow-white
                  transition-all hover:shadow-md"
                >
                  <Link to="/achievements" className="flex items-center">
                    Achievements
                    <Award size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/40 
                  hover:shadow-slate-500 
                  dark:hover:shadow-white
                  transition-all hover:shadow-md"
                >
                  <Link to="/timeline" className="flex items-center">
                    Academic Journey
                    <School size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  className="bg-portfolio-blue hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 hover:shadow-slate-500 
                  dark:hover:shadow-white
                  transition-all hover:shadow-md"
                >
                  <Link to="/projects" className="flex items-center">
                    Projects
                    <CodeXml size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div
              className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in"
              style={{ animationDelay: "5s" }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-blue-400 dark:from-indigo-600 dark:to-purple-500 shadow-xl border-[3px] border-slate-900 dark:border-gray-200">
                {/* This is where you could place a profile image */}
                <div className="w-full h-full rounded-full flex items-center justify-center text-gray-700 text-4xl font-serif">
                  <img
                    src={myImg}
                    alt="Profile Picture"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-4xl font-bold mb-12 text-center font-serif text-portfolio-navy dark:text-gray-100">
            About{" "}
            <span className="text-portfolio-blue dark:text-indigo-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy dark:text-gray-100">
                Professional Summary
              </h3>
              <p className="font- text-gray-700 dark:text-gray-300 mb-4 ">
                Versatile and results-driven technologist with expertise in
                Machine Learning, Generative AI, and Full-Stack MERN
                development. Proficient in Python, C/C++, and JavaScript with
                strong analytical acumen in Data Science. Adept at building
                scalable solutions and communicating effectively in English,
                Hindi, and Bengali across diverse technical and collaborative
                environments.
              </p>
              <p className="italic text-gray-700 dark:text-gray-300">
                "My approach combines analytical thinking with creative
                problem-solving to deliver innovative solutions that drive
                success."
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-portfolio-navy dark:text-gray-100">
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    skill: "Machine Learning & Deep Learning Specialist",
                    icon: botIcon,
                  },
                  {
                    skill:
                      "Generative AI & Large Language Models (LLMs) Enthusiast",
                    icon: aiIcon,
                  },
                  {
                    skill: "Data Science & Advanced Analytics Practitioner",
                    icon: graphIcon,
                  },
                  { skill: "MERN Stack Developer", icon: globeIcon },
                  {
                    skill: "Proficient Programmer – C, C++, Python, JavaScript",
                    icon: codeIcon,
                  },
                  {
                    skill: "Fluent in English, Hindi & Bengali",
                    icon: speachIcon,
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-gray-800 p-3 rounded-md shadow-sm flex items-center"
                  >
                    <span className="w-3 h-3 rounded-full mr-3 min-w-3 min-h-3 flex-shrink-0 flex items-center justify-center">
                      {skill.icon()}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Project Section has been moved to Projects.tsx */}
    </div>
  );
};

export default LandingPage;
