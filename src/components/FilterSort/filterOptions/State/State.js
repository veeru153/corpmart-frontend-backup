import React, { Component } from 'react';
import styles from '../filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';
import defaultStateList from './stateList';

class State extends Component {
    state = {
        expanded: false,
        origStateList: defaultStateList,
        stateList: defaultStateList,
        selectedStates: [],
    }

    addState = (state) => {
        const tempSelectedStates = [...this.state.selectedStates];
        tempSelectedStates.push(state);
        this.setState({
            selectedStates: tempSelectedStates
        })
    }

    removeState = (state) => {
        const tempSelectedStates = [...this.state.selectedStates].filter(s => s != state);;
        this.setState({
            selectedStates: tempSelectedStates
        })
    }

    handleState = async (index) => {
        const tempState = [...this.state.stateList];
        if(!tempState[index].checked) this.addState(tempState[index].name);
        else this.removeState(tempState[index].name);
        tempState[index] = { ...tempState[index], checked: !this.state.stateList[index].checked };
        this.setState({
            stateList: tempState
        }, () => this.props.updateQuery('state', this.state.selectedStates));
    }

    handleSearch = (e) => {
        let query = e.target.value;
        let regex = new RegExp(`.*${query}.*`, 'gi');
        const tempState = [...this.state.origStateList].filter(s => s.name.match(regex));
        this.setState({
            stateList: tempState
        })
    }

    render() {
        return (
            <div className={styles.section}>
                <button 
                    className={styles.header} 
                    onClick={(e) => {
                        this.setState((prevState) => ({
                            expanded: !prevState.expanded
                        }))}
                }>
                    <p>State</p>
                    <div className={styles.headerIcon}>
                        {this.state.expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                    </div>
                </button>
                <div 
                    className={styles.filterOptions}
                    style={{ 
                        height: this.state.expanded ? '100%' : '0', 
                        overflow: this.state.expanded ? 'scroll' : "hidden", 
                        maxHeight: 'calc(31px * 8)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <input 
                        id="stateFilter"
                        placeholder="Search States"
                        onChange={(e) => this.handleSearch(e)}
                        className={styles.searchBox}
                        autoComplete="false"
                    />
                    {this.state.stateList.map((state, index) => (
                        <button 
                            key={state.name}
                            className={styles.option} 
                            onClick={(e) => this.handleState(index)}
                        >
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
}

export default State;