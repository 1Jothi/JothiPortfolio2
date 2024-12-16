import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";
import Download from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold  text-white ml-28">
              Nationsl Level Workshop ON [FLUTTER]
            </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Participat on March 2nd, 2023
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400">
            "National Level Workshop Participant: Immersed in an exclusive national-level workshop 
            focused on Flutter, mastering its intricacies for cross-platform app development. 
            Certified for adept understanding and application of Flutter's cutting-edge features in
             building dynamic and responsive mobile applications."

            </p>



            <a
            href={require("../../assets/files/FLUTTER Certificate .pdf")}
            download={"Jothi's Flutter Certificate"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download Certificate <DownloadIcon />
          </a>




          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Nationsl Level Workshop ON [KOTLIN]
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Participat on October 14th, 2022
            </time>
            <p class="text-base font-normal text-gray-400">
            National Level Workshop Participant:   <br></br> Actively immersed in a prestigious workshop at the 
            national level, specializing in Kotlin—a versatile programming language. Certified for my commitment to mastering
             Kotlin's advanced features and enhancing my expertise in modern software development.
            </p>
           

            <a
            href={require("../../assets/files/KOTLIN.pdf")}
            download={"Jothi's KOTLIN  Certificate"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download Certificate <DownloadIcon />
          </a>







          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            JAVA Full Stack development
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              2024
            </time>
            <p class="text-base font-normal text-gray-400">
            JavaFullStackDevelopmentCourse   <br></br> Completed comprehensive Java Full Stack course, 
            proficient in both front-end and back-end development. Ready to leverage skills 
            in creating dynamic and robust web applications.
            </p>
           

            <a
            href={require("../../assets/files/JavaFullstack.pdf")}
            download={"Jothi's Fullstack  Certificate"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download Certificate <DownloadIcon />
          </a>



{/*        </li>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>



            < h3 class="mb-1 text-lg font-semibold text-white">
              Frontend Development Libraries
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on December 9, 2022
            </time>
            <p class="text-base font-normal text-gray-400">
              Learns how to style your site quickly with Bootstrap. I also learn
              how to add logic to your CSS styles and extend them with Sass.
              Later, I also built a shopping cart and other applications to
              learn how to create powerful Single Page Applications (SPAs) with
              React and Redux.
            </p>


            <a
            href={require("../../assets/files/MS office .pdf")}
            download={"Jothi's Digital Literacy Training Certificate"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download Certificate <DownloadIcon />
          </a>

  */}
          

          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={65} />
            <BarGraph name={"ReactJs"} percent={75} />
            <BarGraph name={"Canva"} percent={60} />
            <BarGraph name={"Java"} percent={80} />
            <BarGraph name={"Adobe Photoshop"} percent={60} />
            <BarGraph name={"HTML"} percent={85} />
            <BarGraph name={"CSS"} percent={85} />
            <BarGraph name={"My Sql"} percent={60} />
            <BarGraph name={"MongoDb"} percent={65} />
            <BarGraph name={"GitHub"} percent={75} />
            <BarGraph name={"SpringBoot"} percent={40} />
            <BarGraph name={"MsOffice"} percent={65} />
          </div>

          <a
            href={require("../../assets/files/Resume.pdf")}
            download={"Jothi's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
