import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        const url = `${_.get(this.props, 'pageContext.site.siteMetadata.siteUrl')}${this.props.location.pathname}`;
        const seoUrl = `https://raw.githubusercontent.com/jasonleow/visualaid/master/static/${_.get(this.props, 'pageContext.frontmatter.seo_img_path')}`;
            return (
                <React.Fragment>
                    <Helmet>
                        <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initialScale=1.0" />
                        <meta name="google" content="notranslate" />
                        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i" rel="stylesheet"/>
                        <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                        {(_.get(this.props, 'pageContext.frontmatter.template') === 'project') &&  
                        _.get(this.props, 'pageContext.frontmatter.canonical_url') && 
                        <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url')}/>
                        }
                        <meta name="og:url" content={url} />
                        <meta name="og:title" content={_.get(this.props, 'pageContext.frontmatter.title')} />
                        <meta name="og:image" content={seoUrl} />
                        {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                          <meta name="og:description" content={_.get(this.props, 'pageContext.frontmatter.subtitle')} />
                        }
                        <meta name="og:type" content="article" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content={_.get(this.props, 'pageContext.frontmatter.title')} />
                        <meta
                          name="twitter:image"
                          content={`${_.get(this.props, 'pageContext.site.siteMetadata.siteUrl')}${this.props.location.pathname}twitter-card.jpg`}
                          content={seoUrl} 
                        />
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
