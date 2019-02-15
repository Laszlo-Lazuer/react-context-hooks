import React, {useContext} from 'react';

import { LanguageContext } from '../../context';

export default function TestComponent() {
    const language = useContext(LanguageContext);
    return (
        <React.Fragment>
            <span>deep comp {language}</span>
        </React.Fragment>
    );
}