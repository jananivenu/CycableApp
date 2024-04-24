import { FaBicycle } from 'react-icons/fa'
import { BikeWrapper, LoadingContainer } from './styles'

const AnimatedBikeLoading = () => {
    const bikes = new Array(10).fill(null);
  
    return (
      <LoadingContainer>
        {bikes.map((_, index) => (
          <BikeWrapper key={index}>
            <FaBicycle />
          </BikeWrapper>
        ))}
      </LoadingContainer>
    );
  };
  
  export default AnimatedBikeLoading;