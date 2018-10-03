import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import '../css/reset.css'
import { uniqueId } from 'lodash-es'
import { css } from 'emotion'
import { TweenLite, TimelineLite } from 'gsap'

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
`

class NewPage extends React.Component {
  constructor(props) {
    super(props)
    this.myElement = null
    this.myElements = []

    this.myTween = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.myTween.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1)
  }

  render() {
    const words = ['woof', 'food']

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
