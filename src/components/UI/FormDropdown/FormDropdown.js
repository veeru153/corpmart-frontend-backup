import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './FormDropdown.module.css';

const useStyles = makeStyles({
    root: {
        all: 'unset',
        border: '2px solid #000000',
        boxSizing: 'border-box',
        borderRadius: 10,
        minHeight: 40,
        margin: '2.5px 0',
        backgroundColor: 'white',
        overflow: 'hidden',
        textTransform: 'capitalize'
    },
    select: {
        background: 'white',
        height: '100%',
        paddingLeft: 8,
    },
    icon: {
        display: 'none'
    },
    iconOpen: {
        display: 'none'
    }
})

const FormDropdown = (props) => {
    const classes = useStyles();
    const { name, value, onChange, options } = props;

    let choices = [
        {name: 'Select an Option...', checked: false},
        ...options
    ]

    return (
        <NativeSelect
            name={name}
            value={value}
            onChange={onChange}
            disableUnderline
            className={name == "industry" ? [classes.root, styles.dropdown].join(' ') : classes.root}
            classes={{
                select: classes.select,
                icon: classes.icon,
                iconOpen: classes.iconOpen,
            }}
        >
            {choices.map(option => (
            // {typeList.map(type => (
                <option value={option.name == 'Select an Option...' ? null : option.name}>
                    {name == "industry" ? option.name.toLowerCase() : option.name}
                </option>
            ))}
        </NativeSelect>
    )
}

export default FormDropdown;