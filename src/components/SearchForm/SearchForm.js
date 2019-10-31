import React from 'react';

import './SearchForm.styles.css';

function SearchForm({
    onSubmit
}) {
    const onChange = (event) => {
        const currentTarget = event.currentTarget;

        onSubmit({
            query: currentTarget.value
        });
    }

    return (
        <form className="SearchForm">
            <input
                type="search"
                placeholder="Search ..."
                className="SearchForm__input"
                onChange={onChange}
            />
        </form>
    );
}

export default SearchForm;
