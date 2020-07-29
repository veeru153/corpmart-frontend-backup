import React from 'react';
import styles from './FilterSortMobile.module.css';
import { CheckBoxOutlined, CheckBoxOutlineBlank,  } from '@material-ui/icons';
import State from './filterOptions/State/State';
import Country from './filterOptions/Country';
import TypeOfCompany from './filterOptions/TypeOfCompany';
import SubType from './filterOptions/SubType';
import Industry from './filterOptions/Industry';
import AuthCapital from './filterOptions/AuthCapital';
import PaidCapital from './filterOptions/PaidCapital';
import SellingPrice from './filterOptions/SellingPrice';


const FilterContent = (props) => {
    const { expanded, type, filterOps, handleOption } = props;
    return (
        <div
            className={styles.filterExp}
            style={{
                display: expanded && type == 'filter' ? 'block' : 'none',
            }}
        >
            <State />
            <Country />
            <TypeOfCompany />
            <SubType />
            <Industry />
            <AuthCapital />
            <PaidCapital />
            <SellingPrice />
            {filterOps.map((op, index) => (
                <button
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