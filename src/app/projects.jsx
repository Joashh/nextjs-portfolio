'use client';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useRef, useState, useEffect } from "react";

export default function Projects({ currentProject, setCurrentProject }) {
  const projects = [
    {
      image: "images/dysg.png",
      title: "Potential Dysgraphia Detection Tool (Prototype)",
      description:
        "I developed and trained a model that can detect potential dysgraphia using handwriting as input. The model assesses features such as stroke patterns, character recognition, and letter alignment. It was created using PyTesseract and other machine learning techniques.",
      githubLink: "https://github.com/Joashh/Dysgraphia-Detection-Prototype-Python-Pycharm-Project?tab=readme-ov-file",
    },
    {
      image: "images/cpaf.jpg",
      title: "Intranet System College of Public Affairs and Development - UPLB",
      description: "I created a web-based intranet system using Filament in Laravel. The system is designed to manage the college's documents such as researchers, training organizes, awards, and other important documents.",
      githubLink: "https://github.com/Joashh/laravel-cpaf",
    },
    {
      image: "images/robot.jpg",
      title: "Robot Line Follower Arduino",
      description: "I developed a robot that can follow a line using Arduino. The robot uses a machine learning technique that classify its movement. The project was created using Arduino IDE and C++ programming language with the help of ESP Wifi Module.",
      githubLink: "https://github.com/Joashh/-Robot-Line-Follower?tab=readme-ov-file",
    },
    {
      image: "images/appdev.png",
      title: "Adaptive Learning Game for Kids using Android Studio",
      description: "This application is an Android educational game built with Android Studio, designed to help children develop cognitive skills through interactive quizzes that adapt in real time.  The game syncs data with a local backend using XAMPP for storage and tracking.",
      githubLink: "https://github.com/Joashh/Adaptive-Game-Mobile-Application",
    },
    {
      image: "images/proj1.png",
      title: "E-Guess 8.5",
      description: "E-Guess is a desktop application built with C# and Visual Studio that uses adaptive algorithms to assess and enhance children's strength and skills. Designed for learning and play, it adjusts difficulty in real time based on user performance.",
      githubLink: "https://github.com/Joashh/quiz-game",
    },
    {
      image: "images/aa.jpg",
      title: "Traffic Simulation in GAMMA",
      description: "This project simulates urban traffic flow in the GAMA Platform using Agent-Based Modeling, with agents like vehicles, roads, and traffic lights to study changing traffic patterns.",
      githubLink: "https://github.com/Joashh/Traffic-Simulation",
    },
    {
      image: "images/chatbot.png",
      title: "NLP-Chatbot: EnrollEase LSPU",
      description: "A simple chatbot built with Streamlit and Natural Language Processing (NLP) to automate and streamline student inquiries for LSPU Enrollment.",
      githubLink: "https://github.com/Joashh/NLP-Chatbot/tree/main",
    },
  ];

  // Track previous project index to get direction (for slide animation)
  const previousIndex = useRef(currentProject);
  const direction = currentProject > previousIndex.current ? 1 : -1;
  previousIndex.current = currentProject;

  // Track if screen is small (max-sm)
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
    }
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Variants for large screens (slide up/down)
  const slideVariants = {
    initial: (dir) => ({ y: dir * 0, opacity: 0 }),
    animate: { y: 0, opacity: 1 },
    exit: (dir) => ({ y: dir * -100, opacity: 0 }),
  };

  // Variants for small screens (fade only)
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Pick variants based on screen size
  const variants = isSmallScreen ? fadeVariants : slideVariants;

  return (
    <>
      <div className="relative w-full h-full max-h-full max-sm:h-auto max-sm:min-h-120 ">
        <div>
          <h1 className=" sm:hidden md:hidden w-full font-bold text-3xl pl-6 pt-3 2xl:pl-16 2xl:text-5xl max-sm:h-auto max-sm:text-sm max-sm:text-center text-blue-300 max-sm:pl-0 max-sm:pt-0 max-sm:pb-2">
            DEVELOPED PROJECTS
          </h1>
        </div>
        <div className="flex flex-col overflow-hidden h-full max-sm:rounded-lg max-sm:min-h-120 max-sm:max-h-120 ">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full h-full flex flex-col max-sm:min-h-120 max-sm:h-120 flex-grow "
            >


              <img
                src={projects[currentProject].image}
                alt={`project${currentProject + 1}`}
                className="w-full object-cover max-sm:h-60 max-md:h-full  "
              />

              {/* Overlay container */}
              <div
                className=" absolute bottom-0 left-0 w-full h-full max-sm:from-gray-800 max-md:to-transparent
    bg-gradient-to-t from-black to-transparent
    flex flex-col justify-end p-4
    max-sm:max-h-60 max-sm:min-h-60 max-sm:bg-black max-sm:p-5 "
              >
                <div>
                  <div
                    className="flex flex-row gap-2 justify-center pb-4 md:hidden
        "
                  >
                    {projects.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer max-sm:h-1 max-sm:shadow-sm max-sm:shadow-black ${index === currentProject ? "bg-blue-500 " : "bg-gray-500 "
                          } transition-all`}
                      />
                    ))}
                  </div>
                  <h1 className="text-white text-xl font-semibold pb-2 md:p-4 max-sm:max-h-14 max-sm:min-h-14 max-sm:text-sm max-sm:text-center ">
                    {projects[currentProject].title}
                  </h1>
                  <p className="w-1/2 text-justify text-white md:p-4 max-sm:w-full max-sm:text-xs  max-sm:min-h-20 max-sm:max-h-20  ">
                    {projects[currentProject].description}
                  </p>

                  <div className="flex justify-between items-center pt-3 md:p-4 max-sm:gap-2">
                    {/* Left-side buttons */}
                    <div className="flex gap-4">
                      <button className="bg-gray-800 p-3 rounded-md shadow-lg max-sm:text-xs hover:bg-gray-700 active:bg-gray-900 text-white">
                        Documentation
                      </button>
                      <button
                        className="bg-gray-800 p-3 max-sm:text-xs rounded-md shadow-lg hover:bg-gray-700 active:bg-gray-900 text-white"
                        onClick={() => window.open(projects[currentProject].githubLink, "_blank")}
                      >
                        Github
                      </button>
                    </div>

                    {/* Right-side arrows */}
                    <div className="flex gap-3">
                      <button
                        className="xl:hidden max-sm:block md:hidden"
                        onClick={() =>
                          setCurrentProject((prev) => (prev + 1) % projects.length)
                        }
                      >
                        <ArrowUpCircleIcon className="text-gray-300 h-10" />
                      </button>
                      <button
                        className="xl:hidden max-sm:block md:hidden"
                        onClick={() =>
                          setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
                        }
                      >
                        <ArrowUpCircleIcon className="text-gray-300 h-10 rotate-180" />
                      </button>
                    </div>
                  </div>


                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div
          className=" max-md:hidden 
          absolute top-1/2 transform -translate-y-1/2 right-4
          flex flex-col gap-2
          max-sm:flex-row max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2
        "
        >
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full cursor-pointer max-sm:h-1 max-sm:shadow-sm max-sm:shadow-black ${index === currentProject ? "bg-blue-500 " : "bg-gray-500 "
                } transition-all`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
