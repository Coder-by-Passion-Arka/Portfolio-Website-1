// This file is a page component for displaying an academic timeline.
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, School } from "lucide-react";
import { useEffect, useRef } from "react";

interface TimelineItemProps {
  item: {
    degree: string;
    institution: string;
    duration: string;
    description: string;
    icon: React.ElementType;
  };
  isEven: boolean;
}

const TimelineItem = ({ item, isEven }: TimelineItemProps) => {
  const Icon = item.icon;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out`}
    >
      <div
        className={`hidden md:block md:w-1/2 ${
          isEven ? "text-right pr-8" : "order-last pl-8"
        }`}
      >
        {isEven && <TimelineContent item={item} />}
      </div>

      {/* Timeline dot/icon */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-portfolio-blue dark:border-indigo-500 flex items-center justify-center z-10 mb-4 md:mb-0">
        <Icon className="text-portfolio-blue dark:text-indigo-400 w-6 h-6" />
      </div>

      <div
        className={`md:w-1/2 ${
          isEven ? "order-last pl-8" : "pr-8"
        } md:pt-0 w-full`}
      >
        {!isEven && <TimelineContent item={item} />}

        {/* Mobile view (always show regardless of even/odd) */}
        <div className="md:hidden w-full pl-16">
          <TimelineContent item={item} />
        </div>
      </div>
    </div>
  );
};

const TimelineContent = ({ item }: { item: TimelineItemProps["item"] }) => (
  <Card className="overflow-hidden card-hover dark:bg-gray-800 dark:border-gray-700">
    <CardContent className="p-6">
      <div className="flex flex-col gap-1 mb-3">
        <h3 className="font-serif text-xl font-bold text-portfolio-navy dark:text-gray-100">
          {item.degree}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
        <Badge
          variant="outline"
          className="w-fit dark:border-gray-600 dark:text-gray-300"
        >
          {item.duration}
        </Badge>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
    </CardContent>
  </Card>
);

const TimelinePage = () => {
  const educationTimeline = [
    // {
    //   degree: "Ph.D. in Subject",
    //   institution: "University Name",
    //   duration: "2018 - 2022",
    //   description:
    //     "Research focus on specific area. Thesis titled 'Your Thesis Title'. Key accomplishments and publications during this period.",
    //   icon: GraduationCap,
    //   index: 0,
    // },
    {
      degree: "Bachelors of Technology Degree in Computer Science Engineering",
      institution:
        "Indian Institute of Engineering Science and Technology, Shibpur",
      duration: "2022 - 2026",
      description:
        "Currently pursuing a B.Tech in Computer Science Engineering at IIEST Shibpur. Engaged in various projects and internships related to Software Development and Data Science. Actively participating in coding competitions and hackathons. Developed strong programming skills in languages such as Python, Java, and C++. Involved in student organizations and technical clubs.",
      icon: GraduationCap,
      index: 1,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Vivekananda Mission School, Joka",
      duration: "2020 - 2022",
      description:
        "Took up Science stream with Mathematics, Physics, Chemistry, and Computer Science. Achieved a score of 96% in the board examinations. Preparing for IIT-JEE Examination while completing my School Education. Developed a strong foundation in analytical and problem-solving skills.",
      icon: BookOpen,
      index: 2,
    },
    {
      degree: "Secondary Degree",
      institution: "Vivekananda Mission School, Joka",
      duration: "2020-2022",
      description:
        "Complete my Secondary Education from Vivekananda Mission School, Joka. Achieved a score of 94% in the board examinations. Participated in various extracurricular activities including debates and science fairs. Had a vibrant school life with a focus on academics and personal development.",
      icon: School,
      index: 3,
    },
  ];

  // Scroll animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const hiddenElements = document.querySelectorAll(".timeline-item");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="page-title text-center mb-12">Academic Timeline</h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
          A chronological journey through my academic background, highlighting
          degrees earned, institutions attended, and key accomplishments along
          the way.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-portfolio-blue dark:bg-indigo-500 hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {educationTimeline.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
