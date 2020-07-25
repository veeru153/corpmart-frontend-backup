import React, { useState } from 'react';
import styles from '../filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons'
import defaultStateList from './stateList';

const State = () => {
    const [expanded, setExpanded] = useState(false);
    const [stateList, setStateList] = useState(defaultStateList);

    const handleState = (index) => {
        const tempState = [...stateList];
        tempState[index] = { ...tempState[index], checked: !stateList[index].checked };
        setStateList(tempState);
    }

    return (
        <div>
            <button className={styles.header} onClick={() => setExpanded(!expanded)}>
                <p>State</p>
                <div className={styles.headerIcon}>
                    {expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                </div>
            </button>
            <div style={{ 
                height: expanded ? '100%' : '0', 
                overflow: expanded ? 'scroll' : "hidden", 
                maxHeight: 'calc(31px * 8)',
            }}>
                {stateList.map((state, index) => (
                    <button className={styles.option} onClick={() => handleState(index)}>
                        <p className={styles.optionExpLabel}>{state.name}</p>
                        <div>
                            { state.checked
                                ?   <CheckBoxOutlined />
                                :   <CheckBoxOutlineBlank />
                            }
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default State;