import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  Link,
  HStack,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/actions/cartActions';

const Rating = ({ rating, numberOfReviews }) => {
  
  return (
    <Flex>
      <HStack spacing='2px'>
        <StarIcon size='12px' w='14px' color='orange.500' />
        <StarIcon size='12px' w='14px' color={rating >= 2 ? 'orange.500' : 'gray.200'} />
        <StarIcon size='12px' w='14px' color={rating >= 3 ? 'orange.500' : 'gray.200'} />
        <StarIcon size='12px' w='14px' color={rating >= 4 ? 'orange.500' : 'gray.200'} />
        <StarIcon size='12px' w='14px' color={rating >= 5 ? 'orange.500' : 'gray.200'} />
      </HStack>
      {/* <Text fontSize='md' fontWeight='bold' ml='4px'>
        {`${numberOfReviews} ${numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
      </Text> */}
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  const addItem = (id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast({
        description: 'This item is already in your cart. Go to your cart to change the amount.',
        status: 'error',
        isClosable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({ description: 'Item has been added.', status: 'success', isClosable: true });
    }
  };

  return (
    <div className='product-item'>
      
      {product.stock <= 0 && <Circle size='10px'  top={2} right={2} bg='red.200' />}
      <Link as={ReactLink} to={`/product/${product._id}`} pt='2' cursor='pointer'>
        <Image p={4} src={product.image} alt={product.name} roundedTop='lg' />
      </Link>
      <div className="card-description">
      <Box flex='1' maxH='5' alignItems='baseline'>
        {product.stock <= 0 && (
          <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
            Sold out
          </Badge>
        )}
        {product.productIsNew && (
          <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
            New
          </Badge>
        )}
      </Box>
      <Flex mt='1' justifyContent='space-between' alignContent='center'>
        <Link as={ReactLink} to={`/product/${product._id}`} pt='2' cursor='pointer'>
          <h4 className='Product-name'>
            {product.name}
          </h4>
        </Link>
      </Flex>
      
      <Flex justify='space-between'>
        <h3 className='product-price'>
          GHC{Number(product.price).toFixed(2)}
        </h3>
       
        <Button variant='ghost' display={'flex'} isDisabled={product.stock <= 0} onClick={() => addItem(product._id)}>
            <Icon as={FiShoppingCart} h={5} w={6} alignSelf={'center'} />
          </Button>
      
        
      </Flex>
      <Flex justifyContent='space-between' alignContent='center' py='2'>
        <Rating rating={product.rating} numberOfReviews={product.numberOfReviews} />
      </Flex>
      </div>
    </div>
  );
};

export default ProductCard;
