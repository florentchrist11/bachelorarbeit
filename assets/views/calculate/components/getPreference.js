import React from 'react';


export default function getPrefernce(id) {
    switch (id) {
        case 0:
            return 'Usual criterion'
        case 1:
            return 'U-shape criterion'
        case 2:
            return 'V-shape criterion'
        case 3:
            return 'Level criterion'
        case 4:
            return 'V-shape with indiference criterion'
        case 5:
            return 'Gaussian criterion'
        default:
            return ''
    }
}