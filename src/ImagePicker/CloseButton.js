import React from 'react';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import './CloseButton.css';

class CloseButton extends React.Component {
    render() {
        return (
            <Link to="/images">
              <p>Choose Another Image</p>
                {/* <CloseOutlined id="close-button"/> */}
            </Link>
        );
    }
}

export default CloseButton;