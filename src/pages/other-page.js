import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Helmet from 'react-helmet'
import '../css/reset.css'
import { uniqueId } from 'lodash-es'
import { css } from 'emotion'
import { Power2, TimelineMax, TweenMax, Sine } from 'gsap'

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

const ciircle = css`
  position: absolute;
  background: #ff6200;
  opacity: 0.6;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  box-shadow: 0px 0px 4px 0px #ff6200;
`

const ciirclesWrap = css`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  top: 0;
`

class NewPage extends React.Component {
  constructor(props) {
    super(props)
    this.myElement = null
    this.myElements = []

    this.tl = new TimelineMax({})
    this.tl2 = new TimelineMax({})
    this.html = []
    this.dotsCount = 166
    this.container
    this.dotRefs = []

    // setup
    for (var i = 0; i < this.dotsCount; i++) {
      this.html.push(i)
    }
  }

  componentDidMount() {
    this.tl.staggerTo(
      this.myElements,
      0.5,
      {
        autoAlpha: 1,
        ease: Power2.easeInOut,
        cycle: { y: [Math.random() * -2000, Math.random() * 300] },
        repeat: -1,
        yoyo: true,
      },
      0.2
    )

    this.random = (min, max) => {
      return Math.floor(Math.random() * (1 + max - min) + min)
    }

    console.log('this.html', this.html)
    console.log('this.dotRefs', this.dotRefs)

    this.dotRefs.forEach(a => {
      this.tl2.add(
        TweenMax.fromTo(
          a,
          6,
          {
            left: this.random(0, 100) + '%',
            top: this.random(0, 100) + '%',
            z: this.random(-725, 600),
            // cycle: { width: [50, 300] },
            opacity: Math.random(),
            backgroundColor: '#b05089',
            // repeat: -1,
            // yoyo: true,
          },
          {
            left: '+=' + this.random(-40, 40) + '%',
            top: '+=' + this.random(-36, 36) + '%',
            z: '+=' + this.random(-725, 600),
            opacity: Math.random() + 0.1,
            backgroundColor: '#ecd014',
            repeat: -1,
            yoyo: true,
            ease: Power2.easeInOut,
          }
        ),
        0
      )
    })

    this.tl2
      .fromTo(
        this.container,
        0.8,
        { perspective: 50, opacity: 0.55 },
        { perspective: 2150, opacity: 0.9, ease: Power2.easeInOut },
        3.25
      )
      .to(
        this.container,
        0.8,
        { perspective: 50, opacity: 0.55, ease: Power2.easeInOut },
        6.5
      )
  }

  render() {
    const words = ['woof said the birdy', 'food', 'good']

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
            <div className={ciirclesWrap} ref={div => (this.container = div)}>
              {this.html !== [] &&
                this.html.map((a, index) => (
                  <div
                    key={uniqueId(words[0])}
                    ref={div => (this.dotRefs[index] = div)}
                    className={ciircle}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPage
