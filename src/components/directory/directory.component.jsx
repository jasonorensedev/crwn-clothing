import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

//This will be a class because do we store a state value
class Directory extends Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    

    render() {
        return (
            <div className="directory-menu">
                {
                    //We can destructire the section into this code.
                    // this.state.sections.map(({ title, imageUrl, id, size }) => (
                    // or
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem 
                            key={id} 
                            {...otherSectionProps}
                        />
                    ))
                }
                {
                    //this.state.sections.map(section => (
                    //     <MenuItem key={section.id} title={section.title} />
                    // ))
                }
            </div>
        )
    }
}

export default Directory;