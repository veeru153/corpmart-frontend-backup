import React, { useState, Component } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons';

class Country extends Component {
    state = {
        expanded: false,
        countryList: [
            { name: 'India', checked: false},
            { name: 'Other', checked: false},
        ],
        selectedCountries: [],
    }

    addCountry = (country) => {
        const tempSelectedCountries = [...this.state.selectedCountries];
        tempSelectedCountries.push(country);
        this.setState({
            selectedCountries: tempSelectedCountries,
        })
    }

    removeCountry = (country) => {
        const tempSelectedCountries = [...this.state.selectedCountries].filter(c => c != country);
        this.setState({
            selectedCountries: tempSelectedCountries
        })
    }

    handleCountry = (index) => {
        const tempCountry = [...this.state.countryList];
        if(!tempCountry[index].checked) this.addCountry(tempCountry[index].name);
        else this.removeCountry(tempCountry[index].name);
        tempCountry[index] = { ...tempCountry[index], checked: !this.state.countryList[index].checked };
        this.setState({
            countryList: tempCountry
        }, () => this.props.updateQuery('country', this.state.selectedCountries))
    }

    render() {
        return (
            <div className={styles.section}>
                <button className={styles.header} onClick={() => this.setState((prevState) => ({
                    expanded: !prevState.expanded
                }))}>
                    <p>Country</p>
                    <div className={styles.headerIcon}>
                        {this.state.expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                    </div>
                </button>
                <div 
                    className={styles.filterOptions}
                    style={{ 
                        height: this.state.expanded ? '100%' : '0', 
                        overflow: this.state.expanded ? 'scroll' : "hidden", 
                        maxHeight: 'calc(31px * 2)',
                    }}
                >
                    {this.state.countryList.map((country, index) => (
                        <button 
                            key={country.name}
                            className={styles.option} 
                            onClick={() => this.handleCountry(index)}
                        >
                            <p className={styles.optionExpLabel}>{country.name}</p>
                            <div>
                                { country.checked
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

export default Country;