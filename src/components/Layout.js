import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="title" content="VisualAid" />
                    <meta name="description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content="https://visualaid.sg/" />
                    <meta property="og:title" content="VisualAid" />
                    <meta property="og:description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />
                    <meta property="og:image" content="https://raw.githubusercontent.com/jasonleow/visualaid/master/static/visualaid_opengraphimage.png" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://visualaid.sg/" />
                    <meta property="twitter:title" content="VisualAid" />
                    <meta property="twitter:description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />
                    <meta property="twitter:image" content="https://raw.githubusercontent.com/jasonleow/visualaid/master/static/visualaid_opengraphimage.png" />
                    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.color_scheme') + ' accent-' + _.get(this.props, 'pageContext.site.siteMetadata.accent_color')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
