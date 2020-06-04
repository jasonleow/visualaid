import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <title>VisualAid</title>
                <meta name="title" content="VisualAid" />
                <meta name="description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://visualaid.sg/" />
                <meta property="og:title" content="VisualAid" />
                <meta property="og:description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />
                <meta property="og:image" content="https://visualaid.sg/visualaid_opengraphimage.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://visualaid.sg/" />
                <meta property="twitter:title" content="VisualAid" />
                <meta property="twitter:description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />
                <meta property="twitter:image" content="https://visualaid.sg/visualaid_opengraphimage.png" />
            </React.Fragment>
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                let GetSectionComponent = components[_.get(section, 'component')];
                return (
                  <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
        );
    }
}
