import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Project Descriptions must be stored in a HashMap and rendered using map function //
const projectDescriptions = {
  project1:
    "A Spam Detection System using Bi-directional LSTM technology to filter out unwanted emails.",
  project2:
    "A Realtime Code Editor and LLM-powered code reviewing tool that enhances coding efficiency.",
  project3:
    "TODO Application that allows users to manage tasks with features like reminders and priority settings. Also includes a collaborative feature for team projects.",
  project4:
    "Simple but beautiful Tic-Tac-Toe game with a user-friendly interface and smooth gameplay.",
};

const ProjectPage = () =>{

    return(
      <>
        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif text-portfolio-navy dark:text-gray-100">
              Featured{" "}
              <span className="text-portfolio-blue dark:text-indigo-400">
                Projects
              </span>
            </h2>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4].map((project) => (
                <Card
                  key={project}
                  className="overflow-hidden card-hover dark:bg-gray-700 dark:border-gray-600"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                    <span className="text-2xl text-blue-500 dark:text-indigo-300 font-semibold">
                      Project {project}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-portfolio-navy dark:text-gray-100">
                      Project Title
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {projectDescriptions[`project${project}`] ||
                        "This is a placeholder for project description."}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 text-portfolio-blue dark:text-indigo-300 hover:text-blue-700 dark:hover:text-indigo-200"
                    >
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}

export default ProjectPage;