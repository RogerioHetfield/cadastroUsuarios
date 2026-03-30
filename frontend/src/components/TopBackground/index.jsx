import UsersImage from '../../assets/users.png'
import { Background } from './styles';

function TopBackground() {
    return (
        <Background>
                <img src={UsersImage} alt="" />
              </Background>
    )
}

export default TopBackground;