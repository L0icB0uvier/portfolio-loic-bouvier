import React from 'react';
import * as ResumeSectionTitleStyles from "../css/resumeSectionTitle.module.css"

const ResumeSectionTitle = ({title}) => {
    return (
        <h2 className={ResumeSectionTitleStyles.title}>{title}</h2>
    );
};

export default ResumeSectionTitle;