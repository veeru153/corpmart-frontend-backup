import React from 'react';
import styles from './SortDropdown.module.css';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles({
    root: {
        all: 'unset',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: 150,
        borderRadius: 10,
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
    },
    select: {
        background: '#4AB9CA',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        padding: '12px 24px'
    },
    icon: {
        display: 'none'
    },
    iconOpen: {
        display: 'none'
    }
})

const SortDropdown = (props) => {
    const classes = useStyles();
    const { updateQuery, currVal } = props;
    return (
        <div>
            <NativeSelect
                name="SortDropdown"
                value={currVal}
                onChange={(e) => updateQuery('sort', e.target.value)}
                disableUnderline
                className={classes.root}
                classes={{
                    select: classes.select,
                    icon: classes.icon,
                    iconOpen: classes.iconOpen,
                }}
            >
                <option value="-1">Sort By</option>
                <option value="0">Recently Listed</option>
                <option value="1">Year of Establishment (newest first)</option>
                <option value="2">Year of Establishment (oldest first)</option>
                <option value="3">Authorised Capital (low to high)</option>
                <option value="4">Authorised Capital (high to low)</option>
                <option value="5">Paid-up Capital (low to high)</option>
                <option value="6">Paid-up Capital (high to low)</option>
                <option value="7">Selling price (low to high)</option>
                <option value="8">Selling price (high to low)</option>
            </NativeSelect>
        </div>
    )
}

export default SortDropdown;