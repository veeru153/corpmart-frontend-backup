import React, { Component } from 'react';
import styles from './filterOptions.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import Slider from '../../UI/MySlider/MySlider';
import Axios from '../../../axios';

class AuthCapital extends Component {
    state = {
        expanded: false,
        values: [0, this.props.max]
    }
    
    async componentDidMount() {
        let res = await Axios.get('/max-value?format=json');
        let data = await res.data;
        this.setState({
            values: [0, data.max_auth_capital]
        })
    }

    handleValues = (newVal) => {
        this.setState({
            values: newVal
        }, () => this.props.updateQuery('authCapital', newVal));
    }

    render() {
        return (
            <div className={styles.section}>
                <button className={styles.header} onClick={() => this.setState((prevState) => ({
                    expanded: !prevState.expanded
                }))}>
                    <p>Authorised Capital (in INR)</p>
                    <div className={styles.headerIcon}>
                        {this.state.expanded ? <ChevronUp size={16} rotate={180}/> : <ChevronDown size={16} />}
                    </div>
                </button>
                <div style={{ 
                    height: this.state.expanded ? '100%' : '0', 
                    overflow: this.state.expanded ? 'scroll' : "hidden", 
                    maxHeight: '120px',
                    backgroundColor: '#E8EAED'
                }}>
                    <Slider 
                        values={this.state.values} 
                        setValues={this.handleValues} 
                        max={this.props.max} 
                        min={0} 
                    />
                    <p>Authorised Capital</p>
                    <p>INR {this.state.values[0]} - {this.state.values[1]}</p>
                </div>
            </div>
        )
    }

}

export default AuthCapital;