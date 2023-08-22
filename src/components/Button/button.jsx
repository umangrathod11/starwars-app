import React from 'react';
import Pr from 'prop-types';
import './style.css';

const classToVariantMapping = {
    danger: 'red_bordered',
    success: 'success',
    normal: 'normal',
}
export const Button = ({ dataAttributes, id, children, type, variant, onClick, disabled }) => {
    const attr = {};

    if (!type || !variant) {
        return null;
    }
    
    if (id) {
        attr.id = id;
    }
    attr.className = classToVariantMapping[variant] || "";
    attr.onClick = onClick;
    attr.className = `${attr.className} d1mBtn`;
    if (disabled) {
        attr.disabled = true;
    }
    const dataSetAttr = {};
    if (dataAttributes) {
        for (const key in dataAttributes) {
            dataSetAttr[`data-${key}`] = dataAttributes[key];
        }
    }
    return (
        <button {...attr} {...dataSetAttr}>
            {children}
        </button>
    )
}


Button.propTypes = {
    type: Pr.oneOf(["submit", "button", "reset"]),
    variant: Pr.oneOf(["danger", "success", "normal"]),
    onClick: Pr.func,
    disabled: Pr.bool,
    dataAttributes: Pr.object,
}

Button.defaultProps = {
    type: "button",
    variant: "normal",
    onClick:  function () {},  // () => undefined,
    disabled: false,
    dataAttributes: {},
}