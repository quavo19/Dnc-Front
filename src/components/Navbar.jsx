import {
  Box,
  Flex,
  HStack,
  Link,
  Icon,
  Text,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  MdLocalShipping,
  MdLogout,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { useState } from 'react';
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
        as={FaShoppingBag}
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
  const user = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);
  const { userInfo } = user;
  const dispatch = useDispatch();
  const toast = useToast();
  const handleUnClick = () => {
    setIsVisible(!isVisible);
  };
  const logoutHandler = () => {
    handleUnClick()
    dispatch(logout());
    toast({
      description: "You have been logged out.",
      status: "success",
      isClosable: true,
    });
  };
  

  return (
    <Box px={4} className="sticky-top" background="#0062be" color="#fff">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        { isVisible && (
          <ul className="menu-items" >
          {userInfo ? (
            <div className="menu-logout">
              <div className="side-navlist">
              {/* <div>
                <li>hello, {userInfo.name}</li>
              </div> */}
              
                <li>
                  <Link as={ReactLink} onClick={handleUnClick} to="/profile">
                    <CgProfile />
                    <Text ml="2">Profile</Text>
                  </Link>
                </li>
                <li>
                  <Link as={ReactLink} onClick={handleUnClick} to="/your-orders">
                    <MdLocalShipping />
                    <Text ml="2">Your Orders</Text>
                  </Link>
                </li>
                <li>
                {userInfo.isAdmin === "false" && (
                
                    <Link as={ReactLink} onClick={handleUnClick} to="/admin-console">
                      <MdOutlineAdminPanelSettings />
                      <Text ml="2">Admin Console</Text>
                    </Link> 
                  
                )}
                  
                </li>
                <li>
                  <Link as={ReactLink} onClick={handleUnClick} to="/">
                  <FaHome/>
                    <Text ml="2">Home</Text>
                  </Link>
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
                fontWeight={600}
              variant="link"  
                onClick={handleUnClick} 
              >
                <button type='button' className="btn btn-primary">sign in</button>
              </Button>
              <Button
                as={ReactLink}
                to="/registration"
                m={2}
                fontSize="sm"
                fontWeight={600}
                variant="link"  
                onClick={handleUnClick} 
                
              >
                <button type='button' className="btn btn-dark">sign up</button>
              </Button>{" "}
            </>
          )}
        </ul>
        )

        }
        <div className={isVisible ? "ham-menu opened" : "ham-menu"} onClick={handleUnClick}>
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
        <Link as={ReactLink} to='/'>
        <Image className="logo" src="images/logo.jpg"/>
        </Link>
        
        <Link as={ReactLink} to="/cart">
          <ShoppingCartIcon />
        </Link>
      </Flex>
    </Box>
  );
};
export default Navbar;
