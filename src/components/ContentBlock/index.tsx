import * as React from 'react';
// @ts-ignore
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Interface } from 'readline';




interface IFields {
  heading: string,
  content: any
}

interface IProps {
  fields: IFields
}

class ContentBlock extends React.Component<IProps, any>   {
  render() {
    console.log('CNTENT', this.props.fields.content)
    return (
      <React.Fragment>
        {
            this.props.fields.content.value
        }
      </React.Fragment>
    )
  }
}

export default ContentBlock;
