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
    {
      degree: "Ph.D. in Subject",
      institution: "University Name",
      duration: "2018 - 2022",
      description:
        "Research focus on specific area. Thesis titled 'Your Thesis Title'. Key accomplishments and publications during this period.",
      icon: GraduationCap,
      index: 0,
    },
    {
      degree: "Master's in Subject",
      institution: "University Name",
      duration: "2016 - 2018",
      description:
        "Specialized in specific area. Maintained a GPA of X.X. Notable projects included Project Name, focused on project description.",
      icon: GraduationCap,
      index: 1,
    },
    {
      degree: "Bachelor's in Subject",
      institution: "University Name",
      duration: "2012 - 2016",
      description:
        "Majored in specific subject with minor in another subject. Dean's list for X semesters. Active participation in relevant extracurricular activities.",
      icon: BookOpen,
      index: 2,
    },
    {
      degree: "High School Diploma",
      institution: "School Name",
      duration: "2008 - 2012",
      description:
        "Graduated with honors. Participated in relevant clubs and activities such as debate team, science olympiad, etc.",
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
