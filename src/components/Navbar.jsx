import {
  Box,
  Flex,
  HStack,
  Link,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  MdLocalShipping,
  MdLogout,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const ShoppingCartIcon = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;
  return (
    <Flex>
      <Text fontStyle="italic" color="#fff" as="sub" fontSize="md">
        {cart.length}
      </Text>
      <Icon
        ml="1.5"
        color="#fff"
        as={FiShoppingCart}
        h="7"
        w="7"
        alignSelf="center"
      />
    </Flex>
  );
};

const links = [{ linkName: "Home", path: "/" }];

const NavLink = ({ path, children }) => (
  <Link as={ReactLink} to={path} px={2} py={2} rounded="md">
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();
  // const [isHovering, setIsHovering] = useState(false);
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({
      description: "You have been logged out.",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box px={4} className="sticky" background="#0062be" color="#fff">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <input type="checkbox" name="" id="" className="check" />
        <ul className="menu-items">
          {userInfo ? (
            <div className="menu-logout">
              <div className="side-navlist">
              <div>
                <li>hello, {userInfo.name}</li>
              </div>
                <li>
                  <Link as={ReactLink} to="/profile">
                    <CgProfile />
                    <Text ml="2">Profile</Text>
                  </Link>
                </li>
                <li>
                  <Link as={ReactLink} to="/your-orders">
                    <MdLocalShipping />
                    <Text ml="2">Your Orders</Text>
                  </Link>
                </li>
                <li>
                {userInfo.isAdmin === "false" && (
                
                    <Link as={ReactLink} to="/admin-console">
                      <MdOutlineAdminPanelSettings />
                      <Text ml="2">Admin Console</Text>
                    </Link> 
                  
                )}
                  
                </li>
              </div>
              <button className="button-logout" type="button" onClick={logoutHandler}>
                  <MdLogout />
                  <Text ml="2">sign out</Text>
                </button>
            </div>
          ) : (
            <>
              <Button
                as={ReactLink}
                to="/login"
                p={2}
                fontSize="sm"
                fontWeight={400}
                variant="link"
              >
                Sign In
              </Button>
              <Button
                as={ReactLink}
                to="/registration"
                m={2}
                display={{ base: "none", md: "inline-flex" }}
                fontSize="sm"
                fontWeight={600}
                _hover={{ bg: "orange.400" }}
                bg="orange.500"
                color="white"
              >
                Sign Up
              </Button>{" "}
            </>
          )}
        </ul>

        <div className="ham-menu">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <HStack>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Link as={ReactLink} to="/cart">
          <ShoppingCartIcon />
        </Link>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key="sign up" path="/registration">
              Sign Up
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
