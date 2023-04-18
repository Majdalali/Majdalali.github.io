import styles from "../../styles/Nav.module.scss";
import clsx from "clsx";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useAuthContext } from "../../context/AuthContext";
import signOut from "../../firebase/auth/signout";
import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { user } = useAuthContext();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    router.reload();
  };
  return (
    <>
      <div
        className={clsx(
          styles.navBg,
          "  h-[10%] px-20 border-[10px] border-black"
        )}
      >
        <nav className=" flex flex-row align-middle items-center justify-between h-full gap-28  text-xl ">
          <span className={styles.brandL}>
            Majd<span className={styles.brandR}> Alali</span>
          </span>
          <div className={clsx(styles.hiddenNav, "pr-5 hidden ")} href="#">
            <FaBars ref={btnRef} onClick={onOpen} />
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bg="orange.100">
                <DrawerCloseButton />

                <DrawerBody>
                  <ul
                    className={clsx(
                      styles.navMenu,
                      "no-underline text-center  flex flex-col gap-4 "
                    )}
                  >
                    <li>
                      <a href="#">Resume</a>
                    </li>
                    {/* {user ? (
                      <>
                        <li>
                  <Link href="/blog/post">New Post</Link>  
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                        <li>
                          <span
                            className="cursor-pointer"
                            onClick={handleSignOut}
                            colorScheme="gray"
                            variant="ghost"
                          >
                            Log out
                          </span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link href="/Login">Login</Link>
                        </li>
                      </>
                    )} */}
                  </ul>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
          <ul
            className={clsx(
              styles.navDetails,
              "no-underline flex flex-row gap-4 "
            )}
          >
            <li>
              <Link href="/Resume">Resume</Link>
            </li>

            {/* {user ? (
              <>
                <li>
                  <Link href="/blog/post">New Post</Link>  
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <span
                    className="cursor-pointer"
                    onClick={handleSignOut}
                    colorScheme="gray"
                    variant="ghost"
                  >
                    Log out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/Login">Login</Link>
                </li>
              </>
            )} */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
