import React, { useState, Component } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

class TypeOfCompany extends Component {
    state = {
        expanded: false,
        companyList: [
            { name: 'Pvt. Ltd.', checked: false},
            { name: 'Public Ltd.', checked: false},
            { name: 'Limited Liability Partnership (LLP)', checked: false},
            { name: 'Partnership Firm', checked: false},
            { name: 'Trust/Society', checked: false},
            { name: 'Others', checked: false},
        ],
        selectedTypes: [],
    }

    addType = (type) => {
        const tempTypes = [...this.state.selectedTypes];
        tempTypes.push(type);
        this.setState({
            selectedTypes: tempTypes,
        })
    }

    removeType = (type) => {
        const tempTypes = [...this.state.selectedTypes].filter(t => t != type);
        this.setState({
            selectedTypes: tempTypes
        })
    }

    handleCompanyType = (index) => {
        const tempCompany = [...this.state.companyList];
        if(!tempCompany[index].checked) this.addType(tempCompany[index].name);
        else this.removeType(tempCompany[index].name);
        tempCompany[index] = { ...tempCompany[index], checked: !this.state.companyList[index].checked };
        this.setState({ 
            companyList: tempCompany
        }, () => this.props.updateQuery('type', this.state.selectedTypes))
    }

    render() {
        return (
            <div className={styles.section}>
                <button className={styles.header} onClick={() => this.setState((prevState) => ({
                    expanded: !prevState.expanded
                }))}>
                    <p>Type of Company</p>
                    <div className={styles.headerIcon}>
                        {this.state.expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                    </div>
                </button>
                <div 
                    className={styles.filterOptions}
                    style={{ 
                        height: this.state.expanded ? '100%' : '0', 
                        overflow: this.state.expanded ? 'scroll' : "hidden", 
                        maxHeight: 'calc(31px * 5)',
                    }}
                >
                    {this.state.companyList.map((company, index) => (
                        <button 
                            key={company.name}
                            className={styles.option} 
                            onClick={() => this.handleCompanyType(index)}
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

export default TypeOfCompany;