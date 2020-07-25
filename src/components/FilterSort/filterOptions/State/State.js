import React, { useState } from 'react';
import styles from '../filterOptions.module.css';
import stateStyle from './State.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlineBlankOutlined, CheckBoxOutlineBlank } from '@material-ui/icons'
import defaultStateList from './stateList';

const State = () => {
    const [stateList, setStateList] = useState(defaultStateList);
    const [expanded, setExpanded] = useState(false);

    const handleState = (index) => {
        const tempState = [...stateList];
        tempState[index] = { ...tempState[index], checked: !stateList[index].checked };
        setStateList(tempState);
        console.log(stateList[index])
    }

    return (
        <div>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>State</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div>
                {stateList.map((state, index) => (
                    <button className={styles.option} onClick={() => handleState(index)}>
                        <p className={styles.optionExpLabel}>{state.name}</p>
                        <div>
                            { state.checked
                                ?   <CheckBoxOutlineBlank />
                                :   <CheckBoxOutlineBlankOutlined />
                            }
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default State;