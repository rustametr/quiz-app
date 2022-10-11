import './navigation.style.css';

import {ReactComponent as LeftArrow} from '../../arrow-left-solid.svg';
import {ReactComponent as RightArrow} from '../../arrow-right-solid.svg';

const Navigation = ({ prevPageHandler, resultsHandler, nextPageHandler, currentPage, pages}) => {
    return(
        <div className='navigation-container'>
            <div className='pages-container'>
                <LeftArrow className='arrow' onClick={prevPageHandler}/>
                <h2 className='pages'>{currentPage}/{pages}</h2>
                <RightArrow className='arrow' onClick={nextPageHandler}/>
            </div>
            <div className='submit-button' onClick={resultsHandler}>Submit</div>
        </div>
    )
}

export default Navigation;