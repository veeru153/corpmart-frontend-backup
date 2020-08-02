import React, { Component } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

// TODO: Add Other in companyList

class SubType extends Component {
    state = {
        expanded: false,
        companyList: [
            { name: 'One Person Company', checked: false},
            { name: 'Producer Company', checked: false},
            { name: 'Nidhi Company', checked: false},
            { name: 'Section-8 company (NGO)', checked: false},
            { name: 'Non-Banking Financial Company (NBFC)', checked: false},
            { name: 'Micro Finance Company', checked: false},
            { name: 'Insurance Company', checked: false},
            { name: 'Direct Selling Company', checked: false},
        ],
        selectedSubTypes: [],
    }

    addSubType = (subtype) => {
        const tempSubTypes = [...this.state.selectedSubTypes];
        tempSubTypes.push(subtype);
        this.setState({
            selectedSubTypes: tempSubTypes,
        })
    }

    removeSubType = (subtype) => {
        const tempSubTypes = [...this.state.selectedSubTypes].filter(t => t != subtype);
        this.setState({
            selectedSubTypes: tempSubTypes
        })
    }

    handleCompanySubType = (index) => {
        const tempCompany = [...this.state.companyList];
        if(!tempCompany[index].checked) this.addSubType(tempCompany[index].name);
        else this.removeSubType(tempCompany[index].name);
        tempCompany[index] = { ...tempCompany[index], checked: !this.state.companyList[index].checked };
        this.setState({
            companyList: tempCompany
        }, () => this.props.updateQuery('subtype', this.state.selectedSubTypes))
    }

    render() {
        return (
            <div className={styles.section}>
                <button className={styles.header} onClick={() => this.setState((prevState) => ({
                    expanded: !prevState.expanded
                }))}>
                    <p>Sub - type</p>
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
                    {this.state.companyList.map((company, index) => (
                        <button 
                            key={company.name}
                            className={styles.option} 
                            onClick={() => this.handleCompanySubType(index)}
                        >
                            <p className={styles.optionExpLabel}>{company.name}</p>
                            <div>
                                { company.checked
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

export default SubType;