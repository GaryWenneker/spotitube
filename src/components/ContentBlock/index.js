import * as React from 'react';
class ContentBlock extends React.Component {
    render() {
        console.log('CNTENT', this.props.fields.content);
        return (React.createElement(React.Fragment, null, this.props.fields.content.value));
    }
}
export default ContentBlock;
