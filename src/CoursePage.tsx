import { useState } from "react";
// import '/index.css';

const CoursePage = () => {
  // States to manage dropdown visibility for each section
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);
  const [isBlenderOpen, setIsBlenderOpen] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  

  return (
    <div className="">
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <aside className="left bg-black text-white p-4">
          <div className="flex flex-col items-start">
            <h3>
              <i>Course</i>
            </h3>
            <h2 className="text-xl font-semibold mb-6">
              Blender 3D Fundamentals
            </h2>
          </div>
          <br />
          <nav>
            <ul className="space-y-4">
              {/* Introduction Section */}
              <li>
                <button
                  className="font-bold text-white-500 w-full text-left flex justify-between items-center"
                  onClick={() => setIsIntroductionOpen(!isIntroductionOpen)}
                >
                  Course Introduction{" "}
                  <span>{isIntroductionOpen ? "▲" : "▼"}</span>
                </button>
                {isIntroductionOpen && (
                  <ol className="ml-4 mt-2 space-y-2 list-decimal list-inside">
                    {[
                      "Introduction",
                      "Downloading Blender",
                      "Setting and preferences",
                      "Blender preferences",
                    ].map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer text-left px-4 py-2 transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-pink-500"
                            : "text-white"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </li>

              {/* Blender 3D Section */}
              <li>
                <button
                  className="font-bold text-white-500 w-full text-left flex justify-between items-center"
                  onClick={() => setIsBlenderOpen(!isBlenderOpen)}
                >
                  Basics Of Blender 3D{" "}
                  <span>{isBlenderOpen ? "▲" : "▼"}</span>
                </button>
                {isBlenderOpen && (
                  <ol className="ml-4 mt-2 space-y-2 list-decimal list-inside">
                    {[
                      "Introduction",
                      "Downloading Blender",
                      "Setting and preferences",
                      "Blender preferences",
                    ].map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer text-left px-4 py-2 transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-pink-500"
                            : "text-white"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </li>

              {/* Mess Monitoring Section */}
              <li>
                <button
                  className="font-bold text-white-500 w-full text-left flex justify-between items-center"
                  onClick={() => setIsPreferencesOpen(!isPreferencesOpen)}
                >
                  Mess Monitoring{" "}
                  <span>{isPreferencesOpen ? "▲" : "▼"}</span>
                </button>
                {isPreferencesOpen && (
                  <ol className="ml-4 mt-2 space-y-2 list-decimal list-inside">
                    {[
                      "Introduction",
                      "Downloading Blender",
                      "Setting and preferences",
                      "Blender preferences",
                    ].map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer text-left px-4 py-2 transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-pink-500"
                            : "text-white"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </li>

              {/* Blender Interface Section */}
              <li>
                <button className="font-bold text-white-500 w-full text-left">
                  Blender Interface
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main p-8 rounded-lg shadow-lg p-6 bg-white ">
          <div className="">
            {/* Course Video */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=At9qW8ivJ4Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <p className="mt-4 text-gray-600">
              Learn The Basics of 3D in Blender with a Project Based Approach.
            </p>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-700 mt-2">
                Welcome to the exciting world of Blender 3D! In this
                comprehensive course, we will dive into the fundamentals of
                Blender, equipping you with the essential knowledge and skills
                to create stunning 3D projects.
              </p>
            </div>

            {/* Course Details */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">Lessons</h4>
                <p>128</p>
              </div>
              <div>
                <h4 className="font-semibold">Duration</h4>
                <p>56h 28m</p>
              </div>
              <div>
                <h4 className="font-semibold">Skill Level</h4>
                <p>Beginner</p>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-1/4 bg-gray-100 p-4">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold">$15.99</h2>
            <p className="text-gray-500 line-through">$39.99</p>
            <button className="w-full bg-purple-500 text-white py-2 rounded mt-4">
              Add to Cart
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded mt-2">
              Buy Now
            </button>

            {/* Additional Course Info */}
            <div className="mt-6">
              <h4 className="font-semibold">Course Includes:</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>56 hours on-demand video</li>
                <li>6 Articles</li>
                <li>8 Downloadable resources</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePage;
