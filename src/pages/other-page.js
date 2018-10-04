import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import '../css/reset.css'
import { uniqueId } from 'lodash-es'
import { css } from 'emotion'
import { TweenLite, TimelineLite, Elastic, Back, Power2 } from 'gsap/all'

const mainWrap = css`
  height: 100vh;
  display: flex;
`

const projectWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100%;
  width: 100%;
  background: orange;
  flex-direction: column;
`

const wordWrap = css`
  display: flex;
  justify-content: center;
  align-tems: center;
  font-size: 96px;
`

const proj1letter = css`
  // display: inline-block;
  width: 100px;
`

class NewPage extends React.Component {
  constructor(props) {
    super(props)
    this.myElement = null
    this.myElements = []

    this.tl = new TimelineLite()
  }

  componentDidMount() {
    this.tl.staggerTo(
      this.myElements,
      0.5,
      {
        autoAlpha: 1,
        // y: -200,
        // onComplete: this.cb,
        ease: Power2.easeInOut,
        cycle: { y: [-20, 20] },
        repeat: -1,
        yoyo: true,
      },
      0.2
    )

    cb => this.tl.reverse()
  }

  render() {
    // this.tl
    //   .kill()
    //   .clear()
    //   .pause(0)
    const words = ['woof said the birdy', 'food']

    console.log('this.myElements', this.myElements)
    return (
      <div className={mainWrap}>
        <div className={projectWrap}>
          <div className={wordWrap} ref={div => (this.myElement = div)}>
            {words[0].split('').map((letter, index) => (
              <div
                key={uniqueId(words[0])}
                className={proj1letter}
                ref={div => (this.myElements[index] = div)}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default NewPage
