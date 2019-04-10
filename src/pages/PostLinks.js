import React from 'react';
import {Link} from 'react-router-dom';
import {connectToSpreadsheet} from 'react-google-sheet-connector';
import moment from 'moment';

import {SHEET_NAME} from '../sheetConfig';
import Page from '../components/Page';

class PostLinks extends React.Component {
  render() {
    const posts = this.props.getSheet(SHEET_NAME).reverse()

    return (
      <Page>
        <ul>
          {posts.map((post, i) => (
            <Link to={`/${i}`} key={i}>
              <li><b>{post.title}</b> - {moment(post.timestamp).format('L')}</li>
            </Link>
          ))}
        </ul>
      </Page>
    );
  }
}

export default connectToSpreadsheet(PostLinks);
