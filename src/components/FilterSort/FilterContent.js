import React, { Component } from 'react';
import styles from './FilterSortMobile.module.css';
import { CheckBoxOutlined, CheckBoxOutlineBlank, } from '@material-ui/icons';
import State from './filterOptions/State/State';
import Country from './filterOptions/Country';
import TypeOfCompany from './filterOptions/TypeOfCompany';
import SubType from './filterOptions/SubType';
import Industry from './filterOptions/Industry/Industry';
import AuthCapital from './filterOptions/AuthCapital';
import PaidCapital from './filterOptions/PaidCapital';
import SellingPrice from './filterOptions/SellingPrice';
import Axios from '../../axios';

class FilterContent extends Component {
    state = {
        sliderMaxVals: [0,0,0],
    }

    async componentDidMount() {
        let res = await Axios.get('/max-value?format=json');
        let data = await res.data;
        this.setState({
            sliderMaxVals: [data.max_auth_capital, data.max_paidup_capital, data.max_selling_price]
        })
    }

    render() {
        return (
            <div
                className={styles.filterExp}
                style={{
                    display: this.props.expanded && this.props.type == 'filter' ? 'block' : 'none',
                    overflow: this.props.expanded ? 'scroll' : 'hidden',
                    marginBottom: 104,
                    marginTop: 1,
                }}
            >
                <State updateQuery={this.props.updateQuery} />
                <Country updateQuery={this.props.updateQuery} />
                <TypeOfCompany updateQuery={this.props.updateQuery} />
                <SubType updateQuery={this.props.updateQuery} />
                <Industry updateQuery={this.props.updateQuery} />
                <AuthCapital max={this.state.sliderMaxVals[0]} updateQuery={this.props.updateQuery} />
                <PaidCapital max={this.state.sliderMaxVals[1]} updateQuery={this.props.updateQuery} />
                <SellingPrice max={this.state.sliderMaxVals[2]} updateQuery={this.props.updateQuery} />
                {this.props.filterOps.map((op, index) => (
                    <button
                        key={op.name}
                        className={styles.option}
                        style={{ padding: '1px 0' }}
                        onClick={() => this.props.handleOption(index)}
                    >
                        <p className={styles.optionExpLabel}>{op.name}</p>
                        <div className={styles.checkbox}>
                            {op.checked
                                ? <CheckBoxOutlined />
                                : <CheckBoxOutlineBlank />
                            }
                        </div>
                    </button>
                ))}
            </div>
        )
    }

}

export default FilterContent;