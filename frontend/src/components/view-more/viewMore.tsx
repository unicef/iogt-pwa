import React from 'react'

import { FunctionalComponent, h } from 'preact';
import style from './style.css';

interface ViewMoreProps {
    text: string;
}

const ViewMore: FunctionalComponent<ViewMoreProps> = ({ text }: ViewMoreProps) => {
    return (
        <div class={style.viewMoreContainer}>
            <div class={style.viewMoreContent}>
                <a class={style.viewMore} href='#'>
                    <span>View More Articles on </span>{' '}
                </a>
                <span
                    class={
                        text.includes('CORONAVIRUS')
                            ? style.covidTag
                            : text.includes('YOUTH')
                                ? style.youthTag
                                : style.parentsTag
                    }
                >
                    {text}
                </span>
            </div>
        </div>
    );
};

export default ViewMore;
