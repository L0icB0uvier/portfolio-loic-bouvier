import React from 'react'

const ColoredLine = ({ color, lineHeight, lineWidth }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: lineHeight,
                width: lineWidth,
            }}
        />
);

export default ColoredLine