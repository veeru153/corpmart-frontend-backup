import React, { useState, Component } from 'react';
import styles from '../filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';
import industryList from './industryList';

// TODO: Add Other in industryList

class Industry extends Component {
    state = {
        expanded: false,
        industryList: industryList,
        selectedIndustry: [],
    }

    addIndustry = (industry) => {
        const tempIndustry = [...this.state.selectedIndustry];
        tempIndustry.push(industry);
        this.setState({
            selectedIndustry: tempIndustry,
        })
    }

    removeIndustry = (industry) => {
        const tempIndustry = [...this.state.selectedIndustry].filter(i => i != industry);
        this.setState({
            selectedIndustry: tempIndustry
        })
    }

    handleIndustry = (index) => {
        const tempIndustry = [...this.state.industryList];
        if(!tempIndustry[index].checked) this.addIndustry(tempIndustry[index].name);
        else this.removeIndustry(tempIndustry[index].name);
        tempIndustry[index] = { ...tempIndustry[index], checked: !this.state.industryList[index].checked };
        this.setState({
            industryList: tempIndustry
        }, () => this.props.updateQuery('industry', this.state.selectedIndustry))
    }

    render() {
        return (
            <div className={styles.section}>
                <button className={styles.header} onClick={() => this.setState((prevState) => ({
                    expanded: !prevState.expanded
                }))}>
                    <p>Industry</p>
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
                        backgroundColor: '#E8EAED',
                    }}
                >
                    {this.state.industryList.map((industry, index) => (
                        <button 
                            key={industry.name}
                            className={styles.option} 
                            onClick={() => this.handleIndustry(index)}
                        >
                            <p 
                                className={styles.optionExpLabel} 
                                style={{ textTransform: 'capitalize'}}>
                                    {industry.name.toLowerCase()}
                            </p>
                            <div>
                                { industry.checked
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

export default Industry;