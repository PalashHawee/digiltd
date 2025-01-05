import React, { useState } from "react";
import "animate.css";

const AboutMeSection = () => {
  const [isReadMore, setIsReadMore] = useState({
    foundation: false,
    leadership: false,
    pioneering: false,
    contributions: false,
    humanRights: false,
    recognitions: false,
  });

  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleReadMore = (section) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
    setIsImageExpanded(!isImageExpanded); // Toggle image expansion
  };

  return (
    <section className="bg-gradient-to-b from-customBlue-800 to-customGreen-800 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col items-center">
        {/* Image Section */}
        <div className="relative group flex flex-col items-center mb-8">
          {/* Main Profile Picture */}
          <div
            className={`relative overflow-hidden rounded-full w-64 h-64 transition-all duration-500 transform ${
              isImageExpanded ? "scale-125" : "scale-100"
            }`}
          >
            <img
              src="/images/ceo.jpeg" // Replace with your image link
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 12 Years of Success */}
          {/* <div className="mt-6 text-center">
            <p className="text-5xl font-bold text-blue-400">12</p>
            <p className="text-lg">Successful Years</p>
          </div> */}
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-3/4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate__animated animate__fadeIn">
            The Inspiring Corporate Achievements of Engr. Farzana Abedin, FIEB
          </h2>
          <p className="mb-6 text-gray-300 text-center animate__animated animate__fadeIn">
            Engr. Farzana Abedin, FIEB, is a name synonymous with leadership,
            innovation, and impactful change across multiple sectors in
            Bangladesh. From engineering to education, media, and agriculture,
            her journey reflects a versatile, forward-thinking approach to
            corporate success. Her relentless pursuit of excellence, combined
            with her dedication to societal progress, makes her one of the most
            inspiring figures in Bangladesh&apos;s corporate world today.
          </p>

          {/* Subsections */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 animate__animated animate__fadeIn">
              Building a Strong Foundation in Engineering and Public Health
            </h3>
            <p className="text-gray-300">
              {isReadMore.foundation ? (
                <>
                  Engr. Abedin’s rise to prominence began with a solid academic
                  foundation. She earned a Bachelor's degree in Metallurgical
                  Engineering from Bangladesh University of Engineering &amp;
                  Technology (BUET), one of the country's most prestigious
                  institutions. Later, she expanded her expertise by pursuing a
                  Master’s in Public Health (MPH) from North South University,
                  Dhaka. Her diverse academic background empowered her to bridge
                  the gap between technical disciplines and health, positioning
                  her to take on leadership roles in various industries.
                  <br />
                  <span
                    onClick={() => toggleReadMore("foundation")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <>
                  Engr. Abedin’s rise to prominence began with a solid academic
                  foundation...
                  <span
                    onClick={() => toggleReadMore("foundation")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 animate__animated animate__fadeIn">
              Leadership in the Field of Education
            </h3>
            <p className="text-gray-300">
              {isReadMore.leadership ? (
                <>
                  One of Engr. Abedin’s most remarkable achievements is her work
                  in the education sector. Currently, she serves as the Chairman
                  & Head of School at Stanford Universal School in Dhaka. Since
                  2020, she has been at the helm of this esteemed institution,
                  leading it through a period of academic excellence and growth.
                  Her focus on building a strong, student-centered learning
                  environment has transformed Stanford Universal School into a
                  beacon of quality education in Bangladesh.
                  <br />
                  Engr. Abedin’s leadership in education is not limited to her
                  current role. She has also served as Vice Principal at Oxford
                  International School, where she was responsible for overseeing
                  academic and operational activities at two of its major
                  campuses. Her experience in curriculum development, faculty
                  recruitment, and student welfare helped shape the futures of
                  thousands of students and contributed to the school’s
                  reputation as a leading institution in Dhaka.
                  <br />
                  <span
                    onClick={() => toggleReadMore("leadership")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <>
                  One of Engr. Abedin’s most remarkable achievements is her work
                  in the education sector...
                  <span
                    onClick={() => toggleReadMore("leadership")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 animate__animated animate__fadeIn">
              Pioneering Diligence Universal Limited and Diligence Agro
            </h3>
            <p className="text-gray-300">
              {isReadMore.pioneering ? (
                <>
                  In 2018, Engr. Abedin expanded her entrepreneurial spirit by
                  venturing into agro-business. She started a modest
                  agricultural initiative near Dhaka, which quickly grew into a
                  larger enterprise. Recognizing the need to integrate her
                  business ventures, she founded Diligence Universal Limited, a
                  company that manages her diverse portfolio of businesses,
                  including education and agriculture. Under Diligence Universal
                  Limited, Engr. Abedin launched Diligence Agro, a company
                  dedicated to modernizing agriculture in Bangladesh. Through
                  this initiative, she has brought innovative techniques to the
                  agricultural sector, focusing on sustainable farming practices
                  and business development. Her leadership in agro-business has
                  not only contributed to the local economy but also positioned
                  her as a key player in Bangladesh&apos;s efforts toward
                  agricultural modernization.
                  <br />
                  <span
                    onClick={() => toggleReadMore("pioneering")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <>
                  In 2018, Engr. Abedin expanded her entrepreneurial spirit by
                  venturing into agro-business...
                  <span
                    onClick={() => toggleReadMore("pioneering")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 animate__animated animate__fadeIn">
              Contributions to Journalism and Media
            </h3>
            <p className="text-gray-300">
              {isReadMore.contributions ? (
                <>
                  In addition to her achievements in education and business,
                  Engr. Abedin has made significant contributions to the media
                  industry. She serves as the Executive Editor of ‘The Daily
                  Sokaler Somoy’, a prominent Bangladeshi newspaper, where she
                  plays a critical role in shaping the editorial direction and
                  content strategy. Additionally, she holds the position of
                  Advisory Editor at ‘The Daily Sangbad Protidin’, contributing
                  to the country's journalistic landscape with a focus on
                  responsible reporting.
                  <br />
                  Beyond print media, Engr. Abedin has expanded her influence
                  into broadcasting. She is the Director of Nagorik TV, a
                  USA-based Bangladeshi news channel, where she works to connect
                  the Bangladeshi diaspora with their homeland through accurate
                  news and engaging content. Her media career showcases her
                  adaptability and commitment to high journalistic standards.
                  <br />
                  <span
                    onClick={() => toggleReadMore("contributions")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <>
                  In addition to her achievements in education and business...
                  <span
                    onClick={() => toggleReadMore("contributions")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 animate__animated animate__fadeIn">
              Advocacy for Human Rights and Women Empowerment
            </h3>
            <p className="text-gray-300">
              {isReadMore.humanRights ? (
                <>
                  Engr. Abedin is also an active advocate for human rights,
                  particularly women&apos;s empowerment. Through her role as a
                  Board Member of the Bangladesh Human Rights Commission, she
                  has been involved in numerous initiatives aimed at improving
                  the quality of life for marginalized communities across the
                  country. Additionally, she works closely with various
                  non-governmental organizations (NGOs) to support women in
                  leadership roles, particularly in industries where women are
                  traditionally underrepresented.
                  <br />
                  <span
                    onClick={() => toggleReadMore("humanRights")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <>
                  Engr. Abedin is also an active advocate for human rights...
                  <span
                    onClick={() => toggleReadMore("humanRights")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 animate__animated animate__fadeIn">
              Recognitions and Achievements
            </h3>
            <p className="text-gray-300">
              {isReadMore.recognitions ? (
                <>
                  Engr. Abedin's professional journey has been widely recognized
                  by various national and international organizations. She has
                  received numerous awards for her contributions to business,
                  education, and media, solidifying her status as one of
                  Bangladesh&apos;s top corporate leaders. Among these are the
                  prestigious "Best Woman Entrepreneur" award from the National
                  Business Awards and recognition from international bodies for
                  her exemplary leadership.
                  <br />
                  <span
                    onClick={() => toggleReadMore("recognitions")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <>
                  Engr. Abedin's professional journey has been widely
                  recognized...
                  <span
                    onClick={() => toggleReadMore("recognitions")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
