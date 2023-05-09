import styles from "../../styles/Nav.module.scss";
import clsx from "clsx";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
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
                      <Link href="/Resume">Resume</Link>
                    </li>
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
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
