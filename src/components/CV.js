import React from 'react';
import SectionTitle from './sectionTitle';
import Competences from './competences';
import Experience from './experience';
import Formation from './formation';

const CV = () => {
    return (
        <div>
            
            <SectionTitle title="CV"/>
            <Competences />
            <Experience />
            <Formation />
        </div>
    );
};

export default CV;