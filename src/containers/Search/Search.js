import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../../components/SearchForm/SearchForm';

function Search() {
    const onSubmit = () => {

    };

    return (
        <div>
            <SearchForm
                onSubmit={onSubmit}
            />
        </div>
    );
}

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);