import {
  Mark,
  Box,
  SimpleGrid,
  Text,
  Avatar,
  Button,
  SliderFilledTrack,
  SliderTrack,
  Slider,
  Badge,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import { FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbPhone, TbMail, TbLocation } from "react-icons/tb";
import { RxCheckCircled } from "react-icons/rx";
import { BsClockHistory } from "react-icons/bs";
const Resume = () => {
  return (
    <>
      <section class="w-screen h-screen fixed">
        <div class=" overflow-y-scroll w-screen h-screen">
          <div class=" max-w-screen-xl h-full m-auto ">
            <div className="PageContaineir p-10">
              <div className="TopSection flex flex-row">
                <div className="TSTitle flex-initial ">
                  <Text
                    fontSize="5xl"
                    fontWeight={"medium"}
                    fontFamily="Inter"
                    className="select-none"
                    letterSpacing={-0.9}
                    lineHeight={1.05}
                  >
                    TECH WIZARD{" "}
                    <span className="text-white hover:text-black animate-pulse">
                      IN TRAINING
                    </span>
                    <br />
                    PASSION AND{" "}
                    <Mark
                      bg="black"
                      px={2}
                      color="white"
                      className="underline italic font-bold"
                    >
                      EXPERIENCE.
                    </Mark>
                  </Text>
                </div>
                <div className="TSSocials flex-[2_2_0%] flex gap-2 pb-4 justify-end items-end flex-row">
                  <a
                    className="text-lg p-3 border-gray-200 border rounded-full "
                    href="#"
                  >
                    <FaDribbble />
                  </a>
                  <a
                    className="text-lg p-3 border-gray-200 border rounded-full "
                    target="_blank"
                    href="https://github.com/Majdalali"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-lg p-3 border-gray-200 border rounded-full "
                    target="_blank"
                    href="https://www.linkedin.com/in/engmajdalali/"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="LowerSection flex flex-row pt-10">
                <div className="LSLeftRow flex-1">
                  <div className="AvatarDiv w-44 ">
                    <Avatar
                      size="full"
                      src="https://bit.ly/broken-link"
                      bg={"black"}
                    />
                    <Text
                      pt={5}
                      fontSize="xl"
                      fontWeight={"semibold"}
                      fontFamily={"inter"}
                    >
                      Majd Alali
                    </Text>
                  </div>
                  <div className="ContactDetailsDiv w-5/6">
                    <div className="PEADetails">
                      <div className="ContactTextDiv border-b-2 border-black">
                        <Text
                          fontFamily={"Inter"}
                          fontWeight={"bold"}
                          pt={10}
                          fontSize="xl"
                        >
                          Contact
                        </Text>
                      </div>
                      <div className="PEACards flex pt-5 flex-row items-center  ">
                        <TbPhone fontSize={30} />
                        <Text fontSize="medium" fontFamily="Inter" pl={5}>
                          <span className="font-bold">Phone</span>
                          <br />
                          +60-17-695-1446
                        </Text>
                      </div>
                      <div className="PEACards flex flex-row pt-3 items-center  ">
                        <TbMail fontSize={30} />
                        <Text fontSize="medium" fontFamily="Inter" pl={5}>
                          <span className="font-bold">Email</span>
                          <br />
                          majdalali@proton.me
                        </Text>
                      </div>
                      <div className="PEACards flex flex-row pt-3 items-center ">
                        <TbLocation fontSize={30} />
                        <Text fontSize="medium" fontFamily="Inter" pl={5}>
                          <span className="font-bold">Address</span>
                          <br />
                          Johor, Malaysia
                        </Text>
                      </div>
                    </div>
                    <div className="PDEDetails pt-10">
                      <div className="PDECards  border-y-2 flex justify-between  border-black">
                        <Text
                          fontFamily={"Inter"}
                          fontWeight={"bold"}
                          fontSize="sm"
                          py={2}
                        >
                          PROFESSION
                        </Text>
                        <Text
                          fontFamily={"Inter"}
                          fontWeight={"bold"}
                          fontSize="sm"
                          py={2}
                        >
                          NETWORKING
                        </Text>
                      </div>
                      <div className="PDECards border-b-2 flex justify-between  border-black">
                        <Text
                          fontFamily={"Inter"}
                          fontWeight={"bold"}
                          fontSize="sm"
                          py={2}
                        >
                          DATE OF BIRTH
                        </Text>
                        <Text
                          fontFamily={"Inter"}
                          fontWeight={"bold"}
                          fontSize="sm"
                          py={2}
                        >
                          15 JANUARY 2000
                        </Text>
                      </div>
                      <div className="PDECards border-b-2 flex justify-between  border-black">
                        <Text
                          fontFamily={"Inter"}
                          fontWeight={"bold"}
                          fontSize="sm"
                          py={2}
                        >
                          EDUCATION
                        </Text>
                        <Text
                          fontFamily="Inter"
                          fontWeight="bold"
                          fontSize="sm"
                          py={2}
                        >
                          HIGHER EDUCATION
                        </Text>
                      </div>
                    </div>
                    <div className="ContactButton w-full pt-5">
                      <a href="mailto:majdalali@proton.me">
                        {" "}
                        <Button
                          w={"full"}
                          leftIcon={<TbMail />}
                          borderColor="#02020"
                          variant="outline"
                          borderRadius="0"
                        >
                          CONTACT ME
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="LSRightRow flex-[2_2_0%]">
                  <div className="LSRRTop">
                    <div className="LSRRTopTitle text-end border-b-2 border-black ">
                      <Text fontWeight="bold" fontFamily="Inter" fontSize="2xl">
                        EXPERIENCE
                      </Text>
                    </div>
                    <div className="border-b-4 pt-[2px] border-black "></div>
                    <div className="ExpCard pt-8 text-justify border-b pb-4 w-full">
                      <div className="Top flex  justify-between flex-row">
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          fontFamily="Inter"
                        >
                          UTM-eActivity Website
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="medium"
                          fontFamily="Inter"
                        >
                          2021
                        </Text>
                      </div>
                      <Text
                        fontSize="md"
                        fontWeight="light"
                        fontFamily="Inter"
                        pt={5}
                      >
                        Developed UTM eActivity website for System Development
                        subject in college. Led website design and development,
                        facilitating student socialization with event listings
                        and enrollment features. Gained experience in project
                        management, teamwork, and web development.
                      </Text>
                    </div>
                    <div className="ExpCard border-b pt-8 text-justify  pb-4 w-full">
                      <div className="Top flex  justify-between flex-row">
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          fontFamily="Inter"
                        >
                          Portfolio [MajdAlali.me]
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="medium"
                          fontFamily="Inter"
                        >
                          2023
                        </Text>
                      </div>
                      {/* <Text
                      fontSize="md"
                      fontWeight="light"
                      fontFamily="Inter"
                      pt={5}
                    >
                      Creating wireframe projects for innovative applications.
                      Improving customer relations and creating recruitment
                      campaigns for new positions. Working with a
                      well-coordinated team as remote work.
                    </Text> */}
                    </div>
                    <div className="ExpCard pt-8 text-justify  pb-4 w-full">
                      <div className="Top flex  justify-between flex-row">
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          fontFamily="Inter"
                        >
                          NetAcad Courses & Labs
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="medium"
                          fontFamily="Inter"
                        >
                          2021 - PRESENT
                        </Text>
                      </div>
                      <Text
                        fontSize="md"
                        fontWeight="light"
                        fontFamily="Inter"
                        pt={5}
                      >
                        <List spacing={3}>
                          <ListItem>
                            <ListIcon as={RxCheckCircled} color="green.500" />
                            CCNAv7: Introduction to Networks
                          </ListItem>
                          <ListItem>
                            <ListIcon as={RxCheckCircled} color="green.500" />
                            CCNAv7: Switching, Routing, and Wireless Essentials
                          </ListItem>
                          <ListItem>
                            <ListIcon as={RxCheckCircled} color="green.500" />
                            CCNAv7: Enterprise Networking, Security, and
                            Automation
                          </ListItem>
                          {/* You can also use custom icons from react-icons */}
                          <ListItem>
                            <ListIcon as={BsClockHistory} color="green.500" />
                            Network Security{" "}
                            <Badge variant="outline" colorScheme="teal">
                              Currently
                            </Badge>
                          </ListItem>
                        </List>
                      </Text>
                    </div>
                  </div>
                  <div className="LSRRSecond flex-col  flex xl:flex-row pt-5 justify-between text-end">
                    <div className="LSRRExperince w-full   xl:w-1/2 xl:mr-8">
                      <div className="border-b-2 border-black">
                        <Text
                          fontWeight="bold"
                          fontFamily="Inter"
                          fontSize="2xl"
                        >
                          EDUCATION
                        </Text>
                      </div>
                      <div className="border-b-4 pt-[2px] border-black "></div>
                      <div className="EduCard border-b pb-4 pt-8 text-left">
                        <div className="Top flex  justify-between flex-row">
                          <Text
                            fontSize="  "
                            fontWeight="bold"
                            fontFamily="Inter"
                          >
                            University of <br />
                            Technology, Malaysia
                          </Text>
                          <Text
                            fontSize="md"
                            fontWeight="medium"
                            fontFamily="Inter"
                          >
                            2019 - PRESENT
                          </Text>
                        </div>
                        <Text
                          fontSize="small"
                          fontWeight="light"
                          fontFamily="Inter"
                          pt={2}
                        >
                          Bachelor Of Computer Science (Computer Networks &
                          Security)
                        </Text>
                      </div>
                      <div className="EduCard pt-5 text-left">
                        <div className="Top flex  justify-between flex-row">
                          <Text
                            fontSize="  "
                            fontWeight="bold"
                            fontFamily="Inter"
                          >
                            Saudi Arabia schooling
                          </Text>
                          <Text
                            fontSize="md"
                            fontWeight="medium"
                            fontFamily="Inter"
                          >
                            2014 - 2018
                          </Text>
                        </div>
                        {/* <Text
                          fontSize="small"
                          fontWeight="light"
                          fontFamily="Inter"
                          pt={2}
                        >
                          Bachelor Of Computer Science (Computer Networks &
                          Security)
                        </Text> */}
                      </div>
                    </div>
                    <div className="LSRRSkills w-full ml-0 pt-6  xl:pt-0 xl:ml-8 xl:w-1/2">
                      <div className="border-b-2 border-black">
                        <Text
                          fontWeight="bold"
                          fontFamily="Inter"
                          fontSize="2xl"
                        >
                          LANGUAGES
                        </Text>
                      </div>
                      <div className="border-b-4 pt-[2px] border-black "></div>
                      <div className="LangCard pt-8">
                        <div className="SCNameP flex flex-row justify-between">
                          <Text
                            fontWeight="semibold"
                            fontFamily="Inter"
                            fontSize="lg"
                          >
                            Arabic{" "}
                            <Badge variant="outline" colorScheme="purple">
                              NATIVE
                            </Badge>
                          </Text>
                          <Text
                            fontWeight="semibold"
                            fontFamily="Inter"
                            fontSize="md"
                          >
                            100%
                          </Text>
                        </div>
                        <Slider cursor="default" isReadOnly defaultValue={100}>
                          <SliderTrack>
                            <SliderFilledTrack bg="black" />
                          </SliderTrack>
                        </Slider>
                      </div>
                      <div className="LangCard pt-5">
                        <div className="SCNameP flex flex-row justify-between">
                          <Text
                            fontWeight="semibold"
                            fontFamily="Inter"
                            fontSize="lg"
                          >
                            English
                          </Text>
                          <Text
                            fontWeight="semibold"
                            fontFamily="Inter"
                            fontSize="md"
                          >
                            99%
                          </Text>
                        </div>
                        <Slider cursor="default" isReadOnly defaultValue={99}>
                          <SliderTrack>
                            <SliderFilledTrack bg="black" />
                          </SliderTrack>
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="LSRRBottom pt-5">
                    <div className="LSRRTopTitle text-end border-b-2 border-black ">
                      <Text fontWeight="bold" fontFamily="Inter" fontSize="2xl">
                        HOBBIES
                      </Text>
                    </div>
                    <div className="border-b-4 pt-[2px] border-black "></div>
                    <div className="HobbiesP">
                      <Text
                        fontSize="md"
                        fontWeight="light"
                        fontFamily="Inter"
                        pt={5}
                      >
                        I am a person who likes challenges, undertakingg new
                        projects and learning new technologies.
                      </Text>
                    </div>
                    <div className="HobbiesBadges pt-5 select-none">
                      <SimpleGrid minChildWidth="130px" spacing="10px">
                        <Box
                          bg="white"
                          borderWidth="1px"
                          borderColor="black"
                          borderRadius="full"
                          height="30px"
                          fontFamily="inter"
                          fontWeight="semibold"
                          py={0.5}
                          textAlign="center"
                        >
                          TECHNOLOGY
                        </Box>
                        <Box
                          bg="white"
                          borderWidth="1px"
                          borderColor="black"
                          borderRadius="full"
                          height="30px"
                          fontFamily="inter"
                          fontWeight="semibold"
                          py={0.5}
                          textAlign="center"
                        >
                          READING
                        </Box>
                        <Box
                          bg="white"
                          borderWidth="1px"
                          borderColor="black"
                          borderRadius="full"
                          height="30px"
                          fontFamily="inter"
                          fontWeight="semibold"
                          py={0.5}
                          textAlign="center"
                        >
                          MUSIC
                        </Box>
                        <Box
                          bg="white"
                          borderWidth="1px"
                          borderColor="black"
                          borderRadius="full"
                          height="30px"
                          fontFamily="inter"
                          fontWeight="semibold"
                          py={0.5}
                          textAlign="center"
                        >
                          E-SPORTS
                        </Box>
                        <Box
                          bg="white"
                          borderWidth="1px"
                          borderColor="black"
                          borderRadius="full"
                          height="30px"
                          fontFamily="inter"
                          fontWeight="semibold"
                          py={0.5}
                          textAlign="center"
                        >
                          UI/UX
                        </Box>
                      </SimpleGrid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resume;
