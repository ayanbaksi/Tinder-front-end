import React from 'react'
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import StarRateIcon from '@material-ui/icons/StarRate'
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton size="small" className="swipeButtons_repeat">
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton size="small" className="swipeButtons_left">
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
