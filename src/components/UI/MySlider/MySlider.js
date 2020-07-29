import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    slider: {
        color: 'black',
        width: '80%',
        height: 2, 
        // padding: '20px 0',
    }
})

const MySlider = (props) => {
    const { values, setValues, max, min } = props;
    const classes = useStyles();
    return (
        <Slider
            value={values}
            onChange={(e, newVal) => setValues(newVal)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            className={classes.slider}
            valueLabelDisplay="off"
            max={max}
            min={min}
        />
    )
}

export default MySlider;