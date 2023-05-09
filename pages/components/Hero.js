// Next JS
import styles from "../../styles/Hero.module.scss";
import clsx from "clsx";
import { Box, Container } from "@chakra-ui/react";
import { Avatar, Badge, Text, Link } from "@chakra-ui/react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import { FaDribbble, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

// Framer
// Skills Card
const Skills = [
  {
    imageUrl: "fe.svg",
    imageAlt: "HTML & CSS Logo",
    skillName: "Front-End",
    skillLevel: "Expert",
    badgeColor: "yellow.300",
    bg: "transparent",
    badgeTextColor: "black",
  },
  {
    imageUrl: "nextjs.png",
    imageAlt: "Nextjs Logo",
    skillName: "NextJS",
    skillLevel: "Beginner",
    badgeColor: "cyan.100",
    bg: "transparent",
    badgeTextColor: "black",
  },
  {
    imageUrl: "angular.svg",
    imageAlt: "Angular Logo",
    skillName: "Angular",
    skillLevel: "Competent",
    badgeColor: "pink.700",
    bg: "transparent",
    badgeTextColor: "white",
  },
  {
    imageUrl: "nestjs.svg",
    imageAlt: "NestJS Logo",
    skillName: "NestJS",
    skillLevel: "Good",
    badgeColor: "orange.500",
    badgeTextColor: "white",
    bg: "transparent",
  },
  {
    imageUrl: "none",
    imageAlt: "Networking Engineer",
    skillName: "Network Engineer",
    skillLevel: "Beginner",
    badgeColor: "cyan.100",
    badgeTextColor: "black",
    bg: "purple.400",
  },
  {
    imageUrl: "none",
    imageAlt: "Back End",
    skillName: "Back-End",
    skillLevel: "Good",
    badgeColor: "orange.500",
    badgeTextColor: "white",
    bg: "red.700",
  },
];
const Hero = () => {
  return (
    <>
      <div
        className={clsx(
          styles.heroContainer,
          "flex-row overflow-hidden flex  h-[80%] "
        )}
      >
        <div className="w-1/2 border-b-[10px] border-l-[10px]  border border-black">
          <div
            className={clsx(
              styles.heroBg,
              "h-[60%] w-full border-b-[10px]  border-black "
            )}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={false}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              navigation={false}
              modules={[Autoplay, Navigation]}
              className={styles.swiper}
            >
              <SwiperSlide className={clsx(styles.swiperSlide, "w-full")}>
                <div
                  className={clsx(
                    styles.heroInfo,
                    "h-full w-full  justify-center text-center flex flex-col"
                  )}
                >
                  <span>Design.</span>
                  <span>Interact.</span>
                  <span>Have Fun.</span>
                  <p>Boring Is not cool. Be cool! 😎</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={clsx(
              styles.bgMain,
              styles.infoDiv,
              "h-[40%] flex flex-col text-center  w-full p-10 pt-6"
            )}
          >
            <div className={clsx(styles.aboutContainer, "")}>
              <h1>About Me</h1>
              <p>
                Hello, my name is Majd and I am a Front-end Developer with a
                passion for UI/UX design. I am currently studying for a
                Bachelor&apos;s degree in Network and Information Security at
                UTM. I began coding in high school with the assistance of my
                brother and online resources such as YouTube. To further my
                knowledge in networking, I am pursuing a Cisco - CCNA
                certification. If you are interested in hiring me, please feel
                free to reach out <a href="mailto:majdalali@proton.me">HERE</a>{" "}
                or check my <Link href="/Resume">Resume</Link> for more info.
              </p>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            styles.secContainer,
            " w-1/2 flex flex-row  border-l-[10px] border-b-[10px] border-black"
          )}
        >
          <div
            className={clsx(
              styles.skillBg,
              "w-1/2 border-r-[10px] py-10 border-black"
            )}
          >
            <div
              className={clsx(
                styles.skillsLable,
                " h-full  text-center text-[2rem] "
              )}
            >
              <span>Skills</span>
              <Container marginTop={5} className={styles.containerSkills}>
                {Skills.map(
                  ({
                    imageUrl,
                    imageAlt,
                    skillName,
                    skillLevel,
                    bg,
                    badgeColor,
                    badgeTextColor,
                  }) => (
                    <Box
                      borderRadius="xl"
                      className={styles.skillsDiv}
                      w="90%"
                      boxShadow="base"
                      p={3}
                      color="white"
                      key="😎"
                    >
                      <div className={styles.wrapSkillsCard}>
                        <Box className={styles.wrapAvatarText}>
                          <Avatar
                            className={styles.avatarBG}
                            bg={bg}
                            name={skillName}
                            src={imageUrl}
                            alt={imageAlt}
                          />

                          <Text alignItems="left" fontSize="md">
                            {skillName}
                          </Text>
                        </Box>
                        <Badge
                          h="min-content"
                          variant="solid"
                          bg={badgeColor}
                          color={badgeTextColor}
                        >
                          {skillLevel}{" "}
                        </Badge>
                      </div>
                    </Box>
                  )
                )}
              </Container>
            </div>
            <div className={clsx(styles.skillsCarousle, "h-[90%]  ")}>
              {/* <Swiper
                direction={"vertical"}
                slidesPerView={3}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className={styles.swiper}
                spaceBetween={40}
                modules={[Pagination, Navigation]}
              >
                  <SwiperSlide  className={styles.swiperSlideVer}>
                    Slide 1
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlideVer}>
                    Slide 2
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlideVer}>
                    Slide 3
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlideVer}>
                    Slide 4
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlideVer}>
                    Slide 5
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlideVer}>
                    Slide 6
                  </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
          <div className=" w-1/2 flex  flex-col border-r-[10px]   border-black">
            <div
              className={clsx(
                styles.caro,
                "h-1/2  flex justify-center items-center  overflow-hidden border-black border-b-[10px] pt-2   text-center "
              )}
            >
              <span
                className={clsx(
                  styles.spanStyle,
                  "text-[2rem] select-none uppercase"
                )}
              >
                carousel
              </span>
              {/* <div
                className={clsx(
                  styles.spanStyle,
                  "h-[80%] overflow-y-scroll   "
                )}
              >
                <p
                  className={clsx(styles.pScroll, "text-red-900 text-justify")}
                ></p>
              </div> */}
            </div>
            <div
              className={clsx(
                styles.iconContainer,
                "h-1/4 flex flex-col text-3xl bg-white  "
              )}
            >
              <div
                className={clsx(
                  styles.iconPDiv,
                  " w-full flex flex-row    h-1/2"
                )}
              >
                <div
                  className={clsx(
                    styles.iconDiv,
                    "w-1/2 h-full flex justify-center items-center"
                  )}
                >
                  <a target="_blank" href="https://dribbble.com/majdalali">
                    <FaDribbble />
                  </a>
                </div>
                <div
                  className={clsx(
                    styles.iconDiv,
                    "w-1/2  flex justify-center items-center border-black border-l-[10px]"
                  )}
                >
                  <a target="_blank" href="https://www.twitter.com/majdalali">
                    <FaTwitter />
                  </a>
                </div>
              </div>
              <div
                className={clsx(
                  styles.iconPDiv,
                  " w-full flex flex-row  h-1/2"
                )}
              >
                <div
                  className={clsx(
                    styles.iconDiv,
                    "w-1/2 flex justify-center items-center h-full"
                  )}
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/atmajdalali/"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div
                  className={clsx(
                    styles.iconDiv,
                    "w-1/2 flex justify-center items-center border-black border-l-[10px]"
                  )}
                >
                  <a target="_blank" href="https://github.com/Majdalali">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                styles.bgMain,
                styles.contactDiv,
                "h-1/4 justify-center flex flex-col items-center  "
              )}
            >
              <div className={styles.contactSpan}>
                <span className="select-none">Ready To Contact?</span>
                {/* <svg
                  width="200"
                  height="80"
                  viewBox="0 0 200 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M172.297 68.3088C173.234 68.9257 173.493 70.1854 172.876 71.1224L164.451 83.9186C163.834 84.8556 162.575 85.1151 161.638 84.4982L148.842 76.0733C147.905 75.4565 147.645 74.1968 148.262 73.2598C148.879 72.3228 150.139 72.0633 151.076 72.6802L162.175 79.9881L169.483 68.8884C170.1 67.9514 171.36 67.6919 172.297 68.3088Z"
                    fill="black"
                  />
                  <path
                    d="M1.5 20.2813C58.5 -8.71859 135.7 -12.8187 162.5 80.7813"
                    stroke="black"
                    stroke-width="3"
                  />
                </svg> */}
              </div>
              <button className={styles.contactBtn}>
                <a href="mailto:majdalali@proton.me">HMU:)</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
