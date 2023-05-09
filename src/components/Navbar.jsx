import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useToast,
  MenuButton,
  MenuDivider,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
  const { isOpen, onClose, onOpen } = useDisclosure();
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
        <IconButton
          size="xl"
          background="#0062be"
          color="#fff"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          {/* <Link
            as={ReactLink}
            to='/'
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
              
            <Flex alignItems='center'>
              
              <Text fontWeight='extrabold'><span className="logo-name">D</span> yahrah</Text>
            </Flex>
          </Link> */}
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
        <Flex alignItems="center">
          {/* <Icon
            cursor='pointer'
            mr='3'
            as={colorMode === 'light' ? MoonIcon : SunIcon}
            alignSelf='center'
            onClick={() => toggleColorMode()}
          /> */}
          {userInfo ? (
            <Menu>
              <MenuButton
                px="4"
                py="2"
                color="#000"
                transition="all 0.3s"
                as={Button}
              >
                {userInfo.name} <ChevronDownIcon />
              </MenuButton>
              <MenuList color="#000">
                <MenuItem as={ReactLink} to="/profile">
                  <CgProfile />
                  <Text ml="2">Profile</Text>
                </MenuItem>
                <MenuItem as={ReactLink} to="/your-orders">
                  <MdLocalShipping />
                  <Text ml="2">Your Orders</Text>
                </MenuItem>
                {userInfo.isAdmin === "true" && (
                  <>
                    <MenuDivider />
                    <MenuItem as={ReactLink} to={"/admin-console"}>
                      <MdOutlineAdminPanelSettings />
                      <Text ml="2">Admin Console</Text>
                    </MenuItem>
                  </>
                )}
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>
                  <MdLogout />
                  <Text ml="2">Logout</Text>
                </MenuItem>
              </MenuList>
            </Menu>
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
        </Flex>
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
