import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Briefcase, Trophy } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

const AchievementsPage = () => {
  const achievementsData = {
    competitions: [
      {
        title: "Machine Learning Certification Course",
        organization:
          "NPTEL & Indraprastha Institute of Information Technology, Delhi",
        year: "2024",
        description: (
          <>
            This{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Foundational Course on Machine Learning{" "}
            </span>{" "}
            inroduced me to the fundamentals of Machine Learning, covering key
            concepts such as
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Supervised Learning, Unsupervised Learning, and Reinforcement
              Learning.{" "}
            </span>
            I learned about various machine learning algorithms, from
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Linear Regression{" "}
            </span>
            to
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Support Vector Machines{" "}
            </span>
            and also
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Convolutional Neural Networks.{" "}
            </span>{" "}
            
          </>
        ),
        icon: Briefcase,
      },
      {
        title: "Instruo Machine Learning Hackathon (2024)",
        organization:
          "Indian Institute of Engineering Science & Technology, Shibpur",
        year: "2024",
        description: (
          <>
            With the power of
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Deep Learning{" "}
            </span>
            &
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              Bi-directional LSTM,{" "}
            </span>
            I created a Spam Detection moddle that achieved an impressive
            <span className="font-bold text-slate-800 dark:text-white">
              {" "}
              accuracy of 98.5%{" "}
            </span>
            on the test dataset, demonstrating exceptional performance in
            identifying spam messages.
          </>
        ),
        icon: Award,
      },
      {
        title: "Brain Dead Hackathon 2025 (2025)",
        organization:
          "Indian Institute of Engineering Science & Technology, Shibpur",
        year: "2025",
        description: (
          <>
            Achieved
            <span>
              {" "}
              <span className="font-bold text-slate-800 dark:text-white">
                {" "}
                First Place{" "}
              </span>
            </span>{" "}
            in the Instruo Machine Learning Hackathon, showcasing advanced
            skills in{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              LLM Fine-tuning for Text Summarisation
            </span>{" "}
            and{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              IPL Data Analysis
            </span>{" "}
            with Predictions.
          </>
        ),
        icon: Trophy,
      },
      // {
      //   title: "Professional Certification",
      //   organization: "Certifying Body",
      //   year: "2021",
      //   description:
      //     "Details about this professional certification and what skills it validates.",
      //   icon: Briefcase,
      // },
    ],
    academic: [
      {
        title: "Secondary Education",
        organization: "Vivekananda Mission School, Joka ",
        year: "2020",
        // Use JSX for description to allow bold styling
        description: (
          <>
            With a focus on{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              Science, Mathematics & Computer Science
            </span>
            , I completed my secondary education with a strong academic record,
            laying the foundation for my future studies in engineering. Scored{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              94%
            </span>{" "}
            in{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              ICSE Board Examination
            </span>
            .
          </>
        ),
        icon: BookOpen,
      },
      {
        title: "Higher Secondary Education",
        organization: "Vivekananda Mission School, Joka",
        year: "2022",
        description: (
          <>
            During my higher Secondary Education I focused on my{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              IIT-JEE Preparation
            </span>
            . Heavily invested time in learning and enjoying the core concepst
            of{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              Physics, Chemistry & Mathematics
            </span>
            . Scored{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              96%
            </span>{" "}
            in{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              ISC Board Examination
            </span>
            .
          </>
        ),
        icon: BookOpen,
      },
      {
        title: "Joint Entrance Examination",
        organization: "JOSAA, New Delhi",
        year: "2022",
        description: (
          <>
            Successfully qualified the Joint Entrance Examination (JEE) with{" "}
            <span className="font-bold text-slate-800 dark:text-white">
              98 percentile in JEE Mains
            </span>{" "}
            , securing admission to the prestigious Indian Institute of
            Engineering Science and Technology, Shibpur."
          </>
        ),
        icon: Award,
      },
    ],
    other: [
      {
        title: "Research Recognition",
        organization: "Community Organization",
        year: "2023",
        description:
          "Recognition received for contributions to the community or volunteer work.",
        icon: Trophy,
      },
      {
        title: "Special Achievement",
        organization: "Relevant Organization",
        year: "2022",
        description:
        "Details about a special achievement that doesn't fit into professional or academic categories.",
        icon: Award,
      },
    ],
  };
  interface AchievementProps {
    achievement: {
      title: string;
      organization: string;
      year: string;
      description: any;
      icon: React.ElementType;
    };
  }

  // Animation wrapper for fade-in on scroll
  const AnimatedAchievementCard = ({ achievement }: AchievementProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(node);

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <AchievementCard achievement={achievement} />
      </div>
    );
  };

  const AchievementCard = ({ achievement }: AchievementProps) => {
    const Icon = achievement.icon;

    return (
      <Card
        className="overflow-hidden card-hover border-l-4 border-portfolio-blue
      hover:shadow-slate-400
      dark:hover:shadow-purple-300
      shadow-md
      transition-all-0 duration-300 ease-in-out
      dark:border-indigo-500"
      >
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <div className="bg-blue-50 p-2 rounded-md">
            <Icon className="h-5 w-5 text-portfolio-blue" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl">{achievement.title}</CardTitle>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-stone-200">
              <CardDescription>{achievement.organization}</CardDescription>
              <Badge variant="outline" className="w-fit">
                {achievement.year}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-stone-200">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    );
  };
  
  // Add these imports at the top of your file

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl page-title text-center mb-12">
          My Achievements
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-center mb-12">
          A showcase of my{" "}
          <span className="italic text-xl font-weight-bold text-portfolio-blue dark:text-white">
            Competitive Edge
          </span>{" "}
          ,{" "}
          <span className="italic text-xl font-weight-bold text-portfolio-blue dark:text-white">
            Academic Excellence
          </span>{" "}
          &{" "}
          <span className="italic text-xl font-weight-bold text-portfolio-blue dark:text-white">
            Research Recognitions
          </span>{" "}
          throughout my career journey.
        </p>

        <Tabs
          defaultValue="competitions"
          className="max-w-4xl mx-auto text-slate-200"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger
                value="competitions"
                className="text-sm md:text-base"
              >
                Certifications
              </TabsTrigger>
              <TabsTrigger value="academic" className="text-sm md:text-base">
                Academic
              </TabsTrigger>
              <TabsTrigger value="other" className="text-sm md:text-base">
                Research
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="competitions" className="animate-fade-in">
            <div className="grid gap-6">
              {achievementsData.competitions.map((achievement, index) => (
                <AnimatedAchievementCard key={index} achievement={achievement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academic" className="animate-fade-in">
            <div className="grid gap-6">
              {achievementsData.academic.map((achievement, index) => (
                <AnimatedAchievementCard key={index} achievement={achievement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="animate-fade-in">
            <div className="grid gap-6">
              {achievementsData.other.map((achievement, index) => (
                <AnimatedAchievementCard key={index} achievement={achievement} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AchievementsPage;
