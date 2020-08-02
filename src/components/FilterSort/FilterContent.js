import React, { useState, useEffect } from 'react';
import styles from './FilterSortMobile.module.css';
import { CheckBoxOutlined, CheckBoxOutlineBlank,  } from '@material-ui/icons';
import State from './filterOptions/State/State';
import Country from './filterOptions/Country';
import TypeOfCompany from './filterOptions/TypeOfCompany';
import SubType from './filterOptions/SubType';
import Industry from './filterOptions/Industry/Industry';
import AuthCapital from './filterOptions/AuthCapital';
import PaidCapital from './filterOptions/PaidCapital';
import SellingPrice from './filterOptions/SellingPrice';
import Axios from '../../axios';


const FilterContent = (props) => {
    const { expanded, type, filterOps, handleOption, updateQuery } = props;
    const [sliderMaxVals, setSliderMaxVals] = useState([0,0,0]);

    useEffect(() => {
        async function getMax() {
            let res = await Axios.get('/max-value?format=json');
            let data = await res.data;
            setSliderMaxVals([data.max_auth_capital, data.max_paidup_capital, data.max_selling_price]);
        }
        getMax();
    }, [])

    return (
        <div
            className={styles.filterExp}
            style={{
                display: expanded && type == 'filter' ? 'block' : 'none',
            }}
        >
            <State updateQuery={updateQuery} />
            <Country updateQuery={updateQuery} />
            <TypeOfCompany updateQuery={updateQuery} />
            <SubType updateQuery={updateQuery} />
            <Industry updateQuery={updateQuery} />
            {
                sliderMaxVals.reduce((total, currEl) => total + currEl) != 0
                ?   <>
                        <AuthCapital max={sliderMaxVals[0]} />
                        <PaidCapital max={sliderMaxVals[1]} />
                        <SellingPrice max={sliderMaxVals[2]} />
                    </>
                :   <>
                        <AuthCapital max={0} />
                        <PaidCapital max={0} />
                        <SellingPrice max={0} />
                    </>
            }
            {filterOps.map((op, index) => (
                <button
                    key={op.name}
                    className={styles.option}
                    style={{ padding: '1px 0' }}
                    onClick={() => handleOption(index)}
                >
                    <p className={styles.optionExpLabel}>{op.name}</p>
                    <div>
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

export default FilterContent;