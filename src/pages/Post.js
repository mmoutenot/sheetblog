import React from 'react';
import {Link} from 'react-router-dom';
import {connectToSpreadsheet} from 'react-google-sheet-connector';
import remark from 'remark';
import remark2react from 'remark-react';

import {SHEET_NAME} from '../sheetConfig';
import Page from '../components/Page';

class Listings extends React.Component {
  render() {
    console.log(this.props);
    const posts = this.props.getSheet(SHEET_NAME).reverse().getCurrentData()
    const post = posts[parseInt(this.props.match.params.index)];

    return (
      <Page>
        <Link to="/">Back</Link>
        <h1>{post.title}</h1>
        {
          remark()
            .use(remark2react)
            .processSync(post.body).contents
        }
      </Page>
    );
  }
}

export default connectToSpreadsheet(Listings);
