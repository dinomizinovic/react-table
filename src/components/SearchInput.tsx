import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SearchInput.css';

interface SearchInputProps {
    onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debouncedValue.length >= 3) {
            onSearch(debouncedValue);
        } else {
            onSearch('');
        }
    }, [debouncedValue, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        setValue(newValue);

        debounceTimeout.current = setTimeout(() => {
            setDebouncedValue(newValue);
        }, 1000);
    };

    return (
        <div className="input-container">
            <div className="input-wrapper">
                <i className="fa fa-search input-icon"></i>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pretraži..."
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default SearchInput;
