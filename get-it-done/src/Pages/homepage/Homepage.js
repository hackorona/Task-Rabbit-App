import React from 'react';
import styles from './Homepage.scss';
import helpOptions from './helpOptions';

export default () => {
    const toHelperOption = (option) => (
        <figure key={option.desc}>
            <img src={option.url} />
            <figcaption>{option.desc}</figcaption>
        </figure>
    )

    return (<>
        <section className="community mb80">
            <strong>Community is important</strong>
            <div>
                <p>Want help or to be helpful?</p>
                <p>Search your location to get started</p>
                <div style={{ margin: '16px 0' }}>
                    <input placeholder={'Location'} className="mr8" style={{ width: '60%' }} />
                    <input placeholder={'Radius'} type={'number'} style={{ width: 'calc(40% - 8px)' }} />
                </div>
                <div className="actions">
                    <div>
                        <input value={'Help out'} type={'button'} className="mr8" />
                        <input value={'Be helped'} type={'button'} disabled />
                    </div>
                    <input className="get-started" value={'Get Started'} type={'submit'} />
                </div>
            </div>
        </section>

        <section className="barbra mb80">
            <div>
                <strong>See who needs help in your community...</strong>
            </div>
            <div className="barbra-img">
                <img src={'https://res.cloudinary.com/thelegend27/image/upload/v1585333659/illustrations/barbra_zxstra.png'} />
            </div>
        </section>

        <section style={{ backgroundColor: '#d9d6e5', overflow: 'auto' }} className="mb80">
            <div className="help">
                <strong style={{transform: 'translateY(-9rem)'}}>You can ask for help with...</strong>
                <div id="help-options">
                    {helpOptions.map(toHelperOption)}
                </div>
                <strong style={{ right: '160px' }}>and much much more!</strong>
            </div>
        </section>

        <section className="points mb80">
            <div>
                <strong>Earn points and badges, see who can help the most!</strong>
            </div>
            <img src={'https://res.cloudinary.com/thelegend27/image/upload/v1585329313/badges/dr.png'} />
            <img src={'https://res.cloudinary.com/thelegend27/image/upload/v1585329314/badges/grocery.png'} />
            <img src={'https://res.cloudinary.com/thelegend27/image/upload/v1585329314/badges/lion.png'} />
        </section>

        <section className="helped mb80">
            <div>
                <img src={'https://res.cloudinary.com/thelegend27/image/upload/v1585333251/img/counter_kxfmd9.png'}/>
                <strong>People helped so far</strong>
            </div>
            <div>
                <input type="button" value="Click here" className="get-started"/>
                <strong>to get started!</strong>
            </div>
        </section>
    </>)
}